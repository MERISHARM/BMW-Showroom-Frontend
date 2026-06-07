import React, { useState } from 'react';
import loginImg from '../assets/companylogocar.png';
import '../Styles/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful! Redirecting...');
    }, 1500);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationErrors = validateSignup();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully! Please login.');
      setIsLogin(true);
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        rememberMe: false
      });
    }, 1500);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      setResetMessage('Please enter your email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(resetEmail)) {
      setResetMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResetMessage('Password reset link sent to your email!');
      setTimeout(() => {
        setShowForgotPassword(false);
        setResetMessage('');
        setResetEmail('');
      }, 2000);
    }, 1500);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      rememberMe: false
    });
  };

  return (
    <>
      {/* Back Button */}
      
      <div className="back-button-container">
        <div className="container">
          <a href="/home" className="back-link">
            <i className="bi bi-arrow-left"></i> Go back
          </a>
        </div>
      </div>
<div className="row">
        <div className="cols">
 <div className="login-section-wrapper">
        <div className="login-container">
          <div className="login-row">
            {/* Left Column - Form */}
            <div className="login-col-form">
              <div className="form-wrapper">
                {/* Toggle Buttons */}
                {!showForgotPassword && (
                  <div className="form-tabs">
                    <button 
                      className={`tab-btn ${isLogin ? 'active' : ''}`}
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </button>
                    <button 
                      className={`tab-btn ${!isLogin ? 'active' : ''}`}
                      onClick={() => setIsLogin(false)}
                    >
                      Sign Up
                    </button>
                  </div>
                )}

                {/* Login Form */}
                {!showForgotPassword && isLogin && (
                  <form onSubmit={handleLogin} className="auth-form">
                    <h2>Welcome Back</h2>
                    <p className="form-subtitle">Login to access your BMW M account</p>

                    <div className="form-group">
                      <label>Email Address</label>
                      <div className="input-icon">
                        <i className="bi bi-envelope-fill"></i>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={errors.email ? 'error' : ''}
                        />
                      </div>
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <div className="input-icon">
                        <i className="bi bi-lock-fill"></i>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className={errors.password ? 'error' : ''}
                        />
                      </div>
                      {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <div className="form-options">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                        />
                        <span>Remember me</span>
                      </label>
                      <button 
                        type="button" 
                        className="forgot-link"
                        onClick={() => setShowForgotPassword(true)}
                      >
                        Forgot Password?
                      </button>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login'}
                    </button>

                    <div className="auth-divider">
                      <span>Or continue with</span>
                    </div>

                    <div className="social-login">
                      <button type="button" className="social-btn google">
                        <i className="bi bi-google"></i> Google
                      </button>
                      <button type="button" className="social-btn apple">
                        <i className="bi bi-apple"></i> Apple
                      </button>
                    </div>
                  </form>
                )}

                {/* Sign Up Form */}
                {!showForgotPassword && !isLogin && (
                  <form onSubmit={handleSignup} className="auth-form">
                    <h2>Create Account</h2>
                    <p className="form-subtitle">Join the BMW M community</p>

                    <div className="form-group">
                      <label>Full Name</label>
                      <div className="input-icon">
                        <i className="bi bi-person-fill"></i>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={errors.name ? 'error' : ''}
                        />
                      </div>
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <div className="input-icon">
                        <i className="bi bi-envelope-fill"></i>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={errors.email ? 'error' : ''}
                        />
                      </div>
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <div className="input-icon">
                        <i className="bi bi-lock-fill"></i>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Create a password"
                          className={errors.password ? 'error' : ''}
                        />
                      </div>
                      {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <div className="form-group">
                      <label>Confirm Password</label>
                      <div className="input-icon">
                        <i className="bi bi-shield-lock-fill"></i>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your password"
                          className={errors.confirmPassword ? 'error' : ''}
                        />
                      </div>
                      {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                    </div>

                    <button type="submit" className="submit-btn" disabled={isLoading}>
                      {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                    <div className="auth-divider">
                      <span>Or sign up with</span>
                    </div>

                    <div className="social-login">
                      <button type="button" className="social-btn google">
                        <i className="bi bi-google"></i> Google
                      </button>
                      <button type="button" className="social-btn apple">
                        <i className="bi bi-apple"></i> Apple
                      </button>
                    </div>
                  </form>
                )}

                {/* Forgot Password Form */}
                {showForgotPassword && (
                  <form onSubmit={handleForgotPassword} className="auth-form">
                    <h2>Reset Password</h2>
                    <p className="form-subtitle">We'll send you a link to reset your password</p>

                    <div className="form-group">
                      <label>Email Address</label>
                      <div className="input-icon">
                        <i className="bi bi-envelope-fill"></i>
                        <input
                          type="email"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          placeholder="Enter your registered email"
                        />
                      </div>
                    </div>

                    {resetMessage && (
                      <div className={`reset-message ${resetMessage.includes('sent') ? 'success' : 'error'}`}>
                        {resetMessage}
                      </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={isLoading}>
                      {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>

                    <button 
                      type="button" 
                      className="back-to-login"
                      onClick={() => {
                        setShowForgotPassword(false);
                        setResetMessage('');
                        setResetEmail('');
                      }}
                    >
                      ← Back to Login
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column - Image (covers entire right side) */}
           
            </div>
          </div>
        </div>
      
        </div>
        <div className="cols">
           <div className="login-col-image">
              <div className="image-content">
                <img src={loginImg} alt="BMW M Logo" />
                               </div>
              </div>
        </div>
      </div>
      {/* Main Login Section */}
     
    </>
  );
};

export default Login;