<?php

try {
  $pdo = new PDO(
      "mysql:host=localhost;dbname=sandra_thooris;charset=utf8",
      'root',  // Utilisateur par défaut
      'root'       // Mot de passe pour l'utilisateur 'root' (vide si tu n'en as pas)
  );
} catch (PDOException $e) {
  die("Erreur connexion BDD : " . $e->getMessage());
}

?>
