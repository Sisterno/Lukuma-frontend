import styles from "./LandingListTours.module.css";
import LandingListToursCart from './LandingListToursCart/LandingListToursCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
let dataPruebas = [
    {
        img:"/image-not-found.png",
        title:"cusco Ciudad",
        star:4.5,
        location:"Cusco",
        duration:"4 horas",
        people:"Adultos",
        price:"$44.00"
    },
    {
        img:"/image-not-found.png",
        title:"Iquitos paseo en bote",
        star:4.5,
        location:"Cusco",
        duration:"4 horas",
        people:"Adultos",
        price:"$44.00"
    },
    {
        img:"/image-not-found.png",
        title:"Aventura en las dunas",
        star:4.5,
        location:"Cusco",
        duration:"4 horas",
        people:"Adultos",
        price:"$44.00"
    },
    {
        img:"/image-not-found.png",
        title:"Ciudadela de Machupicchu",
        star:4.5,
        location:"Cusco",
        duration:"4 horas",
        people:"Adultos",
        price:"$44.00"
    },
    {
        img:"/image-not-found.png",
        title:"Ciudadela de pachacamaq",
        star:4.5,
        location:"Cusco",
        duration:"4 horas",
        people:"Adultos",
        price:"$44.00"
    },
]



export default function LandingListTours({
    Title = "no determinado WE"
}){
    return(
        <div className={styles.LandingListToursBox}>
            <span className={styles.ToursTitle}>{Title}</span>
            <div className={styles.CartBox}>
                {dataPruebas.map((data)=>(
                    <LandingListToursCart info={data} />
                ))}
            </div>
            <div className={styles.MoreButtom}>
                <span className={styles.MoreButtomText}>Buscar mas</span>
                <FontAwesomeIcon className={styles.MoreButtomArrow} icon={faArrowRight} />
            </div>
        </div>
    )
}