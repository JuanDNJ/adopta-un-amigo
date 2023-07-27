import './navigation.css'
import MenuMobile from './MenuMobile'
import Menu from './Menu'
const Navigation = ({ children }) => {

  return (
    <>
      <nav className="navigation">
        <Menu />
      </nav>
      <MenuMobile />
    </>
  )
}

export default Navigation
