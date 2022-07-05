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

const update = async (id, descricao, progresso) => {
  const productUpdate = await listaTarefasModel.updateTarefa(id, descricao, progresso);
  return productUpdate;
};

module.exports = {
  getAll,
  create,
  remove,
  update
};
