import styles from './mascotas.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPet} from 'API'
import { useState } from 'react'
const MascotaDetail = () => {
  const { mascota_id } = useParams()
  const [pet, setPet] = useState({})

  useEffect(() => {
    getPet(mascota_id)
      .then((data) => {
        console.log(data)
        setPet(data)
      })
      .catch((error) => console.log(error))
  }, [])
  
  return (
        <article id={pet.pet_id} className={styles.petDetail}>
            <h1>Detalles de la mascota {pet.name}</h1>
            <div>Categoria: {pet.category}</div>
            <div>Años: {pet.years}</div>
            <img src={pet.photo_url} alt={`Foto mascota`} />
        </article>
  )
}

export default MascotaDetail
