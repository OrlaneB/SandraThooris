<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'db.php';

try{
  //Check if table "articles" exists
  $result = $pdo->query("SHOW TABLES LIKE 'articles'");

  if($result->rowCount()===0) {

    //Table articles does not exist
    $sql = "CREATE TABLE articles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4";

    $pdo->exec($sql);
    echo json_encode(['success' => true, "message" => "Table articles created successfully"]);

  } else {

    //Table articles exists
    echo json_encode(["success" => true, "message" => "Table articles already exists"]);
  }

} catch(PDOException $e) {

  echo json_encode(["success"=> false, "error" => $e->getMessage()]);

}

?>
