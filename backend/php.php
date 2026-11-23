<?php

declare(strict_types=1);

// Local helper: runs PHP with the Postgres driver on when no php.ini enables it.
$flags = [];
$extensionDir = dirname(PHP_BINARY) . DIRECTORY_SEPARATOR . 'ext';

if (!extension_loaded('pdo_pgsql') && is_file($extensionDir . DIRECTORY_SEPARATOR . 'php_pdo_pgsql.dll')) {
    $flags = ['-d', "extension_dir=$extensionDir", '-d', 'extension=pdo_pgsql'];
}

$process = proc_open([PHP_BINARY, ...$flags, ...array_slice($argv, 1)], [STDIN, STDOUT, STDERR], $pipes);

exit(proc_close($process));
