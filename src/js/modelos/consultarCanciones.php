<?php
    include '../../php/config/config.php';
    $conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENA, DATABASE);
    $sql = "SELECT * FROM AC_canciones";
    $resultado = $conexion->query($sql);
    $fila = $resultado->fetch_array();
    $fila = json_encode($fila);
    echo $fila;
