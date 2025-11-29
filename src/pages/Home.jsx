import React from 'react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaShieldAlt, FaGlobeAmericas, FaHandshake, FaArrowRight, FaStar, FaQuoteLeft, FaCheckCircle, FaUserCheck, FaBoxOpen } from 'react-icons/fa'
import './Home.css'

function Home() {
    const features = [
        {
            icon: <FaGlobeAmericas />,
            title: 'Global Network',
            description: 'Connect with tobacco suppliers and buyers across 50+ countries worldwide.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Verified Suppliers',
            description: 'All suppliers undergo strict KYC verification for secure transactions.'
        },
        {
            icon: <FaLeaf />,
            title: 'Premium Quality',
            description: 'Curated selection of premium tobacco products from certified sources.'
        },
        {
            icon: <FaHandshake />,
            title: 'Trusted Platform',
            description: 'Secure trading environment with transparent pricing and reliable delivery.'
        }
    ]

    const stats = [
        { value: '5000+', label: 'Active Traders' },
        { value: '50+', label: 'Countries' },
        { value: '₹500Cr+', label: 'Trade Volume' },
        { value: '10,000+', label: 'Transactions' }
    ]

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            company: 'Kumar Tobacco Industries',
            location: 'Mumbai, India',
            rating: 5,
            text: 'VS International has transformed our business. The platform is secure, reliable, and connects us with verified buyers globally.'
        },
        {
            name: 'Sarah Johnson',
            company: 'Global Leaf Trading Co.',
            location: 'London, UK',
            rating: 5,
            text: 'Exceptional service! The KYC verification process ensures we only deal with legitimate businesses. Highly recommended.'
        },
        {
            name: 'Ahmed Al-Rashid',
            company: 'Emirates Tobacco LLC',
            location: 'Dubai, UAE',
            rating: 5,
            text: 'Best tobacco trading platform in the market. Quick transactions, premium quality products, and excellent support.'
        }
    ]

    const partners = [
        'International Tobacco Ltd.',
        'Global Leaf Alliance',
        'Premium Tobacco Corp.',
        'World Trade Tobacco',
        'Elite Tobacco Exchange',
        'Continental Trading Co.'
    ]

    const process = [
        {
            icon: <FaUserCheck />,
            title: 'Complete KYC',
            description: 'Submit your business documents for verification'
        },
        {
            icon: <FaBoxOpen />,
            title: 'Browse Products',
            description: 'Explore our premium tobacco collection'
        },
        {
            icon: <FaHandshake />,
            title: 'Place Order',
            description: 'Connect with verified suppliers worldwide'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Secure Delivery',
            description: 'Receive your order with full tracking'
        }
    ]

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-image-container">
                    <img
                        src="/assets/tobacco_plantation_hero.png"
                        alt="Premium Tobacco Plantation"
                        className="hero-image"
                    />
                    <div className="hero-overlay"></div>
                </div>

                <div className="container">
                    <div className="hero-content fade-in">
                        <div className="hero-badge">
                            <FaStar className="badge-icon" />
                            <span>Premium International Trading Platform</span>
                        </div>

                        <h1 className="hero-title">
                            VS International Tobacco
                        </h1>

                        <p className="hero-subtitle">
                            Your trusted partner in global tobacco trading. Connect with verified suppliers
                            and buyers, access premium quality products, and grow your business internationally.
                        </p>

                        <div className="hero-actions">
                            <Link to="/products" className="btn btn-primary btn-large">
                                Browse Products
                                <FaArrowRight />
                            </Link>
                            <Link to="/kyc" className="btn btn-secondary btn-large">
                                Get Verified
                                <FaShieldAlt />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card slide-in">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-description">
                            Four simple steps to start trading premium tobacco products globally
                        </p>
                    </div>

                    <div className="process-grid">
                        {process.map((step, index) => (
                            <div key={index} className="process-card fade-in">
                                <div className="process-number">{index + 1}</div>
                                <div className="process-icon">
                                    {step.icon}
                                </div>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-description">
                            Experience the most trusted and efficient tobacco trading platform
                        </p>
                    </div>

                    <div className="features-grid grid grid-2">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card fade-in">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-description">
                            Trusted by thousands of traders worldwide
                        </p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card fade-in">
                                <FaQuoteLeft className="quote-icon" />
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="star-icon" />
                                    ))}
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <h4 className="author-name">{testimonial.name}</h4>
                                        <p className="author-company">{testimonial.company}</p>
                                        <p className="author-location">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="partners-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Trusted Partners</h2>
                        <p className="section-description">
                            Partnering with leading tobacco businesses worldwide
                        </p>
                    </div>

                    <div className="partners-grid">
                        {partners.map((partner, index) => (
                            <div key={index} className="partner-card">
                                <FaHandshake className="partner-icon" />
                                <h4 className="partner-name">{partner}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Trading?</h2>
                        <p className="cta-description">
                            Join thousands of traders worldwide and access premium tobacco products today
                        </p>
                        <div className="cta-actions">
                            <Link to="/kyc" className="btn btn-primary btn-large">
                                Complete KYC Verification
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
