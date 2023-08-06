import styles from './header.module.css'
import reactLogo from '@/assets/react.svg'
import Icono from '../Icono'
import Nav from '../Navigation'
import Logo from '../Logo'
import Contenedor from '../Contenedor'
import facebook from '@/assets/svg/facebook.svg'
import accountCircle from '@/assets/svg/account_circle_FILL0_wght400_GRAD0_opsz48.svg'
export default function Header() {
    return (
        <header className={styles.mainHeader} >
            <Contenedor cab={true}>
                <Logo titleWeb="Adopta un amigo">
                    <img src={reactLogo} alt="Logo de empresa" />
                    <Icono typeBtn="icono">
                        <img className='iconoImg' src={accountCircle} alt="Facebook" title='Facebook' />
                    </Icono>
                    <Icono typeBtn="icono">
                        <img className='iconoImg' src={facebook} alt="Facebook" title='Facebook' />
                    </Icono>
                   
                </Logo>
                <Nav />
                {/* <Navigation /> */}
            </Contenedor>
        </header>
    )
}
