import styles from '../../assets/styles/Escocia.module.css'
import bandeira from '../imagens/escociabandeira.jfif'
import ComponentProps from './ComponentProps';


function Escocia() {
    return(
        <>
            <div className={styles.fundo}>
                <ComponentProps
                lugar={"Escócia"}
                texto={"texto sobre a Escócia"}
                bandeira_pais={bandeira}
                />
            </div>
        </>
    )
}
export default Escocia;