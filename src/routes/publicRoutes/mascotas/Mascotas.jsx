import styles from './mascotas.module.css'
import { useEffect, useState } from 'react'
import {  getPets } from '../../../api/api-mysql'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import CardPet from './components/CardPet/CardPet'
import FilterPets from './components/Forms/Filter'

export default function Mascotas() {
  const [pets, setPets] = useState([])

  const search = (data) => {
    setPets(data)
  }
 const selectCat = (data) => {
   setPets(data)
 }

  const allPets = pets.map((pet) => <CardPet key={pet.pet_id} pet={pet} />)

  useEffect(() => {
    getPets()
      .then((data) => setPets(data))
   
  }, [])

  return (

    <Contenido bgColor={'white'}>
      <Contenedor>
        <section className={styles.contenido}>
          <aside className={styles.filterPets}>
            <FilterPets search={search} selectCat={selectCat} />
          </aside>
          <section className={styles.mascotas}>
            <h2 className={styles.tituloSecundario}>Mascotas</h2>
            {allPets}
          </section>
        </section>
      </Contenedor>
    </Contenido>
    
  )

}
