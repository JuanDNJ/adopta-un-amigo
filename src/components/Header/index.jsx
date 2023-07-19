import './header.css'
import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import Navigation from '../Navigation'
import Logo from '../Logo'
import Contenedor from '../Contenedor'
import Logout from '../Auth/Logout'
import Userwidtget from '../User/UserWidget'
import { useAuthContext } from '../../contexts/authContext'
import { useEffect, useState } from 'react'

export default function Header () {
    let toggle = false
    const { isAuthenticated } = useAuthContext();
 
    const [open, setOpen] = useState();

    const handlerClick = () => {
        setOpen(false)
    }
    const toParent = (string) => {
        console.log(string)
        setOpen(false)
    }

  return (
        <header className="main-header" >
         
            <Contenedor cab={true}>
                <Logo titleWeb="Adopta un amigo">
                    <img src={reactLogo} alt="Logo de empresa" />
                </Logo>
                <Navigation>
                    
                    <Link to="/" onClick={handlerClick}>Inicio</Link>
                    <Link to="/about" onClick={handlerClick}>Quienes somos?</Link>
                    <Link to="/mascotas" onClick={handlerClick}>Mascotas</Link>
                    <Link to="/contact" onClick={handlerClick}>Contacto</Link>
                    <h1 style={{color: 'red'}}>{open}</h1>
                    {!isAuthenticated ? <Link to="/login">Sign In</Link> : (<>
                        <Userwidtget openWidget={open} toParent={toParent}/> 
                       
                    </>)}
                </Navigation>
            </Contenedor>
          
        </header>
  )
}
