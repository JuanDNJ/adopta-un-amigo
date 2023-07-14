import './portada.css'
const Portada = ({children, photoUrl, bg_color}) => {
  return (
    <section className="portada" style={{'--image-portada' : `url(${photoUrl})`, backgroundColor: bg_color }}>
      {children}
    </section>
  );
}
export default Portada;