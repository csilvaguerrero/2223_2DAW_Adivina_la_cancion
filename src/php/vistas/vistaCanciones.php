<?php
    include 'html/headercanciones.html';
    while($fila = $resultado->fetch_array()){
        echo '<tr>
                <td>'.$fila['titulo'].'</td>
                <td>'.$fila['nombre'].'</td>
                <td>
                    <a href="canciones/borrarFila/'.$fila['id'].'">
                        <i class="fa-sharp fa-solid fa-trash"></i>
                    </a>
                    <i class="fa-sharp fa-solid fa-pencil"></i>
                    <i class="fa-sharp fa-solid fa-magnifying-glass">
                </td>
              </tr>';
    }
    include 'html/footercanciones.html';
