const db = require('../config/db');

const findByEmail = async (email) => {
 const [rows] = await db.query("SELECT * FROM users WHERE email = ?",[email]);
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