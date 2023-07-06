import Header from "../componets/Header"


import home from '../assets/home.svg'



import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        title="Site da Ana " 
        image={home} 
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>"Sou uma entusiasta da programação, apaixonada por criar e resolver problemas. Minhas aventuras incluem criar um aplicativo e explorar áreas como inteligência artificial e blockchain. Estou sempre em busca de conhecimento e ansiosa para ver onde essa jornada me levará!" </p>
        </div>
        <div className={styles.cardContainer}>
         
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>"Ao longo dos meus estudos em programação, aprendi muito e coloquei em prática o que aprendi em diversos projetos. Meu portfólio destaca alguns desses projetos, demonstrando minhas habilidades e minha paixão pelo desenvolvimento." </p>
        </div>
        <div className={styles.cardContainer}>
      
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>"Fique à vontade para entrar em contato comigo! Estou disponível tanto para entrevistas de emprego quanto para trocar ideias e conhecimentos sobre estudos. Vamos nos conectar e explorar oportunidades profissionais e intelectuais juntos!".</p>
        </div>
      </div>
      
    </>
  )
}

export default Home