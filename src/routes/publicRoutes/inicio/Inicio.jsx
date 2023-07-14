import './inicio.css'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import Portada from '../../../components/Portada'
import Banner from '../../../components/Portada/banner'
import { useState, useEffect } from 'react'

const Inicio = () => {
  const [banners, setBanners] = useState([])
  
  const getApiBanners = async () => {
    const all = await fetch(`http://localhost:5174/banners`)
    const data = await all.json()
    return data
  }

  useEffect(() => {
    getApiBanners().then(
      (recor) => {
        if(recor.length === 0) return console.error('No hay banners')
        console.log(recor)
        setBanners(recor)
      }
    ).catch(err => console.error(err))
  }, [])
  return (
    <>
    {banners.map((banner, index) => (
      <Banner key={index} title={banner.title} text={banner.text} color={banner.color} />
    ))}
      <Contenido bgColor="transparent">
        <Portada photoUrl={'https://firebasestorage.googleapis.com/v0/b/juandfe.appspot.com/o/api%2Fv1%2Fpets%2Fdogs%2Fperros1024x1024.jpg?alt=media&token=e629ebfb-f72a-4d8f-b01c-98a989eb4259'}>
          {/* <Banner title={banners[0].title} text={banners[0].text} color={banners[0].color} /> */}
        </Portada>
      </Contenido>
      <Contenido bgColor="white">
        <Contenedor>
          {/* <Banner title={banners[1].title} text={banners[1].text} color={banners[1].color} /> */}
        </Contenedor>
      </Contenido>
      <Contenido bgColor="pink">
        <Contenedor>
          <section className="mascotas">
            {/* <Banner title={banners[0].title} text={banners[0].text} color={banners[0].color} /> */}
            <ul className="cards">
              <li className="card">Perros</li>
              <li>Gatos</li>
              <li>Conejos</li>
              <li>Pajaros</li>
              <li>Reptiles</li>
              <li>Peces</li>
            </ul>
          </section>
        </Contenedor>
      </Contenido>
    </>
  )
}
export default Inicio
