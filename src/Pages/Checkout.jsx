import React, { useState } from 'react';
import '../Styles/Checkout.css';
import bmwm5 from '../assets/BMWM5.jpeg';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Shipping Address
    country: 'United States',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    // Payment
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false,
  });

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Cart items (demo data)
  const [cartItems] = useState([
    {
      id: 1,
      name: 'BMW M5 Competition',
      price: 119900,
      quantity: 1,
      image: bmwm5,
      warranty: 'Premium Protection (3 years)',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    // Basic validation per step
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        alert('Please fill in all personal information fields.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.streetAddress || !formData.city || !formData.state || !formData.postalCode) {
        alert('Please complete your shipping address.');
        return;
      }
    }
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (paymentMethod === 'credit-card') {
      if (!formData.cardName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
        alert('Please enter valid credit card details.');
        return;
      }
    }
    
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 2000);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = Math.round(subtotal * 0.08); // 8% tax
  const total = subtotal + shipping + tax;

  if (orderComplete) {
    return (
        
      <div className="checkout-wrapper">
        <div className="container py-5">
          <div className="order-success-panel">

            <div className="success-icon">✓</div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase. Your order has been received and is being processed.</p>
            <div className="order-info-box">
              <div className="order-info-row">
                <span>Order Number:</span>
                <strong>#BMW-{Math.floor(Math.random() * 10000)}-{Date.now().toString().slice(-6)}</strong>
              </div>
              <div className="order-info-row">
                <span>Estimated Delivery:</span>
                <strong>5-7 business days</strong>
              </div>
              <div className="order-info-row">
                <span>Total Paid:</span>
                <strong>${total.toLocaleString()}</strong>
              </div>
            </div>
            <div className="success-actions">
              <button className="btn-secondary" onClick={() => window.location.href = '/orders'}>
                View My Orders
              </button>
              <button className="btn-primary" onClick={() => window.location.href = '/'}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    
    <div className="checkout-wrapper">
      <div className="container py-4">
        <div className="mb-3"><h1 className='order-main-title pb-2'>CHECKOUT</h1></div>
        {/* Progress Steps */}
        <div className="checkout-progress">
          <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Personal Info</div>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Shipping</div>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Payment</div>
          </div>
        </div>

        <div className="row g-5">
          {/* Left Column: Form Section */}
          <div className="col-12 col-lg-7">
            <div className="checkout-form-container">
              <form onSubmit={step === 3 ? handlePlaceOrder : handleNextStep}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="form-step">
                    <div className="panel-header">
                      <h3>Personal Information</h3>
                      <p>Enter your contact details for order communication</p>
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="MERISHA"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="RM"
                          required
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="merishamaglin@gmail.com"
                          required
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-9999"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Address */}
                {step === 2 && (
                  <div className="form-step">
                    <div className="panel-header">
                      <h3>Shipping Address</h3>
                      <p>Where should we deliver your vehicle?</p>
                    </div>
                    <div className="form-grid">
                      <div className="form-group full-width">
                        <label>Country / Region *</label>
                        <select name="country" value={formData.country} onChange={handleInputChange}>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                        </select>
                      </div>
                      <div className="form-group full-width">
                        <label>Street Address *</label>
                        <input
                          type="text"
                          name="streetAddress"
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          placeholder="123 Main Street"
                          required
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Apartment, Suite, etc. (Optional)</label>
                        <input
                          type="text"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleInputChange}
                          placeholder="Apt 4B"
                        />
                      </div>
                      <div className="form-group">
                        <label>City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Los Angeles"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="California"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Postal Code *</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="90210"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {step === 3 && (
                  <div className="form-step">
                    <div className="panel-header">
                      <h3>Payment Method</h3>
                      <p>Secure payment processing</p>
                    </div>
                    
                    <div className="payment-methods">
                      <label className={`payment-option ${paymentMethod === 'credit-card' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="credit-card"
                          checked={paymentMethod === 'credit-card'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <div className="payment-option-content">
                          <span className="option-title">Credit / Debit Card</span>
                          <div className="card-icons">
                            <span>💳 Visa</span>
                            <span>💳 Mastercard</span>
                            <span>💳 Amex</span>
                          </div>
                        </div>
                      </label>
                      <label className={`payment-option ${paymentMethod === 'paypal' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <div className="payment-option-content">
                          <span className="option-title">PayPal</span>
                          <span className="option-desc">Fast & secure with PayPal</span>
                        </div>
                      </label>
                      <label className={`payment-option ${paymentMethod === 'bank-transfer' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank-transfer"
                          checked={paymentMethod === 'bank-transfer'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <div className="payment-option-content">
                          <span className="option-title">Bank Transfer</span>
                          <span className="option-desc">Wire transfer (2-3 days)</span>
                        </div>
                      </label>
                    </div>

                    {paymentMethod === 'credit-card' && (
                      <div className="credit-card-form">
                        <div className="form-group full-width">
                          <label>Name on Card *</label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="form-group full-width">
                          <label>Card Number *</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            required
                          />
                        </div>
                        <div className="form-grid">
                          <div className="form-group">
                            <label>Expiry Date *</label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>CVV *</label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              maxLength="4"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="form-group full-width">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleInputChange}
                        />
                        <span>Save my information for faster checkout</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="form-navigation">
                  {step > 1 && (
                    <button type="button" className="btn-back" onClick={handlePrevStep}>
                      ← Back
                    </button>
                  )}
                  <button type="submit" className="btn-continue" disabled={isProcessing}>
                    {step === 3 ? (
                      isProcessing ? 'Processing...' : 'Place Order'
                    ) : (
                      'Continue →'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="col-12 col-lg-5">
            <div className="order-summary-panel">
              <div className="summary-header">
                <h3>Order Summary</h3>
                <span className="item-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
              </div>
              
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-warranty">{item.warranty}</p>
                      <div className="item-price-row">
                        <span className="item-quantity">Qty: {item.quantity}</span>
                        <span className="item-price">${item.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-totals">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span className="free-shipping">Free</span>
                </div>
                <div className="total-row">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="secure-checkout-badge">
                <span>🔒 Secure SSL Encrypted</span>
                <span>✓ 100% Purchase Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;