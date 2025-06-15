import { useState } from "react"
import { UesPrevious } from "../hooks/UsePrevious"

const HookCustom = () => {
    const [number, setNumber] = useState(0);
    const previousValue = UesPrevious(number);
    
    return (
        <div>
            <h2>HookCustom</h2>
            <p>Atual:{number}</p>
            <p>Anterior: {previousValue}</p>
            <button onClick={() => setNumber(Math.random())} >Alterar</button>
        </div>
    )
}

export default HookCustom