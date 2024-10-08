import styles from '../../assets/styles/ComponentProps.module.css'
function ComponenteProps({lugar, texto, bandeira_pais}) {
  return (
    <div className={styles.corpoProps}>
        <h2>venha conhecer esse lugar incrivel: {lugar} !!!</h2>
        <p>{texto}</p>
        <img src={bandeira_pais} alt="País" />
    </div>
  );
}

export default ComponenteProps;