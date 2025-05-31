import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 1 - Css global*/}
      <h1>CSS NO REACT</h1>
      {/* 2 - css de componente*/}
      <MyComponent/>
      <p>pegou o css do componente</p>
      {/* 3 - inline style*/}
      <p style={{color: "blue", padding: "25px", borderTop: "1px solid blue"}}>Este elemento tem estilos inline</p>
    </>
  )
}

export default App
