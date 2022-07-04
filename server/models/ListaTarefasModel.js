const connection = require('./connection');

const getAll = async () => {
	const [lista] = await connection.execute(
		'SELECT * FROM desafio_tecnico.lista_tarefas;',
	);
	return lista;
};

module.exports = {
	getAll,
};