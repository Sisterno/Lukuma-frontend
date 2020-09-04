import styles from "./LandingCategorieTagsRow.module.css";
import LandingCategorieCart from '../LandingCategorieCart/LandingCategorieCart'



export default function LandingCategorieTagsRow({
    dataSixData1=[]
}){   
    return(
           <div className={styles.TagsRow}>                        
                {dataSixData1.map((dataSixDataData)=>(
                    <LandingCategorieCart key= {dataSixDataData.id} info={dataSixDataData} />
                ))}
            </div>
    )
}
