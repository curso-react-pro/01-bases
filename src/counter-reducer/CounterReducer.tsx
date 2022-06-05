import { useReducer } from "react"
import { doIncreaseBy, doReset } from "./actions/actions";
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';

const INITIAL_STATE: CounterState = {
  count: 0,
  previous: 0,
  changes: 0
}

interface Props {
  initialValue?: number
}

export const CounterReducer = ({ initialValue = 0 }: Props) => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  const handleReset = (e: any) => {
    e.preventDefault();
    dispatch(doReset());
  }
  const handleIncrease = (value: number) => {
    dispatch(doIncreaseBy(value));
  }
  return (
    <>
      <h1>counter reducer segmenteado {counterState.count}</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => handleIncrease(1)}>+1</button>
      <button onClick={() => handleIncrease(5)}>+5</button>
      <button onClick={() => handleIncrease(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}
