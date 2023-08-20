<?php
    include 'connect.php';
    $postjson = json_decode(file_get_contents("php://input"), true);
    if($postjson['tipo'] == "ong"){
        $tabela = "CadastroOngs";
    }
    else if($postjson['tipo'] == "voluntario"){
        $tabela = "CadastroPessoas";
    }
    else if($postjson['tipo'] == "necessitado"){
        $tabela = "CadastroNecessitados";
    }


    $query_buscar = $pdo->query("SELECT * from $tabela where nomeUsuario = '$postjson[nomeUsuario]' and senha = '$postjson[senha]' ");
    $dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);

    if(@count($dados_buscar) == 0) {
        $result = json_encode(array('success'=>'Dados Incorretos!'));
        echo $result;
    } 
    else { 
        $result = json_encode(array('success' => true)); 
        echo $result;
    }
?>
