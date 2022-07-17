import React, { useCallback, useState } from 'react';
import Message from './components/Message';
const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("app rendering");

  const handleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {toggle ? "on" : "off"}
      <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
      <h1>Count: {count}</h1>
      <button onClick={() => { setCount((count) => count + 1) }}>Increment</button>
      
      <Message numberOfMessage={count} onHandleIncrement={handleIncrementMessage} />
    </div>
  )
}

export default App



