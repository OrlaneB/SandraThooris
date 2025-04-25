<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {

  http_response_code(200);
  exit;
}

include "../db.php";

$data = json_decode(file_get_contents("php://input"), true);

$title = $data['title'] ?? "";
$content = $data["content"] ?? "";

if ($title && $content) {
  $stmt = $pdo->prepare("INSERT INTO articles (title, content, created_at) VALUES (?,?, NOW())");
  $stmt->execute([$title, $content]);

  echo json_encode(["success" => true]);
} else {
  echo json_encode(["error" => "Champs manquants"]);
}
?>

