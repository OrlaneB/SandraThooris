<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include "../db.php";

$stmt = $pdo->query("SELECT * FROM articles");
$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($articles)

?>
