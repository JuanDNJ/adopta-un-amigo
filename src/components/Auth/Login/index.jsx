import './login.css'
import {useAuthContext} from '../../../contexts/authContext';
import { Link } from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { MAGIC_WORD } from '../../../consts';
import { useAuthLogin } from '../../../api/api-mysql';
const Login = () => {
  const {login, isAuthenticated} = useAuthContext();
  const [magicWord, setMagicWord] = useState('');
  
  if(isAuthenticated){
    return <Navigate to="/" />;
  }

  const handleInputChange = (e) => setMagicWord(e.target.value);
  const handlerSubmit = (eve) => {
    const {email, password} = eve.target;
    eve.preventDefault();
    // if(magicWord === MAGIC_WORD){
    //   login();
    // }
    useAuthLogin(email.value, password.value)
    .then((res) => {
      console.log(res);
      if(res.is_active === 1){
        login();  
      }
      
    })
    .catch((err) => console.error(err.message))
    
  }

  return (
   <section className="form-login">
      <h1>Login</h1>
      <form onSubmit={handlerSubmit}>
        <input type="email" name="email" id="email" placeholder='Insert your email address' />
        <input type="password" name="password" id="password" placeholder='Insert your password' />
        <button type="submit">Sign In</button>
      </form>
      <Link className="new-account" to="/new-account">You do not have an account?</Link>
      
   </section>
  );
}
export default Login;