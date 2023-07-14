import './paragraf.css'
const Paragraf = ({ color, fSize, tAlign, children}) => {
  return (
    <p 
   
    style={{
        color,
        fontSize: fSize, 
        textAlign: tAlign
    }} >
        {children}
    </p>
  );
}
export default Paragraf;
