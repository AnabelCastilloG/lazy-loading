import { useState } from 'react';
import './Counter.css'

const Counter = () => {
  const [ count, setCount] = useState(0)
  return (
    <>
      <h1 className='title'>Counter</h1>
      <main className='main'>
        <button className='sum' onClick={() => setCount(count + 1)}>+</button>
        <h2 className='counter'>{ count }</h2>
        <button className='res' onClick={() => count !== 0 ? setCount(count - 1) : null}>-</button>
      </main>
    </>
  );
};
export default Counter;
