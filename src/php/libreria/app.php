<?php
    require_once 'php/controladores/errata.php';
    /**
     * @file Clase que gestiona la aplicación principal
     **/
    class App{

        /**
         * Constructor de la clase
         **/
        function __construct(){
            if(isset($_GET['url'])) {
                $url = $_GET['url'];
                $url = rtrim($url, '/');
                $url = explode('/', $url);
                $ficheroControlador = 'php/controladores/' . $url[0] . '.php';
                if (file_exists($ficheroControlador)) {
                    require_once $ficheroControlador;
                    ucfirst($url[0]);
                    $controlador = new $url[0];
                } else {
                    $controlador = new Errata();
                }
            }
            else{
                header('Location:php/vistas/inicio.php');
            }
        }
    }