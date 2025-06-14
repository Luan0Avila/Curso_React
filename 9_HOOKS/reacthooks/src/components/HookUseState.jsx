import { useState } from "react";

const HookUseState = () => {
    // 1 - useState
    let userName = "Luna"
    const [name, setName] = useState("Luan");

    const changeNames = () => {
        userName = "Luna Avila";

        setName("Lady")
    }

  return (
    <div>
        {/* 1 - useState*/}
        <p>Variável {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nome</button>

    </div>
  )
}

export default HookUseState