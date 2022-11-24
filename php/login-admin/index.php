<?php
    include_once 'admin/admin.php';
    include_once 'admin/sesion.php';
    $sesionUsuario = new SesionUsuario();
    $usuario = new Admin();
    if(isset($_SESSION['admin'])) {
        header('Location:admin/home.php');
    }
    else {
        if($usuario->existenciaUsuario()){
            header('Location:admin/inicio_sesion.html');
        }
        else{
            header('Location:instalacion/instalacion_admin.php');
        }
    }