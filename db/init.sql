-- Creacion de la base de datos
CREATE DATABASE IF NOT EXISTS pareja_app;
-- Trabajamos con esta tabla
USE pareja_app;


--Tabla de usuarios
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUN('user', 'admin') DEFAULT 'user',
    creado_en TIMESTAMP CURRENT_TIMESTAMP 
);

--Tabla de gastpos
   CREATE TABLE gastos(
   id INT AUTO_INCREMENT PRIMARY KEY,
   user_id INT NOT NULL,
   descripcion VARCHAR(255) NOT NULL,
   monto DECIMAL(2,10) NOT NULL,
   fecha DATE NOT NULL,
   creado_en TIMESTAMP CURRENT_TIMESTAMP,
   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

--Tabla de pagos
CREATE TABLE pagos(
    id AUTO_INCREMENT PRIMARY KEY,
    user_origin INT NOT NULL,
    user_destino INT NOT NULL,
    monto DECIMAL(2,10) NOT NULL,
    generado_en TIMESTAMP CURRENT_TIMESTAMP,
    FOREIGN KEY (user_origin) REFERENCES users(id),
    FOREIGN KEY (user_destino) REFERENCES users(id)
);

--Insertar usuarios (passwords deben ser hasheadas en la app real)
INSERT INTO user (nombre, email, password, rol) VALUES 
('Alice','alice@gmail.com','12345678', 'user'),
('Alexandra','alex@gmail.com','12345678', 'user'),
('Admin','admin@gmail.com','adminpass', 'admin');

--Insertar gastos de ejemplo
INSERT INTO gastos (user_id, descripcion, monto, fecha) VALUES
(1,'Compra de supermercado',80.50,'2025-07-01'),
(2,'Pago de Alquiler',375,'2025-07-05'),
(3,'Cerveza y snacks',25,'2025-07-06');