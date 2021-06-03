// criar a conecção com mysql e pegar o modulo que ja trabalha com promise
const mysql = require('mysql2/promise');

//estaciar um objeto connection para trabalha poolconecção reaprovetar o conecção do 
// mysql para sempre esta conectado e reprovetar a connecção.
const connection = mysql.createPool({
  user:'master',
  password: 'master123',
  host: 'localhost',
  database: 'model_example'
});

// exportar a connection
module.exports = connection;