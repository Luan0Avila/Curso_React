import { useState } from 'react'
import './App.css'

// 2 - Importando componentes
import FirstComponent from './components/FirstComponent'

// 4 - Template Expression
import { TemplateExpression } from './components/TemplateExpression'

// 5 - Hierarquia
import { MyComponent } from './components/MyComponent'

import { Events } from './components/Events'

function App() {
  const [count, setCount] = useState(0)
  // 3 - Comentários
  return (
    <div className='App'>
      {/* 3 --comentarios no jsx*/}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
