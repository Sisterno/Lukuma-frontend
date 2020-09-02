import MostVisitedDestinationCard from './MostVisitedDestinationCard/MostVisitedDestinationCard'
import styles from './MostVisitedDestination.module.css'
export default function MostVisitedDestination(){
    const visiteddestination=[
        {
            id: 1,
            experience: '245(experience)',
            region: 'Arequipa'
        },
        {
            id: 2,
            experience: '245(experience)',
            region: 'Cusco'
        },
        {
            id: 3,
            experience: '245(experience)',
            region: 'Lima'
        },
        {
            id: 4,
            experience: '245(experience)',
            region: 'Loreto'
        },
        {
            id: 5,
            experience: '245(experience)',
            region: 'Iquitos'
        },
        {
            id: 6,
            experience: '245(experience)',
            region: 'Arequipa'
        },
        {
            id: 7,
            experience: '245(experience)',
            region: 'Cusco'
        },
        {
            id: 8,
            experience: '245(experience)',
            region: 'Lima'
        },
        {
            id: 9,
            experience: '245(experience)',
            region: 'Loreto'
        },
        {
            id: 10,
            experience: '245(experience)',
            region: 'Iquitos'
        }    
    ]
    return(
        <div className={styles.mostVisitedDestination}>
            <h1>DESTINOS MAS VISITADOS</h1>
            <div className={styles.mostVisitedDestination_card}>
                {visiteddestination.map((data)=>(
                    <MostVisitedDestinationCard
                        key={visiteddestination.indexOf(data)}
                        id={data.id}
                        experience={data.experience}
                        region={data.region}
                    />
                    ))}
            </div>
        </div>
    )
}