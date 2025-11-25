import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Investors from './pages/Investors'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Trainings from './pages/Trainings'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/investors" element={<Investors/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/trainings" element={<Trainings/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
