import styles from './menu.module.css'
import { useStore } from '../../contexts/storeContext'

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

  export default MenuBars