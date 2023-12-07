<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
	header('Content-Type: application/json; charset=utf-8');

	$db = 'SocialHelp';
	$host = 'localhost';
	$user = 'root';
	$pass = '';

	try {
		$pdo = new PDO("mysql:dbname=$db;host=$host", "$user", "$pass");
	} catch(Exception $e) {
		echo 'Error: ' . $e;
	}
?>
