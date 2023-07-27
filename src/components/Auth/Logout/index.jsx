import { useAuthContext } from '../../../contexts/authContext'
const Logout = () => {
  const { logout } = useAuthContext()

  const handlerClick = () => {
    logout()
  }

  return (
    <button type="button" onClick={handlerClick}>Sign Out</button>
  )
}
export default Logout
