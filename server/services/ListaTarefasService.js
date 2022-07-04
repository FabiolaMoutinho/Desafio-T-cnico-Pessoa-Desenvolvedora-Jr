const listaTarefasModel = require('../models/ListaTarefasModel');

const getAll = async () => {
  const tarefasAll = await listaTarefasModel.getAll();
  return tarefasAll;
};

const create = async (descricao, progresso) => {
  const newTarefa = await listaTarefasModel.createTarefas(descricao, progresso);
  return newTarefa;
};

const remove = async (id) => {
  const tarefa = await listaTarefasModel.removeTarefa(id);
  return tarefa;
};

module.exports = {
  getAll,
  create,
  remove,
};
