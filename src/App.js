import React, { useState, useEffect } from 'react';
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);
    useEffect(() => {
      api.get('/repositories').then(response => {
        setRepositories(response.data);
      });
    }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: '`Novo repositorio ${Date.now()}`',
      url: 'https://www.google.com/',
      techs: 'Java, Python',
      likes: 0,
    });
    const repository = response.data;
    setRepositories([...repositories, repository]);
  }
  
  async function handleRemoveRepository(id) {
     const updateRepo = repositories.filter(repo => repo.id !== id);
    setRepositories(updateRepo);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        
        {
            repositories.map(repository => <li key={repository.id}>
              <div>
                  <b>{repository.title}</b>
                  <a href={repository.url}>Repository Link </a>
              </div>
             <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button>
             </li>)
             }
          </ul>
        
          <button onClick={handleAddRepository}>Adicionar</button>
           
    </div>
  );
}

export default App;
