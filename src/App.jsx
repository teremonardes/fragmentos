import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import NotFound from './pages/NotFound/NotFound'
import Catalogo from './pages/Catalogo/Catalogo'
import Contacto from './pages/Contacto/Contacto'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogo/:material' element={<Catalogo />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
