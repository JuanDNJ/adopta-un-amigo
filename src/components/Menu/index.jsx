import styles from './menu.module.css'
import { useAuthContext } from '../../contexts/authContext'
import { useStore } from '../../contexts/storeContext'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Userwidtget from '../User/UserWidget'

export const MenuBars = () => {
  const { toggleMenuBars } = useStore()
  return (
        <section className={styles.menuBars}>
            <div className={styles.bars} onClick={() => toggleMenuBars()}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </section>
  )
}

export const Menu = ({ isMobile }) => {
  const { isAuthenticated } = useAuthContext()

  return (
        <section className={`${styles.menu} ${isMobile ? styles.menuMobile : styles.descktop}`}>
            <Link to="/" >Inicio</Link>
            <Link to="/about" >Quienes somos?</Link>
            <Link to="/mascotas" >Mascotas</Link>
            <Link to="/contact" >Contacto</Link>
            {!isAuthenticated ? <Link to="/login" >Sign In</Link> : <Userwidtget />}
        </section>)
}

const Nav = () => {
  const { isOpenMenuBars } = useStore(false)
  return (
        <nav className={styles.navigation} >
            {(isOpenMenuBars && createPortal(<Menu isMobile={isOpenMenuBars} />, document.body, 'menu')) || (<Menu isDescktop={true} />)}
            <MenuBars />
        </nav>
  )
}
export default Nav
