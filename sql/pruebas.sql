CREATE TABLE AC_categorias(
	
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion VARCHAR(500) NOT NULL

);

INSERT INTO AC_categorias(nombre, descripcion)
VALUES ('Luchas raciales', 'aaa'),
('Feminismo', 'bbb'),
('LGTBIQ+', 'ccc');

CREATE TABLE AC_canciones(

	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    audio VARCHAR(100) /*NOT NULL UNIQUE*/NULL,
    respuesta_correcta TINYINT UNSIGNED NULL,
    id_categoria TINYINT UNSIGNED,
    CONSTRAINT FK_CategoriaCanciones FOREIGN KEY (id_categoria) REFERENCES AC_categorias (id)

);

INSERT INTO AC_canciones(audio, respuesta_correcta, id_categoria)
VALUES('audio1', 1, '1'),
('audio2', 3, '3'),
('audio3', 2, '2');

CREATE TABLE AC_respuestas(
	
    id_cancion SMALLINT UNSIGNED,
    CONSTRAINT FK_CancionRespuestas FOREIGN KEY (id_cancion) REFERENCES AC_canciones (id),
    num_respuesta TINYINT UNSIGNED NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    CONSTRAINT PK_CancionRespuesta PRIMARY KEY (id_cancion, num_respuesta)

);


INSERT INTO AC_respuestas (id_cancion, num_respuesta, titulo)
VALUES(1, 1, 'Correcta1'),
(1, 2, 'Respuesta2'),
(1, 3, 'Respuesta3'),
(1, 4, 'Respuesta4'),
(2, 1, '2Respuesta1'),
(2, 2, '2Respuesta2'),
(2, 3, 'Correcta2'),
(2, 4, '2Respuesta4'),
(3, 1, '3Respuesta1'),
(3, 2, 'Correcta3'),
(3, 3, '3Respuesta3'),
(3, 4, '3Respuesta4');




SELECT AC_canciones.id_categoria, AC_respuestas.titulo FROM AC_respuestas INNER JOIN AC_canciones
ON AC_canciones.respuesta_correcta = AC_respuestas.num_respuesta AND AC_canciones.id = AC_respuestas.id_cancion
INNER JOIN AC_categorias ON AC_categorias.id = AC_canciones.id_categoria;


SELECT AC_canciones.id_categoria, AC_respuestas.titulo FROM AC_respuestas INNER JOIN AC_canciones
ON AC_canciones.respuesta_correcta = AC_respuestas.num_respuesta AND AC_canciones.id = AC_respuestas.id_cancion
INNER JOIN AC_categorias ON AC_categorias.id = AC_canciones.id_categoria;


--ID CANCION, ID CATEGORIA Y TITULO CORRECTO
SELECT AC_canciones.id, AC_canciones.id_categoria, AC_respuestas.titulo FROM AC_canciones INNER JOIN
AC_respuestas ON AC_respuestas.id_cancion = AC_canciones.id AND
AC_canciones.respuesta_correcta = AC_respuestas.num_respuesta; 

--ID AUDIO, AUDIO, ID CATEGORIA, NUMRESPUESTA Y TITULOS POSIBLES
SELECT AC_canciones.id, AC_canciones.audio, AC_canciones.id_categoria, AC_respuestas.num_respuesta ,AC_respuestas.titulo FROM AC_canciones INNER JOIN
AC_respuestas ON AC_respuestas.id_cancion = AC_canciones.id;

--MOSTRAR TITULO DE LA CANCIÓN Y SU RESPECTIVA CATEGORIA

SELECT AC_respuestas.titulo, AC_categorias.nombre FROM AC_categorias INNER JOIN AC_canciones ON AC_canciones.id_categoria = AC_categorias.id
INNER JOIN AC_respuestas ON AC_respuestas.num_respuesta = AC_canciones.respuesta_correcta AND AC_canciones.id = AC_respuestas.id_cancion;


INSERT INTO AC_canciones(id, audio, respuesta_correcta, id_categoria)
VALUES(1, 'racismout.mp3', 2, 1),
		(2, 'grana.mp3', 1, 1),
		(3, 'declaration.mp3', 4, 2),
		(4, 'born.mp3', 3, 3);


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


---------------------

CREATE TABLE AC_canciones(

	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    audio VARCHAR(100) /*NOT NULL UNIQUE*/NULL,
    respuesta_correcta TINYINT UNSIGNED NULL,
    id_categoria TINYINT UNSIGNED,
    CONSTRAINT FK_CategoriaCanciones FOREIGN KEY (id_categoria) REFERENCES AC_categorias (id)

);


INSERT INTO AC_canciones(id, audio, respuesta_correcta, id_categoria)
VALUES(1, 'racismout.mp3', 2, 1),
		(2, 'grana.mp3', 1, 1),
		(3, 'declaration.mp3', 4, 2),
		(4, 'born.mp3', 3, 3);
		
		
CREATE TABLE AC_respuestas(
	
    id_cancion SMALLINT UNSIGNED,
    CONSTRAINT FK_CancionRespuestas FOREIGN KEY (id_cancion) REFERENCES AC_canciones (id),
    num_respuesta TINYINT UNSIGNED NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    CONSTRAINT PK_CancionRespuesta PRIMARY KEY (id_cancion, num_respuesta)

);


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