<?php

    class Cancion extends Controlador{

        function __construct(){
            parent::__construct();
            this->cargarModelo('cancionModelo');
        }

    }
?>
