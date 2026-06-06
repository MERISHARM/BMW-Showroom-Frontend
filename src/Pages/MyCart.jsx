import React, { useState, useEffect } from 'react';
import '../Styles/MyCart.css';
import bmwm5 from '../assets/BMWM5.jpeg';
import bmw2series from '../assets/bmw2series.jpg';
import series3 from '../assets/series3.jpeg';
import series4 from '../assets/series4.jpeg';

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'BMW M5 Competition',
      price: 119900,
      originalPrice: 129900,
      quantity: 1,
      image: bmwm5,
      category: 'Performance Sedan',
      engine: '4.4L V8 Twin-Turbo',
      horsepower: '617 HP',
      inStock: true,
      warranty: '3 years / 36,000 miles',
      delivery: 'Free Shipping'
    },
    {
      id: 2,
      name: 'BMW 3 Series',
      price: 44500,
      originalPrice: 47500,
      quantity: 2,
      image: series3,
      category: 'Luxury Sedan',
      engine: '2.0L 4-Cylinder',
      horsepower: '255 HP',
      inStock: true,
      warranty: '3 years / 36,000 miles',
      delivery: 'Free Shipping'
    },
    {
      id: 3,
      name: 'BMW 4 Series Coupe',
      price: 49700,
      originalPrice: 52700,
      quantity: 1,
      image: series4,
      category: 'Luxury Coupe',
      engine: '2.0L 4-Cylinder Turbo',
      horsepower: '255 HP',
      inStock: true,
      warranty: '3 years / 36,000 miles',
      delivery: 'Free Shipping'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [savedItems, setSavedItems] = useState([]);
  const [shippingMethod, setShippingMethod] = useState('standard');

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalSubtotal = cartItems.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.quantity, 0);
  const savings = originalSubtotal - subtotal;
  
  const shippingCost = shippingMethod === 'express' ? 299 : (shippingMethod === 'overnight' ? 599 : 0);
  const tax = subtotal * 0.08; // 8% tax
  const promoDiscount = promoApplied ? subtotal * 0.1 : discount; // 10% off
  const total = subtotal + shippingCost + tax - promoDiscount;

  // Load saved items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedForLater');
    if (saved) {
      setSavedItems(JSON.parse(saved));
    }
  }, []);

  // Save saved items to localStorage
  useEffect(() => {
    localStorage.setItem('savedForLater', JSON.stringify(savedItems));
  }, [savedItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > 10) {
      alert('Maximum 10 units per vehicle');
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const saveForLater = (item) => {
    setSavedItems(prev => [...prev, { ...item, savedDate: new Date().toISOString() }]);
    removeItem(item.id);
  };

  const moveToCart = (savedItem) => {
    setCartItems(prev => [...prev, { ...savedItem, quantity: 1 }]);
    setSavedItems(prev => prev.filter(item => item.id !== savedItem.id));
  };

  const removeSavedItem = (id) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'BMW2024') {
      setPromoApplied(true);
      setDiscount(subtotal * 0.1);
      alert('Promo code applied! 10% discount added.');
    } else if (promoCode.toUpperCase() === 'FREESHIP') {
      setShippingMethod('free');
      alert('Free shipping applied!');
    } else {
      alert('Invalid promo code');
    }
    setPromoCode('');
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add some items to proceed.');
      return;
    }
    alert(`Proceeding to checkout\nTotal: $${total.toLocaleString()}`);
    // window.location.href = '/checkout';
  };

  const getSavingsBadge = (original, current) => {
    const saving = original - current;
    const percentage = ((saving / original) * 100).toFixed(0);
    if (saving > 0) {
      return <span className="savings-badge">Save ${saving.toLocaleString()} ({percentage}%)</span>;
    }
    return null;
  };

  return (
    <div className="cart-wrapper">
      <div className="container">
        {/* Cart Header */}
        <div className="cart-header">
          <h1 className="cart-title">My Cart</h1>
          <p className="cart-subtitle">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        {cartItems.length === 0 && savedItems.length === 0 ? (
          // Empty Cart State
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="bi bi-cart-x"></i>
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any vehicles to your cart yet.</p>
            <button className="continue-shopping-btn" onClick={() => window.location.href = '/car-models'}>
              
                <i className="bi bi-arrow-left"></i> Continue Shopping
         
            </button>
          </div>
        ) : (
          <div className="cart-content">
            {/* Left Column - Cart Items */}
            <div className="cart-items-section">
              {/* Cart Items */}
              {cartItems.length > 0 && (
                <div className="cart-items-container">
                  <div className="cart-items-header">
                    <h3>Cart Items ({cartItems.length})</h3>
                    <button className="clear-cart-btn" onClick={() => setCartItems([])}>
                      Clear Cart
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                        {item.inStock && <span className="in-stock-badge">In Stock</span>}
                      </div>
                      
                      <div className="cart-item-details">
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p className="item-category">{item.category}</p>
                          <div className="item-specs">
                            <span><i className="bi bi-engine"></i> {item.engine}</span>
                            <span><i className="bi bi-speedometer2"></i> {item.horsepower}</span>
                          </div>
                          {getSavingsBadge(item.originalPrice, item.price)}
                        </div>
                        
                        <div className="item-actions">
                          <div className="quantity-control">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <span>{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= 10}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                          
                          <div className="item-price">
                            <span className="current-price">${(item.price * item.quantity).toLocaleString()}</span>
                            {item.originalPrice && (
                              <span className="original-price">${(item.originalPrice * item.quantity).toLocaleString()}</span>
                            )}
                          </div>
                          
                          <div className="item-buttons">
                            <button className="save-later-btn" onClick={() => saveForLater(item)}>
                              <i className="bi bi-bookmark"></i> Save for Later
                            </button>
                            <button className="remove-btn" onClick={() => removeItem(item.id)}>
                              <i className="bi bi-trash"></i> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Saved for Later Items */}
              {savedItems.length > 0 && (
                <div className="saved-items-container">
                  <h3 className="saved-title">
                    <i className="bi bi-bookmark-check"></i> Saved for Later ({savedItems.length})
                  </h3>
                  <div className="saved-items-grid">
                    {savedItems.map((item) => (
                      <div key={item.id} className="saved-item">
                        <img src={item.image} alt={item.name} />
                        <div className="saved-item-info">
                          <h4>{item.name}</h4>
                          <p>${item.price.toLocaleString()}</p>
                          <button onClick={() => moveToCart(item)} className="move-to-cart-btn">
                            Move to Cart
                          </button>
                          <button onClick={() => removeSavedItem(item.id)} className="remove-saved-btn">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="order-summary-section">
              <div className="summary-card">
                <h3>Order Summary</h3>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                
                {savings > 0 && (
                  <div className="summary-row savings">
                    <span>You Save</span>
                    <span>-${savings.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <div className="shipping-options">
                    <select value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}>
                      <option value="standard">Standard Shipping - Free</option>
                      <option value="express">Express Shipping - $299</option>
                      <option value="overnight">Overnight Shipping - $599</option>
                    </select>
                  </div>
                </div>
                
                <div className="summary-row">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
                
                {promoApplied && (
                  <div className="summary-row discount">
                    <span>Promo Discount (10%)</span>
                    <span>-${promoDiscount.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                
                {/* Promo Code */}
                <div className="promo-section">
                  <div className="promo-input-group">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button onClick={applyPromoCode}>Apply</button>
                  </div>
                  <div className="promo-hint">
                    <small>Try: BMW2024 (10% off) or FREESHIP</small>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout <i className="bi bi-arrow-right"></i>
                </button>
                
                {/* Payment Methods */}
                <div className="payment-methods">
                  <p>Secure Payment Methods</p>
                  <div className="payment-icons">
                    <i className="bi bi-credit-card"></i>
                    <i className="bi bi-paypal"></i>
                    <i className="bi bi-apple"></i>
                    <i className="bi bi-google"></i>
                  </div>
                </div>
                
                {/* Trust Badges */}
                <div className="trust-badges">
                  <div className="trust-item">
                    <i className="bi bi-shield-check"></i>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="trust-item">
                    <i className="bi bi-truck"></i>
                    <span>Free Delivery</span>
                  </div>
                  <div className="trust-item">
                    <i className="bi bi-arrow-repeat"></i>
                    <span>30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;