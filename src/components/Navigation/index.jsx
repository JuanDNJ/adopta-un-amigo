import styles from './nav.module.css'
import { useStore } from "../../contexts/storeContext"
import { useAuthContext } from "../../contexts/authContext"
import Userwidtget from "../User/UserWidget"
import MenuBars from '../Menu/MenuBars'
import Menu from '../Menu'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
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