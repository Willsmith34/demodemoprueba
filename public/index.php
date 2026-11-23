<?php

declare(strict_types=1);

// Errors go to the log, never into a response.
ini_set('display_errors', '0');

// Front controller: serves the pages prerendered by `npm run build`.
// Vite copies this file to dist/client, which is the document root in production.

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$path = is_string($path) ? rawurldecode($path) : '/';

// `php -S` sends every request here; Apache only sends what isn't a real file (see .htaccess).
if (PHP_SAPI === 'cli-server') {
    $file = realpath(__DIR__ . $path);
    if (
        $file !== false
        && is_file($file)
        && str_starts_with($file, __DIR__ . DIRECTORY_SEPARATOR)
        && !in_array(pathinfo($file, PATHINFO_EXTENSION), ['php', 'html'], true)
    ) {
        return false;
    }
}

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if (str_starts_with($path, '/api/')) {
    // backend/ sits next to the document root in production, and next to dist/ locally.
    $backend = is_dir(dirname(__DIR__) . '/backend') ? dirname(__DIR__) . '/backend' : dirname(__DIR__, 2) . '/backend';
    require $backend . '/api.php';
    handle_api($path, $method);
    exit;
}

if ($method !== 'GET' && $method !== 'HEAD') {
    header('Allow: GET, HEAD');
    http_response_code(405);
    exit;
}

$slug = trim($path, '/');

// Addresses from the previous site structure.
$moved = ['ecp' => 'escuela', 'empresas' => 'servicios'];
if (isset($moved[$slug])) {
    header('Location: /' . $moved[$slug], true, 301);
    exit;
}

// Pages live at one canonical URL, without a trailing slash.
if ($path !== '/' && str_ends_with($path, '/') && $slug !== '') {
    $query = $_SERVER['QUERY_STRING'] ?? '';
    header('Location: /' . $slug . ($query !== '' ? '?' . $query : ''), true, 301);
    exit;
}

$page = __DIR__ . ($slug === '' ? '' : '/' . $slug) . '/index.html';

// The pattern rejects anything that could walk out of the document root.
if (preg_match('#^([a-z0-9-]+(/[a-z0-9-]+)*)?$#', $slug) === 1 && is_file($page)) {
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-cache');
    readfile($page);
    exit;
}

http_response_code(404);
header('Content-Type: text/html; charset=utf-8');
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Page not found</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 4.5rem; line-height: 1; margin: 0 0 1rem; }
      h2 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      a { display: inline-block; padding: 0.5rem 1rem; border-radius: 0.375rem; background: #111; color: #fff; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <a href="/">Go home</a>
    </div>
  </body>
</html>
