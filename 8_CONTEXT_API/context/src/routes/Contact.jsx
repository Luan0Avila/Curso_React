// 3 - alterando valor do context
import ChangeCounter from "../components/ChangeCounter";
import {CounterContext} from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

const Contact = () => {
  const {counter} = useCounterContext(CounterContext);
  return (
    <div>
        <h1>Página de contato</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter/>
    </div>
  )
}

export default Contact