import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPet} from '../../../api/api-mysql'
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
        <div>
            <h1>Detalles de la mascota {pet.name}</h1>
            <div>El id de la mascota es: {pet.pet_id}</div>
            <div>Categoria: {pet.category}</div>
            <div>Años: {pet.years}</div>
            <img src={pet.photo_url} alt={`Foto mascota`} />
        </div>
  )
}

export default MascotaDetail
