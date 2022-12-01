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
        }
        public function anadirFila(){

            $audio = $_FILES['audio']['name'];
            $titulo = $_POST['titulo'];
            $categoria = $_POST['categoria'];
            $radio = $_POST['circulo'];
            $temporal = $_FILES['audio']['tmp_name'];

            $this->modelo->anadirCanciones($audio, $titulo, $categoria, $radio, $temporal);
            $this->vista->mostrar();
           // header('Location: https://01.2daw.esvirgua.com/adivina-cancion/canciones');
        }
    }

