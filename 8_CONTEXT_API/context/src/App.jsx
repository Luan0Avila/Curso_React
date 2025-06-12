import './App.css'
import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Navbar/>
      <h1>CONTEXXT API</h1>
      <Outlet/>
    </>
  )
}

export default App
