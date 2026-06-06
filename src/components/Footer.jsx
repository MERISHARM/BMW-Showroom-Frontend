import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>BMW M NEWSLETTER</h2>
            <p>Subscribe to receive exclusive updates, offers, and M performance insights</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">
                <i className="bi bi-caret-right-fill"></i> Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">
            {/* Quick Links */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="footer-col">
                <h3>
                  <i className="bi bi-lightning-charge-fill"></i> Quicklinks
                </h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Magazine</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Models</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">M Motorsport</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">AREA M</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">M Community</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">M In-Car Apps</a></li>
                </ul>
              </div>
            </div>

            {/* BMW M Links */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="footer-col">
                <h3>
                  <i className="bi bi-gear-fill"></i> BMW-M.com
                </h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">About BMW M</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Newsletter</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Imprint</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy Policy</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Legal Disclaimer</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">EU Battery Regulation</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Accessibility</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Cookies</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">DSA transparency reports</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">AREA M Terms</a></li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="footer-col">
                <h3>
                  <i className="bi bi-share-fill"></i> Visit Us On
                </h3>
                <ul className="social-links">
                  <li><i className="bi bi-instagram"></i> <a href="#">Instagram</a></li>
                  <li><i className="bi bi-facebook"></i> <a href="#">Facebook</a></li>
                  <li><i className="bi bi-tiktok"></i> <a href="#">TikTok</a></li>
                  <li><i className="bi bi-youtube"></i> <a href="#">YouTube</a></li>
                  <li><i className="bi bi-instagram"></i> <a href="#">Instagram Motorsport</a></li>
                  <li><i className="bi bi-facebook"></i> <a href="#">Facebook Motorsport</a></li>
                  <li><i className="bi bi-twitter-x"></i> <a href="#">X Motorsport</a></li>
                </ul>
              </div>
            </div>

            {/* More BMW Websites */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="footer-col">
                <h3>
                  <i className="bi bi-globe2"></i> More BMW Websites
                </h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">International Website</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">BMW Lifestyle</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">BMW Group Career</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">BMW In Your Country</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>© BMW M GmbH 2026 | All Rights Reserved</p>
            </div>
            <div className="footer-badges">
              <i className="bi bi-shield-check"></i>
              <span>Secure Payment</span>
              <i className="bi bi-truck"></i>
              <span>Fast Delivery</span>
              <i className="bi bi-headset"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .footer-wrapper {
            background: linear-gradient(135deg, #0f1319 0%, #07090e 100%);
            margin-top: auto;
          }

          /* Newsletter Section */
          .newsletter-section {
            background: linear-gradient(135deg, #1a1f2e 0%, #0f1319 100%);
            border-top: 1px solid #3b82f6;
            border-bottom: 1px solid #1e293b;
            padding: 60px 0;
          }

          .newsletter-content {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .newsletter-content h2 {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #ffffff, #3b82f6);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
          }

          .newsletter-content p {
            color: #94a3b8;
            margin-bottom: 28px;
            font-size: 1rem;
          }

          .newsletter-form {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .newsletter-form input {
            flex: 1;
            min-width: 250px;
            padding: 14px 20px;
            background: #07090e;
            border: 1px solid #1e293b;
            border-radius: 40px;
            color: #ffffff;
            font-size: 0.95rem;
            transition: all 0.3s;
          }

          .newsletter-form input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
          }

          .newsletter-form input::placeholder {
            color: #475569;
          }

          .subscribe-btn {
            background: #3b82f6;
            border: none;
            padding: 14px 32px;
            border-radius: 40px;
            color: white;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .subscribe-btn:hover {
            background: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
          }

          .subscribe-btn i {
            font-size: 1.1rem;
          }

          /* Main Footer */
          .footer-main {
            padding: 50px 0 30px;
          }

          .footer-col h3 {
            font-size: 1.1rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 8px;
            letter-spacing: -0.3px;
          }

          .footer-col h3 i {
            color: #3b82f6;
            font-size: 1.2rem;
          }

          .footer-col ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-col ul li {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .footer-col ul li i {
            color: #3b82f6;
            font-size: 0.75rem;
            opacity: 0.8;
          }

          .footer-col ul li a {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.85rem;
            transition: all 0.2s;
          }

          .footer-col ul li a:hover {
            color: #3b82f6;
            transform: translateX(4px);
            display: inline-block;
          }

          /* Social Links Special Styling */
          .social-links li i {
            font-size: 1.1rem;
            transition: all 0.2s;
          }

          .social-links li:hover i {
            transform: scale(1.1);
          }

          .social-links li:nth-child(1) i { color: #E4405F; }
          .social-links li:nth-child(2) i { color: #1877F2; }
          .social-links li:nth-child(3) i { color: #000000; }
          .social-links li:nth-child(4) i { color: #FF0000; }
          .social-links li:nth-child(5) i { color: #E4405F; }
          .social-links li:nth-child(6) i { color: #1877F2; }
          .social-links li:nth-child(7) i { color: #000000; }

          /* Footer Bottom */
          .footer-bottom {
            margin-top: 48px;
            padding-top: 24px;
            border-top: 1px solid #1e293b;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
          }

          .copyright p {
            color: #64748b;
            font-size: 0.8rem;
            margin: 0;
          }

          .footer-badges {
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .footer-badges i {
            color: #3b82f6;
            font-size: 1.1rem;
          }

          .footer-badges span {
            color: #64748b;
            font-size: 0.75rem;
            font-weight: 500;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .newsletter-section {
              padding: 40px 20px;
            }

            .newsletter-content h2 {
              font-size: 1.5rem;
            }

            .newsletter-form {
              flex-direction: column;
            }

            .newsletter-form input {
              min-width: auto;
            }

            .subscribe-btn {
              justify-content: center;
            }

            .footer-main {
              padding: 40px 0 20px;
            }

            .footer-bottom {
              flex-direction: column;
              text-align: center;
            }

            .footer-badges {
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .footer-col h3 {
              font-size: 1rem;
            }

            .footer-col ul li a {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;