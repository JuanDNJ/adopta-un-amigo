import styles from './header.module.css'
import reactLogo from '../../assets/react.svg'
// import Navigation from '../Navigation'
import Nav from '../Menu'
import Logo from '../Logo'
import Contenedor from '../Contenedor'

export default function Header () {
  return (
        <header className={styles.mainHeader} >
            <Contenedor cab={true}>
                <Logo titleWeb="Adopta un amigo">
                    <img src={reactLogo} alt="Logo de empresa" />
                </Logo>
                <Nav />
                {/* <Navigation /> */}
            </Contenedor>
        </header>
  )
}
