import styles from './menu-mobile.module.css'
import { useAuthContext } from '../../../contexts/authContext'
const MenuMobile = () => {
    const { isAuthenticated } = useAuthContext()
  return (
    <button className={styles.btnToggle} type="button">Menu</button>
  );
}
export default MenuMobile;