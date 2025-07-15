-- Creacion de la base de datos
CREATE DATABASE IF NOT EXISTS pareja_app;
-- Trabajamos con esta tabla
USE pareja_app;



CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('user', 'admin') DEFAULT 'user',
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


   CREATE TABLE gastos(
   id INT AUTO_INCREMENT PRIMARY KEY,
   user_id INT NOT NULL,
   descripcion VARCHAR(255) NOT NULL,
   monto DECIMAL(10, 2) NOT NULL,
   fecha DATE NOT NULL,
   creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);




CREATE TABLE pagos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_origin INT NOT NULL,
    user_destino INT NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    generado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_origin) REFERENCES users(id),
    FOREIGN KEY (user_destino) REFERENCES users(id)
);

DROP TABLE pagos;
DROP TABLE gastos;

INSERT INTO users (nombre, email, password, rol) VALUES 
('Jose','Jose@gmail.com','12345678', 'user');


INSERT INTO gastos (user_id, descripcion, monto, fecha) VALUES
(8,'Retrovisor',80.40,'2025-03-05');

SELECT * from gastos ;