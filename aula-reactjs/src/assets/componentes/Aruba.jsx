import styles from '../../assets/styles/Aruba.module.css'
import bandeira from '../imagens/bandeiraaruba.jfif'
import ComponentProps from './ComponentProps';

function Aruba() {
    return(
        <>
            <div className={styles.fundo}>
            <ComponentProps
                lugar={"Aruba"}
                texto={"texto sobre a Aruba"}
                bandeira_pais={bandeira}
                />
            </div>
        </>
    )
}
export default Aruba;