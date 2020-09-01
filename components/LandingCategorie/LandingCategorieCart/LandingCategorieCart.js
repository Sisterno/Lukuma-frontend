import styles from "./LandingCategorieCart.module.css";

export default function LandingListTours({
    info={
        id:0,
        title:"error,  no sabes hacer codigo :("

}}){
    return(
        <div className={styles.LandingCategorieCartBox} >
            <span className={styles.LandingCategorieCartText} > {info.title} </span>
        </div>
    )
}