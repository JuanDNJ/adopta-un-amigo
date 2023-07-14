import './inicio.css'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import Portada from '../../../components/Portada'
import Banner from '../../../components/Portada/banner'
import { useState, useEffect } from 'react'

const Inicio = () => {
  const [frontPages, setFrontPages] = useState([]) // Estado para guardar las portadas

  const getFrontPages = async () => { // Funcion asincrona para obtener las portadas
    const pages = await fetch(`http://localhost:5174/front-pages`) // Fetch para obtener las portadas
    const record = await pages.json() // Convertir a JSON
    return record // Retornar el JSON
  }

  useEffect(() => { // UseEffect se ejecuta despues de que se renderiza el componente
    getFrontPages().then( // Llamar a la funcion asincrona
      (recor) => {
        if (recor.length === 0) return console.error('No hay portadas') // Si no hay portadas, mostrar error
        console.log(recor)
        setFrontPages(recor) // Guardar las portadas en el estado
      }
    ).catch(err => console.error(err)) // Si hay un error, mostrarlo en consola
  }, []) // El arreglo vacio es para que solo se ejecute una vez

  return ( // JSX
    <>
      <Contenido bgColor="transparent">
        {frontPages.map((fPage, index) => (
          <Portada key={index} photoUrl={fPage.photo_url} bg_color={fPage.bg_color}>
            <Banner title={fPage.title} text={fPage.text} textColor={fPage.text_color} titleColor={fPage.title_color}/>
          </Portada>
        ))}
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
