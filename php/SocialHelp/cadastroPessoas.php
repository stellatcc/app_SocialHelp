<?php
      include_once('connect.php');

      $data = json_decode(file_get_contents("php://input"), true);

      $query = $pdo->prepare("INSERT INTO CadastroPessoas SET nome = :nome, email = :email, nomeUsuario = :nomeUsuario, senha = :senha, contato = :contato");
      $query->bindValue(':nome', $data['nome']);
      $query->bindValue(':email', $data['email']);
      $query->bindValue(':nomeUsuario', $data['nomeUsuario']);
      $query->bindValue(':senha', $data['senha']);
      $query->bindValue(':contato', $data['contato']);
      $query->execute();

      if($query){
        $result = json_encode(array('success'=>true));
      }
      else{
        $result = json_decode(array('success'=>false));
      }
      echo $result;



?>