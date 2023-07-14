import './header.css'
import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import Navigation from '../Navigation'
import Logo from '../Logo'
import Contenedor from '../Contenedor'
export default function Header () {
  return (
        <header className="main-header">
         
            <Contenedor cab={true}>
                <Logo titleWeb="Adopta un amigo">
                    <img src={reactLogo} alt="Logo de empresa" />
                </Logo>
                <Navigation>
                    <Link to="/">Inicio</Link>
                    <Link to="/about">Quienes somos?</Link>
                    <Link to="/mascotas">Mascotas</Link>
                    <Link to="/contact">Contacto</Link>
                </Navigation>
            </Contenedor>
          
        </header>
  )
}
