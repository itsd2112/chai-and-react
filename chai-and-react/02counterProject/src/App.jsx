import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) // useState is a Hook in react.

  const addValue = () => {
    counter += 1;
    setCounter(counter);
  }

  const RemoveValue = () => {
    counter -= 1;
    setCounter(counter);
  }
  return (
    <>
      <h1>Hello React.</h1>
      <h3>counter value: {counter}</h3>
      <button onClick={addValue} 
      >Add Value</button> <br/>
      <button onClick={RemoveValue}>Remove Value</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
