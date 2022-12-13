<<<<<<< HEAD
<?php
    include '../../php/config/config.php';
    $conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENA, DATABASE);
    $sql = "SELECT id, audio, respuesta_correcta, id_categoria, num_respuesta, titulo FROM AC_canciones INNER JOIN AC_respuestas ON (id = id_cancion) WHERE id_categoria = ?";
    $resultado = $conexion->prepare($sql);
    $resultado->bind_param('i', $_GET['categoria']);
    $resultado->execute();
    $resultado = $resultado->get_result();
    $data = [];
    while($fila = $resultado->fetch_array(MYSQLI_ASSOC)){
        array_push($data, $fila);
    }
    $data = json_encode($data);
    echo $data;
=======
<?php
    include '../../php/config/config.php';
    $conexion = new mysqli(SERVIDOR, USUARIO, CONTRASENA, DATABASE);
    $sql = "SELECT id, audio, respuesta_correcta, id_categoria, num_respuesta, titulo FROM AC_canciones INNER JOIN AC_respuestas ON (id = id_cancion) WHERE id_categoria = ?";
    $resultado = $conexion->prepare($sql);
    $resultado->bind_param('i', $_GET['categoria']);
    $resultado->execute();
    $resultado = $resultado->get_result();
    $data = [];
    while($fila = $resultado->fetch_array(MYSQLI_ASSOC)){
        array_push($data, $fila);
    }
    $data = json_encode($data);
    echo $data;
>>>>>>> 9fbd117503617ee6c16ba721e4b90a5b8499a074
