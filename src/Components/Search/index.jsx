import React, { useState } from 'react'

import styles from "./search.module.css"

const Search = ({handleOnText, value}) => {

    const submit = (e) =>{
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