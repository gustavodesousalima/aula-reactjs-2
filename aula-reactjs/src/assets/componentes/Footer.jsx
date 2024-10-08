import styles from '../styles/Footer.module.css'
import Instagram from '../imagens/insta.jpg'
import Face from '../imagens/face.jpg'
import TikTok from '../imagens/tiktok.png'
import whatsApp from '../imagens/whats.png'

function Footer (){
    return (
        <>
        <footer className={styles.rodape}>

            <div className={styles.containerPrincipal}>
            <h2>Siga nossas rede sociais</h2>
            <div className={styles.containerIcones}>
                <img src={Instagram} alt="Instagram" className={styles.icones} />
                <img src={Face} alt="Facebook" className={styles.icones} />
                <img src={TikTok} alt="TikTok" className={styles.icones} />
                <img src={whatsApp} alt="WhatsApp" className={styles.icones} />
            </div>

            <h2>Telefone:</h2>
            <p>(11) 1234-5678</p>
            </div>

        </footer>
        </>
    )
}

export default Footer;