<?php
    /**
     * @file Clase que gestiona el modelo del controlador del administrador
     **/
    class adminModelo extends Modelo{
        /**
         * Constructor de la clase
         **/
        public function __construct(){
            parent::__construct();
        }

        /**
         * Método que consulta los id en la tabla de administrador
         * @return {object} $resultado Objeto que contiene el resultado de la consulta
         **/
        public function existir(){
            $sql = "SELECT id FROM administrador;";
            $resultado = $this->conexion->prepare($sql);
            $resultado->execute();
            return $resultado;
        }

        /**
         * Método que consulta la contraseña del administrador a través del usuario administrado mediante el formulario
         * de inicio de sesión
         * @return {object} $resultado Objeto que contiene el resultado de la consulta
         **/
        public function comprobar($usuario){
            $sql = "SELECT contrasena FROM administrador WHERE correo_electronico = ?";
            $resultado = $this->conexion->prepare($sql);
            $resultado->bind_param('s', $usuario);
            $resultado->execute();
            return $resultado;
        }

        /**
         * Método que consulta los datos del administrador a través del usuario administrado mediante el formulario
         * de inicio de sesión
         * @return {object} $resultado Objeto que contiene el resultado de la consulta
         **/
        public function consultar($usuario){
            $sql = "SELECT id, nombre, correo_electronico, perfil FROM administrador WHERE correo_electronico = ?";
            $resultado = $this->conexion->prepare($sql);
            $resultado->bind_param('s', $usuario);
            $resultado->execute();
            return $resultado;
        }

    }
