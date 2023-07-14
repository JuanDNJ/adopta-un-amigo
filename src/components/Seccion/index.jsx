export default function Seccion ({ children, bColor }) {
  return (
        <section className="seccion" style={{ '--bColor-seccion': bColor }}>
         {children}
        </section>
  )
}
