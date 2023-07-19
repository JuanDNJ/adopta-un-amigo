import './header.css'
import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import Navigation from '../Navigation'
import Logo from '../Logo'
import Contenedor from '../Contenedor'
import { useMenuContext } from '../../contexts/menuContext'
import Userwidtget from '../User/UserWidget'
import { useAuthContext } from '../../contexts/authContext'


export default function Header () {

    const { isAuthenticated } = useAuthContext();
    const {close} = useMenuContext();
  
  return (
        <header className="main-header" >
         
            <Contenedor cab={true}>
                <Logo titleWeb="Adopta un amigo">
                    <img src={reactLogo} alt="Logo de empresa" />
                </Logo>
                <Navigation>
                    
                    <Link to="/" onClick={() => close()}>Inicio</Link>
                    <Link to="/about" onClick={() => close()}>Quienes somos?</Link>
                    <Link to="/mascotas" onClick={() => close()}>Mascotas</Link>
                    <Link to="/contact" onClick={() => close()}>Contacto</Link>
                    {!isAuthenticated ? <Link to="/login" onClick={() => close()}>Sign In</Link> : (<>
                        <Userwidtget /> 
                    </>)}
                </Navigation>
            </Contenedor>
          
        </header>
  )
}
