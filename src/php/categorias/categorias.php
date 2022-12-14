<?php
    if(isset($_POST['anadir'])){    // Si se presiona el botón añadir
        include "config.php";
        $conexion = new mysqli($servidor, $usuario, $contrasenia, $bd);

        // Guardar valores en variables
        $categoria = $_POST['nombre_categoria'];
        $imagen = $_POST['imagen'];
        $descripcion = $_POST['descripcion'];
        $tema = $_POST['nombre_tema'];

        // Insertar los datos en la tabla categorías
        $sql_categorias = "INSERT INTO AC_categorias (id, nombre, imagen, descripcion) VALUE (NULL, '$categoria', '$imagen', '$descripcion');";
        
        // Insertar los datos en la tabla temas de lucha
        $sql_temas = "INSERT INTO AC_temas_lucha (id, nombre) VALUE (NULL, '$tema');";

        // Informar si se ha guardado correctamente o no los datos de la tabla categorías
        if($conexion->query($sql_categorias))
        {
            echo "Se añadio correctamente <br>";
            echo "La categoría es: ".$categoria."<br>";
            echo "La imagen para el fonto es: ".$imagen."<br>";
            echo "La descripción es: ".$descripcion."<br>";
        }
        else{
            echo "No se ha introducido datos o esta repetido";
        }
        // Guardo el id del último registro (categorías)
        $id_categoria = $conexion->insert_id;
        echo "categoria id es: ".$id_categoria;

        // Informar si se ha guardado correctamente o no los datos de la tabla temas de lucha
        if($conexion->query($sql_temas))
        {
            echo "Se añadio correctamente <br>";
            echo "El tema es: ".$tema."<br>";
        }
        else{
            echo "No se ha introducido datos o esta repetido";
        }
        // Guardo el id del último registro (temas)
        $id_temas = $conexion->insert_id;
        echo "tema id es: ".$id_temas;

        // Tabla categorías temas lucha
        $sql_categorias_temas = "INSERT INTO AC_categoria_temas_lucha (id_categoria, id_tema) VALUE ($id_categoria, $id_temas);";

        // Informar si se ha guardado correctamente o no los datos de la tabla categoría temas lucha
        if($conexion->query($sql_categorias_temas))
        {
            echo "Se añadio correctamente <br>";
            echo "El id categoria es: ".$id_categoria."<br>";
            echo "El id tema es: ".$id_temas."<br>";
        }
        else{
            echo "No se ha introducido datos o esta repetido";
        }
        
        $conexion->close();     // Cerrar la conexión
    }
