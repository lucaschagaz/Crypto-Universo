import React, { useState, ChangeEvent } from 'react'

import styles from "./search.module.css"
import { SearchProps } from "../../types/types"

const Search = ({handleOnText, value}:SearchProps) => {

    const submit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
    <div className={styles.search_Counteiner}>
        <form className={styles.search} onSubmit={submit}>
          <input 
                type="text"
                name="search" 
                value={value} 
                onChange={handleOnText} 
                placeholder="Pesquisar"
            />
          <button>Pesquisar</button>  
        </form>
    </div>
    )
}

export default Search