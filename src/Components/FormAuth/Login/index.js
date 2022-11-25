import { useState } from "react";

import ButtonForm from "../../Form/buttonForm";
import Input from "../../Form/input";

import { CryptoState } from "../../../Contexts/LoggedContext";
import { auth } from "../../../FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

import styles from "./formUser.module.css"

function Login({ btnText, handleClose}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { alert, setAlert } = CryptoState()
 
    const submit = async (e) =>{

        e.preventDefault()
        if(!email || !password ){
            setAlert({
                open:true,
                message: "Please fill all the Fields",
                type:"error"
            })
            return;
        }

        try{

            const result = await signInWithEmailAndPassword(auth, email, password)
            
            setAlert({
                open:true,
                message: `Login Successful. Welcome ${result.user.email}`,
                type:"success"
            })

            handleClose()
        } catch(error){
            setAlert({
                open:true,
                message: error.message,
                type:"error"
            })
            handleClose()
            return;
        }

        
    }

    return (
        <div className={styles.Conteiner}>
            <div className={styles.formUser}>
            <form onSubmit={submit}>
                <Input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    handlechange={(e) =>
                        setEmail(e.target.value)
                    }
                ></Input>
                <Input
                    type="password"
                    placeholder="Enter PassWord"
                    name="password"
                    value={password}
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

export default Login;