import styles from './menu.module.css'
import { useAuthContext } from '../../contexts/authContext'
import { useStore } from '../../contexts/storeContext'
import { Link } from 'react-router-dom'
import { useMenuContext } from '../../contexts/menuContext'
import Icono from '../Icono'
import login from '../../assets/svg/login.svg'

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
      {!isAuthenticated && <Link to="/login" onClick={() => close()}>
        <Icono typeBtn="icono">
          <img className='iconoImg' src={login} alt="logout" title='Facebook' />
        </Icono>
        </Link>}
    </section>)
}


export default Menu
