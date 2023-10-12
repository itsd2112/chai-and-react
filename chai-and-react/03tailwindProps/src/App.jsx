import { useState } from 'react'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count+1);
  }
  return (
    <>
     <h1 className='bg-pink-800 rounded-xl p-8 text-black mb-2'>Hello Tailwind and Props</h1>
<button className="mb-2" onClick={incrementCount}>Count: {count}</button>
    <Card userName="Deepak" btnTxt="click me"/>
    <Card userName="Adam"/>
    </>
  )
}

export default App
