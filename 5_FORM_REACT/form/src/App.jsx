import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1 - criação de form
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Form em React</h1>
      <MyForm userName="Luan" userEmail="luan@gmail.com" />
    </>
  )
}

export default App
