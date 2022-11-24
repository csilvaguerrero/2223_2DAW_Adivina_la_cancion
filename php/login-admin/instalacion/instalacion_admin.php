<?php
    include '../admin/admin.php';
    $usuario = new Admin();
    $usuario->insertarUsuario('Cristian Silva', 'csilvaguerrero.guadalupe@alumnado.fundacionloyola.net', 'Curso2223');
    header('Location:eliminar_instalacion.php');