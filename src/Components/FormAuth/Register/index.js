import { useState } from "react";
import { CryptoState } from "../../../Contexts/LoggedContext";
import { auth } from "../../../FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import ButtonForm from "../../Form/buttonForm";
import Input from "../../Form/input";

import styles from "./formUser.module.css"

function Register({ btnText, handleClose }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmePassword, setConfirmePassword] = useState("")

    const { alert, setAlert } = CryptoState()

    const submit = async (e) => {
        
        e.preventDefault()
        if(password !== confirmePassword){
            setAlert({
                open:true,
                message: "PassWord do not match",
                type:"error"
            })
            return
        }else if (!email || !password || !confirmePassword) {
            setAlert({
                open:true,
                message: "Please fill all the Fields",
                type:"error"
            })
            return
        }
        try{
            const result = await createUserWithEmailAndPassword(auth, email, password)

            setAlert({
                open:true,
                message: `Sign Up Successful. ${result.user.email}`,
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
            return
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
                <Input
                    type="password"
                    placeholder="Confirm passWord"
                    name="password"
                    value={confirmePassword}
                    handlechange={(e) =>
                        setConfirmePassword(e.target.value)
                    }
                ></Input>
                <ButtonForm text={btnText}>/</ButtonForm>
            </form>
            </div>
        </div>
    )


}

export default Register;