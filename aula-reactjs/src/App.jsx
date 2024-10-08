import { useState } from 'react'
import Header from './assets/componentes/Header'
import Home from './assets/componentes/Home'
import Footer from './assets/componentes/Footer'
import Escocia from './assets/componentes/Escocia'
import Muralha from './assets/componentes/Muralha'
import Grandcanyon from './assets/componentes/Grandcanyon'
import Aruba from './assets/componentes/Aruba'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Escocia />
      <Grandcanyon />
      <Muralha />
      <Aruba />
      <Footer />
    </>
  )
}

export default App
