import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
    // 1 - useRef
    const numerRef = useRef(0);
    const [counter, setConuter] = useState(0);
    const [counterB, setConuterB] = useState(0);

    useEffect(() => {
        numerRef.current = numerRef.current + 1;
    });

    // 2 - useRef e DOM
    const inputRef = useRef();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setText("");

        inputRef.current.focus();
    }
    return( 
    <div>
        <h2>UseRef</h2>
        <p>O componente renderizou: {numerRef.current}</p>
        <p>COunter 1: {counter}</p>
        <button onClick={() => setConuter(counter + 1)}>Contador A</button>
        <p>COunter 2: {counterB}</p>
        <button onClick={() => setConuterB(counterB + 1)}>Contador B</button>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
)

}

export default HookUseRef