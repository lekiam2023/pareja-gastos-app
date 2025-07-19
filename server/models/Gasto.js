const db = require('../config/db');

const getByUser = async (userId) => {
   const [rows] = await db.query("SELECT * FROM gastos WHERE user_id = ?",[userId]);
   return rows; 
};

const create = async (userId, descripcion, monto, fecha) =>{
  await db.query("INSERT INTO gastos (user_id, descripcion, monto, fecha) VALUES (?, ?, ?, ?)",
    [userId, descripcion, monto, fecha]);
};

const getTotales = async () =>{
   const [rows] = await db.query(`SELECT user_id SUM(monto) AS total 
    FROM gastos
    GROUP BY user_id
    `);
    return rows;
};

module.exports = {getByUser, create, getTotales};