import React from 'react'

const conditionalRender = () => {
    
    const x = true;

    const name = "Luan";
    return (
    
        <div>{/* 7 - render condicional*/}
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true sim</p>}
            {/* 8 - else*/}
            <h3>Render ternário</h3>
            {name === "João" ?(
                <div>
                    <p>Olá Joaão</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}

export default conditionalRender