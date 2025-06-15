import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
    // 1 - useRef
    const numerRef = useRef(0);
    const [counter, setConuter] = useState(0);
    const [counterB, setConuterB] = useState(0);

    useEffect(() => {
        numerRef.current = numerRef.current + 1;
    })

    return( 
    <div>
        <h2>UseRef</h2>
        <p>O componente renderizou: {numerRef.current}</p>
        <p>COunter 1: {counter}</p>
        <button onClick={() => setConuter(counter + 1)}>Contador A</button>
        <p>COunter 2: {counterB}</p>
        <button onClick={() => setConuterB(counterB + 1)}>Contador B</button>
    
    </div>
)

}

export default HookUseRef