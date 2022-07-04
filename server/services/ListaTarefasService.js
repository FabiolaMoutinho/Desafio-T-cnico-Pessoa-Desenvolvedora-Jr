const listaTarefasModel = require('../models/ListaTarefasModel');

const getAll = async () => {
  const tarefasAll = await listaTarefasModel.getAll();
  return tarefasAll;
};

module.exports = {
  getAll,
};
