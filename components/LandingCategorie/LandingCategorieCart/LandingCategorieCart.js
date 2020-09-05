import styles from "./LandingCategorieCart.module.css";

export default function LandingListTours({
    info={
        id:0,
        title:"error,  no sabes hacer codigo :("

}}){
    const color_orange ={
        background: 'linear-gradient(to right, rgba(248,106,106,1) 0%, rgba(253,148,78,1) 100%)'
    };
    const color_green ={
        background: 'linear-gradient(to right, rgba(0,169,89,1) 0%, rgba(1,191,135,1) 100%)'
    };
    if((((info.id-1-((info.id-1)%6))/6))%2){   //Necisato saber si la fila es par o impar para poder variar los coleres
        if(info.id%2==0){
            return(
                <div className={styles.LandingCategorieCartBox} style={color_green} >
                    <span className={styles.LandingCategorieCartText} > {info.title} </span>
                </div>
            )
        }else{
            return(
                <div className={styles.LandingCategorieCartBox} style={color_orange} >
                    <span className={styles.LandingCategorieCartText} > {info.title} </span>
                </div>
            )
        }
    }else{
        if(info.id%2==0){
            return(
                <div className={styles.LandingCategorieCartBox} style={color_orange} >
                    <span className={styles.LandingCategorieCartText} > {info.title} </span>
                </div>
            )
        }else{
            return(
                <div className={styles.LandingCategorieCartBox} style={color_green} >
                    <span className={styles.LandingCategorieCartText} > {info.title} </span>
                </div>
            )
        }
    }

    
    
}