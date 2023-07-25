import { Link } from "react-router-dom";
import { useMenuContext } from '../../../contexts/menuContext'
import { useAuthContext } from '../../../contexts/authContext'
import Userwidtget from "../../User/UserWidget";
const Menu = () => {
    const { close } = useMenuContext()
    const { isAuthenticated } = useAuthContext()
    return (
        <section className="menu">
            <Link to="/" onClick={() => close()}>Inicio</Link>
            <Link to="/about" onClick={() => close()}>Quienes somos?</Link>
            <Link to="/mascotas" onClick={() => close()}>Mascotas</Link>
            <Link to="/contact" onClick={() => close()}>Contacto</Link>
            {!isAuthenticated ? <Link to="/login" onClick={() => close()}>Sign In</Link> : (<>
                <Userwidtget />
            </>)}
        </section>
    );
}
export default Menu;