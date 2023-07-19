import './header.css'
import reactLogo from '../../assets/react.svg'
import Navigation from '../Navigation'
import Logo from '../Logo'
import Contenedor from '../Contenedor'

export default function Header() {

    return (
        <header className="main-header" >
            <Contenedor cab={true}>
                <Logo titleWeb="Adopta un amigo">
                    <img src={reactLogo} alt="Logo de empresa" />
                </Logo>
                <Navigation />
            </Contenedor>
        </header>
    )
}
