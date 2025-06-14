import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
            <li>
        <Link to="/contact">Contatos</Link>
      </li>
    </ul>
    <Outlet/>
    </>
  )
}

export default App
