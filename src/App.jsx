import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import KYCVerification from './pages/KYCVerification'
import BuyerDashboard from './pages/BuyerDashboard'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/kyc" element={<KYCVerification />} />
          <Route path="/dashboard" element={<BuyerDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
