const connection = require('./connection');

const getAll = async () => {
	const [lista] = await connection.execute(
		'SELECT * FROM desafio_tecnico.lista_tarefas;',
	);
	return lista;
};

const createTarefas = async (descricao, progresso) => {
	const [product] = await connection.execute(
	  'INSERT INTO lista_tarefas (descricao, progresso) VALUES (?, ?)',
	  [descricao, progresso],
	);
	const newTarefa = { id: product.insertId, descricao, progresso };
	return newTarefa;
  };

module.exports = {
	getAll,
  createTarefas,
};