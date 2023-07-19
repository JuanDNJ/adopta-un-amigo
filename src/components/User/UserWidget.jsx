import './userWidget.css'
import { users } from "../../api/api-mysql";
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import Logout from "../Auth/Logout";
const Userwidtget  = () => {
  const [user, setUser] = useState()
  const [isMenuUserToggle, setIsMenuUserToggle] = useState(false)
  
  const handlerClick = (eve) => {
    console.log('click')
    setIsMenuUserToggle(!isMenuUserToggle)
  }
   useEffect(() => {
    users.getProfile().then((res) => {
      console.log(res)
      setUser(res)
    })
    .catch((err) => {
      console.error(err)
    }
    )
  }, [])

  return (
    <section  className='widget'>
     { user 
        ? <div className="user-box" onClick={handlerClick} >
            <h2 className="user-handle" style={{color: user.is_active ? 'skyblue' : 'darkred'}}>{user.user_handle}</h2>
          </div> 
        : ''
     }
    
      <ul className={`menu-widtget ${isMenuUserToggle ? 'menu-toggle' : ''}`}>
        <Link to="/profile">Profile</Link>
        <Logout />
      </ul>
    
    </section>  
  );
}
export default Userwidtget; 