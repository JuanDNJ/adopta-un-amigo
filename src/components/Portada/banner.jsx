import Paragraf from '../Paragraf';
import './banner.css'

const Banner = ({ title, text, textColor, titleColor }) => {
    return (
        <article className="banner">
            <h2 className='title-banner' style={{color: titleColor}}>{title}</h2>
            <p className="paragraf" style={{color: textColor}}>
                {text}
            </p>
            {/* <Paragraf className="paragraf" color={paragraf.color} fSize={paragraf.fSize} tAlign={paragraf.tAlign}>
                
            </Paragraf> */}
        </article>
    );
}
export default Banner;