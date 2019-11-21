<?php
include_once 'conexion.php';


//echo ' hola desde consulta';

$sql_leer = 'SELECT * FROM usuario';

$gsent = $pdo->prepare($sql_leer);
$gsent->execute();

$resultado=$gsent->fetchAll();

echo json_encode($resultado);

?>