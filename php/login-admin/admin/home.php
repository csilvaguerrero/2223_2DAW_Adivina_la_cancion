<?php
    include 'sesion.php';
    include 'admin.php';

    $usuario = new Admin();
    $sesionUsuario = new SesionUsuario();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset=utf-8 />
        <meta name=viewport content='width=device-width, initial-scale=1' />
		<title>Inicio</title>
	</head>
	<body>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>
                    <a href="logout.php">Cerrar sesión<nav></nav></a>
                </li>
            </ul>
        </nav>
        <?php
            $usuario->setUsuario($sesionUsuario->getUsuarioActual());
            $nombre = $usuario->getNombre();
            echo '<h1>Bienvenido '.$nombre;
        ?>
	</body>
</html>