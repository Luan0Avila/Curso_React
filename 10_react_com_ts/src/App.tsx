// 4 - importação de componentes
import FIrstComponent from "./components/FIrstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, {Category} from "./components/Destructuring";
import { createContext } from "react";
// 6 - useState
import State from "./components/State";


// 8 - type
type textOrnull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)



function App() {

  // 1 - variaveis
  const name: string = "Luan";
  const age: number = 21;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  }

  // 8 - type
  const myText:textOrnull = "Tem algum texto aqui"
  let mySecondText:textOrnull = null;

  const contextValue: IAppContext = {
  language: "JavaScript",
  framework: "React",
  projects: 5
};


  //mySecondText = "Opa";
  const testandoFixed:fixed = "Isso";

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FIrstComponent/>
        <SecondComponent name="Segundo"/>
        <Destructuring title="Primeiro post" content="Algum conteúdo" commentQty={11} tags={["TypeScript", "JavaScript", "React"]} category={Category.TS}/>
        <Destructuring title="Segundo post" content="Outro conteúdo" commentQty={110} tags={["Python", "Django"] } category={Category.P}/>
        <State/>
        {myText && 
        <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
