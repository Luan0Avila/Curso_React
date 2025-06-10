import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre páginas
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
