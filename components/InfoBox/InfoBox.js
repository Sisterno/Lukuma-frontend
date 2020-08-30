import styles from "./InfoBox.module.css";
import InfoBoxCard from './InfoBoxCard/InfoBoxCard'
export default function InfoBox(){
    return(
        <div>
            <div>
                <img></img>
                <span></span>
            </div>
            <InfoBoxCard/>
            <InfoBoxCard/>
            <InfoBoxCard/>
        </div>
    )
}