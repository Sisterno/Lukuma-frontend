import styles from './hero.module.css'

import DatePicker from 'react-datepicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

export default function Hero(){
        const [startDate, setStartDate] = useState(null);
    return(
        <div className={styles.Hero}>
            <h1 className={styles.heroText}> DESCUBRE NUEVAS EXPERIENCIAS </h1>
            <form className={styles.heroForm}>
                <FontAwesomeIcon className={styles.headerMapIcon} icon={faMapMarkerAlt} />
                <input className={styles.headerDestiny} type="text" placeholder='Destino'></input>
                <FontAwesomeIcon className={styles.headerCalendar} icon={faCalendarAlt} /> 
                <div >
                    <DatePicker 
                        className={styles.headerDatePicker}
                        selected={startDate} onChange={date => setStartDate(date)}
                        disabledKeyboardNavigation
                        placeholderText="Fecha"
                    />
                </div>
                <div className={styles.headerSearch}>
                    <a className={styles.headerSearch_button}>Buscar</a>
                    <FontAwesomeIcon className={styles.headerSearch_ArrowIcon} icon={faArrowRight} />
                </div>
            </form>
        </div>
    )
}