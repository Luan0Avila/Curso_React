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
  { id: 1, brand: "KIA", color: "Branco", km: 20000},
  { id: 1, brand: "Renault", color: "Azul", km: 32000}
]

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
    </div>
  )
}

export default App
