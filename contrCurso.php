<?php
// -- LINKS PARA FILTROS E LIMPEZA  (filter/sanitize) -- SUGESTÃO
//https://categoriaoutros.com.br/?p=4299
//https://www.phpit.com.br/artigos/filtrando-e-validando-dados-no-php-com-filter_var.phpit

//manipulação e envio dados para classe
include_once "clsCurso.php";

$Form = new FormCurso();


$nome = filter_input(INPUT_GET,"nome", FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_GET,"email", FILTER_SANITIZE_EMAIL);
$senha = filter_input(INPUT_GET,"senha");


$Form->setNome($nome);
$Form->setEmail($email);
$Form->setSenha($senha);

if (isset($_GET["Inserir"]))
{
    $Resultado = $Form->Inserir();

    if ($Resultado === "Gravação com sucesso") {
        echo '<script>alert(' . json_encode('Dados inseridos no banco de dados!') . '); window.location = "index.PHP";</script>'; 
    } else {
        echo '<script>alert(' . json_encode($Resultado) . '); window.history.back();</script>';
    }
}
