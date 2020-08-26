import styles from "../styles/header.module.css";
import Link from "next/link";
export default function Header(){
    return(
        <header className = {styles.headerContain}>
            <div className = {styles.menuContain}>
                    <img className={styles.logo} src="/lukuma_logo_ico.png"/>
                <nav className={styles.menuCustom1}> 
                    {/* <menu> */}
                    <Link href="/"><a className = {styles.linkCustom}>Destinos</a></Link>
                    <Link href="/"><a className = {styles.linkCustom}>Ideas</a></Link>
                    <Link href="/"><a className = {styles.linkCustom}>Revistas</a></Link>
                    <Link href="/"><a className = {styles.linkCustom}>Conceptos</a></Link>
                    {/* </menu> */}
                </nav>
            </div>
            <div className={styles.covidBox}></div>
        </header>
    )
}