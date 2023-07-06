import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componets/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'
import Footer from './componets/Footer'


const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer content="Feito pela Ana com muito amor ♡" />
    </BrowserRouter>
  )
}

export default Router