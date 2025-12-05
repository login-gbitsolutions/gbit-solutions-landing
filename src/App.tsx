import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceAWS from './pages/ServiceAWS'
import ServiceDev from './pages/ServiceDev'
import ServiceMonitoring from './pages/ServiceMonitoring'
import './App.css'

function HomePage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicos/aws" element={<ServiceAWS />} />
      <Route path="/servicos/desenvolvimento" element={<ServiceDev />} />
      <Route path="/servicos/monitoramento" element={<ServiceMonitoring />} />
    </Routes>
  )
}

export default App