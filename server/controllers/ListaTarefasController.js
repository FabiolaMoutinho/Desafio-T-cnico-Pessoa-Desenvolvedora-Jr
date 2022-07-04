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

tarefas.post(
  '/',
  rescue(async (req, res) => {
    const { descricao, progresso } = req.body;
    const newTarefa = await listaTarefasService.create(descricao, progresso);
    res.status(201).json(newTarefa);
  }),
);

module.exports = tarefas;