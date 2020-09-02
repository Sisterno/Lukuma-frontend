import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_email}>
                <h1 className={styles.footer_email_h1}>Recibe las ultimas ofertas en destinos y experiencias </h1>
                <h3 className={styles.footer_email_span}>Deja tu correo y te mantendremos informado</h3>
                <form className={styles.footer_form}>
                    <input className={styles.footer_form_text} type="text" placeholder="Escribe tu email"></input>
                    <a className={styles.footer_form_button}>
                        Suscribirse
                    </a>
                </form>
            </div>
            <div className={styles.footer_data}>
                <div className={styles.footer_data_money}>
                    <span className={styles.footer_data_moneyLanguage}>Idioma</span>
                    <span className={styles.footer_data_moneyLanguage_spanish}>Español
                        <img className={styles.footer_data_moneyLanguage_spanishImg} src="/spanish.jpg"></img>
                    </span>
                    <span className={styles.footer_data_moneyChange}>Cambio</span>
                    <span className={styles.footer_data_moneyChangeDollar}>Dolar USD</span>
                    
                </div>
                <div className={styles.footer_data1}>
                    <span>Soporte lukuma.pe</span>
                    <span>Contacto</span>
                    <span>Informacion Legal</span>
                    <span>Politica de privacidad</span>
                    <span>Condiciones de uso</span>
                    <span>Covid-19 update</span>
                </div>
                <div className={styles.footer_data2}>
                    <span>Lukuma.pe</span>
                    <span>Sobre nosotros</span>
                    <span>Oportunidad Laboral</span>
                    <span>Blog</span>
                    <span>Youtube</span>
                    <span>Bonos</span>
                </div>
                <div>
                    {/* <img  src='/Visa.png'></img>
                    <img  src='/paypal.png'></img> */}
                </div>
            </div>
        </footer>
    )
}