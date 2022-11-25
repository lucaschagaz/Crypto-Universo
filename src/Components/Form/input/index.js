
import styles from "./input.module.css"


function Input({ value, type, placeholder, name, handlechange}){

    return(
        <div className={styles.input_Conteiner}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handlechange}>
            </input>
        </div>
    )
}



export default Input;