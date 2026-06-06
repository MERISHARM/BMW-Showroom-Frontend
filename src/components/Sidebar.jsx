import React, { useState, useEffect } from 'react';
import companylogo from '../assets/companylogo.png';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/home');
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(2);

  // Get current path for active state
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navItems = [
    { path: '/home', icon: 'bi-house-door-fill', label: 'Home', hasCount: false },
    { path: '/search', icon: 'bi-search-heart', label: 'Search', hasCount: false },
    { path: '/car-models', icon: 'bi-car-front-fill', label: 'Cars', hasCount: false },
    
    { path: '/mycart', icon: 'bi-cart-fill', label: 'My Cart', hasCount: true, count: cartCount },
    { path: '/wishlist', icon: 'bi-heart-fill', label: 'Wishlist', hasCount: true, count: wishlistCount },
    { path: '/profile', icon: 'bi-person-fill', label: 'Profile', hasCount: false }
  ];

  return (
    <>
      <div className='sidebar'>
        <div className='component-container'>
          {/* Mobile Menu Toggle */}
          <div 
            className="list-i d-lg-none" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasResponsive" 
            aria-controls="offcanvasResponsive"
          >
            <i className="bi bi-list"></i>
          </div>
          
          {/* Logo */}
          <div className='component-container-logo'>
            <img src={companylogo} alt="Company Logo" />
            <div className="logo-glow"></div>
          </div>
          
          {/* Navigation Icons */}
          <div className='icon-group'>
            {navItems.map((item) => (
              <div 
                key={item.path}
                className={`nav-i ${activeLink === item.path ? 'active' : ''}`}
                onClick={() => window.location.href = item.path}
              >
                <div className="nav-icon-wrapper">
                  <i className={`bi ${item.icon}`}></i>
                  {item.hasCount && item.count > 0 && (
                    <span className="nav-badge">{item.count}</span>
                  )}
                </div>
                <span className="nav-tooltip">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="sidebar-footer">
            <div className="theme-toggle">
              <i className="bi bi-brightness-high-fill"></i>
            </div>
            <div className="logout-icon">
              <i className="bi bi-box-arrow-right"></i>
              <span className="nav-tooltip">Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas for Mobile */}
      <div 
        className="offcanvas offcanvas-end" 
        tabIndex="-1" 
        id="offcanvasResponsive" 
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div className="offcanvas-header">
          <div className="offcanvas-logo">
            <img src={companylogo} alt="Logo" />
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">MEJIG</h5>
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className='mobile-nav-items'>
            {navItems.map((item) => (
              <a 
                key={item.path}
                href={item.path} 
                className={`mobile-nav-item ${activeLink === item.path ? 'active' : ''}`}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
                {item.hasCount && item.count > 0 && (
                  <span className="mobile-badge">{item.count}</span>
                )}
              </a>
            ))}
          </div>
          
          <div className="mobile-divider"></div>
          
          <div className="mobile-footer">
            <div className="mobile-user-info">
              <i className="bi bi-person-circle"></i>
              <div>
                <p>Guest User</p>
                <small>Sign in for better experience</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Sidebar Container */
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 80px;
            height: 100vh;
            background: linear-gradient(180deg, rgb(15, 15, 69) 0%, rgb(10, 10, 50) 100%);
            box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1000;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          /* Subtle border animation */
          .sidebar::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          }

          .component-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 20px 0;
            position: relative;
          }

          /* Mobile Menu Button */
          .list-i {
            font-size: 28px;
            color: #ffffff;
            cursor: pointer;
            margin-bottom: 25px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
          }

          .list-i:hover {
            transform: scale(1.05);
            background: rgba(255, 255, 255, 0.2);
          }

          /* Logo Container */
          .component-container-logo {
            position: relative;
            margin-bottom: 40px;
          }

          .component-container-logo img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(59, 130, 246, 0.5);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .component-container-logo img:hover {
            transform: scale(1.05);
            border-color: #3b82f6;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
          }

          .logo-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent);
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .component-container-logo:hover .logo-glow {
            opacity: 1;
          }

          /* Navigation Icons Group */
          .icon-group {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            align-items: center;
            flex: 1;
          }

          .nav-i {
            position: relative;
            font-size: 24px;
            color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            width: 100%;
            text-align: center;
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav-icon-wrapper {
            position: relative;
            display: inline-block;
          }

          /* Active State */
          .nav-i.active {
            color: #3b82f6;
          }

          .nav-i.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 30px;
            background: #3b82f6;
            border-radius: 0 3px 3px 0;
            animation: slideIn 0.3s ease;
          }

          @keyframes slideIn {
            from {
              height: 0;
              opacity: 0;
            }
            to {
              height: 30px;
              opacity: 1;
            }
          }

          /* Hover Effect */
          .nav-i:hover {
            color: #ffffff;
            text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
            transform: translateX(4px);
          }

          /* Notification Badge */
          .nav-badge {
            position: absolute;
            top: -8px;
            right: -12px;
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
            font-size: 10px;
            font-weight: 700;
            min-width: 18px;
            height: 18px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 5px;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          /* Tooltip */
          .nav-tooltip {
            position: absolute;
            left: 70px;
            background: rgb(15, 15, 69);
            color: white;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1001;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(59, 130, 246, 0.3);
            pointer-events: none;
          }

          .nav-tooltip::before {
            content: '';
            position: absolute;
            left: -6px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-right: 6px solid rgb(15, 15, 69);
          }

          .nav-i:hover .nav-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(5px);
          }

          /* Sidebar Footer */
          .sidebar-footer {
            margin-top: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .theme-toggle,
          .logout-icon {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            padding: 8px 0;
            width: 100%;
            text-align: center;
          }

          .theme-toggle:hover,
          .logout-icon:hover {
            color: #ffffff;
            transform: scale(1.1);
          }

          /* Offcanvas Styles */
          .offcanvas {
            background: linear-gradient(135deg, rgb(15, 15, 69), rgb(10, 10, 50));
            width: 300px;
          }

          .offcanvas-header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 20px;
          }

          .offcanvas-logo {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .offcanvas-logo img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid #3b82f6;
          }

          .offcanvas-title {
            color: #ffffff;
            font-weight: 700;
            font-size: 1.2rem;
            margin: 0;
          }

          .btn-close-white {
            filter: invert(1);
          }

          .offcanvas-body {
            padding: 20px;
          }

          .mobile-nav-items {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .mobile-nav-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 12px 15px;
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
          }

          .mobile-nav-item i {
            font-size: 20px;
            width: 24px;
          }

          .mobile-nav-item span {
            flex: 1;
            font-size: 0.95rem;
            font-weight: 500;
          }

          .mobile-nav-item:hover {
            background: rgba(59, 130, 246, 0.1);
            color: #ffffff;
            transform: translateX(5px);
          }

          .mobile-nav-item.active {
            background: rgba(59, 130, 246, 0.15);
            color: #3b82f6;
            border-left: 3px solid #3b82f6;
          }

          .mobile-badge {
            background: #ef4444;
            color: white;
            font-size: 10px;
            font-weight: 700;
            min-width: 20px;
            height: 20px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 6px;
          }

          .mobile-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            margin: 20px 0;
          }

          .mobile-footer {
            margin-top: auto;
          }

          .mobile-user-info {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
          }

          .mobile-user-info i {
            font-size: 32px;
            color: #3b82f6;
          }

          .mobile-user-info p {
            margin: 0;
            font-weight: 600;
            font-size: 0.9rem;
          }

          .mobile-user-info small {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.5);
          }

          /* Responsive */
          @media (max-width: 992px) {
            .sidebar {
              width: 75px;
            }
            
            .nav-tooltip {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .sidebar {
              width: 75px;
            }
            
            .component-container-logo img {
              width: 40px;
              height: 40px;
            }
            
            .nav-i {
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            .sidebar {
              width: 75px;
            }
          }

          /* Scrollbar Styling */
          ::-webkit-scrollbar {
            width: 4px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }

          ::-webkit-scrollbar-thumb {
            background: #3b82f6;
            border-radius: 4px;
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;