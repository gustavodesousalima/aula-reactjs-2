import styles from '../../assets/styles/Muralha.module.css'
import bandeira from '../imagens/chinabandeira.jfif'
import ComponentProps from './ComponentProps';

function Muralha() {
    return(
        <>
            <div className={styles.fundo}>
            <ComponentProps
                lugar={"Muralha da China"}
                texto={"texto sobre a muralha da china"}
                bandeira_pais={bandeira}
                />
            </div>
        </>
    )
}
export default Muralha;