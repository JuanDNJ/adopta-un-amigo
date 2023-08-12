import './userWidget.css'
import { users } from '../../api/api-mysql'
import { useState, useEffect } from 'react'
import { useMenuContext } from '../../contexts/menuContext'
import { Link } from 'react-router-dom'
import { useStore } from '../../contexts/storeContext'
import Logout from '../Auth/Logout'
import Icono from '../Icono'
import accountCircle from '../../assets/svg/account_circle.svg'
const Userwidtget = () => {

  const { isMenuToggle, toggle } = useMenuContext()
  const [user, setUser] = useState()
  const { closeMenuBars } = useStore(false)

  const handlerClose = () => {
    toggle()
    closeMenuBars()
  }

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
        ?
          <Icono typeBtn="icono">
            <img className='iconoImg' src={accountCircle} onClick={handlerClose} alt="Facebook" title='Facebook' />
          </Icono>
       
        : ''
      }

      <ul className={`menu-widtget ${isMenuToggle ? 'menu-toggle' : ''}`}>
        <Link to="/profile" onClick={handlerClose}>Profile</Link>
        <Logout />
      </ul>

    </section>
  )

}
export default Userwidtget
