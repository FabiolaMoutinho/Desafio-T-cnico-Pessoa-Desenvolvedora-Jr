import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

const Create = () => {
  const [descricao, setDescricao] = useState('');
  const [progresso, setProgresso] = useState('pendente');

  const postData = () => {
    axios.post(`http://localhost:3001/tarefas`, {
      descricao,
      progresso,
    })
  }
  return (
  <div>
    <Form className="create-form">
      <Form.Field>
        <label>Descrição</label>
        <input placeholder='Descrição' onChange={(e) => setDescricao(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <select onChange={(e) => setProgresso(e.target.value)}>
          <option value="pendente">pendente</option>
          <option value="em andamento">em andamento</option>
          <option value="pronto">pronto</option>
        </select>
      </Form.Field>
      <Button onClick={postData} type='submit'>Adicionar Tarefa</Button>
    </Form>
  </div>
);
  
}

export default Create;