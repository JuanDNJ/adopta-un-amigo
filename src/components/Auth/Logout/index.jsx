import { useAuthContext } from "../../../contexts/authContext";
const Logout = () => {
const { logout, isAuthenticated } = useAuthContext();
  if(!isAuthenticated){
    return <Navigate to="/" />;
  }
  const handlerClick = () => {
    logout();
  }
  handlerClick();
  return (
    <button type="button" onClick={handlerClick}>Sign Out</button>
  );
}
export default Logout;