import styles from "./InfoBoxCard.module.css";
export default function InfoBox({
    info={
        imgPath:"error",
        infoTitle:"error",
        infoText:"error",
        infoButtonText:"error"
    }
}){
    let img = info.infoImg
    return(
        <div className={styles.InfoBoxCardBox}>
            <img className={styles.InfoBoxCardImg} src={`${info.infoTitle}`}/>
            <span className={styles.InfoBoxCardTitle}>{info.infoTitle} </span>
            <p className={styles.InfoBoxCardImgText}> {info.infoText} </p>
            <div className={styles.InfoBoxCardImgButtom}>
                <span className={styles.InfoBoxCardImgButtomText}> {info.infoButtonText} </span>
            </div>            
        </div>
    )
}