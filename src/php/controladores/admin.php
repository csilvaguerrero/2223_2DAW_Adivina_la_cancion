<?php
    /**
     * @file Clase que gestiona los procesos relacionados al adminsitrador
     **/
    class Admin extends Controlador {

        /**
         * Constructor de la clase
         **/
        function __construct(){
            parent::__construct();
            session_start();
            $this->cargarModelo('adminModelo');
            if(!$this->existenciaAdmin()){
                $this->insertarAdmin();
            }
            if(isset($_POST['email']) && isset($_POST['password'])){
                if($this->validarDatos($_POST['email'], $_POST['password'])){
                    if($this->comprobarAdmin($_POST['email'], $_POST['password'])){
                        $this->crearSesion();
                    }
                    else{
                        echo 'Usuario incorrecto';
                    }
                }
                else{
                    $this->vista->mostrar('admin/inicio_sesion');
                }
            }
            if(empty($_POST)){
                $this->vista->mostrar('admin/inicio_sesion');
            }
        }

        /**
         * Clase que instala el administrador en la base de datos
         **/
        public function insertarAdmin(){
            include 'php/config/instalacion_admin.php';
            include 'php/config/eliminar_instalacion.php';
        }

        /**
         * Clase que comprueba la existencia de un administrador en la base de datos
         * @return {boolean} true Valor que indica que el administrador existe
         * @return {boolean} false Valor que indica que el administrador no existe
         **/
        public function existenciaAdmin(){
            $resultado = $this->modelo->existir();
            $resultado->bind_result($id);
            $resultado->execute();
            if($resultado->fetch()){
                return true;
            }
            else{
                return false;
            }
        }

        /**
         * Clase que valida los campos del formulario enviados por el usuario
         * @param {string} $usuario Correo electrónico suministrado por el usuario que se trata como usuario
         * @param {string} $contrasena Contraseña suministrada por el usuario
         **/
        public function validarDatos($usuario, $contrasena){
            $flag = true;
            $errores = array();
            $regExUsuario = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/";
            $regExContrasena = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/";
            if(empty($usuario) || empty($contrasena)){
                $flag = false;
                array_push($errores, 'Algunos campos estan vacios.');
            }
            if(!preg_match($regExUsuario, $usuario)){
                $flag = false;
                array_push($errores, 'El correo electrónico no es valido.');
            }
            if(!preg_match($regExContrasena, $contrasena)){
                $flag = false;
                array_push($errores, 'La contraseña no es valida.');
            }
            if(!$flag){
                $_SESSION['errores'] = $errores;
            }
            return $flag;

        }

        /**
         * Valida que los datos introducidos en el formulario de inicio de sesión coinciden con los datos guardados en la base de datos
         * @param {string} $usuario Indica el correo electrónico proporcionado por el usuario
         * @param {string} $contrasena Indica la contraseña proporcionada por el usuario
         * @return {boolean} true Valor que indica que los datos son correctos
         * @return {boolean} false Valor que indica que los datos son incorrectos
         **/
        public function comprobarAdmin($usuario, $contrasena){
            $resultado = $this->modelo->comprobar($usuario);
            $resultado->bind_result($password);
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
         * @return {array} $fila Devuelve una lista con los datos del usuario
         **/
        public function setAdmin($usuario){
            $resultado = $this->modelo->consultar($usuario);
            $resultado = $resultado->get_result();
            $fila = $resultado->fetch_array();
            return $fila;
        }

        /**
         * Crea la sesión del administrador
         **/
        public function crearSesion(){
            $datosAdmin = $this->setAdmin($_POST['email']);
            if(session_status()==PHP_SESSION_ACTIVE){
                $_SESSION['admin'] = $datosAdmin;
            }
            header('Location:php/vistas/inicio.php');
        }

    }