<?php

declare(strict_types=1);

// Usage: npm run student:create -- alumno@example.com "Nombre Apellido"
// Asks for the password on stdin; running it again for the same email resets it.
require __DIR__ . '/db.php';

[, $email, $name] = array_pad($argv, 3, null);

if ($email === null || $name === null || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    fwrite(STDERR, "Uso: npm run student:create -- alumno@example.com \"Nombre Apellido\"\n");
    exit(1);
}

echo 'Contraseña (mínimo 10 caracteres, se ve al escribirla): ';
$password = rtrim((string) fgets(STDIN), "\r\n");

if (strlen($password) < 10) {
    fwrite(STDERR, "La contraseña debe tener al menos 10 caracteres.\n");
    exit(1);
}

$query = db()->prepare(
    'INSERT INTO students (email, name, password_hash) VALUES (?, ?, ?)
     ON CONFLICT (lower(email)) DO UPDATE SET name = EXCLUDED.name, password_hash = EXCLUDED.password_hash',
);
$query->execute([strtolower($email), $name, password_hash($password, PASSWORD_DEFAULT)]);

echo "Alumno guardado: $email\n";
