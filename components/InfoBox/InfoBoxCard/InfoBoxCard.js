import styles from "./InfoBoxCard.module.css";
export default function InfoBox({
    info={
        infoImage:"none",
        infoTitle:"error",
        infoText:"error",
        infoButtonText:"error"
    }
}){
    return(
        <div className={styles.InfoBoxCardBox}>
            <img className={styles.InfoBoxCardImg} src={info.infoImage}/>
            <span className={styles.InfoBoxCardTitle}>{info.infoTitle} </span>
            <p className={styles.InfoBoxCardImgText}> {info.infoText} </p>
            <div className={styles.InfoBoxCardImgButtom}>
                <span className={styles.InfoBoxCardImgButtomText}> {info.infoButtonText} </span>
            </div>            
        </div>
    )
}