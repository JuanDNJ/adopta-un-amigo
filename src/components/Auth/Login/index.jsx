import './login.css'
import { useAuthContext } from '../../../contexts/authContext'
import { Link, Navigate } from 'react-router-dom'

import { authLogin } from '../../../api/api-mysql'
const Login = () => {
  const { login, isAuthenticated } = useAuthContext()

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  const handlerSubmit = (eve) => {
    const { email, password } = eve.target
    eve.preventDefault()

    authLogin(email.value, password.value)
      .then((res) => {
        console.log(res)
        // if (res.status !== 200) {
        //   alert(res)
        // }
        login((res.token))
        // if (res.user && res.user.is_active === 1) {
        //   login((res.token))
        // }
      })
      .catch((err) => console.error(err.message))
  }

  return (
    <section className="form-login">
      <h1>Login</h1>
      <form onSubmit={handlerSubmit}>
        <input type="email" name="email" id="email" placeholder='Insert your email address' />
        <input type="password" name="password" id="password" placeholder='Insert your password' autoComplete="off" />
        <button type="submit">Sign In</button>
      </form>
      <Link className="new-account" to="/new-account">You do not have an account?</Link>

    </section>
  )
}
export default Login
