import Header from "../componets/Header";
import styles from "../styles/pages/sobre.module.css";
import MinhaImagem from "../assets/Purple Facebook And Instagram About Me Chart Post.png";
import sobre from "../assets/sobre.svg";

const Sobre = () => {
  return (
    <>
      <div className={styles.container}></div>
      <Header title="Minha vida" image={sobre} />
      
      <div className={styles.sobreContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.sobreTitle}></h2>
          <p className={styles.sobreDescription}>
            Nasci em São Paulo e tenho 27 anos. Sou formada em Tecnologia da Informação e trabalhei por 9 anos na área de CX (Customer Experience). No entanto, estou em um momento de transição de carreira e estou direcionando meu foco para a área de tecnologia.
            <br />
            <br />
            Durante essa jornada, descobri meu amor pelo trabalho voluntário e atualmente faço parte da equipe dos Revisores do Bem. Nessa organização, ajudamos pessoas em situação de vulnerabilidade a se recolocarem no mercado de trabalho. É incrível poder fazer parte desse time e contribuir para mudanças positivas na vida de outras pessoas.
            <br />
            <br />
            Além disso, nas redes sociais, compartilho conhecimentos e resumos de livros que já li. Acredito que a leitura é uma ferramenta poderosa para o desenvolvimento pessoal e profissional, e incentivar outras pessoas a buscar conhecimento é algo que me motiva.
          </p>
        </div>
        <div className={styles.imagemEstilizada}>
          <img src={MinhaImagem} alt="Minha imagem" className="imagem-estilizada"></img>
      </div>
      </div>
    </>
  );
};

export default Sobre;