<?php

header("Access-Control-Allow-Origin: *");

$min = 0;
$max = 100;
$n = mt_rand($min, $max);

echo json_encode(['num' => $n]);