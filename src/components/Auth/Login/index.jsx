import {useAuthContext} from '../../../contexts/authContext';
import {useState, useEffect} from 'react';
import { MAGIC_WORD } from '../../../consts';

const Login = () => {
  const {login} = useAuthContext();
  const [magicWord, setMagicWord] = useState('');
  


  const handleInputChange = (e) => setMagicWord(e.target.value);
  const handlerSubmit = (eve) => {
    eve.preventDefault();
    if(magicWord === MAGIC_WORD){
      login();
    }
    
  }

  return (
   <section className="form-login">
      <h1>Login</h1>
      <form onSubmit={handlerSubmit}>
          <input type="text" name="magicWord" placeholder="Enter de magic word" value={magicWord} onChange={handleInputChange} />
          <button type="submit">Login</button>
      </form>
   </section>
  );
}
export default Login;