import styles from './vet.module.css';
const PUBLIC_IMAGES = './images/jpg/veterinarios/';
const STRING_ALT = 'Foto de ';
const Vet = ({ vet }) => {

    return (
        <div className={styles.vet} >
            <img
                src={`${PUBLIC_IMAGES}${vet.photoUrl}`}
                className={styles.photoVet}
                alt={`${STRING_ALT}${vet.name}`}
                title={`${STRING_ALT}${vet.name}`}
            />
            <div className={styles.body}>
                <strong>{vet.name}</strong>
                <p className={styles.description}>
                    {vet.description}
                </p>
            </div>
        </div>
    );
}

export default Vet;