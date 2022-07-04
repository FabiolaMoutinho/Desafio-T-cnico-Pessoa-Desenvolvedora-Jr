const express = require('express')
const Lista = require('./models/ListaTarefas');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/tarefas', tarefasRequest);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});

async function tarefasRequest(req, res) {
  const lista = await Lista.getAll();
  res.status(200).json(lista);
}