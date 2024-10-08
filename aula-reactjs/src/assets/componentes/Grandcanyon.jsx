import styles from '../../assets/styles/Grandcanyon.module.css'
import bandeira from '../imagens/usabandeira.jfif'
import ComponentProps from './ComponentProps';


function Grandcanyon() {
    return(
        <>
            <div className={styles.fundo}>
            <ComponentProps
                lugar={"Grand Canyon"}
                texto={"texto sobre o Grand Canyon"}
                bandeira_pais={bandeira}
                />
            </div>
        </>
    )
}
export default Grandcanyon;