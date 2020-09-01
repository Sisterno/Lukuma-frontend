import styles from "./InfoBox.module.css";
import InfoBoxCard from './InfoBoxCard/InfoBoxCard'

let dataPruebas = {
    infoCard:[
        {
            imgPath:"/image-not-found.png",
            infoTitle:"Viaje y colabore",
            infoText:`Use the search tools here to find other families or people,
            travelers like you, to meet up with on the road, and be
            sure to register your trips so that they can find you, too!`,
            infoButtonText:"Ingresar o crear cuenta"
        },
        {
            imgPath:"/image-not-found.png",
            infoTitle:"Administre sus viajes desde una cuenta",
            infoText:`"When you're on the road for a long spell, whether as a
            worldschooling family or a digital nomad, it can be hard to`,
            infoButtonText:"Agregar un destino"
        },
        {
            imgPath:"/image-not-found.png",
            infoTitle:"Es proveedor de turismo unase ! a lukuma.pe",
            infoText:`"When you're on the road for a long spell, whether as a
            worldschooling family or a digital nomad, it can be hard to `,
            infoButtonText:"Quiero ser parte de lukuma"
        }
    ]
}
export default function InfoBox(){
    return(
        <div className={styles.InfoBoxContain}>
            <div className={styles.LogoContain}>
                <img className={styles.Logo} src="/lukuma_logo_ico.png"></img>
                <span className={styles.LogoText}>Lukuma.pe</span>
            </div>
            {dataPruebas.infoCard.map((data)=>(
                <InfoBoxCard key={dataPruebas.infoCard.indexOf(data)} info={data}/> //preguntar por key :v
            ))}
        </div>
    )
}