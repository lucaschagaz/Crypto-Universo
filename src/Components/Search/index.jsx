import React, { useState } from 'react'


const Search = () => {

    const [text, setText] = useState("")

    const submit = (e) =>{
        e.preventDefault()
        alert(text)
        setText("")
    }

    return (
    <div>
        <form className="search">
          <input 
                type="text"
                name="search" 
                value={text} 
                onChange={(e) => setText( e.target.value)} 
                placeholder="Pesquisar"
            />
          <button type='submit' onSubmit={submit}>Pesquisar</button>  
        </form>
    </div>
    )
}

export default Search