<?php
    if(file_exists("instalacion_admin.php")){
        unlink("instalacion_admin.php");
    }
    header('Location:../index.php');
