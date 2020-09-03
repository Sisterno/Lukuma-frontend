import styles from "./header.module.css";
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";
export default function Header(){
    return(
        <header className = {styles.headerContain}>
            <div className = {styles.menuContain}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="/lukuma_logo_ico.png"/>
                    <span className={styles.logoText}>Lukuma.pe</span>
                </div>
                <nav className={styles.AllMenuBox}> 
                    <menu className={styles.MenuLinks}>
                        <Link href="/"><a className = {styles.linkCustom}>Inicio</a></Link>
                        <Link href="/"><a className = {styles.linkCustom}>Destinos</a></Link>
                        <Link href="/"><a className = {styles.linkCustom}>Lugares</a></Link>
                        <Link href="/"><a className = {styles.linkCustom}>Sobre Nosotros</a></Link>
                        <Link href="/"><a className = {styles.linkCustom}>Iniciar Sesion</a></Link>
                    </menu>
                    <div className={styles.signInBotton}>
                        <FontAwesomeIcon className={styles.plusIcon} icon={faPlusCircle} />
                        <span className= {styles.signInText}>Registrarse</span>
                    </div>
                    <img className={styles.languageLogo} src="/spanish.jpg" />
                </nav>
            </div>
        </header>
    )
}