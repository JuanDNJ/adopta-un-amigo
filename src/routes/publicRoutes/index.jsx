import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

const PublicRoutes = () => {

  return (
    <section>
      <Outlet />
    </section>
  );
}
export default PublicRoutes;