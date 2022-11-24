<?php

class SesionUsuario{

    public function __construct(){
        session_start();
    }

    public function setUsuarioActual($usuario){
        if(session_status()==PHP_SESSION_ACTIVE){
            $_SESSION['admin'] = $usuario;
        }
    }

    public function getUsuarioActual(){
        if(session_status()==PHP_SESSION_ACTIVE && isset($_SESSION['admin'])){
            return $_SESSION['admin'];
        }
    }

    public function cerrarSesion(){
        session_unset();
        session_destroy();
    }

}