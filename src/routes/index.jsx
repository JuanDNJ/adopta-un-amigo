import '../assets/css/routes.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { UseStore } from '../contexts/storeContext'
// Pages or Routes
import About from './publicRoutes/about/About'
import Inicio from './publicRoutes/inicio/Inicio'
import Contact from './publicRoutes/contact/Contact'
import Mascotas from './publicRoutes/mascotas/Mascotas'
import MascotaDetail from './publicRoutes/mascotas/MascotaDetail'
import Profile from './privateRoutes/Profile'
import PublicRoutes from './publicRoutes'
import PrivateRoutes from './privateRoutes'

// Components
import Header from '../components/Header'
import Login from '../components/Auth/Login'

import NewAccount from '../components/Auth/NewAccount'
// export APP
export default function App () {
  return (
    <UseStore>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route index element={<Inicio />} />
            <Route path="/home" element={<Inicio />} />
            <Route path="/about" element={<About />} />
            <Route path="/mascota/:mascota_id" element={<MascotaDetail />} />
            <Route path="/mascotas" element={<Mascotas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-account" element={<NewAccount />} />
          </Route>
          <Route path="/profile" element={<PrivateRoutes />}>
            <Route index element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UseStore>
  )
}
