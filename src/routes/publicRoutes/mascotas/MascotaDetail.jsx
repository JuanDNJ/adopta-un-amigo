import styles from './mascotas.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPet, getDocPet } from 'API'

import { useState } from 'react'

const MascotaDetail = () => {
  const { mascota_id } = useParams()
  const [pet, setPet] = useState({})
  const [doc, setDoc] = useState({})

  useEffect(() => {
    getPet(mascota_id)
      .then((data) => {
        console.log(data)
        setPet(data)
      })
      .catch((error) => console.log(error))
    getDocPet(mascota_id)
      .then((data) => {
        console.log(data)
        setDoc(data)
      }).
      catch((error) => console.log(error))
  }, [])

  return (

    <article id={pet.pet_id} className={styles.petDetail}>
      <div>
        <h1>Detalles de la mascota {pet.name}</h1>
        <div>Categoria: {pet.category}</div>
        <div>Años: {pet.years}</div>
        <img className={styles.photoPet} src={pet.photo_url} alt={`Foto mascota`} />
      </div>
      <div className={styles.docPet}>
        {doc && doc.idDocPet ?
          <>
            <strong>Desparasitado: {doc.dewormed ? 'Si' : 'No'}</strong>
            <strong>Veterinario: {doc.idVet}</strong>
            <strong>Vacunado: {doc.vaccinated ? 'Si' : 'No'}</strong>
            <strong>Pedigree: {!doc.pedigrees ? 'No' : 'Si'}</strong>
            <strong>Observaciones:</strong> <br /> <p>{doc.observations}</p>
          </>

          : <strong>No hay documentación de la mascota</strong>
        }
      </div>
    </article>

  )
}

export default MascotaDetail
