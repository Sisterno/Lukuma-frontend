import styles from "./LandingCategorie.module.css";
import LandingCategorieCart from './LandingCategorieCart/LandingCategorieCart'
import LandingCategorieTagsRow from './LandingCategorieTagsRow/LandingCategorieTagsRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect} from 'react'
let dataPruebas = [
    {   id:1,title:"city tour cusco" },
    {   id:2,title:"Arequipa" },
    {   id:3,title:"Madre de Dios" },
    {   id:4,title:"Lima tradicional" },
    {   id:5,title:"Lago titicaca" },
    {   id:6,title:"Pucallpa" },
    {   id:7,title:"Trujillo city tour" },
    {   id:8,title:"Ciclimos de montaña" },
    {   id:9,title:"Experiencia culinaria" },
    {   id:10,title:"Madre de Dios" },
    {   id:11,title:"Pucallpa" },
    {   id:12,title:"Lago titicaca" },
    {   id:13,title:"city tour cusco" },
    {   id:14,title:"Arequipa" },
    {   id:15,title:"Madre de Dios " },
    {   id:16,title:"Lima tradicional" },
    {   id:17,title:"Lago titicaca " },
    {   id:18,title:"Pucallpa" },
    {   id:19,title:"Trujillo city tour" },
    {   id:20,title:"Ciclimos de montaña " },
    {   id:21,title:"Experiencia culinaria" },
    {   id:22,title:"Madre de Dios" },
    {   id:23,title:"Pucallpa" },
    {   id:24,title:"Lago titicaca" },
]
var dataSix=[];



export default function LandingListTours(){   
    // useEffect(() => {
    //     suma()
    // });

    return(
        <div className={styles.LandingCategorieBox} >
            {suma()}
            <span className={styles.LandingCategorieTitle} >CAtegorias màs vistas </span>
            <FontAwesomeIcon className={styles.LandingCategorieLeftArrow} icon={faArrowLeft}/>
            <div className={styles.LandingCategorieTagsbox} >
                {
                    dataSix.map((dataSixData)=>(
                        <LandingCategorieTagsRow key={dataSix.indexOf(dataSixData)} dataSixData1={dataSixData} />
                    ))
                }
            </div>
            <FontAwesomeIcon className={styles.LandingCategorieRightArrow} icon={faArrowRight} />
        </div>
    )
}

function suma(){
    let moment=[];
    dataPruebas.map((data)=>{
        moment.push(data);
        if(data.id%6==0){
            dataSix.push(moment);
            console.log(dataSix)
            moment=[];
        }
    });
}
