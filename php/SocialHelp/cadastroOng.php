<?php
	include_once('connect.php');

	$data = json_decode(file_get_contents("php://input"), true);
	
	$query = $pdo->prepare("INSERT INTO CadastroOngs SET nome = :nome, nomeOng = :nomeOng, email = :email, contato = :contato, nomeUsuario = :nomeUsuario, senha = :senha");
	$query->bindValue(':nome', $data['nome']);
	$query->bindValue(':nomeOng', $data['nomeOng']);
	$query->bindValue(':email', $data['email']);
	$query->bindValue(':nomeUsuario', $data['nomeUsuario']);
	$query->bindValue(':senha', $data['senha']);	
	$query->bindValue(':contato', $data['contato']);
	$query->execute();

	if($query){
    	$result = json_encode(array('success'=>true));
    }
 	else {
    	$result = json_encode(array('success'=>false));
 	}
  	echo $result;
?>
