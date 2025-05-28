import React, { useState } from 'react'

export const Data = () => {
    let somaData = 10;
    
    const [anotherNumber, setAnotherNumber] = useState(15)

    return (
        <div>
            <div>
                <p>Valor: {somaData}</p>
                <button onClick={() => (somaData = 15)}>Mudar váriavel</button>
            </div>
            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
            </div>
        </div>
    )
}
