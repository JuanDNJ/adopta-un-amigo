import './mascotas.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {getPets} from '../../../api/firebase'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import Titulo from '../../../components/Titulo'


export default function Mascotas () {

  const [pets, setPets] = useState([])

  useEffect(() => {
    getPets()
      .then((data) => setPets(data))
  },[])

  return (
    <Contenido bgColor={'white'}>
      <Contenedor>
        <section className="mascotas">
          <h2 className="titulo-secundario">Mascotas</h2>
          {pets.map((pet) => (
            <Link key={pet.id} to={`/mascota/${pet.id}`}>
              <h1>{pet.name}</h1>
            </Link>
          ))}
        </section>
      </Contenedor>
    </Contenido>
  )
}
