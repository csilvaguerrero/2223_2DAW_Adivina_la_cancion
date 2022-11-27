<?php
    /**
     * @file Clase base de los modelos
     **/
    class Modelo{

        /**
         * Constructor de la clase
         **/
        function __construct(){
            $this->conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENA, DATABASE);
        }

    }
