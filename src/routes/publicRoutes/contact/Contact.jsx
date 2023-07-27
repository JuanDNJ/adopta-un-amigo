import './contacto.css'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import { Link } from 'react-router-dom'
export default function Contact () {
  const handlerSubmit = (eve) => {
    eve.preventDefault()
    const { email, affair, first_name, message } = eve.target
    console.log({ email: email.value, affair: affair.value, first_name: first_name.value, message: message.value })
    alert('Mensaje enviado correctamente')
  }

  return (
    <Contenido bgColor={'white'}>
      <Contenedor>
        <section className="contacto">
          <article className="contact-info">
            <h2>Ponte en contacto con nosotros</h2>
            <p>
              Si tienes alguna pregunta, comentario o inquietud,
              por favor utiliza el formulario de contacto a
              continuación para ponerte en contacto con nosotros.
              También puedes llamarnos o enviarnos un correo
              electrónico utilizando los datos de contacto proporcionados
            </p>
          </article>
          <form id="form-contact" onSubmit={handlerSubmit}>
            <input type="text" name="first_name" placeholder="Insert your first name" required />
            <input type="text" name="email" placeholder="Insert your Email" required />
            <input type="text" name="affair" placeholder="Affair ..." required />
            <textarea name="message" placeholder="Message ..." rows={10} required></textarea>
            <button className="btn-send" type="submit">Send message</button>
          </form>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </section>
      </Contenedor>
    </Contenido>
  )
}
