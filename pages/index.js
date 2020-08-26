import styles from '../styles/hero.module.css'
// import React,{useState,useEffect} from 'react'

export default function Home() {
  return (
    <div className={styles.hero}>
      <img className={styles.images} src="/Logo-negativo.png" ></img>
      <div className={styles.heroText}>
        <p className={styles.region}>Localidad</p>
        <p className={styles.travelDate}>Fecha de Viaje</p>
        <p className={styles.nPersons}>N personas</p>
        <a className={styles.search}>Buscar</a>
      </div>
    </div>
  )
}
