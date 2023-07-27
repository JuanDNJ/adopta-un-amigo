import './titulo.css'
export default function Titulo (props) {
  const { texto, lvlOne, lvlTwo, lvlThree, lvlFour, lvlFive, lvlSix, colorH1, colorH2, colorH3, colorH4, colorH5, colorH6, classNameTitulo } = props

  return <>
            {lvlOne && <h1 className="levelOne" style={{ '--color-lvl-1': colorH1 ?? '--color-titulo-nivel-1' }}>{texto}</h1>}
            {lvlTwo && <h2 className={`levelTwo ${classNameTitulo}`} style={{ '--color-lvl-2': colorH2 ?? '-color-titulo-nivel-2' }}>{texto}</h2>}
            {lvlThree && <h3 className="levelThree" style={{ '--color-lvl-3': colorH3 ?? '-color-titulo-nivel-3' }}>{texto}</h3>}
            {lvlFour && <h4 className="levelFour" style={{ '--color-lvl-4': colorH4 ?? '-color-titulo-nivel-4' }}>{texto}</h4>}
            {lvlFive && <h5 className="levelFive" style={{ '--color-lvl-5': colorH5 ?? '-color-titulo-nivel-5' }}>{texto}</h5>}
            {lvlSix && <h6 className="levelSix" style={{ '--color-lvl-6': colorH6 ?? '-color-titulo-nivel-6' }}>{texto}</h6>}
            {!lvlOne && !lvlTwo && !lvlThree && !lvlFour && !lvlFive && !lvlSix && <h1 className="levelOne" style={{ '--color-lvl-1': colorH1 ?? '--color-titulo-nivel-1' }}>{texto}</h1>}
    </>
}
