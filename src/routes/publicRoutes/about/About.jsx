import './about.css'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'

export default function About () {
  return (
        <Contenido bgColor="white">
            <Contenedor>
                <section className="about">
                    <article>
                        <h2 className="titulo-secundario">Quienes somos?</h2>
                        <p>
                            Las protectoras de animales son asociaciones sin
                            ánimo de lucro que se dedican a la protección
                            y defensa de los animales.
                        </p>
                    </article>
                    <article>
                    <h2 className="titulo-secundario">Entre sus funciones se encuentran: </h2>
                    <ul className='list-functions'>

                        <li>Rescatar animales abandonados o en peligro.</li>
                        <li>Mantener y cuidar a los animales.</li>
                        <li>Garantizar condiciones de salubridad.</li>
                        <li>Fomentar las adopciones entre los ciudadanos.</li>
                        <li>Educar a los animales.</li>
                        <li>Interponer denuncias por maltrato animal.</li>
                        <li>Ofrecer alimentos y cuidados veterinarios a las mascotas.</li>
                        <li>Ofrecer animales en adopción esterilizados, vacunados, desparasitados y con microchip de identificación</li>
                    </ul>
                    </article>
                </section>
            </Contenedor>
        </Contenido>
  )
}
