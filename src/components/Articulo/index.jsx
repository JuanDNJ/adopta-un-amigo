import './articulo.css'
export default function Articulo (props) {
  const { pet } = props
  return (
        <article key={pet.id} className="articulo">
            <h2>{pet.name}</h2>
            <img src={pet.photoURL} className="max-width-256" alt={ 'Photo this pet ' + pet.name} />
            <p>
                {pet.description}
            </p>
        </article>
  )
}
