const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'server2022!',
	database: 'desafio_tecnico' });

module.exports = connection;