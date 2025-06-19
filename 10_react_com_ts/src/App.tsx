
function App() {

  // 1 - variaveis
  const name: string = "Luan";
  const age: number = 21;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
    </div>
  );
}

export default App;
