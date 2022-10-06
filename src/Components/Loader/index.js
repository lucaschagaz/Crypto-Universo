import loader from "../../icons/loader.svg"

import styles from "./Loader.module.css" 


const Loading = () =>{

    return(
        <div className={styles.loader_Conteiner}>
            <img src={loader} alt="loading" className={styles.loader}/>
            <p>Carregando...</p>
        </div>
    )
}


export default Loading;