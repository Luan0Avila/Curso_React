import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// - 2 Imagem em assets
import city from './assets/city.jpg'

import { Data } from './components/Data'

import ListRender from './components/ListRender'

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - Desestruturando props
import CarDetails from './components/CarDetails'

// 11 - Renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  { id: 2, brand: "KIA", color: "Branco", km: 20000},
  { id: 3, brand: "Renault", color: "Azul", km: 32000}
]

// 12 - Fragment
import Fragment from './components/Fragment'

// 13 - Children
import Container from './components/Container'

// 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction'

// 15 - State lift
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'


function App() {
  const [count, setCount] = useState(0)

  // 14 - Função em prop
  function shoMessage() {
    console.log("Evento do componente pai")
  }

  // 15 - State lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
      {/* 7 - render condicional*/}
      <ConditionalRender/>
      {/*8 - props*/}
      <ShowUserName name="Luna"/>
      {/* 9 - Desestruturando props*/}
      <CarDetails brand="Ford" km={100000} color="Cinza"/>  
      {/* 10 - Reaproveitando componentes*/}
      <CarDetails brand="Fiat" km={999} color="Branco"/>
      <CarDetails brand="Audi" km={500} color="Azul"/>
      {/* 11 - Renderização de lista com componente*/}
      {cars.map((car) => (
        <CarDetails
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km}/>
      ))}
      {/* 12 - Fragment*/}
      <Fragment/>
      {/* 13 - Children*/}
      <Container>
        <h2>Teste</h2>
        <p>Meu container</p>
      </Container>
      {/* 14 - Função em prop*/}
      <ExecuteFunction myFunction={shoMessage}/>
      {/* 15 - state lift*/}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
