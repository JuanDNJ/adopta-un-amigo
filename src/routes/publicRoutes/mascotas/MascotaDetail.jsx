import styles from './mascotas.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPet, getDocPet } from 'API'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
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
    <Contenido>
      <Contenedor>
        <article id={pet.pet_id} className={styles.petDetail}>
          <div className={styles.detail}>
            <img className={styles.photoPetDetail} src={pet.photo_url} alt={`Foto mascota`} />
            <h2 className={styles.namePet}>{pet.name}</h2>
            <p>{pet.description}</p>
            <footer className={styles.footerDetail}>
              <strong>Categoria: {pet.category}</strong>
              <strong>Años: {pet.years}</strong>
            </footer>
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
      </Contenedor>
    </Contenido>
  )
}

export default MascotaDetail
