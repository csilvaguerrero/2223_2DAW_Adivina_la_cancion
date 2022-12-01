<?php
    // Instalación del administador
    $conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENA, DATABASE);
    $nombre = '';
    $hash = password_hash('', PASSWORD_DEFAULT);
    $email = '';
    $perfil = '';
    $sql = "INSERT INTO administrador VALUES (default, ?, ?, ?, ?)";
    $resultado = $conexion->prepare($sql);
    $resultado->bind_param('ssss', $nombre, $hash, $email, $perfil);
    $resultado->execute();