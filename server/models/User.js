/* ----Capa De Gestion Logica De Datos---
Este archivo controla el acceso a la base de datos MySQL
Realizando los QUERY: 
-SELCET:(Para buscar los usuario de la tabla users por email y por id)
-INSERT:(Para crear un nuevo usuario en la tabla)
*/

const db = require('../config/db');

const findByEmail = async (email) => {
 const [rows] = await db.query("SELECT * FROM users WHERE email = ?",[email]);
 return rows[0];
};

const findByName = async (name) => {
 const [rows] = await db.query("SELECT * FROM users WHERE nombre = ?",[name]);
 return rows[0];
};

const findById = async (id) =>{
 const [rows] = await db.query("SELECT * FROM users WHERE id= ?",[id]);
 return rows[0];
};

const createUser = async (nombre, email, hashedPassword, rol = 'user') => {
  const [result] = await db.query(
    "INSERT INTO users (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    [nombre, email, hashedPassword, rol]
  );
  return result.insertId;//Para usar el ID
};

module.exports = {
     findByEmail,
     findById,
     createUser,
     };