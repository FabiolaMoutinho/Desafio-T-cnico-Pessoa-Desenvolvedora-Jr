const listaTarefasModel = require('../models/ListaTarefasModel');

const getAll = async () => {
  const tarefasAll = await listaTarefasModel.getAll();
  return tarefasAll;
};

const create = async (descricao, progresso) => {
  const newTarefa = await listaTarefasModel.createTarefas(descricao, progresso);
  return newTarefa;
};

module.exports = {
  getAll,
  create,
};
