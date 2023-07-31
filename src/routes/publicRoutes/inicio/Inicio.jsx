import './inicio.css'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import Portada from '../../../components/Portada'
import Banner from '../../../components/Portada/components/Banner/banner'
import moock from '../../../api/moock.json'

import { getFrontPages, getBanners } from '../../../api/api-mysql'
import { useState, useEffect } from 'react'

const Inicio = () => {
  const moockFrontPages = moock.frontPages
  const [frontPages, setFrontPages] = useState(moockFrontPages) // Estado para guardar las portadas

  const pageACtive = frontPages.map((fPage, index) => {
    if (fPage.active === 0) {
      return (
        <strong>No tenemos ningun front page activo</strong>
      )
    } else {
      return (
        <Contenido key={fPage.front_id} bgColor="transparent">
          <Portada  photoUrl={fPage.photo_url} bg_color={fPage.bg_color}>
            <Banner title={fPage.title} text={fPage.text} textColor={fPage.text_color} titleColor={fPage.title_color} />
          </Portada>
        </Contenido>
      )
    }

  })

  const [banners, setBanners] = useState([]) // Estado para guardar los banners

  const allBanners = banners.map((banner, index) => (
    <Contenido key={banner.banner_id} bgColor="white">
      <Contenedor>
        <Banner fullHeight title={banner.title} text={banner.text} textColor={banner.text_color} titleColor={banner.title_color} />
      </Contenedor>
    </Contenido>

  ))

  useEffect(() => { // UseEffect se ejecuta despues de que se renderiza el componente
    getFrontPages().then( // Llamar a la funcion asincrona
      (recor) => {
        if (recor.length === 0) throw new Error('Error de servidores')
        setFrontPages(recor) // Guardar las portadas en el estado
      }
    ).catch(err => {
      console.error(err.message)
    }) // Si hay un error, mostrarlo en consola
    getBanners().then(record => {
      setBanners(record)
    })

  }, []) // El arreglo vacio es para que solo se ejecute una vez

  return ( // JSX
    <>
      {pageACtive}
      {allBanners}
    </>
  )
}
export default Inicio
