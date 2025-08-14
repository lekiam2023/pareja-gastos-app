const db = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.PASSWORD || 'Lapalma2022*',
  database: process.env.DB_NAME || 'pareja_app', 
});

module.exports = db;