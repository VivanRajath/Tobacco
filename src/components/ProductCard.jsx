import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import './ProductCard.css'

function ProductCard({ name, description, price, image }) {
    return (
        <div className="product-card fade-in">
            <div className="product-image-wrapper">
                <img src={image} alt={name} className="product-image" />
                <div className="product-overlay">
                    <span className="premium-badge">Premium Quality</span>
                </div>
            </div>

            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>

                <div className="product-footer">
                    <div className="product-price">
                        <span className="price-label">Price</span>
                        <span className="price-value">₹{price.toLocaleString()}/kg</span>
                    </div>

                    <button className="btn btn-primary">
                        <FaQuoteLeft />
                        Get Quote
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
