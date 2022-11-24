import styles from "./button.module.css"


function ButtonForm({text}){

    return(
        <div>
           <button className={styles.submit_Button}>{text}</button>
        </div>
    )
}


export default ButtonForm;