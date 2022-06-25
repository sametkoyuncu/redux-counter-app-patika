import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from '../redux/counter/counterSlice'

const Counter = () => {
  const [amount, setAmount] = useState(0)
  const counterValue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{counterValue}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
    </>
  )
}

export default Counter
