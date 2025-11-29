import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { FaLeaf, FaSearch, FaFilter } from 'react-icons/fa'
import './Products.css'

function Products() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('name')

    const allProducts = [
        {
            id: 1,
            name: 'Premium Virginia Tobacco',
            description: 'Premium quality Virginia tobacco leaves, carefully cured and aged for superior flavor and aroma.',
            price: 4500,
            category: 'virginia',
            image: '#'
        },
        {
            id: 2,
            name: 'Fine Cut Tobacco',
            description: 'Finely cut tobacco perfect for hand-rolling enthusiasts. Expertly blended for consistent quality.',
            price: 3800,
            category: 'cut',
            image: '#'
        },
        {
            id: 3,
            name: 'Premium Rolling Tobacco',
            description: 'High-quality rolling tobacco with optimal moisture content and rich, natural flavor.',
            price: 4200,
            category: 'rolling',
            image: '#'
        },
        {
            id: 4,
            name: 'Pipe Tobacco Blend',
            description: 'Aromatic pipe tobacco blend with a smooth, mellow character. Perfect for pipe enthusiasts.',
            price: 5200,
            category: 'pipe',
            image: '#'
        },
        {
            id: 5,
            name: 'Traditional Chewing Tobacco',
            description: 'Traditional chewing tobacco processed with time-honored methods for authentic taste.',
            price: 3200,
            category: 'chewing',
            image: '#'
        },
        {
            id: 6,
            name: 'Premium Cigar Tobacco',
            description: 'Whole-leaf cigar tobacco, sun-grown and aged to perfection for premium cigar production.',
            price: 6500,
            category: 'cigar',
            image: '#'
        },
        {
            id: 7,
            name: 'Burley Tobacco',
            description: 'Rich, full-bodied Burley tobacco with distinctive nutty flavor profile.',
            price: 4100,
            category: 'virginia',
            image: '#'
        },
        {
            id: 8,
            name: 'Aromatic Blend',
            description: 'Carefully crafted aromatic blend with hints of vanilla and caramel.',
            price: 4800,
            category: 'pipe',
            image: '#'
        }
    ]

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'virginia', label: 'Virginia' },
        { id: 'cut', label: 'Fine Cut' },
        { id: 'rolling', label: 'Rolling' },
        { id: 'pipe', label: 'Pipe' },
        { id: 'cigar', label: 'Cigar' },
        { id: 'chewing', label: 'Chewing' }
    ]

    // Filter and sort products
    const filteredProducts = allProducts
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
            return matchesSearch && matchesCategory
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price
                case 'price-high':
                    return b.price - a.price
                case 'name':
                default:
                    return a.name.localeCompare(b.name)
            }
        })

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-image-container">
                    <img
                        src="/assets/tobacco_leaves_product_banner.png"
                        alt="Premium Tobacco Leaves"
                        className="hero-image"
                    />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content fade-in">
                        <FaLeaf className="hero-icon" />
                        <h1>Premium International Tobacco</h1>
                        <p className="hero-subtitle">
                            Connecting global tobacco suppliers and buyers with premium quality products
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <div className="container">
                    <div className="products-header">
                        <h2 className="section-title">Our Premium Selection</h2>
                        <p className="section-subtitle">
                            Explore our curated collection of premium tobacco products from around the world
                        </p>
                    </div>

                    {/* Filter Bar */}
                    <div className="filter-bar">
                        <div className="search-box">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="filter-controls">
                            <div className="category-filters">
                                <FaFilter className="filter-icon" />
                                <div className="category-buttons">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(cat.id)}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="sort-control">
                                <label htmlFor="sort">Sort by:</label>
                                <select
                                    id="sort"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="sort-select"
                                >
                                    <option value="name">Name (A-Z)</option>
                                    <option value="price-low">Price (Low to High)</option>
                                    <option value="price-high">Price (High to Low)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="results-info">
                        <p>Showing <strong>{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''}</p>
                    </div>

                    {/* Products Grid */}
                    <div className="products-grid grid grid-3">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))
                        ) : (
                            <div className="no-results">
                                <FaLeaf className="no-results-icon" />
                                <h3>No products found</h3>
                                <p>Try adjusting your search or filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
