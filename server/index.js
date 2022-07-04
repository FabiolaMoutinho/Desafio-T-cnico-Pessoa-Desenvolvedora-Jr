require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const Lista = require('./models/ListaTarefas');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.get('/tarefas', tarefasRequest);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});

async function tarefasRequest(req, res) {
  const lista = await Lista.getAll();
  res.status(200).json(lista);
}