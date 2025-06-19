// 4 - importação de componentes
import FIrstComponent from "./components/FIrstComponent";


function App() {

  // 1 - variaveis
  const name: string = "Luan";
  const age: number = 21;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FIrstComponent/>
    </div>
  );
}

export default App;
