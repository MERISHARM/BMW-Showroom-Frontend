import React from 'react';
import bmw2series from '../assets/bmw2series.jpg';
import series3 from '../assets/series3.jpeg';
import series4 from '../assets/series4.jpeg';
import series5 from '../assets/series5.jpeg';
import series7 from '../assets/series7.jpeg';
import series8 from '../assets/series8.jpeg';
import BMWX1 from '../assets/BMWX1.jpeg';
import BMWX2 from '../assets/BMWX2.jpeg';
import BMWX3 from '../assets/BMWX3.jpeg';
import BMWX4 from '../assets/BMWX4.jpeg';
import BMWX5 from '../assets/BMWX5.jpeg';
import BMWX6 from '../assets/BMWX6.jpeg';
import BMWX7 from '../assets/BMWX7.jpeg';
import BMWXM from '../assets/BMWXM.jpeg';
import BMWM1 from '../assets/BMWM1.jpeg';
import BMWM2 from '../assets/BMWM2.jpeg';
import BMWM3 from '../assets/BMWM3.jpeg';
import BMWM4 from '../assets/BMWM4.jpeg';
import BMWM5 from '../assets/BMWM5.jpeg';
import BMWM8 from '../assets/BMWM8.jpeg';
import BMWi from '../assets/BMWi.jpeg';
import BMWi4 from '../assets/BMWi4.jpeg';
import BMWi7 from '../assets/BMWi7.jpeg';
import BMWiX from '../assets/BMWiX.jpeg';
import BMWiX1 from '../assets/BMWiX1.jpeg';
import BMWiX3 from '../assets/BMWiX3.jpeg';
import BMWi3 from '../assets/BMWi3.jpeg';
import BMWZ4 from '../assets/BMWZ4.jpeg';

const New = [
  { id: 1, series: 'BMW 2 Series', img: bmw2series, price: '$38,400', category: 'Sedan' },
  { id: 2, series: 'BMW 3 Series', img: series3, price: '$44,500', category: 'Sedan' },
  { id: 3, series: 'BMW 4 Series', img: series4, price: '$49,700', category: 'Coupe' },
  { id: 4, series: 'BMW 5 Series', img: series5, price: '$57,900', category: 'Sedan' },
  { id: 5, series: 'BMW 7 Series', img: series7, price: '$96,400', category: 'Luxury Sedan' },
  { id: 6, series: 'BMW 8 Series', img: series8, price: '$89,800', category: 'Grand Coupe' }
];

const New1 = [
  { id: 1, series: 'BMW X1', img: BMWX1, price: '$39,500', category: 'Compact SUV' },
  { id: 2, series: 'BMW X2', img: BMWX2, price: '$42,600', category: 'Compact SUV' },
  { id: 3, series: 'BMW X3', img: BMWX3, price: '$48,900', category: 'Midsize SUV' },
  { id: 4, series: 'BMW X4', img: BMWX4, price: '$54,800', category: 'Coupe SUV' },
  { id: 5, series: 'BMW X5', img: BMWX5, price: '$65,700', category: 'Luxury SUV' },
  { id: 6, series: 'BMW X6', img: BMWX6, price: '$74,900', category: 'Coupe SUV' },
  { id: 7, series: 'BMW X7', img: BMWX7, price: '$89,800', category: 'Full-size SUV' },
  { id: 8, series: 'BMW XM', img: BMWXM, price: '$159,000', category: 'Performance SUV' }
];

const New2 = [
  { id: 1, series: 'BMW M1', img: BMWM1, price: '$45,000', category: 'Performance' },
  { id: 2, series: 'BMW M2', img: BMWM2, price: '$63,200', category: 'Performance' },
  { id: 3, series: 'BMW M3', img: BMWM3, price: '$74,300', category: 'Performance' },
  { id: 4, series: 'BMW M4', img: BMWM4, price: '$78,400', category: 'Performance' },
  { id: 5, series: 'BMW M5', img: BMWM5, price: '$109,900', category: 'Performance' },
  { id: 6, series: 'BMW M8', img: BMWM8, price: '$133,000', category: 'Performance' }
];

const New3 = [
  { id: 1, series: 'BMW i', img: BMWi, price: '$52,200', category: 'Electric' },
  { id: 2, series: 'BMW i4', img: BMWi4, price: '$56,400', category: 'Electric' },
  { id: 3, series: 'BMW i7', img: BMWi7, price: '$105,700', category: 'Electric Luxury' },
  { id: 4, series: 'BMW iX', img: BMWiX, price: '$87,100', category: 'Electric SUV' },
  { id: 5, series: 'BMW iX1', img: BMWiX1, price: '$50,600', category: 'Electric SUV' },
  { id: 6, series: 'BMW iX3', img: BMWiX3, price: '$58,900', category: 'Electric SUV' },
  { id: 7, series: 'BMW i3', img: BMWi3, price: '$44,500', category: 'Electric' }
];

const New4 = [
  { id: 1, series: 'BMW Z4', img: BMWZ4, price: '$54,200', category: 'Roadster' }
];

function Newarrivals() {
  const handleQuickView = (car) => {
    alert(`Quick view: ${car.series}\nPrice: ${car.price}\nCategory: ${car.category}`);
  };

  return (
    <div className="newarrivals-wrapper">
      <div className="container">
        {/* Hero Banner */}
        <div className="hero-banner">
          <h1>Discover the Ultimate Driving Machine</h1>
          <p>Explore our collection of premium BMW vehicles</p>
        </div>

        {/* Sedan & Coupe Series */}
        <section className="car-section">
          <div className="section-header">
            <h2 className="section-title">Sedan & Coupe Series</h2>
            <div className="section-line"></div>
            <p>Experience luxury and performance in every drive</p>
          </div>
          <div className="cars-grid">
            {New.map((car) => (
              <div key={car.id} className="car-card">
                <div className="car-image-wrapper">
                  <img src={car.img} alt={car.series} />
                  <div className="car-overlay">
                    <button className="quick-view-btn" onClick={() => handleQuickView(car)}>
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="car-info">
                  <h3>{car.series}</h3>
                  <p className="car-category">{car.category}</p>
                  <p className="car-price">{car.price}</p>
                  <button className="buy-now-btn">Buy Now →
                    <a href="/car" ></a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BMW X Series (SUVs) */}
        <section className="car-section">
          <div className="section-header">
            <h2 className="section-title">BMW X Series (SUVs)</h2>
            <div className="section-line"></div>
            <p>Command the road with power and elegance</p>
          </div>
          <div className="cars-grid">
            {New1.map((car) => (
              <div key={car.id} className="car-card">
                <div className="car-image-wrapper">
                  <img src={car.img} alt={car.series} />
                  <div className="car-overlay">
                    <button className="quick-view-btn" onClick={() => handleQuickView(car)}>
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="car-info">
                  <h3>{car.series}</h3>
                  <p className="car-category">{car.category}</p>
                  <p className="car-price">{car.price}</p>
                  <button className="buy-now-btn">Buy Now →
                    <a href="/car" ></a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BMW M Performance Models */}
        <section className="car-section">
          <div className="section-header">
            <h2 className="section-title">BMW M Performance Models</h2>
            <div className="section-line"></div>
            <p>Unleash the beast within</p>
          </div>
          <div className="cars-grid">
            {New2.map((car) => (
              <div key={car.id} className="car-card">
                <div className="car-image-wrapper">
                  <img src={car.img} alt={car.series} />
                  <div className="car-overlay">
                    <button className="quick-view-btn" onClick={() => handleQuickView(car)}>
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="car-info">
                  <h3>{car.series}</h3>
                  <p className="car-category">{car.category}</p>
                  <p className="car-price">{car.price}</p>
                  <button className="buy-now-btn">Buy Now →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BMW Electric "i" Series */}
        <section className="car-section">
          <div className="section-header">
            <h2 className="section-title">BMW Electric "i" Series</h2>
            <div className="section-line"></div>
            <p>Electrifying performance, zero emissions</p>
          </div>
          <div className="cars-grid">
            {New3.map((car) => (
              <div key={car.id} className="car-card">
                <div className="car-image-wrapper">
                  <img src={car.img} alt={car.series} />
                  <div className="car-overlay">
                    <button className="quick-view-btn" onClick={() => handleQuickView(car)}>
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="car-info">
                  <h3>{car.series}</h3>
                  <p className="car-category">{car.category}</p>
                  <p className="car-price">{car.price}</p>
                  <button className="buy-now-btn">Buy Now →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sports Car */}
        <section className="car-section">
          <div className="section-header">
            <h2 className="section-title">Sports Car</h2>
            <div className="section-line"></div>
            <p>Pure driving pleasure</p>
          </div>
          <div className="cars-grid">
            {New4.map((car) => (
              <div key={car.id} className="car-card featured-card">
                <div className="car-image-wrapper">
                  <img src={car.img} alt={car.series} />
                  <div className="car-overlay">
                    <button className="quick-view-btn" onClick={() => handleQuickView(car)}>
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="car-info">
                  <h3>{car.series}</h3>
                  <p className="car-category">{car.category}</p>
                  <p className="car-price">{car.price}</p>
                  <button className="buy-now-btn">Buy Now →</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>
        {`
          .newarrivals-wrapper {
            background: linear-gradient(135deg, #07090e 0%, #0a0d14 100%);
            min-height: 100vh;
            padding: 40px 0 60px;
          }

          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Hero Banner */
          .hero-banner {
            text-align: center;
            padding: 60px 20px;
            background: linear-gradient(135deg, #0f1319 0%, #07090e 100%);
            border-radius: 32px;
            margin-bottom: 50px;
            border: 1px solid #1e293b;
          }

          .hero-banner h1 {
            font-size: 3rem;
            font-weight: 900;
            background: linear-gradient(135deg, #ffffff, #3b82f6);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 16px;
            letter-spacing: -1px;
          }

          .hero-banner p {
            font-size: 1.1rem;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto;
          }

          /* Section Styles */
          .car-section {
            margin-bottom: 60px;
          }

          .section-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .section-title {
            font-size: 2rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
          }

          .section-line {
            width: 80px;
            height: 3px;
            background: #3b82f6;
            margin: 0 auto 16px;
            border-radius: 2px;
          }

          .section-header p {
            color: #64748b;
            font-size: 0.95rem;
          }

          /* Cars Grid - Responsive */
          .cars-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 28px;
          }

          /* Car Card */
          .car-card {
            background: #0f1319;
            border: 1px solid #1e293b;
            border-radius: 5px;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
          }

          .car-card:hover {
            transform: translateY(-8px);
            border-color: #3b82f6;
            box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.5);
          }

          .featured-card {
            border: 2px solid #3b82f6;
            position: relative;
          }

          .featured-card::before {
            content: "⭐ Featured";
            position: absolute;
            top: 12px;
            right: 12px;
            background: #3b82f6;
            color: white;
            font-size: 0.7rem;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: 600;
            z-index: 2;
          }

          .car-image-wrapper {
            position: relative;
            overflow: hidden;
            height: 200px;
          }

          .car-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .car-card:hover .car-image-wrapper img {
            transform: scale(1.05);
          }

          .car-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .car-card:hover .car-overlay {
            opacity: 1;
          }

          .quick-view-btn {
            background: #3b82f6;
            border: none;
            padding: 10px 24px;
            border-radius: 40px;
            color: white;
            font-weight: 600;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.2s;
          }

          .quick-view-btn:hover {
            background: #2563eb;
            transform: scale(1.05);
          }

          .car-info {
            padding: 20px;
          }

          .car-info h3 {
            font-size: 1.1rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 6px;
          }

          .car-category {
            font-size: 0.7rem;
            color: #3b82f6;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }

          .car-price {
            font-size: 1.3rem;
            font-weight: 800;
            color: #3b82f6;
            margin-bottom: 16px;
          }

          .buy-now-btn {
            width: 100%;
            background: transparent;
            border: 1px solid #1e293b;
            padding: 12px;
            border-radius: 12px;
            color: #cbd5e1;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
          }

          .buy-now-btn:hover {
            background: #3b82f6;
            border-color: #3b82f6;
            color: white;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .cars-grid {
              grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
              gap: 24px;
            }
          }

          @media (max-width: 768px) {
            .newarrivals-wrapper {
              padding: 20px 0 40px;
            }

            .hero-banner {
              padding: 40px 20px;
              margin-bottom: 35px;
            }

            .hero-banner h1 {
              font-size: 2rem;
            }

            .hero-banner p {
              font-size: 0.95rem;
            }

            .section-title {
              font-size: 1.5rem;
            }

            .cars-grid {
              grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
              gap: 20px;
            }

            .car-image-wrapper {
              height: 180px;
            }

            .car-info {
              padding: 16px;
            }

            .car-info h3 {
              font-size: 1rem;
            }

            .car-price {
              font-size: 1.1rem;
            }
          }

          @media (max-width: 560px) {
            .cars-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .hero-banner h1 {
              font-size: 1.5rem;
            }

            .section-title {
              font-size: 1.3rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Newarrivals;
