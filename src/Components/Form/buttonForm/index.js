import styles from "./button.module.css"


function ButtonForm({text, handleSubmit}){

    return(
        <div>
           <button type="submit" className={styles.submit_Button}>
            {text}
            </button>
        </div>
    )
}


export default ButtonForm;