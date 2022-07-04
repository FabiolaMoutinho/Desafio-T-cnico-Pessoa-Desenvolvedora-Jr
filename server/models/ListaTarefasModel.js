const connection = require('./connection');

const getAll = async () => {
	const [lista] = await connection.execute(
		'SELECT * FROM lista_tarefas;',
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

const removeTarefa = async (id) => {
  const tarefa = await connection.execute(
    'DELETE FROM lista_tarefas WHERE id = ?',
    [id],
  );
  return tarefa;
};

module.exports = {
	getAll,
	createTarefas,
	removeTarefa,
};