import styles from './banner.module.css'

const Banner = ({ title, text, textColor, titleColor, fullHeight }) => {
  return (
        <article className={styles.banner} style={{height: fullHeight ? '100vh' : ''}}>
            <h2 className={styles.titleBanner} style={{ color: titleColor }}>{title}</h2>
            <p className={styles.paragraf} style={{ color: textColor }}>
                {text}
            </p>
        </article>
  )
}
export default Banner
