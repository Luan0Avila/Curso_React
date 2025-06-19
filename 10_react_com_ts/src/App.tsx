// 4 - importação de componentes
import FIrstComponent from "./components/FIrstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

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
      <SecondComponent name="Segundo"/>
      <Destructuring title="Primeiro post" content="Algum conteúdo" commentQty={11} tags={["TypeScript", "JavaScript", "React"]}/>
      <Destructuring title="Segundo post" content="Outro conteúdo" commentQty={110} tags={["Python", "Django"]}/>
      <State/>
    </div>
  );
}

export default App;
