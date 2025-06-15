import { useState } from "react";

const HookUseState = () => {
    // 1 - useState
    let userName = "Luna"
    const [name, setName] = useState("Luan");

    const changeNames = () => {
        userName = "Luna Avila";

        setName("Lady")
    };

    // 2 - useState e input
    const [age, setAge] = useState(21);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    }
  return (
    <div>
        {/* 1 - useState*/}
        <p>Variável {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nome</button>
        {/* 2 - useState e input*/}
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos.</p>
        <hr />
    </div>
  )
}

export default HookUseState