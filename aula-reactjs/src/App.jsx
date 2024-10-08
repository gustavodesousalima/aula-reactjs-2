import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escocia" element={<Escocia />} />
        <Route path="/grandcanyon" element={<Grandcanyon />} />
        <Route path="/muralha" element={<Muralha />} />
        <Route path="/aruba" element={<Aruba />} />
      </Routes>
      <Footer />
    </Router>

    </>
  )
}

export default App
