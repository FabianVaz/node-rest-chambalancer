-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS chambalancer;

-- Usar la base de datos
USE chambalancer;

-- Crear la tabla Usuarios
CREATE TABLE IF NOT EXISTS Usuarios (
    ID_usuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_usuario VARCHAR(100) NOT NULL,
    Correo_electronico VARCHAR(100) NOT NULL,
    Tipo_usuario VARCHAR(50) NOT NULL,
    Num_servicios_activos INT DEFAULT 0,
    UNIQUE (Correo_electronico) -- Asegura que el correo electrónico sea único
);

-- Crear la tabla Categoría del Servicio
CREATE TABLE IF NOT EXISTS Categoria_servicio (
    ID_categoria INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_categoria VARCHAR(100) NOT NULL
);

-- Crear la tabla Servicio
CREATE TABLE IF NOT EXISTS Servicio (
    ID_servicio INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_servicio VARCHAR(100) NOT NULL,
    Categoria_servicio INT,
    ID_usuario_propietario INT,
    Precio DECIMAL(10, 2) NOT NULL,
    Descripcion_servicio TEXT,
    FOREIGN KEY (Categoria_servicio) REFERENCES Categoria_servicio(ID_categoria),
    FOREIGN KEY (ID_usuario_propietario) REFERENCES Usuarios(ID_usuario)
);
