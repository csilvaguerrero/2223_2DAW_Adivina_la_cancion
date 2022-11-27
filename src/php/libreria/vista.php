<?php
    /**
     * @file Clase base de las vistas
     **/
    class Vista{

        /**
         * Constructor de la clase
         **/
        function __construct(){
        }

        /**
         * Redirecciona a la vista que se desea mostrar
         * @param {string} $nombre Nombre del fichero de la vista a la que se quiere redireccionar
         **/
        function mostrar($nombre){
            header('Location:php/vistas/' . $nombre . '.php');
//            include 'php/vistas/' . $nombre . '.php';
        }

    }