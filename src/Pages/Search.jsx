import React, { useState, useEffect } from 'react';
import '../Styles/Search.css';
import bmwm5 from '../assets/BMWM5.jpeg';
import bmw2series from '../assets/bmw2series.jpg';
import series3 from '../assets/series3.jpeg';
import series4 from '../assets/series4.jpeg';
import series5 from '../assets/series5.jpeg';
import series7 from '../assets/series7.jpeg';
import series8 from '../assets/series8.jpeg';
import BMWX1 from '../assets/BMWX1.jpeg';
import BMWX3 from '../assets/BMWX3.jpeg';
import BMWX5 from '../assets/BMWX5.jpeg';
import BMWX6 from '../assets/BMWX6.jpeg';
import BMWM2 from '../assets/BMWM2.jpeg';
import BMWM3 from '../assets/BMWM3.jpeg';
import BMWM4 from '../assets/BMWM4.jpeg';
import BMWi4 from '../assets/BMWi4.jpeg';
import BMWiX from '../assets/BMWiX.jpeg';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    fuelType: 'all',
    transmission: 'all',
    seating: 'all',
    year: 'all'
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Sample car database
  const carDatabase = [
    { id: 1, name: 'BMW M5 Competition', category: 'sedan', price: 119900, originalPrice: 129900, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 617, engine: '4.4L V8 Twin-Turbo', image: bmwm5, rating: 4.9, inStock: true, isNew: true, isFeatured: true },
    { id: 2, name: 'BMW 2 Series', category: 'coupe', price: 38400, originalPrice: 41400, fuelType: 'petrol', transmission: 'automatic', seating: 4, year: 2024, horsepower: 255, engine: '2.0L 4-Cylinder', image: bmw2series, rating: 4.7, inStock: true, isNew: true },
    { id: 3, name: 'BMW 3 Series', category: 'sedan', price: 44500, originalPrice: 47500, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 255, engine: '2.0L 4-Cylinder Turbo', image: series3, rating: 4.8, inStock: true },
    { id: 4, name: 'BMW 4 Series Coupe', category: 'coupe', price: 49700, originalPrice: 52700, fuelType: 'petrol', transmission: 'automatic', seating: 4, year: 2024, horsepower: 255, engine: '2.0L 4-Cylinder Turbo', image: series4, rating: 4.7, inStock: true },
    { id: 5, name: 'BMW 5 Series', category: 'sedan', price: 57900, originalPrice: 61900, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 335, engine: '3.0L 6-Cylinder', image: series5, rating: 4.8, inStock: true },
    { id: 6, name: 'BMW 7 Series', category: 'sedan', price: 96400, originalPrice: 102400, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 375, engine: '3.0L 6-Cylinder', image: series7, rating: 4.9, inStock: true, isLuxury: true },
    { id: 7, name: 'BMW 8 Series', category: 'coupe', price: 89800, originalPrice: 95800, fuelType: 'petrol', transmission: 'automatic', seating: 4, year: 2024, horsepower: 523, engine: '4.4L V8', image: series8, rating: 4.9, inStock: true, isLuxury: true },
    { id: 8, name: 'BMW X1', category: 'suv', price: 39500, originalPrice: 42500, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 241, engine: '2.0L 4-Cylinder', image: BMWX1, rating: 4.6, inStock: true },
    { id: 9, name: 'BMW X3', category: 'suv', price: 48900, originalPrice: 51900, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 248, engine: '2.0L 4-Cylinder', image: BMWX3, rating: 4.7, inStock: true },
    { id: 10, name: 'BMW X5', category: 'suv', price: 65700, originalPrice: 69700, fuelType: 'petrol', transmission: 'automatic', seating: 7, year: 2024, horsepower: 335, engine: '3.0L 6-Cylinder', image: BMWX5, rating: 4.8, inStock: true },
    { id: 11, name: 'BMW X6', category: 'suv', price: 74900, originalPrice: 79900, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 523, engine: '4.4L V8', image: BMWX6, rating: 4.8, inStock: true },
    { id: 12, name: 'BMW M2', category: 'performance', price: 63200, originalPrice: 67200, fuelType: 'petrol', transmission: 'automatic', seating: 4, year: 2024, horsepower: 453, engine: '3.0L 6-Cylinder Twin-Turbo', image: BMWM2, rating: 4.9, inStock: true, isMseries: true },
    { id: 13, name: 'BMW M3', category: 'performance', price: 74300, originalPrice: 79300, fuelType: 'petrol', transmission: 'automatic', seating: 5, year: 2024, horsepower: 473, engine: '3.0L 6-Cylinder Twin-Turbo', image: BMWM3, rating: 4.9, inStock: true, isMseries: true },
    { id: 14, name: 'BMW M4', category: 'performance', price: 78400, originalPrice: 83400, fuelType: 'petrol', transmission: 'automatic', seating: 4, year: 2024, horsepower: 473, engine: '3.0L 6-Cylinder Twin-Turbo', image: BMWM4, rating: 4.9, inStock: true, isMseries: true },
    { id: 15, name: 'BMW i4', category: 'electric', price: 56400, originalPrice: 59400, fuelType: 'electric', transmission: 'automatic', seating: 5, year: 2024, horsepower: 335, engine: 'Electric Motor', image: BMWi4, rating: 4.7, inStock: true, isElectric: true },
    { id: 16, name: 'BMW iX', category: 'electric', price: 87100, originalPrice: 92100, fuelType: 'electric', transmission: 'automatic', seating: 5, year: 2024, horsepower: 516, engine: 'Dual Electric Motors', image: BMWiX, rating: 4.8, inStock: true, isElectric: true }
  ];

  // Search and filter logic
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let results = [...carDatabase];

      // Search term filter
      if (searchTerm) {
        results = results.filter(car =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Category filter
      if (filters.category !== 'all') {
        results = results.filter(car => car.category === filters.category);
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        results = results.filter(car => car.price >= min && (max ? car.price <= max : true));
      }

      // Fuel type filter
      if (filters.fuelType !== 'all') {
        results = results.filter(car => car.fuelType === filters.fuelType);
      }

      // Transmission filter
      if (filters.transmission !== 'all') {
        results = results.filter(car => car.transmission === filters.transmission);
      }

      // Seating filter
      if (filters.seating !== 'all') {
        results = results.filter(car => car.seating === parseInt(filters.seating));
      }

      // Year filter
      if (filters.year !== 'all') {
        results = results.filter(car => car.year === parseInt(filters.year));
      }

      // Sorting
      switch (sortBy) {
        case 'price_low':
          results.sort((a, b) => a.price - b.price);
          break;
        case 'price_high':
          results.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          results.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          results.sort((a, b) => b.year - a.year);
          break;
        default:
          results.sort((a, b) => a.name.localeCompare(b.name));
      }

      setSearchResults(results);
      setLoading(false);
    }, 500);
  }, [searchTerm, filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      fuelType: 'all',
      transmission: 'all',
      seating: 'all',
      year: 'all'
    });
    setSearchTerm('');
    setSortBy('relevance');
  };

  const addToCart = (car) => {
    alert(`Added ${car.name} to cart!`);
  };

  const addToWishlist = (car) => {
    alert(`Added ${car.name} to wishlist!`);
  };

  const getCategoryLabel = (category) => {
    const labels = {
      sedan: 'Sedan',
      coupe: 'Coupe',
      suv: 'SUV',
      performance: 'Performance',
      electric: 'Electric'
    };
    return labels[category] || category;
  };

  return (
    <div className="search-wrapper">
      <div className="container">
        {/* Search Header */}
        <div className="search-header">
          <h1 className="search-title">Find Your Perfect BMW</h1>
          <p className="search-subtitle">Search through our collection of premium vehicles</p>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search by model name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
          <button className="filter-toggle-btn" onClick={() => setShowFilters(!showFilters)}>
            <i className="bi bi-funnel"></i>
            Filters
          </button>
        </div>

        {/* Filter Panel */}
        <div className={`filter-panel ${showFilters ? 'show' : ''}`}>
          <div className="filter-grid">
            <div className="filter-group">
              <label>Category</label>
              <select value={filters.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
                <option value="all">All Categories</option>
                <option value="sedan">Sedan</option>
                <option value="coupe">Coupe</option>
                <option value="suv">SUV</option>
                <option value="performance">Performance</option>
                <option value="electric">Electric</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Price Range</label>
              <select value={filters.priceRange} onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
                <option value="all">All Prices</option>
                <option value="0-40000">Under $40,000</option>
                <option value="40000-60000">$40,000 - $60,000</option>
                <option value="60000-80000">$60,000 - $80,000</option>
                <option value="80000-100000">$80,000 - $100,000</option>
                <option value="100000-999999">$100,000+</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Fuel Type</label>
              <select value={filters.fuelType} onChange={(e) => handleFilterChange('fuelType', e.target.value)}>
                <option value="all">All Types</option>
                <option value="petrol">Petrol</option>
                <option value="electric">Electric</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Transmission</label>
              <select value={filters.transmission} onChange={(e) => handleFilterChange('transmission', e.target.value)}>
                <option value="all">All</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Seating Capacity</label>
              <select value={filters.seating} onChange={(e) => handleFilterChange('seating', e.target.value)}>
                <option value="all">Any</option>
                <option value="4">4 Seats</option>
                <option value="5">5 Seats</option>
                <option value="7">7 Seats</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Year</label>
              <select value={filters.year} onChange={(e) => handleFilterChange('year', e.target.value)}>
                <option value="all">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          
          <div className="filter-actions">
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
            <div className="results-count">
              {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
            </div>
          </div>
        </div>

        {/* Sort and View Controls */}
        <div className="controls-bar">
          <div className="sort-control">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="relevance">Relevance</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
          
          <div className="view-controls">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <i className="bi bi-list-ul"></i>
            </button>
          </div>
        </div>

        {/* Results Section */}
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Searching for your perfect BMW...</p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="no-results">
            <i className="bi bi-emoji-frown"></i>
            <h3>No vehicles found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
            <button className="clear-filters-btn" onClick={clearFilters}>Clear All Filters</button>
          </div>
        ) : (
          <div className={`results-container ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
            {searchResults.map((car) => (
              <div key={car.id} className="car-result-card">
                {car.isNew && <span className="badge-new">New</span>}
                {car.isFeatured && <span className="badge-featured">Featured</span>}
                {car.isElectric && <span className="badge-electric">Electric</span>}
                
                <div className="car-result-image">
                  <img src={car.image} alt={car.name} />
                  <div className="image-overlay">
                    <button className="quick-view" onClick={() => alert(`Quick view: ${car.name}`)}>
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="car-result-content">
                  <div className="car-result-header">
                    <h3>{car.name}</h3>
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <span>{car.rating}</span>
                    </div>
                  </div>
                  
                  <div className="car-specs">
                    <span><i className="bi bi-speedometer2"></i> {car.horsepower} HP</span>
                    <span><i className="bi bi-fuel-pump"></i> {car.fuelType === 'electric' ? 'Electric' : 'Petrol'}</span>
                    <span><i className="bi bi-calendar"></i> {car.year}</span>
                    <span><i className="bi bi-people"></i> {car.seating} Seats</span>
                  </div>
                  
                  <div className="car-result-price">
                    <div className="price-info">
                      <span className="current-price">${car.price.toLocaleString()}</span>
                      {car.originalPrice && (
                        <span className="original-price">${car.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    {car.originalPrice && (
                      <div className="savings">
                        Save ${(car.originalPrice - car.price).toLocaleString()}
                      </div>
                    )}
                  </div>
                  
                  <div className="car-result-actions">
                    <button className="wishlist-btn" onClick={() => addToWishlist(car)}>
                      <i className="bi bi-heart"></i>
                    </button>
                    <button className="cart-btn" onClick={() => addToCart(car)}>
                      Add to Cart
                    </button>
                    <button className="details-btn" onClick={() => alert(`View details: ${car.name}`)}>
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;