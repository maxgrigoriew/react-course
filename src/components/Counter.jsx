import React, { useState } from 'react';

const Counter = () => {
  const [counter, changeCounter] = useState(0)

  return (
    <div>
      <h1>{counter}</h1>
      <button
        className='btn text-success'
        onClick={() => changeCounter(counter + 1)}
      >Кнопка</button>
    </div>
  )
}
export default Counter;