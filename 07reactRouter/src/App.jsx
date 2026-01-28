import { useState } from 'react'
import Header from './components/Headers/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Home/>
    <Footer/>

    </>
  )
}

export default App
