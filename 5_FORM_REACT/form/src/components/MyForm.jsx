import React, { useState } from 'react'
import "./MyForm.css";

const MyForm = () => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);   
    }
    console.log(name)

    return (
        <div>
        {/* 1 - criação de form*/}
        <form action="">
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName}/>
            </div>
            <input type="submit" value="Enviar" />
            {/* 2 - label envolvendo input*/}
            <label htmlFor="">
                <span>E-mail</span>
                <input type="text" name='email' placeholder='Digite seu e-mail'/>
            </label>

        </form>
        </div>
    )
}

export default MyForm