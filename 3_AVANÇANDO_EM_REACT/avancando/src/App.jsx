import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// - 2 Imagem em assets
import city from './assets/city.jpg'

import { Data } from './components/Data'

import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{paddingBottom: "500px"}}>
      <h1>Avançando em React!</h1>
      {/* 1 - imagem em public */}
      <img src="/img1.jpg" alt="Alguma imagem" />

      {/* 2 Imagem em assets */}
      <img src={city} alt="Outra imagem" />
      {/* 3 - Usedata*/}
      <Data/>
      {/* 4 - Render de lista*/}
      <ListRender/>
    </div>
  )
}

export default App
