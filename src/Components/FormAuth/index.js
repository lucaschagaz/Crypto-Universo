import { useState } from "react";
import ButtonForm from "../Form/buttonForm";
import Input from "../Form/input";

import { CryptoState } from "../../Contexts/LoggedContext";

import styles from "./formUser.module.css"

function FormUser({ btnText }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { showForm } = CryptoState()
 
    function submit(e) {
        e.preventDefault()
        // handleSubmit({email, password})
    }

    return (
        <div className={styles.Conteiner}>
            <div className={styles.formUser}>
            <form onSubmit={submit}>
                <Input
                    type="email"
                    text="Email do Usuario:"
                    name="email"
                    value={email}
                    placeholder="Digite o seu Email!"
                    handlechange={(e) =>
                        setEmail(e.target.value)
                    }
                ></Input>
                <Input
                    type="password"
                    text="Senha:"
                    name="password"
                    value={password}
                    placeholder="Digite uma senha!"
                    handlechange={(e) =>
                        setPassword(e.target.value)
                    }
                ></Input>
                <ButtonForm text={btnText}>/</ButtonForm>
            </form>
            </div>
        </div>
    )


}

export default FormUser;