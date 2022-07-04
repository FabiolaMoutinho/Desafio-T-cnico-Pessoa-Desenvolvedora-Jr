const rescue = require('express-rescue');
const tarefas = require('express').Router();

const listaTarefasService = require('../services/ListaTarefasService');

tarefas.get(
  '/',
  rescue(async (req, res) => {
    const tarefas = await listaTarefasService.getAll();
    res.status(200).json(tarefas);
  }),
);

module.exports = tarefas;