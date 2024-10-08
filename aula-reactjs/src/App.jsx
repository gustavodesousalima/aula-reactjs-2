import { useState } from 'react'
import Header from './assets/componentes/Header'
import Home from './assets/componentes/Home'
import Footer from './assets/componentes/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
