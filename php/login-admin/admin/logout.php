<?php
    include_once 'sesion.php';

    $sesionUsuario = new SesionUsuario();
    $sesionUsuario->cerrarSesion();
    header('Location: ../index.php');

?>