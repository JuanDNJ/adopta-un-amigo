import styles from './card-pet.module.css'
import { Link } from 'react-router-dom'
const CardPet = ({ pet }) => {
  return (
    <article className={styles.card}>
      <img className={styles.photoUrl} src={'./images/jpg/mascotas/' + pet.photo_url} alt={pet.photo_url ?? 'photo this pet'} />
      <Link to={`/mascota/${pet.pet_id}`}>
        <h3 className={`${styles.tituloSecundario} ${styles.titleCard}`}>{pet.name}</h3>
      </Link>
    </article>
  )
}
export default CardPet
