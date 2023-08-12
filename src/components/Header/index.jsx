import styles from './header.module.css'
import Nav from '../Navigation'
import Logo from '../Logo'
import Contenedor from '../Contenedor'
import menu_huella from '@/assets/svg/menu_huella.svg'

export default function Header() {
    return (
        <header className={styles.mainHeader} >
            <Contenedor cab={true}>
                <Logo titleWeb="Adopta un amigo">
                    <img src={menu_huella} alt="Logo de empresa" />
                </Logo>
                <Nav />
            </Contenedor>
        </header>
    )
}
