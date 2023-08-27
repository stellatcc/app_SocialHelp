<?php
include 'connect.php';


    $consulta = $pdo->query("SELECT * FROM CadastroNecessitados");
    $linha = $consulta->fetchAll(PDO::FETCH_ASSOC);

    for ($i=0; $i < count($linha); $i++) { 
        foreach ($linha[$i] as $key => $value) { }
        $dados[] = array(
            'id' => $linha[$i]['id'],
            'nome' => $linha[$i]['nome'],
            'email' => $linha[$i]['email'],
            'nomeUsuario' => $linha[$i]['nomeUsuario'],
            'qtdIntegrantes' => $linha[$i]['qtdIntegrantes'],
            'senha' => $linha[$i]['senha'],
            'contato' => $linha[$i]['contato']
            
        );
    }
    if (count($linha) > 0) {
        $result = json_encode(array("success" => true, "result" => $dados));
    }
    else{
        $result = json_encode(array("success" => false, "result" => "0"));
    }
    echo $result
    
?>
