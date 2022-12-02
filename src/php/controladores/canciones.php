<?php
    /**
     * @file Clase que gestiona los procesos relacionados con las canciones (CRUD)
     **/
    class Canciones extends Controlador{
        /**
         * Constructor de la clase
         **/
        function __construct(){
            parent::__construct();
            $this->cargarModelo('cancionModelo');
            $this->mostrarVista();
        }
        /**
         * Clase que muestra la vista con todas las canciones registradas
         **/
        public function mostrarVista(){
            $resultado = $this->modelo->consultarCanciones();
            include 'php/vistas/vistaCanciones.php';
        }

        /**
         * Clase que elimina canciones registradas en la base de datos.
         **/
        public function borrarFila($id){
            $this->modelo->borrarCanciones($id);
        }

        /**
         * Clase que añade canciones mediante un formulario a la base de datos.
         **/
        public function anadirFila(){

            $audio = $_FILES['audio']['name'];
            $titulo = $_POST['titulo'];
            $categoria = $_POST['categoria'];
            $radio = $_POST['circulo'];
            $temporal = $_FILES['audio']['tmp_name'];

            $id = $this->modelo->anadirCanciones($audio, $titulo, $categoria, $radio, $temporal);
            $this->modelo->anadirRespuestas($id, $radio, $titulo);

        }
    }

