import './plantilla.css'
export default function Contenido ({ children, bgColor, description }) {
  return (
        <section className={'contenido'} style={{ '--bg-contenido': bgColor }}>
            {children}
        </section>
  )
}
