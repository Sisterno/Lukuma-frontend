import React from 'react'
import styles from './FeaturedDestination.module.css'
import FeaturedDestinationCard from './FeaturedDestinationCard/FeaturedDestinationCard'

export default function Destination(){
    const featuredcard = [
        {
            id: 1,
            text: 'Visitas Guiadas'
        },
        {
            id: 2,
            text: 'Excursiones'
        },
        {
            id: 3,
            text: 'Tracking'
        },
        {
            id: 4,
            text: 'Fotografia'
        },
        {
            id: 5,
            text: 'Aventura'
        },
        {
            id: 6,
            text: 'Ciclismo'
        },
        {
            id: 7,
            text: 'Naturaleza'
        },
        {
            id: 8,
            text: 'Experiencia Culinaria'
        }
    ];
    return(
        <div className={styles.featuredDestination}>
            <div className={styles.featuredDestination_Text}>
                <span className={styles.featuredDestination_textSpan}>Destino <br/> Destacado</span>
                <h1>LAGUNA HUAMANTAY</h1>
                <p>Explorar Perú es como un sueño de infinitas posibilidades, entre las que estan navegar en kayak por sus canales o empaparte de su rica tradicionartistica. Encuentra las mejores experiencias de la capital y saca el maximo partido de tu visita</p>
                <span className={styles.featuredDestination_textSpan2}>Experiencias y aventuras en un solo destino</span>
                <div className={styles.featuredDestination_card}>
                    {featuredcard.map((featured)=>(
                        <FeaturedDestinationCard
                            key={featuredcard.indexOf(featured)}
                            id={featured.id}
                            text={featured.text}
                        />
                    ))}
                </div>
            </div>
            <img className={styles.featuredDestination_Image} src="/LagunaHuamantay.jpg"></img>
        </div>
    )
}