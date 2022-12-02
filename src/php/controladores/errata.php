<?php
    /**
     * @file Clase que gestiona las URL no identificadas
     **/
    class Errata extends Controlador {

        /**
         * Constructor de la clase
         **/
        function __construct(){
            parent::__construct();
            $this->vista->mostrar('errata');
            echo '<h1>Recurso no encontrado o inexistente</h1>';
        }

    }