import styles from '../styles/bestSites.module.css'
export default function BestSites(){
    return(
        <div className={styles.bestSites}>
            <h2>Mejores Sitios</h2>

            <span className={styles.region1}>Region1</span>
            <div className={styles.image_region1}>
            </div>

            <span className={styles.region2}>Region2</span>
            <div className={styles.image_region2}>
            </div>

            <span className={styles.region3}>Region3</span>
            <div className={styles.image_region3}>
            </div>

            <span className={styles.region4}>Region4</span>
            <div className={styles.image_region4}>
            </div>

            <span className={styles.region5}>Region5</span>
            <div className={styles.image_region5}>
            </div>

            <span className={styles.region6}>Region6</span>
            <div className={styles.image_region6}>
            </div>
        </div>
    )
}