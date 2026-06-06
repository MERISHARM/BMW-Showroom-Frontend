import React, { useState } from 'react'
import '../Styles/wishlist.css'
import firstimg from '../assets/firstimg.png'
import secondimg from '../assets/secondimg.png'
import thirdimg from '../assets/thirdimg.png'
import { FaBolt, FaTachometerAlt, FaHistory, FaArrowRight, FaCar, FaHeart ,FaRegHeart} from 'react-icons/fa'


const CAR_DATA = [
  {
    id: 'm4',
    name: 'M4 Coupe',
    segment: 'Luxury high-performance sports coupe',
    category: 'SPORTS',
    img: firstimg,
    metrics: [
      { metricId: 'm4-power', value: '600 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm4-accel', value: '3.2 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm4-speed', value: '290 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
    ],
    
      icon: <FaHeart />
    
  },
  {
    id: 'm5',
    name: 'M5 Sedan',
    segment: 'Executive luxury high-performance sedan',
    category: 'SPORTS',
    img: secondimg,
    metrics: [
      { metricId: 'm5-power', value: '617 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm5-accel', value: '3.3 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm5-speed', value: '305 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
      
    ],
        icon: <FaHeart />
  },
  {
    id: 'i8',
    name: 'i8 Roadster',
    segment: 'Futuristic hybrid plug-in sports car',
    category: 'ELECTRIC',
    img: thirdimg,
    metrics: [
      { metricId: 'i8-power', value: '369 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'i8-accel', value: '4.4 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'i8-range', value: '55 km', label: 'EV Range', icon: <FaCar /> }
    ],
        icon: <FaHeart />
  }
];
const CAR_DATA_1 = [
  {
    id: 'm4',
    name: 'M4 Coupe',
    segment: 'Luxury high-performance sports coupe',
    category: 'SPORTS',
    img: firstimg,
    metrics: [
      { metricId: 'm4-power', value: '600 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm4-accel', value: '3.2 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm4-speed', value: '290 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
    ],
        icon: <FaHeart />
  },
  {
    id: 'm5',
    name: 'M5 Sedan',
    segment: 'Executive luxury high-performance sedan',
    category: 'SPORTS',
    img: secondimg,
    metrics: [
      { metricId: 'm5-power', value: '617 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm5-accel', value: '3.3 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm5-speed', value: '305 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
    ],
        icon: <FaHeart />
  },
  {
    id: 'i8',
    name: 'i8 Roadster',
    segment: 'Futuristic hybrid plug-in sports car',
    category: 'ELECTRIC',
    img: thirdimg,
    metrics: [
      { metricId: 'i8-power', value: '369 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'i8-accel', value: '4.4 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'i8-range', value: '55 km', label: 'EV Range', icon: <FaCar /> }
    ],
        icon: <FaHeart />
  }
];
const CAR_DATA_2 = [
  {
    id: 'm4',
    name: 'M4 Coupe',
    segment: 'Luxury high-performance sports coupe',
    category: 'SPORTS',
    img: firstimg,
    metrics: [
      { metricId: 'm4-power', value: '600 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm4-accel', value: '3.2 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm4-speed', value: '290 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
    ],
        icon: <FaHeart />
  },
  {
    id: 'm5',
    name: 'M5 Sedan',
    segment: 'Executive luxury high-performance sedan',
    category: 'SPORTS',
    img: secondimg,
    metrics: [
      { metricId: 'm5-power', value: '617 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm5-accel', value: '3.3 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm5-speed', value: '305 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
    ],
        icon: <FaHeart />
  },
  {
    id: 'i8',
    name: 'i8 Roadster',
    segment: 'Futuristic hybrid plug-in sports car',
    category: 'ELECTRIC',
    img: thirdimg,
    metrics: [
      { metricId: 'i8-power', value: '369 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'i8-accel', value: '4.4 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'i8-range', value: '55 km', label: 'EV Range', icon: <FaCar /> }
    ],
        icon: <FaHeart />
  }
];
const CAR_DATA_3 = [
  {
    id: 'm4',
    name: 'M4 Coupe',
    segment: 'Luxury high-performance sports coupe',
    category: 'SPORTS',
    img: firstimg,
    metrics: [
      { metricId: 'm4-power', value: '600 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm4-accel', value: '3.2 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm4-speed', value: '290 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
    ],
        icon: <FaHeart />
  },
  {
    id: 'm5',
    name: 'M5 Sedan',
    segment: 'Executive luxury high-performance sedan',
    category: 'SPORTS',
    img: secondimg,
    metrics: [
      { metricId: 'm5-power', value: '617 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'm5-accel', value: '3.3 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'm5-speed', value: '305 km/h', label: 'Top Speed', icon: <FaTachometerAlt /> }
    ],
        icon: <FaHeart />
  },
  {
    id: 'i8',
    name: 'i8 Roadster',
    segment: 'Futuristic hybrid plug-in sports car',
    category: 'ELECTRIC',
    img: thirdimg,
    metrics: [
      { metricId: 'i8-power', value: '369 Hp', label: 'Power', icon: <FaBolt /> },
      { metricId: 'i8-accel', value: '4.4 s', label: '0–100 km/h', icon: <FaHistory /> },
      { metricId: 'i8-range', value: '55 km', label: 'EV Range', icon: <FaCar /> }
    ],
        icon: <FaHeart />
  }
];
const Wishlist = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  // 1. Initialized state as an object to map each car id to its own boolean status
  const [favorites, setFavorites] = useState({
    m4: true,
    m5: true,
    i8: true
  }); 

  // 2. Updated toggle function to handle specific car IDs
  const handleToggleFavorite = (carId) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [carId]: !prevFavorites[carId]
    }));
  };
  
  const filteredCars = activeFilter === 'ALL' 
    ? CAR_DATA 
    : CAR_DATA.filter(car => car.category === activeFilter);


  return (
    <div className='car-section-wrapper py-5'>
           <div className='mb-3 ps-3'>
        <small>
          <a href="/home" className='text-decoration-none text-white'><i className="bi-arrow-left"></i> Go back</a>
 

        </small>
      </div>
      {/* Editorial Header Section */}
      <div className='container text-center mb-4'>
        <div className='car-pill-badge mb-2'>
          <span>Featured BMWs</span>
        </div>    
        <h1 className='car-premium-title'>My Wishlist</h1>
        <p className='car-premium-subtitle'>
         A curated collection of your favourite BMW models, combining luxury,
performance, and cutting-edge engineering in one place.
        </p>
      </div>

      {/* Advanced Interactive Control Filter Bar */}
      <div className='container d-flex justify-content-center mb-5'>
        <div className='filter-tab-bar'>
          {['ALL', 'SPORTS', 'ELECTRIC'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Canvas Showcase Layout */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {filteredCars.map((car) => (
            <div className="col-12 col-md-6 col-lg-4 animate-card" key={car.id}>
              <div className="car-premium-card">
                
                {/* Media Presentation Box */}
                <div className="car-display-box">
                  <img src={car.img} alt={`BMW ${car.name}`} className="img-fluid vehicle-image" />
                  <span className={`category-tag tag-${car.category.toLowerCase()}`}>
                    {car.category}
                  </span>
                <div 
      className="favourite-icon-wishlist" 
      onClick={() => handleToggleFavorite(car.id)}
      style={{ cursor: 'pointer' }} // Makes it feel clickable
    >
      {/* 3. Look up status dynamically based on car.id */}
      {favorites[car.id] ? (
        <FaHeart color="white" title="Remove from wishlist" />
      ) : (
        <FaRegHeart title="Add to wishlist" />
      )}
    </div>
                </div>

                {/* Content Core Body Details */}
                <div className='car-details-body'>
                  <div className='mb-3'>
                    <h3 className='vehicle-title-name'>{car.name}</h3>
                    <p className='vehicle-segment-desc'>{car.segment}</p>
                  </div>
                  
                  {/* High-Contrast Specifications Grid Layer */}
                  <div className='vehicle-perf-grid mb-4'>
                    {car.metrics.map((metric) => (
                      <div className='perf-metric-node' key={metric.metricId}>
                        <span className='perf-icon-wrapper'>{metric.icon}</span>
                        <span className='perf-value-text'>{metric.value}</span>
                        <small className='perf-label-text'>{metric.label}</small>
                      </div>
                    ))}
                  </div>

                  {/* Clean Action Interface Link */}
                  <div className='card-action-footer mt-auto pt-3'>
                    <span className='action-text'>Explore Engineering</span>
                    <div className='action-arrow-circle'>
                      <FaArrowRight className='arrow-btn-icon' />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="container">
        <div className="row g-4 justify-content-center">
          {filteredCars.map((car) => (
            <div className="col-12 col-md-6 col-lg-4 animate-card" key={car.id}>
              <div className="car-premium-card">
                
                {/* Media Presentation Box */}
                <div className="car-display-box">
                  <img src={car.img} alt={`BMW ${car.name}`} className="img-fluid vehicle-image" />
                  <span className={`category-tag tag-${car.category.toLowerCase()}`}>
                    {car.category}
                  </span>
                  <div 
      className="favourite-icon-wishlist" 
      onClick={() => handleToggleFavorite(car.id)}
      style={{ cursor: 'pointer' }} // Makes it feel clickable
    >
      {/* 3. Look up status dynamically based on car.id */}
      {favorites[car.id] ? (
        <FaHeart color="white" title="Remove from wishlist" />
      ) : (
        <FaRegHeart title="Add to wishlist" />
      )}
    </div>
                </div>

                {/* Content Core Body Details */}
                <div className='car-details-body'>
                  <div className='mb-3'>
                    <h3 className='vehicle-title-name'>{car.name}</h3>
                    <p className='vehicle-segment-desc'>{car.segment}</p>
                  </div>
                  
                  {/* High-Contrast Specifications Grid Layer */}
                  <div className='vehicle-perf-grid mb-4'>
                    {car.metrics.map((metric) => (
                      <div className='perf-metric-node' key={metric.metricId}>
                        <span className='perf-icon-wrapper'>{metric.icon}</span>
                        <span className='perf-value-text'>{metric.value}</span>
                        <small className='perf-label-text'>{metric.label}</small>
                      </div>
                    ))}
                  </div>

                  {/* Clean Action Interface Link */}
                  <div className='card-action-footer mt-auto pt-3'>
                    <span className='action-text'>Explore Engineering</span>
                    <div className='action-arrow-circle'>
                      <FaArrowRight className='arrow-btn-icon' />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="container">
        <div className="row g-4 justify-content-center">
          {filteredCars.map((car) => (
            <div className="col-12 col-md-6 col-lg-4 animate-card" key={car.id}>
              <div className="car-premium-card">
                
                {/* Media Presentation Box */}
                <div className="car-display-box">
                  <img src={car.img} alt={`BMW ${car.name}`} className="img-fluid vehicle-image" />
                  <span className={`category-tag tag-${car.category.toLowerCase()}`}>
                    {car.category}
                  </span>
                 <div 
      className="favourite-icon-wishlist" 
      onClick={() => handleToggleFavorite(car.id)}
      style={{ cursor: 'pointer' }} // Makes it feel clickable
    >
      {/* 3. Look up status dynamically based on car.id */}
      {favorites[car.id] ? (
        <FaHeart color="white" title="Remove from wishlist" />
      ) : (
        <FaRegHeart title="Add to wishlist" />
      )}
    </div>
                </div>

                {/* Content Core Body Details */}
                <div className='car-details-body'>
                  <div className='mb-3'>
                    <h3 className='vehicle-title-name'>{car.name}</h3>
                    <p className='vehicle-segment-desc'>{car.segment}</p>
                  </div>
                  
                  {/* High-Contrast Specifications Grid Layer */}
                  <div className='vehicle-perf-grid mb-4'>
                    {car.metrics.map((metric) => (
                      <div className='perf-metric-node' key={metric.metricId}>
                        <span className='perf-icon-wrapper'>{metric.icon}</span>
                        <span className='perf-value-text'>{metric.value}</span>
                        <small className='perf-label-text'>{metric.label}</small>
                      </div>
                    ))}
                  </div>

                  {/* Clean Action Interface Link */}
                  <div className='card-action-footer mt-auto pt-3'>
                    <span className='action-text'>Explore Engineering</span>
                    <div className='action-arrow-circle'>
                      <FaArrowRight className='arrow-btn-icon' />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="container">
        <div className="row g-4 justify-content-center">
          {filteredCars.map((car) => (
            <div className="col-12 col-md-6 col-lg-4 animate-card" key={car.id}>
              <div className="car-premium-card">
                
                {/* Media Presentation Box */}
                <div className="car-display-box">
                  <img src={car.img} alt={`BMW ${car.name}`} className="img-fluid vehicle-image" />
                  <span className={`category-tag tag-${car.category.toLowerCase()}`}>
                    {car.category}
                  </span>
                 <div 
      className="favourite-icon-wishlist" 
      onClick={() => handleToggleFavorite(car.id)}
      style={{ cursor: 'pointer' }} // Makes it feel clickable
    >
      {/* 3. Look up status dynamically based on car.id */}
      {favorites[car.id] ? (
        <FaHeart color="white" title="Remove from wishlist" />
      ) : (
        <FaRegHeart title="Add to wishlist" />
      )}
    </div>
                </div>

                {/* Content Core Body Details */}
                <div className='car-details-body'>
                  <div className='mb-3'>
                    <h3 className='vehicle-title-name'>{car.name}</h3>
                    <p className='vehicle-segment-desc'>{car.segment}</p>
                  </div>
                  
                  {/* High-Contrast Specifications Grid Layer */}
                  <div className='vehicle-perf-grid mb-4'>
                    {car.metrics.map((metric) => (
                      <div className='perf-metric-node' key={metric.metricId}>
                        <span className='perf-icon-wrapper'>{metric.icon}</span>
                        <span className='perf-value-text'>{metric.value}</span>
                        <small className='perf-label-text'>{metric.label}</small>
                      </div>
                    ))}
                  </div>

                  {/* Clean Action Interface Link */}
                  <div className='card-action-footer mt-auto pt-3'>
                    <span className='action-text'>Explore Engineering</span>
                    <div className='action-arrow-circle'>
                      <FaArrowRight className='arrow-btn-icon' />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Wishlist;