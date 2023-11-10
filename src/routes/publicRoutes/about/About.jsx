import './about.css'
import { useState, useEffect } from 'react'
import Contenido from '../../../components/Contenido'
import Contenedor from '../../../components/Contenedor'
import { getVets } from '../../../api/vets'

export default function About() {

    const [allVets, setAllVets] = useState([]);
    useEffect(() => {
        getVets()
            .then((data) => setAllVets(data.vets));
    }, []);
    // const { message, vets } = allVets
    // console.log(allVets.map((vet, i) => console.log(vet)))
    // vets.map((vet) => { console.log(vet) })
    const renderVets = allVets.map((vet) => {
        return (
            <div className='vet' key={vet.idVet}>
                <img src={'./images/jpg/' + vet.photoUrl} className='photoVet' alt={`Foto de ${vet.name}`} title={`Foto de ${vet.name}`} />
                <strong>{vet.name}</strong>
            </div>
        )
    })

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
                    <article className='vets'>
                        <h2 className="titulo-secundario">Veterinarios</h2>
                        <div className="listVets">
                            {renderVets}
                            {/* <div className='vet'>
                                <img src="#" className='photoVet' alt="Photo veterinari@" />
                                <strong>Emilio Santacruz</strong>
                            </div>
                            <div className='vet'>
                                <img src="#" className='photoVet' alt="Photo veterinari@" />
                                <strong>Erika Peterson</strong>
                            </div>
                            <div className='vet'>
                                <img src="#" className='photoVet' alt="Photo veterinari@" />
                                <strong>Ebaristo Hernandez</strong>
                            </div>
                            <div className='vet'>
                                <img src="#" className='photoVet' alt="Photo veterinari@" />
                                <strong>Mª Angeles Ortiz</strong>
                            </div> */}
                        </div>
                    </article>
                </section>
            </Contenedor>
        </Contenido>
    )
}
