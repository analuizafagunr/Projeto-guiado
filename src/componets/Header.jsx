import styles from '../styles/componets/header.module.css'

const Header = ({ title, image }) => {

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <img className={styles.headerImage} src={image} alt={title} />
    </header>
  )
}

export default Header