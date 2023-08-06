import { useEffect } from 'react';
import styles from './icono.module.css';
import { useState } from 'react';
const Icono = ({ typeBtn, children }) => {


    const [style, setStyle] = useState(styles.btn)

    useEffect(() => {
        if (typeBtn === "icono") setStyle(styles.icono)
        if (typeBtn === "button") setStyle(styles.btn)
        if (typeBtn === "submit") setStyle(styles.submit)
    }, [])


    return (
        <button className={style} type={typeBtn === "submit" ? typeBtn : 'button'}>{children}</button>
    );
}
export default Icono;