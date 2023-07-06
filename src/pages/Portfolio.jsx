import React, { useState, useEffect } from 'react';
import Header from '../componets/Header';
import ImagePortfolio from '../assets/portfolio.svg';
import styles from '../styles/pages/portfolio.module.css';

const Portfolio = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://api.github.com/users/analuizafagunr/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.log('Erro ao obter os repositórios', error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header title="Meus Projetos" image={ImagePortfolio} />
      <div className={styles.main}>
        <div className={`${styles.cardContainer} card-container`}>
          {repositories.map((repo) => (
            <div className={`${styles.card} card`} key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.enterRepo}>
                Acessar repositório
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Coloque aqui o componente Footer, se existir */}
    </>
  );
};

export default Portfolio;













