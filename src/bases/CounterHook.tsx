import { useCounter } from "../hooks/useCounter";


interface Props {
  initialValue?: number
}

export const CounterHook = ({ initialValue = 0 }: Props) => {

  const { elementToAnimate, counter, handleClick } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>counterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  )
}
