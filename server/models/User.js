const db = require('../config/db');

const findByEmail = async (email) => {
 const [rows] = await db.query("SELECT * FROM users WHERE = ?",[email]);
 return rows[0];
};

const findById = async (id) =>{
 const [rows] = await db.query("SELECT * FROM users WHERE id= ?",[id]);
 return rows[0];
};

module.exports = { findByEmail, findById };