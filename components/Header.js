import styles from "../styles/header.module.css";
import Link from "next/link";
export default function Header(){
    return(
        <header className = {styles.header_2}>
            <div className="header-2" >
                <nav>
                    <img className={styles.logo} src="/lukuma_logo_ico.png"></img>
                    
                    <menu className={styles.menu_1}>
                    <Link href="/"><a className = {styles.enlace}>Destinos</a></Link>
                    <Link href="/"><a className = {styles.enlace}>Ideas</a></Link>
                    <Link href="/"><a className = {styles.enlace}>Revistas</a></Link>
                    <Link href="/"><a className = {styles.enlace}>Conceptos</a></Link>
                    </menu>
                </nav>
            </div>
            <div className={styles.covid_box}></div>
        </header>
    )
}