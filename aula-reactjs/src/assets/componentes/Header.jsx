import Logo from '../../assets/imagens/viagens.jpg'
import Lupa from '../../assets/imagens/lupa.png'
import styles from '../../assets/styles/Header.module.css'

function Header() {
    return(
        <>
            <header className={styles.cabecalho}>
                <img src={Logo} alt="Logo" id={styles.logo}/>

                <nav className={styles.navbar}>
                    <li>Home</li>
                    <li>Escócia</li>
                    <li>Grand Canyon</li>
                    <li>Muralha da China</li>
                    <li>Aruba</li>
                </nav>

                <div className={styles.containerPesquisa}>
                <div>
                    <input type="search" />
                </div>

                <img src={Lupa} alt="Lupa" id={styles.lupa} />
                </div>
            </header>
        </>
    )
}

export default Header