import './userWidget.css'
import { users } from '../../api/api-mysql'
import { useState, useEffect } from 'react'
import { useMenuContext } from '../../contexts/menuContext'
import { Link } from 'react-router-dom'
import Logout from '../Auth/Logout'
const Userwidtget = () => {
  const { isMenuToggle, toggle } = useMenuContext()
  const [user, setUser] = useState()

  useEffect(() => {
    users.getProfile().then((res) => {
      // console.log(res)
      setUser(res)
    })
      .catch((err) => {
        console.error(err)
      }
      )
  }, [isMenuToggle])

  return (
    <section className='widget'>
      {user
        ? <div className="user-box" onClick={() => toggle()} >
          <h2 className="user-handle" style={{ color: user.is_active ? 'skyblue' : 'darkred' }}>{user.user_handle}</h2>
        </div>
        : ''
      }

      <ul className={`menu-widtget ${isMenuToggle ? 'menu-toggle' : ''}`}>
        <Link to="/profile" onClick={() => toggle()}>Profile</Link>
        <Logout />
      </ul>

    </section>
  )
}
export default Userwidtget
