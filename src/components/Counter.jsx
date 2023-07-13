import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCounter,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../redux-toolkit/features/counter/slice";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const { counter } = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Counter is <span style={{ color: "red" }}>{counter}</span>
      </h1>

      <div>
        <h3>By Default</h3>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>

      <div>
        <h3>By Amount</h3>
        <div>
          <input
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </div>
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          increment
        </button>
        <button onClick={() => dispatch(decrementByAmount(amount))}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
