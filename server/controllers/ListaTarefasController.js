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

tarefas.delete(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    await listaTarefasService.remove(id);
    res.status(200).send();
  }),
);

tarefas.patch(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const { descricao, progresso } = req.body;
    await listaTarefasService.update(id, descricao, progresso);
    res.status(200).send();
  }),
);

module.exports = tarefas;