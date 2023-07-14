import './contacto.css'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import Titulo from '../../../components/Titulo'

export default function Contact () {
  return (
   <Contenido bgColor={'white'}>
     <Contenedor>
      <section className="contacto">
        <Titulo texto="Contacto" lvlOne colorH1="var(--color-secundario)" />
      </section>
    </Contenedor>
   </Contenido>
  )
}
