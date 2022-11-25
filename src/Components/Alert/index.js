import React, { useEffect } from 'react'
import { CryptoState } from '../../Contexts/LoggedContext'

import styles from "./Alert.module.css"

const Alert = () => {

    const { alert, setAlert } = CryptoState()

    useEffect(() => {

        if (!alert.message) {
            setAlert({ open: false })
            return
        }

        const timer = setTimeout(() => {
            setAlert({ open: false })
        }, 3000)

    }, [alert.open])

    return (
        <>
            {alert.open && (
                <div className={styles.conteiner}>
                    <div className={`${styles.message} ${styles[alert.type]}`}>
                        <p>{alert.message}</p>
                    </div>
                </div>)
            }
        </>
    )
}

export default Alert