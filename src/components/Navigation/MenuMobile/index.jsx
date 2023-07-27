import styles from './menu-mobile.module.css'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import Menu from '../Menu'
const MenuMobile = () => {
  const [open, setOpen] = useState(false)

  const handlerPortal = () => {
    setOpen(open => !open)
  }
  return (
    <>
    <button className={styles.btnToggle} onClick={handlerPortal} type="button">Menu</button>
    {open && createPortal(
      <section className={styles.menuMobile}>
          <Menu isMenuMobile={true}/>
          <button onClick={handlerPortal} className={styles.close}>X</button>
      </section>
      ,
      document.body,
      'menu-mobile'
    )}</>
  )
}
export default MenuMobile
