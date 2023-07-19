import './header.css'
import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import Navigation from '../Navigation'
import Logo from '../Logo'
import Contenedor from '../Contenedor'
import Logout from '../Auth/Logout'
import { useAuthContext } from '../../contexts/authContext'
export default function Header () {
    const { isAuthenticated } = useAuthContext();
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
                    {isAuthenticated ? <Link to="/profile">Perfil</Link> : ''}
                    {!isAuthenticated ? <Link to="/login">Sign In</Link> : <Logout />}
                </Navigation>
            </Contenedor>
          
        </header>
  )
}
