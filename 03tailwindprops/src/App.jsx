import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)
 let myObj = {name : "Neha", age : 24}
 let newArray = [12,5,3,5];
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards username ="Coffee" someObj = {newArray} btnText = "Visit Me"/>
      <Cards btnText = "Visit Me"/>

    </>
  )
}

export default App
