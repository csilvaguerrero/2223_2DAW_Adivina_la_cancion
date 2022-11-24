<?php
    /**
     * @file Clase que gestiona los procesos relacionados al adminsitrador
     **/
    class Admin{
        private $conexion;
        private $nombre;
        private $usuario;

        /**
         * Controlador de la clase
         **/
        public function __construct(){
            $this->conexion = new mysqli('2daw.esvirgua.com', 'user2daw_01', 'Zvt9JGB%ZnR@', 'user2daw_BD2-01') or die("Hay algo que va mal en la conexión");
        }

        /**
         * Clase que comprueba la existencia de un administrador
         * @return {boolean} true Valor que indica que el administrador existe
         * @return {boolean} false Valor que indica que el administrador no existe
         **/
        public function existenciaUsuario(){
            $consulta = "SELECT nombre, correo_electronico FROM ac_administrador;";
            $resultado = $this->conexion->prepare($consulta);
            $resultado->bind_result($nombre, $email);
            $resultado->execute();
            if($resultado->fetch()){
                return true;
            }
            else{
                return false;
            }
        }

        /**
         * Inserta los datos del adminsitrador en la base de datos
         * @param {string} $nombre Indica el nombre del adminsitrador
         * @param {string} $usuario Indica el correo electrónico al que será asociado el adminsitrador
         * @param {string} $contrasena Indica la contraseña asignada para el adminsitrador
         **/
        public function  insertarUsuario($nombre, $usuario, $contrasena){
            $hash = password_hash($contrasena, PASSWORD_DEFAULT);
            $sql = "INSERT INTO ac_administrador VALUES (?, ?, ?)";
            $resultado = $this->conexion->prepare($sql);
            $resultado->bind_param('sss', $nombre, $hash, $usuario);
            $resultado->execute();
        }

        /**
         * Valida que los datos introducidos en el formulario de inicio de sesión coinciden con los datos guardados en la base de datos
         * @param {string} $usuario Indica el correo electrónico proporcionado por el usuario
         * @param {string} $usuario Indica la contraseña proporcionada por el usuario
         * @return {boolean} true Valor que indica que los datos son correctos
         * @return {boolean} false Valor que indica que los datos son incorrectos
         **/
        public function comprobarUsuario($usuario, $contrasena){
            $sql = "SELECT * FROM ac_administrador WHERE correo_electronico = ?";
            $resultado = $this->conexion->prepare($sql);
            $resultado->bind_param('s', $usuario);
            $resultado->execute();
            $resultado->bind_result($nombre, $password, $email);
            $resultado->fetch();
            if(password_verify($contrasena, $password)){
                return true;
            }
            else{
                return false;
            }
        }

        /**
         * Asigna el nombre y el correo electrónico a los atributos de la clase
         * @param {string} $usuario Indica el correo electrónico para consultar los datos del adminsitrador y guardarlos en la sesión
         **/
        public function setUsuario($usuario){
            $sql = "SELECT nombre, correo_electronico FROM ac_administrador WHERE correo_electronico = ?";
            $resultado = $this->conexion->prepare($sql);
            $resultado->bind_param('s', $usuario);
            $resultado->execute();
            $resultado->bind_result($nombre, $email);
            $resultado->fetch();
            $this->nombre = $nombre;
            $this->usuario = $email;
        }

        /**
         * Devuelve el nombre del adminsitrador
         * @return {string} $this->nombre Nombre del adminsitrador guardado en el atributo de la clase
         **/
        public function getNombre(){
            return $this->nombre;
        }

    }

?>