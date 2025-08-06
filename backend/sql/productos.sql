-- Active: 1748126598734@@127.0.0.1@3306
CREATE DATABASE productos
--Exportacion de base de datos

USE productos



--Tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    categoria_id INT,
    imagen BLOB NOT NULL,
    nombre VARCHAR(455) NOT NULL,
    precio DECIMAL(10, 0),
    descripcion TEXT NOT NULL,
    cantidad INT NOT NULL,
    estado ENUM('Disponible', 'Vendido') DEFAULT 'Disponible',
    tipo_oferta ENUM('Donacion', 'Venta'),
    fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP
);


USE productos

ALTER TABLE productos
DROP COLUMN fecha_publicacion