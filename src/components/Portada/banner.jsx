import Paragraf from '../Paragraf';
import './banner.css'

const Banner = ({ title, text, color }) => {
    return (
        <article className="banner">
            <h2 className='title-banner'>{title}</h2>
            <p className="paragraf" style={{color}}>
                {text}
            </p>
            {/* <Paragraf className="paragraf" color={paragraf.color} fSize={paragraf.fSize} tAlign={paragraf.tAlign}>
                
            </Paragraf> */}
        </article>
    );
}
export default Banner;