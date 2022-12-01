<!DOCTYPE html>
<html>
    <head>
       <meta charset="UTF-8">
		<link rel="styleSheet" href="http://localhost/2223_2DAW_Adivina_la_cancion/src/css/estilos.css" type="text/css">
		<link rel="icon" type="image/x-icon" href="../img/logo.png">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
		<title>Añadir canciones</title>
    </head>
    <body>
		<div id="divAnadirCanciones">
			<form id="formulario" enctype="multipart/form-data" method="post" action="https://01.2daw.esvirgua.com/adivina-cancion/canciones/anadirFila">
				<button class="salirFormulario">X</button>
				<h1 class="tituloInicio">Añadir canciones</h1>
				<label class="labelFormulario">Audio</label>
				<br>
				<input type="file" class="inputFormulario" id="inputAudio" name="audio"/>
				<br>
                <label class="labelFormulario">Categorias</label>
                <br>
                <select name="categoria">
                    <option value="1">Luchas raciales</option>
                    <option value="2">Feminismo</option>
                    <option value="3">LGTBIQ+</option>
                </select>
                <br>
				<label class="labelFormulario">Respuestas</label>
				<br>
				<input type="radio" name="circulo" value="1" />
				<input type="text" name="titulo"/><button id="anadirRespuestas">+</button>
                <br>
				<br><br>
				<input type="submit" class="btn btn-primary" id="inputEnviar" value="Añadir" name="boton"/>
			</form>
		</div>
    </body>
</html>
