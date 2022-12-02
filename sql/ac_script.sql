CREATE DATABASE IF NOT EXISTS adivinacancion CHARACTER SET utf8mb4;

-- Crear tabla
use adivinacancion;

CREATE TABLE administrador(
    id TINYINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    perfil CHAR(2) NOT NULL CHECK(perfil='AC'),
    CONSTRAINT UX_CORREO_ELECTRONICO UNIQUE KEY(correo_electronico)
);

-- Eliminar tabla
DROP TABLE administrador;

-- Insertar administrador
INSERT INTO administrador VALUES(default, 'Cristian Silva', 'Curso2223', 'csilvaguerrero.guadalupe@alumnado.fundacionloyola.net', 'AC');


----- Crear tabla canciones
CREATE TABLE AC_canciones(

	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    audio VARCHAR(100) NOT NULL UNIQUE,
    respuesta_correcta TINYINT UNSIGNED NULL,
    id_categoria TINYINT UNSIGNED,
    CONSTRAINT FK_CategoriaCanciones FOREIGN KEY (id_categoria) REFERENCES AC_categorias (id)

);

-- Insertamos datos en canciones
INSERT INTO AC_canciones(id, audio, respuesta_correcta, id_categoria)
VALUES(1, 'racismout.mp3', 2, 1),
		(2, 'grana.mp3', 1, 1),
		(3, 'declaration.mp3', 4, 2),
		(4, 'born.mp3', 3, 3);
		

-- Crear tabla respuesta de canciones
CREATE TABLE AC_respuestas(
	
    id_cancion SMALLINT UNSIGNED,
    CONSTRAINT FK_CancionRespuestas FOREIGN KEY (id_cancion) REFERENCES AC_canciones (id),
    num_respuesta TINYINT UNSIGNED NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    CONSTRAINT PK_CancionRespuesta PRIMARY KEY (id_cancion, num_respuesta)

);

--Insertamos las respuestas de las canciones
INSERT INTO AC_respuestas(id_cancion, num_respuesta, titulo)
VALUES(1, 1, 'Los salvadores'),
(1, 2, 'RAP CONTRA EL RACISMO'),
(1, 3, 'Hundred'),
(1, 4, 'Loves'),
(2, 1, 'DE GRANA A MARACAY'),
(2, 2, 'Despotas'),
(2, 3, 'Carretera'),
(2, 4, 'DEMONDS'),
(3, 1, 'Mundo de piedra'),
(3, 2, 'Streesed out'),
(3, 3, 'Entre un millon'),
(3, 4, 'Declaration'),
(4, 1, 'Givenchy'),
(4, 2, 'No fear'),
(4, 3, 'Born this way'),
(4, 4, 'Awful things');