<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';

const SESSION_COOKIE = 'ecp_session';
const MAX_FAILED_LOGINS = 5;
const FAILED_LOGIN_WINDOW = '15 minutes';

function handle_api(string $path, string $method): void
{
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');

    try {
        match ("$method $path") {
            'GET /api/me' => me(),
            'POST /api/login' => login(),
            'POST /api/logout' => logout(),
            default => respond(404, ['error' => 'not_found']),
        };
    } catch (Throwable $e) {
        error_log((string) $e);
        respond(500, ['error' => 'server_error']);
    }
}

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
}

function start_session(): void
{
    ini_set('session.use_strict_mode', '1');
    session_name(SESSION_COOKIE);
    session_set_cookie_params([
        'path' => '/',
        'httponly' => true,
        'samesite' => 'Strict',
        'secure' => ($_SERVER['HTTPS'] ?? 'off') !== 'off',
    ]);
    session_start();
}

// Blocks cross-site POSTs; browsers can't forge the Origin header.
function is_same_origin(): bool
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? null;

    return $origin === null || parse_url($origin, PHP_URL_HOST) === parse_url('//' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST);
}

function public_student(array $student): array
{
    return ['name' => $student['name'], 'email' => $student['email']];
}

function me(): void
{
    // Anonymous visitors never get a session or a cookie.
    if (!isset($_COOKIE[SESSION_COOKIE])) {
        respond(200, ['student' => null]);
        return;
    }

    start_session();
    $id = $_SESSION['student_id'] ?? null;
    session_write_close();

    if ($id === null) {
        respond(200, ['student' => null]);
        return;
    }

    // Read on every request so deactivating a student takes effect immediately.
    $query = db()->prepare('SELECT name, email FROM students WHERE id = ? AND active');
    $query->execute([$id]);
    $student = $query->fetch();

    respond(200, ['student' => $student === false ? null : public_student($student)]);
}

function login(): void
{
    if (!is_same_origin()) {
        respond(403, ['error' => 'forbidden']);
        return;
    }

    $input = json_decode((string) file_get_contents('php://input'), true);
    $email = is_array($input) && is_string($input['email'] ?? null) ? strtolower(trim($input['email'])) : '';
    $password = is_array($input) && is_string($input['password'] ?? null) ? $input['password'] : '';

    if ($email === '' || $password === '') {
        respond(400, ['error' => 'invalid_request']);
        return;
    }

    $db = db();
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';

    $db->exec("DELETE FROM login_attempts WHERE attempted_at < now() - interval '" . FAILED_LOGIN_WINDOW . "'");

    $attempts = $db->prepare('SELECT count(*) FROM login_attempts WHERE email = ? AND ip = ?');
    $attempts->execute([$email, $ip]);

    if ((int) $attempts->fetchColumn() >= MAX_FAILED_LOGINS) {
        respond(429, ['error' => 'too_many_attempts']);
        return;
    }

    $query = $db->prepare('SELECT id, name, email, password_hash, active FROM students WHERE lower(email) = ?');
    $query->execute([$email]);
    $student = $query->fetch();

    if ($student === false) {
        // Spend the same time as a real check so response timing doesn't reveal which emails exist.
        password_hash($password, PASSWORD_DEFAULT);
        $authenticated = false;
    } else {
        $authenticated = password_verify($password, $student['password_hash']) && $student['active'];
    }

    if (!$authenticated) {
        $db->prepare('INSERT INTO login_attempts (email, ip) VALUES (?, ?)')->execute([$email, $ip]);
        respond(401, ['error' => 'invalid_credentials']);
        return;
    }

    $db->prepare('DELETE FROM login_attempts WHERE email = ? AND ip = ?')->execute([$email, $ip]);

    start_session();
    session_regenerate_id(true);
    $_SESSION['student_id'] = $student['id'];

    respond(200, ['student' => public_student($student)]);
}

function logout(): void
{
    if (!is_same_origin()) {
        respond(403, ['error' => 'forbidden']);
        return;
    }

    if (isset($_COOKIE[SESSION_COOKIE])) {
        start_session();
        session_destroy();
        $params = session_get_cookie_params();
        setcookie(SESSION_COOKIE, '', [
            'expires' => 1,
            'path' => $params['path'],
            'httponly' => $params['httponly'],
            'samesite' => $params['samesite'],
            'secure' => $params['secure'],
        ]);
    }

    respond(200, ['student' => null]);
}
