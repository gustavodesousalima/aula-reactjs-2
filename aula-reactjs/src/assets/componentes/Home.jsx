import styles from '../../assets/styles/Home.module.css'
import Mala from '../../assets/imagens/mala.jpg'

function Home() {
    return(
        <>
        <section className={styles.home}>
            <div>
                <img src={Mala} alt="Mala" id={styles.mala} />
            </div>
            <div className={styles.blocoTexto}>
                <h1>Viagens</h1>
                <p>Explore destinos incríveis ao redor do mundo e descubra novas culturas, paisagens deslumbrantes e experiências inesquecíveis. Planeje sua próxima aventura com nossas dicas e recomendações exclusivas.</p>

            <div className={styles.blocoBotao}>
                <button>Conferir</button>
            </div>
            </div>
        </section>
        </>
    )
}
export default Home;