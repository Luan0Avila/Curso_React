import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"
import './App.css'

function App() {
  // 1 - Resgatando dados
  const [products, setProducts] = useState([])

  useEffect(() => {
    
    async function getData() {
      
      const res = await fetch(url)

      const data = await res.json()

      console.log(data)

      setProducts(data)
    }
    getData()
  },[]);

  return (
    <>
      <h1>HTTP em React</h1>

      {/* 1 - resgate de dados */}
      {products.map((product) => (
        <li key={product.id}>{product.name} - R${product.price}</li>
      ))}
    </>
  )
}

export default App
