import {Outlet, Navigate} from 'react-router-dom';
import { useAuthContext } from "../../contexts/authContext";

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuthContext();

    if(!isAuthenticated){
        return <Navigate to="/" />;
    }
  return (
    <section>
        <Outlet />
    </section>
  );
}
export default PrivateRoutes;