<?php        
   if(isset($_POST['Anadir']))
   {
    $contra='Zvt9JGB%ZnR@';
    $bbdd='user2daw_BD2-01';
    $usu='user2daw_01';
    $server='2daw.esvirgua.com';
    $mysqli=new mysqli($server, $usu, $contra, $bbdd);




  
    $audio=$_POST['audio'];
    $nomcat= $_POST['categoria'];
    $consulta2="SELECT id FROM AC_categorias WHERE nombre='".$_POST['categoria']."';";
    //  echo $consulta2;
     $resultado2 = $mysqli->query($consulta2);
     while($fila2=$resultado2-> fetch_assoc())
    {
        $categoria=$fila2["id"];  
    }

    $texto=$_POST['texto'];
   
    echo 'el audio es: '.$audio.'<br><br>';
    echo 'El nombre de la respuesta: '.$texto.'<br><br>';
    echo 'La categoria es '.$nomcat.' con id: '.$categoria.'<br><br>';
   // echo 'La respuesta es '.$respuesta.'<br><br>';
    
        $sql_cancion = "INSERT INTO AC_canciones(audio, respuesta_correcta, id_categoria) VALUES ('$audio',NULL,$categoria)";
        $mysqli->query($sql_cancion);
        $id_cancion = $mysqli->insert_id;
        //$this->move_uploaded_file($temporal, 'audio/'.$titulo);
        echo 'El id de la cancion de la consulta anterior es: '.$id_cancion.'<br><br>';
        

    
    /**
     * Método que añade respuestas a las canciones añadidas por el usuario.
     **/
   
      
         $sql = "INSERT INTO AC_respuestas(id_cancion,num_respuesta , titulo) VALUES($id_cancion,NULL, '$texto')";
        $mysqli->query($sql);
      
        
        
   }
   if(isset($_POST['siguiente']))
   {
    $contra='Zvt9JGB%ZnR@';
    $bbdd='user2daw_BD2-01';
    $usu='user2daw_01';
    $server='2daw.esvirgua.com';
    $mysqli=new mysqli($server, $usu, $contra, $bbdd);
    
    
    $select="SELECT * FROM AC_canciones";
    $resultado = $mysqli->query($select);
		if($resultado->num_rows >0){	
			while($fila=$resultado-> fetch_assoc())
			{
				$id_cancion=$fila['id'];
			}
    }
      echo 'EL ID DE LA CANCION ES '.$id_cancion.'<br><br>';
    
    $consulta="SELECT num_respuesta FROM AC_respuestas WHERE titulo='".$_POST['respuesta']."';";
    $resultado = $mysqli->query($consulta);
    while($fila=$resultado-> fetch_assoc())
    {
        $respuesta=$fila["num_respuesta"]; 
    }
  
    echo 'la respuesta seleccionada es '.$respuesta.'<br<br>';
    $alter="UPDATE AC_canciones SET respuesta_correcta =".$respuesta." WHERE id=".$id_cancion.";";
    $mysqli->query($alter);
      
    
    
    $mysqli->close();
  }    