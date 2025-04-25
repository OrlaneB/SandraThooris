<?php
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';

if (in_array($host, ['localhost', '127.0.0.1'])) {
  return require __DIR__ . '/env.local.php';
} else {
  return require __DIR__ . '/env.prod.php';
}

?>
