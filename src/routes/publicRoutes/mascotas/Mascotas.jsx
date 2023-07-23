import './mascotas.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {getPets, searchPets, selectCatetory} from '../../../api/api-mysql'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import CardPet from './components/CardPet'


export default function Mascotas () {

  const [pets, setPets] = useState([])
 const handleSearch = (e) => {
    console.log(e.target.value)
    searchPets(e.target.value)
    .then((data) => {
      if(data.length > 0){
        setPets(data)
      }
    })
    .catch((error) => console.log(error))
  }
  const hanfdlerChangeSelect = (e) => {
    console.log(e.target.value)
    if(e.target.value === 'all'){
      getPets()
      .then((data) => setPets(data))
      .catch((error) => console.log(error))
    }else{
      selectCatetory(e.target.value)
      .then((data) => setPets(data))
      .catch((error) => console.log(error))
    }
  }

  useEffect(() => {
    getPets()
      .then((data) => setPets(data))
  },[])

  return (
    <Contenido bgColor={'white'}>
      <Contenedor>
        <section className="contenido">
          <aside className='filter-pets'>
            <input onInput={handleSearch} type="search" name="search" id="search" placeholder='Search'/>
            <select name="category" id="category" onChange={hanfdlerChangeSelect}>
              <option value="all">All</option>
              <option value="dogs">Dog</option>
              <option value="cats">Cat</option>
              <option value="birds">Bird</option>
              <option value="rodents">Rodents</option>
              <option value="fish">Fish</option>
              <option value="reptiles">Reptiles</option>
            </select>
          </aside>
          <section className="mascotas">
            <h2 className="titulo-secundario">Mascotas</h2>
            {pets.map((pet) => <CardPet pet={pet}/>)}
          </section>
        </section>
      </Contenedor>
    </Contenido>
  )
}
