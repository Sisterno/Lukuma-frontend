import styles from "./header.module.css";
import Link from "next/link";
export default function Header(){
    return(
        <header className = {styles.headerContain}>
            <div className = {styles.menuContain}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="/lukuma_logo_ico.png"/>
                    <span className={styles.logoText}>Lukuma.pe</span>
                </div>
                <nav className={styles.menuCustom1}> 
                    {/* <menu> */}
                    <Link href="/"><a className = {styles.linkCustom}>Destinos</a></Link>
                    <Link href="/"><a className = {styles.linkCustom}>Lugares</a></Link>
                    <Link href="/"><a className = {styles.linkCustom}>Sobre Nosotros</a></Link>
                    <Link href="/"><a className = {styles.linkCustom}>Iniciar Sesion</a></Link>
                    {/* </menu> */}
                    <div className={styles.signInBotton}><i class="fas fa-plus-circle"/><span>Registrarse</span></div>
                    <img className={styles.languageLogo} src="/spanish.jpg" />
                </nav>
            </div>
        </header>
    )
}