import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent'

// 6 - CSS module
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  // 4 - css style dinamico
  const n = 15;

  // 5 - classes dinamicas
  const redTitle = true;


  return (
    <>
      {/* 1 - Css global*/}
      <h1>CSS NO REACT</h1>
      {/* 2 - css de componente*/}
      <MyComponent/>
      <p>pegou o css do componente</p>
      {/* 3 - inline style*/}
      <p style={{color: "blue", padding: "25px", borderTop: "1px solid blue"}}>Este elemento tem estilos inline</p>
      {/* 4 - inline style dinamico*/}
      <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>
      CSS dinâmico 2
      </h2>
      {/* 5 - classes dinamicas*/}
      <h2 className={redTitle ? "red-title" : "title"}>Esse titulo vai ter uma classe</h2>
      <Title/>
    </>
  )
}

export default App
