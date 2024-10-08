import {Link} from 'react-router-dom'
import Logo from '../../assets/imagens/viagens.jpg'
import Lupa from '../../assets/imagens/lupa.png'
import styles from '../../assets/styles/Header.module.css'

function Header() {
    return(
        <>
            <header className={styles.cabecalho}>
            <Link to="/"><img src={Logo} alt="Logo" id={styles.logo}/></Link>

                <nav className={styles.navbar}>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="escocia"><li>Escócia</li></Link>
                    <Link to="grandcanyon"><li>Grand Canyon</li></Link>
                    <Link to="muralha"><li>Muralha da China</li></Link>
                    <Link to="aruba"><li>Aruba</li></Link>
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