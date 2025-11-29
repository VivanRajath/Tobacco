import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)

    const isActive = (path) => location.pathname === path ? 'active' : ''

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-brand">
                        <FaLeaf className="brand-icon" />
                        <span>VS International Tobacco</span>
                    </Link>

                    <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link to="/products" className={`nav-link ${isActive('/products')}`} onClick={() => setIsOpen(false)}>
                            Products
                        </Link>
                        <Link to="/kyc" className={`nav-link ${isActive('/kyc')}`} onClick={() => setIsOpen(false)}>
                            KYC Verification
                        </Link>
                        <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`} onClick={() => setIsOpen(false)}>
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
