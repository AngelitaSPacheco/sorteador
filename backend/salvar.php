<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$dados = file_get_contents('php://input');
$dados = json_decode($dados, TRUE);

$arquivo = 'numeros.txt';
file_put_contents($arquivo, $dados['num'], FILE_APPEND);

echo json_encode(['msg' => 'Número salvo com sucesso']);