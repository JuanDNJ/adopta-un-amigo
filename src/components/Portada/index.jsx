import './portada.css'
const Portada = ({children, photoUrl}) => {
  return (
    <section className="portada" style={{'--image-portada' : `url(${photoUrl})` }}>
      {children}
    </section>
  );
}
export default Portada;