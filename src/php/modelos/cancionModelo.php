<?php
    /**
     * @file Clase que gestiona el modelo del controlador de las canciones
     **/
    class cancionModelo extends Modelo{
        /**
         * Constructor de la clase
         **/
        public function __construct(){
            parent::__construct();
        }
        /**
         * Método que consulta los datos de las canciones en la base de datos
         * @return {object} $resultado Objeto que contiene el resultado de la consulta
         **/
        public function consultarCanciones(){
            $sql = "SELECT AC_canciones.id, AC_respuestas.titulo, AC_categorias.nombre FROM AC_categorias INNER JOIN AC_canciones ON AC_canciones.id_categoria = AC_categorias.id
                    INNER JOIN AC_respuestas ON AC_respuestas.num_respuesta = AC_canciones.respuesta_correcta AND AC_canciones.id = AC_respuestas.id_cancion;";
            $resultado = $this->conexion->query($sql);
            return $resultado;
        }
        /**
         * Método que borra las filas de las canciones en la base de datos.
         **/
        public function borrarCanciones($id){
            $sql = "DELETE FROM AC_canciones WHERE id = $id;";
            $this->conexion->query($sql);
        }
        /**
         * Método que añade las canciones en la base de datos.
         * @return {object} $id de la última consulta realizada.
         **/
        public function anadirCanciones($audio, $titulo, $categoria, $radio, $temporal){
            $sql = "INSERT INTO AC_canciones(audio, respuesta_correcta, id_categoria) VALUES ('$audio',$radio,$categoria)";
            $this->conexion->query($sql);
            $id = $this->conexion->insert_id;
            //$this->move_uploaded_file($temporal, 'audio/'.$titulo);
            return $id;
        }
        /**
         * Método que añade respuestas a las canciones añadidas por el usuario.
         **/
        public function anadirRespuestas($id, $radio, $titulo){
            $sql = "INSERT INTO AC_respuestas(id_cancion, num_respuesta, titulo) VALUES($id, $radio, '$titulo')";
            $this->conexion->query($sql);
        }
    }


