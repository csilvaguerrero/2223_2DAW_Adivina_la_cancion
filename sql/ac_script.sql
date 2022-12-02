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