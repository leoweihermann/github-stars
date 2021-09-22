import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../Components/Header';

import { Container, Form, Search, Title } from './styles';

const Home: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [userName, setUsername] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push(`/user/${userName}`);
  }, [history, userName]);

  return (
    <Container>
      <Header />
      <Search>
        <Title>Veja os repositórios estrelados por usuário.</Title>
        <Form hasError={!!inputError} onSubmit={handleSubmit}>
          <input
            value={userName}
            placeholder="Digite o nome do usuário"
            onChange={e => setUsername(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </Form>
      </Search>
    </Container>
  );
};

export default Home;
