import styles from './titulo.module.css'

const Titulo = (props) => {
  const { customStyle, texto, lvlOne, lvlTwo, lvlThree, lvlFour, lvlFive, lvlSix } = props
  return <>
    {lvlOne && <h1 styles={customStyle} className={styles.lvlOne}>{texto}</h1>}
    {lvlTwo && <h2 style={customStyle} className={styles.lvlTwo}>{texto}</h2>}
    {lvlThree && <h3 style={customStyle} className={styles.lvlThree}>{texto}</h3>}
    {lvlFour && <h4 style={customStyle} className={styles.lvlFour}>{texto}</h4>}
    {lvlFive && <h5 style={customStyle} className={styles.lvlFive}>{texto}</h5>}
    {lvlSix && <h6 style={customStyle} className={styles.lvlSix}>{texto}</h6>}
    {!lvlOne && !lvlTwo && !lvlThree && !lvlFour && !lvlFive && !lvlSix && <h1 style={customStyle} className={styles.lvlOne}>{texto}</h1>}
  </>
}

export default Titulo;