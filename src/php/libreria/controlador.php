<?php
    /**
     * @file Clase base de los controladores
     **/
    class Controlador{

        /**
         * Constructor de la clase
         **/
        function __construct(){
            $this->modelo = NULL;
            $this->vista = new Vista();
        }

        /**
         * Carga el modelo de datos del controlador
         * @param {string} $modelo Nombre del modelo que quiere cargar el controlador
         **/
        function cargarModelo($modelo){
            $url = 'php/modelos/' . $modelo . '.php';
            if(file_exists($url)){
                require $url;

                $this->modelo = new $modelo();
            }

        }

    }
