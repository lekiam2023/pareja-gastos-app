const db = mysql.createPool({
  host: process.env.DB_HOST || 'mysql',
  user: process.env.DB_USER || 'root',
  password: process.env.PASSWORD || 'password',
  database: process.env.DB_NAME || 'pareja_app',
  port: process.env.DB_PORT || 3306 
});

module.exports = db;