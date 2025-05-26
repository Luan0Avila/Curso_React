// 4 - Template Expression
export const TemplateExpression = () => {
    const name = "Luan";
    
    const data = {
        age: 20,
        job: "Programador",
    }
    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem vindo {name}!</h3>
            <p>Sua idade é {data.age} e seu trabalho é {data.job}</p>
        </div>
    )
}
