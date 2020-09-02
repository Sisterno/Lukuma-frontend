import styles from './MostVisitedDestinationCard.module.css'

export default function MostVisitedDestinationCard(
    {
        id=1,
        experience='lorem',
        region='lorem',
        image='uamantay.jpg'
    },
){
    return(
        <div className={styles.mostVisitedCard}>
            <div className={styles.father}>
                <img className={styles.mostVisitedCard_img} src={image}></img>
                <span className={styles.mostVisitedCard_exp}>{experience}</span>
            </div> 
            <span className={styles.mostVisitedCard_region}>{region}</span>
        </div>
    )
}