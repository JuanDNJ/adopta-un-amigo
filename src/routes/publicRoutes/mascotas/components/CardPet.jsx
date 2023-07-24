import { Link } from 'react-router-dom'
const CardPet = ({ pet }) => {
  return (
    <article className="card">
      <img className='photo_url' src={pet.photo_url} alt={pet.photo_url ?? 'photo this pet'} />
      <Link to={`/mascota/${pet.pet_id}`}>
        <h3 className='titulo-secundario title-card'>{pet.name}</h3>
      </Link>
    </article>
  );
}
export default CardPet;