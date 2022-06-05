import { useReducer } from "react"

interface CounterState {
  count: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  count: 0,
  previous: 0,
  changes: 0
}

interface Props {
  initialValue?: number
}

type CounterAction =
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        ...state,
        previous:state.count,
        changes:action.payload.value,
        count : state.count + action.payload.value
      }
    case "reset":
      return {
        count: 0,
        previous: 0,
        changes: 0
      }
    default:
      return state;
  }
}

export const CounterReducer = ({ initialValue = 0 }: Props) => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  const handleReset = (e: any) => {
    e.preventDefault();
    dispatch({ type: 'reset' })
  }
  const handleIncrease = (value: number) => {
    dispatch({ type: 'increaseBy', payload:{value}}) 
  }
  return (
    <>
      <h1>counter {counterState.count}</h1>
      <pre>{ JSON.stringify(counterState,null,2) }</pre>
      <button onClick={()=> handleIncrease(1)}>+1</button>
      <button onClick={()=> handleIncrease(5)}>+5</button>
      <button onClick={()=> handleIncrease(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}
