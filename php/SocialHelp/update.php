<?php

include 'connect.php';
	
$id = $_POST['id'];
$nome = $_POST['nome'];
$nomeOng = $_POST['nomeOng'];
$email = $_POST['email'];
$contato = $_POST['contato'];
$nomeUsuario = $_POST["nomeUsuario"];
$senha = $_POST["senha"];

try {
	$stmt = $pdo->prepare('UPDATE CadastroOngs Set nome = :nome WHERE id = :id, nome = :nome');
	$stmt->execute(array(
		':id' => $id,
		':nome' => $nome,
		':nomeOng' => $nomeOng,
		':email' => $email,
		':contato' => $contato,
		':nomeUsuario' => $nomeUsuario,
		':senha' => $senha
	));
	echo $stmt->rowCount();
} catch(PDOException $e) {
	echo 'Error: ' . $e->getMessage();
}

?>
