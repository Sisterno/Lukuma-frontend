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
                    <span className={styles.footer_data_moneyLanguage_spanish}>Español</span>
                    <img className={styles.footer_data_moneyLanguage_spanishImg} src="/spanish.jpg"></img>
                    <span className={styles.footer_data_moneyChange}>Cambio</span>
                    <span className={styles.footer_data_moneyChangeDollar}>Dolar USD</span>
                    
                </div>
                <div >
                    <ul className={styles.footer_data1}>
                        <li>Soporte lukuma.pe</li>
                        <li>Contacto</li>
                        <li>Informacion Legal</li>
                        <li>Politica de privacidad</li>
                        <li>Condiciones de uso</li>
                        <li>Covid-19 update</li>
                    </ul>
                </div>
                <div >
                    <ul className={styles.footer_data2}>
                        <li>Lukuma.pe</li>
                        <li>Sobre nosotros</li>
                        <li>Oportunidad Laboral</li>
                        <li>Blog</li>
                        <li>Youtube</li>
                        <li>Bonos</li>
                    </ul>
                </div>
                <div className={styles.footer_data_img}>
                    <span className={styles.footer_data_img_text}>Metodos de pago permitidos</span>
                    <img className={styles.footer_data_imgVisa} src='/Visa.png'></img>
                    <img className={styles.footer_data_imgPaypal} src='/paypal.png'></img>
                </div>
            </div>
            <span className={styles.footer_copiright}>Copyright 2020 Todos los derechos reservados - Desing By <strong>AMARU DIGITAL AGENCY.</strong></span>
        </footer>
    )
}