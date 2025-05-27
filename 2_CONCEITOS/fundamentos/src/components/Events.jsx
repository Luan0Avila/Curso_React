import React from 'react'

export const Events = () => {

    const handleClick = () => {
        console.log("Executou");
    }

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }
    }
    
    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
            </div>
            <div>
                {/* 7 - Evento com Função*/}
                <button onClick={handleClick}>Clique Aqui - com função</button>
            </div>
            {/* 8 - Função de renderização*/}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    ) 
}
