import styles from './menu.module.css'
import { useAuthContext } from '../../contexts/authContext'
import { useStore } from '../../contexts/storeContext'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Userwidtget from '../User/UserWidget'
import { useEffect, useState } from 'react'
import { useMenuContext } from '../../contexts/menuContext'
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
  const { close } = useMenuContext()
  const { closeMenuBars } = useStore(false)

  return (
    <section className={`${styles.menu} ${isMobile ? styles.menuMobile : styles.descktop}`} onClick={() => closeMenuBars()}>
      <Link to="/" onClick={() => close()}>Inicio</Link>
      <Link to="/about" onClick={() => close()}>Quienes somos?</Link>
      <Link to="/mascotas" onClick={() => close()}>Mascotas</Link>
      <Link to="/contact" onClick={() => close()}>Contacto</Link>
      {!isAuthenticated && <Link to="/login" onClick={() => close()}>Sign In</Link>}
    </section>)
}

const Nav = () => {

  const { isAuthenticated } = useAuthContext()
  const { isOpenMenuBars, closeMenuBars } = useStore(false)
  useEffect(() => {
    closeMenuBars()
    window.addEventListener('resize', closeMenuBars)
    return () => window.removeEventListener('resize', closeMenuBars)
  }, [])
  return (
    <nav className={styles.navigation} >
      {
        (
          isOpenMenuBars
          && createPortal(<Menu isMobile={isOpenMenuBars} />, document.body, 'menu')
        )
        || (
          <Menu isMobile={false} />
        )
      }
      {isAuthenticated && <Userwidtget />}
      <MenuBars />
    </nav>
  )
}
export default Nav
