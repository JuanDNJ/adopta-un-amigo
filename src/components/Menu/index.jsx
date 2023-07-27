import styles from './menu.module.css'
import { useAuthContext } from '../../contexts/authContext'
import { useStore } from '../../contexts/storeContext'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Userwidtget from '../User/UserWidget'
import { useEffect, useState } from 'react'

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
  const { isOpenMenuBars, closeMenuBars } = useStore(false)
  return (
    <section className={`${styles.menu} ${isMobile ? styles.menuMobile : styles.descktop}`} onClick={closeMenuBars}>
      <Link to="/" >Inicio</Link>
      <Link to="/about" >Quienes somos?</Link>
      <Link to="/mascotas" >Mascotas</Link>
      <Link to="/contact" >Contacto</Link>
      {!isAuthenticated ? <Link to="/login" >Sign In</Link> : <Userwidtget />}
    </section>)
}

const Nav = () => {
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
      <MenuBars />
    </nav>
  )
}
export default Nav
