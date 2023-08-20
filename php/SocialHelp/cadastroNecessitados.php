<?php
	include_once "connect.php";

	$data = json_decode(file_get_contents("php://input"), true);
	$query = $pdo->prepare("INSERT INTO CadastroNecessitados SET nome = :nome, email = :email, nomeUsuario = :nomeUsuario, senha = :senha, qtdIntegrantes = :qtdIntegrantes, contato = :contato");
	$query->bindValue('nome', $data['nome']);
	$query->bindValue('email', $data['email']);
	$query->bindValue('nomeUsuario', $data['nomeUsuario']);
	$query->bindValue('senha', $data['senha']);
	$query->bindValue('qtdIntegrantes', $data['qtdIntegrantes']);
	$query->bindValue('contato', $data['contato']);
	$query->execute();

	if($query){
		$result = json_encode(array('success'=>true));
	}
	else{
		$result = json_decode(array('success'=>false));
	}
	echo $result;
?>