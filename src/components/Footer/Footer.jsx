import Logo from '../../assets/images/scan-footer-logo.svg'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper header-footer-content">
        <Link to="/"><img src={Logo} alt="header-logo" /></Link>
        <div className={styles.info}>
          <p className={styles.contacts}>г. Москва, Цветной б-р, 40 <br />
            <a href="tel:+74957712111">+7 (495) 771-21-11</a> <br />
            <a href="mailto:info@skan.ru">info@skan.ru</a>
          </p>
          <p className={styles.copy}>
            Copyright. 2023
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer