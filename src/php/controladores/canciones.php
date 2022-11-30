<?php

    class Canciones extends Controlador{
        function __construct(){
            parent::__construct();
            $this->cargarModelo('cancionModelo');
            $this->mostrarVista();
        }

        public function mostrarVista(){
            $resultado = $this->modelo->consultarCanciones();
            include 'php/vistas/vistaCanciones.php';
        }
        public function borrarFila($id){
            $this->modelo->borrarCanciones($id);
            //header('Location:php/vistas/vistaCanciones.php');
        }

    }
?>
