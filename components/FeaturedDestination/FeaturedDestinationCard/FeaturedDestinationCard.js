import style from './FeaturedDestinationCard.module.css'
export default function FeaturedDestinationCard(
    {
        id = 1,
        text = 'lorem'
    },
){
    return(
        <div className={style.featuredDestination_Card}>
            <span>{text}</span>
        </div>
    )
}
