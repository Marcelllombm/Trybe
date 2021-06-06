const mysql = require('mysql2/promise');

module.exports = () => mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'live_lecture_27_1',
  password: '',
});