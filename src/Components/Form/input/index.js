
import styles from "./input.module.css"


function Input({text, value, type, placeholder, name, handlechange}){

    return(
        <div className={styles.input_Conteiner}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                text={text}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handlechange}>
            </input>
        </div>
    )
}



export default Input;