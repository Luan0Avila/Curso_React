import React from 'react'

// 6 - carregando dados
import { useFetch } from '../hooks/useFetch'

// 7 - Rota dinamica
    import { Link } from 'react-router-dom'

const url = "http://localhost:3000/products"

const Home = () => {
    const {data: items} = useFetch(url)

    

    return (
        <div>
            <h1>Home</h1>
            {/* 6 - carregando dados*/}
            <ul className='products'>
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$: {item.price}</p>
                        {/* 7 - rota dinamica */}
                        <Link to={`/products/${item.id}`}>Detalhe</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home