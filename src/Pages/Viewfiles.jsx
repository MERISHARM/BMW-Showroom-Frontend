import React, { useState, useEffect } from 'react';
import series7 from '../assets/series7.jpeg';
import series71 from '../assets/series71.jpeg';
import series72 from '../assets/series72.jpeg';
import series73 from '../assets/series73.jpeg';
import series74 from '../assets/series74.jpeg';
import '../Styles/Viewfiles.css';
import profile from "../assets/profile.png";

const car = [
  { id: 1, img: series7 },
  { id: 2, img: series71 },
  { id: 3, img: series72 },
  { id: 4, img: series73 },
  { id: 5, img: series74 }
];

const review = [
  { id: 1, img: profile, name: "Merisha RM", description: "Good product", date: "20/05/26", rating: 5 },
  { id: 2, img: profile, name: "Jerom RJ", description: "Awesome car with great features and comfort", date: "17/05/26", rating: 5 },
  { id: 3, img: profile, name: "Jimrish RJ", description: "Awesome car with cool features", date: "17/05/26", rating: 5 },
  { id: 4, img: profile, name: "Griffin RM", description: "Unique pattern and excellent performance", date: "04/05/26", rating: 4 }
];

const Viewfiles = () => {
  const [state, setState] = useState(false);
  const [mainImage, setMainImage] = useState(series7);
  const [selectedColor, setSelectedColor] = useState("#0F1012");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    title: '',
    content: '',
    media: null
  });
  const [showDescription, setShowDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('standard');

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'BMW 7 Series',
          text: 'Check out this amazing BMW 7 Series!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };

  const handleRatingClick = (rating) => {
    setReviewForm({ ...reviewForm, rating });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (reviewForm.rating === 0) {
      alert('Please select a rating');
      return;
    }
    if (!reviewForm.title.trim()) {
      alert('Please enter a review title');
      return;
    }
    if (!reviewForm.content.trim()) {
      alert('Please enter your review');
      return;
    }
    console.log('Review submitted:', reviewForm);
    alert("Your review has been submitted successfully!");
    setState(false);
    setReviewForm({ rating: 0, title: '', content: '', media: null });
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const colorOptions = [
    { name: "Black Sapphire", hex: "#0F1012" },
    { name: "Mineral White", hex: "#F4F5F0" },
    { name: "Carbon Black", hex: "#1A1C1E" },
    { name: "Oxide Grey", hex: "#A3A7A6" },
    { name: "Tanzanite Blue", hex: "#192231" }
  ];

  const variants = [
    { id: 'standard', name: 'Standard', price: '1.82 Cr' },
    { id: 'executive', name: 'Executive', price: '1.91 Cr' },
    { id: 'luxury', name: 'Luxury Line', price: '2.15 Cr' }
  ];

  return (
    <div className="view-section-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/New-arrivals">Cars</a></li>
            <li className="breadcrumb-item active">BMW 7 Series</li>
          </ol>
        </nav>

        <div className="product-grid">
          {/* Left Column: Gallery Thumbnails */}
          <div className="gallery-sidebar">
            <div className="thumbnail-list">
              {car.map((c) => (
                <div
                  key={c.id}
                  className={`thumbnail-item ${mainImage === c.img ? 'active' : ''}`}
                  onClick={() => handleImageClick(c.img)}
                >
                  <img src={c.img} alt={`Thumbnail ${c.id}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Main Image */}
          <div className="main-image-container">
            <div className="image-wrapper">
              <img src={mainImage} alt="BMW 7 Series Main" className="main-image" />
              <div className="image-actions">
                <button
                  className={`action-btn ${isWishlisted ? 'active' : ''}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <i className={`bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                </button>
                <div className="share-wrapper">
                  <button className="action-btn" onClick={handleShare} title="Share">
                    <i className="bi bi-share"></i>
                  </button>
                  {showShareTooltip && <div className="share-tooltip">Link copied!</div>}
                </div>
              </div>
              <div className="image-badges">
                <span className="badge-new">2024 Model</span>
                <span className="badge-featured">Featured</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="product-info">
            <div className="brand-info">
              <span className="brand">BMW</span>
              <span className="model">7 Series</span>
            </div>
            <h1 className="product-title">BMW 7 Series Luxury Sedan</h1>

            <div className="rating-section">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <span className="rating-value">4.8</span>
              <span className="review-count">(24 verified reviews)</span>
            </div>

            {/* Price */}
            <div className="price-section">
              <div className="current-price">₹1.82 Cr*</div>
              <div className="price-note">*Ex-showroom price</div>
            </div>

            {/* Variant Selection */}
            <div className="variant-section">
              <label>Select Variant</label>
              <div className="variant-buttons">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`variant-btn ${selectedVariant === variant.id ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    <span className="variant-name">{variant.name}</span>
                    <span className="variant-price">{variant.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="color-section">
              <label>Color Options</label>
              <div className="color-options">
                {colorOptions.map((color, index) => (
                  <button
                    key={index}
                    className={`color-btn ${selectedColor === color.hex ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color.hex)}
                    title={color.name}
                  >
                    <span className="color-swatch" style={{ backgroundColor: color.hex }}></span>
                    <span className="color-name">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="quantity-section">
              <label>Quantity</label>
              <div className="quantity-selector">
                <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <i className="bi bi-dash"></i>
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} disabled={quantity >= 10}>
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn-buy-now">
                <i className="bi bi-cart3"></i>
                Buy Now
              </button>
              <a href="/test-drive" className="btn-test-drive">
                <i className="bi bi-car-front"></i>
                Book Test Drive
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {/* Quick Specs */}
            <div className="quick-specs">
              <div className="spec">
                <i className="bi bi-speedometer2"></i>
                <div>
                  <span>2998 cc</span>
                  <small>Engine</small>
                </div>
              </div>
              <div className="spec">
                <i className="bi bi-fuel-pump"></i>
                <div>
                  <span>Petrol</span>
                  <small>Fuel Type</small>
                </div>
              </div>
              <div className="spec">
                <i className="bi bi-gear"></i>
                <div>
                  <span>Automatic</span>
                  <small>Transmission</small>
                </div>
              </div>
              <div className="spec">
                <i className="bi bi-people"></i>
                <div>
                  <span>5 Seater</span>
                  <small>Seating</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs-section">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button
              className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'overview' && (
              <div className="overview-tab">
                <p className="overview-text">
                  The BMW 7 Series represents the pinnacle of luxury and performance. With its bold design language,
                  cutting-edge technology, and exceptional comfort, it sets new standards in the luxury sedan segment.
                  Experience the perfect blend of dynamic driving and unparalleled luxury.
                </p>
                <div className="highlights">
                  <div className="highlight-item">
                    <i className="bi bi-lightning-charge"></i>
                    <span>Powerful 3.0L TwinPower Turbo engine</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-battery-charging"></i>
                    <span>48V mild-hybrid technology</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-display"></i>
                    <span>BMW Curved Display with iDrive 8</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-cup-straw"></i>
                    <span>Executive Lounge Seating with massage function</span>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-speaker"></i>
                    <span>Bowers & Wilkins Diamond Surround Sound</span>
                  </div>
                </div>
                <button className="read-more-btn" onClick={() => setShowDescription(!showDescription)}>
                  {showDescription ? 'Show Less' : 'Read More'}
                  <i className={`bi ${showDescription ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                </button>
                {showDescription && (
                  <div className="full-description">
                    <p>Experience unmatched luxury with the BMW 7 Series. The vehicle combines sophisticated design with advanced engineering to deliver an extraordinary driving experience. Features include adaptive air suspension, integral active steering, and the latest BMW Personal CoPilot technology for semi-autonomous driving.</p>
                    <p>The interior showcases the finest materials including premium leather, genuine wood trims, and ambient lighting that creates a personalized atmosphere. The rear seats offer executive lounge functionality with massage and ventilation options, making every journey a first-class experience.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="specifications-tab">
                <div className="specs-grid">
                  <div className="specs-card">
                    <h3>Engine & Performance</h3>
                    <div className="spec-row">
                      <span>Engine Type</span>
                      <strong>3.0L TwinPower Turbo</strong>
                    </div>
                    <div className="spec-row">
                      <span>Displacement</span>
                      <strong>2998 cc</strong>
                    </div>
                    <div className="spec-row">
                      <span>Max Power</span>
                      <strong>375 bhp @ 5200 rpm</strong>
                    </div>
                    <div className="spec-row">
                      <span>Max Torque</span>
                      <strong>520 Nm @ 1850 rpm</strong>
                    </div>
                    <div className="spec-row">
                      <span>Transmission</span>
                      <strong>8-Speed Steptronic Automatic</strong>
                    </div>
                    <div className="spec-row">
                      <span>Drivetrain</span>
                      <strong>Rear-Wheel Drive</strong>
                    </div>
                  </div>
                  <div className="specs-card">
                    <h3>Dimensions & Capacity</h3>
                    <div className="spec-row">
                      <span>Length</span>
                      <strong>5391 mm</strong>
                    </div>
                    <div className="spec-row">
                      <span>Width</span>
                      <strong>1950 mm</strong>
                    </div>
                    <div className="spec-row">
                      <span>Height</span>
                      <strong>1544 mm</strong>
                    </div>
                    <div className="spec-row">
                      <span>Wheelbase</span>
                      <strong>3215 mm</strong>
                    </div>
                    <div className="spec-row">
                      <span>Boot Space</span>
                      <strong>540 L</strong>
                    </div>
                    <div className="spec-row">
                      <span>Fuel Tank Capacity</span>
                      <strong>78 L</strong>
                    </div>
                  </div>
                  <div className="specs-card">
                    <h3>Comfort & Convenience</h3>
                    <div className="spec-row">
                      <span>Seating Capacity</span>
                      <strong>5 Seater</strong>
                    </div>
                    <div className="spec-row">
                      <span>No. of Doors</span>
                      <strong>4 Doors</strong>
                    </div>
                    <div className="spec-row">
                      <span>AC</span>
                      <strong>4-Zone Climate Control</strong>
                    </div>
                    <div className="spec-row">
                      <span>Seat Material</span>
                      <strong>Premium Leather</strong>
                    </div>
                    <div className="spec-row">
                      <span>Steering Adjustment</span>
                      <strong>Electric Tilt & Telescopic</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-tab">
                <div className="features-grid">
                  <div className="feature-card">
                    <i className="bi bi-display"></i>
                    <h4>BMW Curved Display</h4>
                    <p>12.3" instrument cluster and 14.9" control display with anti-glare technology</p>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-speaker"></i>
                    <h4>Bowers & Wilkins Audio</h4>
                    <p>Diamond surround sound system with 36 speakers and 3D sound technology</p>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-brightness-high"></i>
                    <h4>Panoramic Sky Lounge</h4>
                    <p>LED roof with dynamic lighting effects and 15,000 light patterns</p>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-car-front"></i>
                    <h4>Adaptive Air Suspension</h4>
                    <p>Automatic ride height adjustment for optimal comfort and handling</p>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-shield-check"></i>
                    <h4>BMW Personal CoPilot</h4>
                    <p>Advanced driver assistance systems for semi-autonomous driving</p>
                  </div>
                  <div className="feature-card">
                    <i className="bi bi-phone"></i>
                    <h4>Remote Software Upgrade</h4>
                    <p>Over-the-air updates for latest features and improvements</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <section className="reviews-section">
          <div className="reviews-header">
            <h3>Customer Reviews</h3>
            <div className="reviews-summary">
              <div className="rating-summary">
                <span className="rating-number">4.8</span>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <span className="total-reviews">Based on 24 reviews</span>
              </div>
              <button className="write-review-btn" onClick={() => setState(true)}>
                <i className="bi bi-pencil-square"></i>
                Write a Review
              </button>
            </div>
          </div>

          <div className="reviews-list">
            {review.map((n) => (
              <div key={n.id} className="review-card">
                <div className="review-card-header">
                  <div className="reviewer">
                    <img src={n.img} alt={n.name} />
                    <div>
                      <h4>{n.name}</h4>
                      <div className="review-date">{n.date}</div>
                    </div>
                  </div>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`bi ${i < n.rating ? 'bi-star-fill' : 'bi-star'}`}></i>
                    ))}
                  </div>
                </div>
                <p className="review-text">{n.description}</p>
                <div className="review-footer">
                  <button className="helpful-btn">
                    <i className="bi bi-hand-thumbs-up"></i>
                    Helpful
                  </button>
                  <button className="report-btn">
                    <i className="bi bi-flag"></i>
                    Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review Modal */}
        {state && (
          <div className="modal-overlay" onClick={() => setState(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Write a Review</h3>
                <button className="modal-close" onClick={() => setState(false)}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              <form onSubmit={handleSubmitReview}>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Your Rating *</label>
                    <div className="star-rating-select">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={`bi ${star <= reviewForm.rating ? 'bi-star-fill' : 'bi-star'}`}
                          onClick={() => handleRatingClick(star)}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Review Title *</label>
                    <input
                      type="text"
                      placeholder="Summarize your experience"
                      value={reviewForm.title}
                      onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Review Content *</label>
                    <textarea
                      placeholder="Share details about your experience with this car..."
                      rows="5"
                      value={reviewForm.content}
                      onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Upload Media (Optional)</label>
                    <div className="upload-area">
                      <i className="bi bi-cloud-upload"></i>
                      <span>Click or drag to upload photos/videos</span>
                      <small>Up to 5 images (max 10MB each)</small>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn-cancel" onClick={() => setState(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-submit">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewfiles;