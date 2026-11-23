<?php

declare(strict_types=1);

// Creates the tables. Safe to run again: existing data is left alone.
require __DIR__ . '/db.php';

db()->exec((string) file_get_contents(__DIR__ . '/schema.sql'));

echo "Base de datos lista.\n";
