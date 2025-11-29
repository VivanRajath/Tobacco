import React from 'react'
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>VS International Tobacco</h4>
                        <p>Premium tobacco trading platform connecting global suppliers and buyers.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <div className="contact-info">
                            <a href="mailto:info@vstobacco.com" className="contact-link">
                                <FaEnvelope />
                                <span>info@vstobacco.com</span>
                            </a>
                            <a href="tel:+911234567890" className="contact-link">
                                <FaPhone />
                                <span>+91 123 456 7890</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} VS International Tobacco. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
