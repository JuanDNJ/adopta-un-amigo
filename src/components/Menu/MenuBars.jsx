import styles from './menu.module.css'
import { useStore } from '../../contexts/storeContext'
import { useMenuContext } from '../../contexts/menuContext'
export const MenuBars = () => {
  
    const { toggleMenuBars } = useStore()
    const { close } = useMenuContext()
    return (
      <section className={styles.menuBars} onClick={() => close()}>
        <div className={styles.bars} onClick={() => toggleMenuBars()}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </section>
    )
  }

  export default MenuBars