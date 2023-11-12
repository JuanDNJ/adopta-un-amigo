import './about.css'
import { useState, useEffect } from 'react'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import { getVets } from '../../../api/vets'
import Vet from './Vet';
import Titulo from '../../../components/Titulo'
const About = () => {

    const [allVets, setAllVets] = useState([]);

    useEffect(() => {
        getVets()
            .then((data) => setAllVets(data));
    }, []);

    const renderVets = allVets.map((vet) => {
        return (<Vet key={vet.idVet} vet={vet} />)
    })
    const custom = {
        textAlign: 'center',
        color: 'gray',
        padding: '80px 0px 60px 0px',
    }
    return (
        <Contenido bgColor="white">
            <Contenedor>
                <section className="about">
                    <article>
                        <Titulo customStyle={custom} lvlTwo={true} texto="Quienes somos?" />
                        <p>
                            Las protectoras de animales son asociaciones sin
                            ánimo de lucro que se dedican a la protección
                            y defensa de los animales.
                        </p>
                    </article>
                    <article>
                        <Titulo customStyle={custom} lvlTwo={true} texto="Entre sus funciones se encuentran:" />
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
                    <article className='vets'>
                        <Titulo customStyle={custom} lvlTwo={true} texto="Veterinari@s" />
                        {/* <h2 className="titulo-secundario">Veterinari@s</h2> */}
                        <div className="listVets">
                            {renderVets}
                        </div>
                    </article>
                </section>
            </Contenedor>
        </Contenido>
    )
}


export default About;