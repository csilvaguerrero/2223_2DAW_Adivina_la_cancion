<?php
    include_once 'admin.php';
    include_once 'sesion.php';
    $sesionUsuario = new SesionUsuario();
    $usuario = new Admin();
    if(isset($_POST['email']) && isset($_POST['password'])){
        $usuarioFormulario = $_POST['email'];
        $contrasenaFormulario = $_POST['password'];
        $usuario->comprobarUsuario($usuarioFormulario, $contrasenaFormulario);
        if($usuario->comprobarUsuario($usuarioFormulario, $contrasenaFormulario)){
            $sesionUsuario->setUsuarioActual($usuarioFormulario);
            $usuario->setUsuario($usuarioFormulario);
            header('Location:home.php');
        } else{
            header('Location:usuario_incorrecto.html');
        }
    }
