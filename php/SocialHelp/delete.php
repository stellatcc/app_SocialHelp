<?php

include 'connect.php';

$id = $_POST['id'];



try {
	$stmt = $pdo->prepare('DELETE FROM CadastroOngs WHERE id = :id');
	$stmt = $pdo->prepare('DELETE FROM CadastroNecessitados WHERE id = :id');
	$stmt = $pdo->prepare('DELETE FROM CadastroPessoas WHERE id = :id');
	$stmt = $pdo->prepare('DELETE FROM login WHERE id = :id');
	$stmt->bindParam(':id', $id);
	$stmt->execute();

	echo $stmt->rowCount();
} catch(PDOException $e) {
	echo 'Error: ' . $e->getMessage();
}

?>
