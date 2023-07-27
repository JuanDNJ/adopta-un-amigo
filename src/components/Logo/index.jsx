import './logo.css'

const Logo = ({ titleWeb, children }) => (
    <section className="logo">
        <h1 className="titulo-web">{titleWeb ?? 'Adopta un amigo'}</h1>
        {children}
    </section>
);

export default Logo
