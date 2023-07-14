import { useParams } from 'react-router-dom'

const MascotaDetail = () => {
  const { id } = useParams()
  return (
        <div>
            <h1>Mascota Detail</h1>
            <p>El id de la mascota es: {id}</p>
        </div>
  )
}

export default MascotaDetail
