import './contenedor.css'

const Contenedor = ({ children, cab }) => {
  return (
        <section className={`contenedor ${cab ? 'contenedor-cabecera' : ''}`}>
            {children}
        </section>
  )
}

export default Contenedor
