require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const listaTarefasController = require('./controllers/ListaTarefasController');

const app = express();
app.use(bodyParser.json());

app.use('/tarefas', listaTarefasController);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
