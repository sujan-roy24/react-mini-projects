import { useState } from 'react';
import './Counter.css';

const MIN_COUNT = 0;

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-number">{count}</h1>
      <div className="button-container">
        <button className="counter-btn" onClick={reset}>
          Reset
        </button>
        <button className="counter-btn" onClick={decrement} disabled={count === MIN_COUNT}>
          Decrease
        </button>
        <button className="counter-btn" onClick={increment}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter; 