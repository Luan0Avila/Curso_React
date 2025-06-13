// 3 - alterando valor do context
import ChangeCounter from "../components/ChangeCounter";
import {CounterContext} from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - contexto mais complexo
import { useTitleContext } from "../hooks/useTitleColorContext";

const Contact = () => {
  const {counter} = useCounterContext(CounterContext);

  const {color} = useTitleContext();

  return (
    <div>
        <h1 style={{color: color}}>Página de contato</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter/>
    </div>
  )
}

export default Contact