import styles from "./LandingListToursCart.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
export default function LandingListToursCart({
    info={
        img:"/image-not-found.png",
        title:"error",
        star:0,
        location:"error",
        duration:"4error",
        people:"errores grandes y errores chiquitos",
        price:"error"
    }
}){
    return(
        <div className={styles.LandingListToursCartBox}>
            <img className={styles.LandingListToursCartImg} src={info.img} />
            <span className={styles.LandingListToursCartTitle} > {info.title} </span>
            <div className={styles.LandingListToursCartStar}> {info.star} </div>
            <div className={styles.LandingListToursCartData}>
                <FontAwesomeIcon className={styles.MapMarkedIco} icon={faMapMarkerAlt} /><span className={styles.LandingListToursCartLocate}> {info.location} </span>
                <FontAwesomeIcon className={styles.CalendarIco} icon={faCalendar} /><span className={styles.LandingListToursCartDuration}> {info.duration} </span>
                <FontAwesomeIcon className={styles.UserIco} icon={faUser} /><span className={styles.LandingListToursCartPeople}> {info.people} </span>
                <div className={styles.LandingListToursCartTx}>Desde <span className={styles.LandingListToursCartTxPrice}> {info.price} </span></div>
            </div>
        </div>
    )
}