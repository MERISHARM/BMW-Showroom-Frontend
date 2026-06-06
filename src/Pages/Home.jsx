import React, { useState, useRef, useEffect } from 'react'
import companylogo from "../assets/companylogo.png"
import bmwghost from "../assets/bmwghost.mp4"
import bmwm5 from '../assets/bmwm5.mp4'
import girldrive from '../assets/girldrive.mp4'
import video2 from '../assets/video2.mp4'
import Newarrivals from '../components/newarrivals'
import Footer from '../components/Footer'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const mainVideoRef = useRef(null)
  const thumbnailRefs = useRef([])

  const slides = [
    {
      id: 1,
      mainVideo: bmwghost,
      thumbnail: bmwghost,
      title: "BMW 7 Series",
      subtitle: "Bayerische Motoren Werke",
      description: "High-performance luxury coupe with a powerful twin-turbo engine and sporty premium design.",
      price: "Starts from ₹1.53 Crore",
      color: "rgb(206, 206, 240)"
    },
    {
      id: 2,
      mainVideo: bmwm5,
      thumbnail: bmwm5,
      title: "BMW M5 Competition",
      subtitle: "Ultimate Driving Machine",
      description: "Track-inspired performance meets everyday luxury with 617 hp V8 engine.",
      price: "Starts from ₹1.61 Crore",
      color: "rgb(240, 206, 206)"
    },
    {
      id: 3,
      mainVideo: girldrive,
      thumbnail: girldrive,
      title: "BMW i4",
      subtitle: "Electric Gran Coupé",
      description: "Fully electric performance with up to 590 km range and instant acceleration.",
      price: "Starts from ₹72.50 Lakh",
      color: "rgb(206, 240, 206)"
    },
    {
      id: 4,
      mainVideo: video2,
      thumbnail: video2,
      title: "BMW X7",
      subtitle: "The Pinnacle of Luxury",
      description: "Commanding presence with unparalleled comfort and cutting-edge technology.",
      price: "Starts from ₹1.27 Crore",
      color: "rgb(240, 240, 206)"
    }
  ]

  useEffect(() => {
    // Auto-play thumbnail videos
    thumbnailRefs.current.forEach((video, index) => {
      if (video && index !== currentSlide) {
        video.play().catch(() => {})
      }
    })
  }, [currentSlide])

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index)
  }

  const toggleMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlayPause = () => {
    if (mainVideoRef.current) {
      if (isPlaying) {
        mainVideoRef.current.pause()
      } else {
        mainVideoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
    <div className='Home-b container-fluid p-0'>
      {/* Logo */}
     

      {/* Main Video Background */}
      <video 
        ref={mainVideoRef}
        src={slides[currentSlide].mainVideo} 
        autoPlay 
        loop 
        muted={isMuted}
        playsInline
        className="main-video"
      ></video>

      {/* Video Overlay Controls */}
      <div className="video-controls">
        <button onClick={togglePlayPause} className="control-btn" title={isPlaying ? "Pause" : "Play"}>
          <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
        </button>
        <button onClick={toggleMute} className="control-btn" title={isMuted ? "Unmute" : "Mute"}>
          <i className={`bi ${isMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill'}`}></i>
        </button>
      </div>

      {/* Main Content */}
      <div className='Home-container'>
        <div className='row g-4 align-items-end'>
          <div className='col-lg-7 col-md-8 col-12'>
            <div className="car-info" data-aos="fade-up">
              <div className="car-subtitle">
                <span className="subtitle-line"></span>
                <h6>{slides[currentSlide].subtitle}</h6>
              </div>
              <div className="car-name">
                <h1>{slides[currentSlide].title}</h1>
              </div>
              <div className='body-p'>
                <p>{slides[currentSlide].description}</p>
                <strong>{slides[currentSlide].price}</strong>
              </div>
              <div className='home-buttons d-flex gap-3 flex-wrap'>
                <button className="btn-buy">
                  <a href="/view-car" className='text-decoration-none'>
                  <span>BUY NOW</span>

                  <i className="bi bi-arrow-right"></i>
</a>
                </button>
                <button className="btn-explore">
                  <span>EXPLORE MORE</span>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-md-4 col-12'>
            <div className='thumbnail-slider'>
              <button className="slider-btn prev-btn" onClick={handlePrev}>
                <i className="bi bi-chevron-left"></i>
              </button>
              
              <div className="thumbnails-wrapper">
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`thumbnail-item ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <video 
                      ref={el => thumbnailRefs.current[index] = el}
                      src={slide.thumbnail}
                      muted
                      loop
                      playsInline
                      className="thumbnail-video"
                    ></video>
                    <div className="thumbnail-overlay">
                      <span>{slide.title.split(' ').pop()}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="slider-btn next-btn" onClick={handleNext}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      </div>
      <Newarrivals/>
     

      <style>{`
        /* Base Styles */
        .Home-b {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #000;
        }

        .main-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          filter: brightness(0.7);
          transition: all 0.8s ease;
        }

        /* Logo Overlay */
        .logo-overlay {
          position: absolute;
          top: 30px;
          left: 100px;
          z-index: 10;
        }

        .company-logo {
          width: 60px;
          height: auto;
          filter: brightness(0) invert(1);
        }

        /* Video Controls */
        .video-controls {
          position: absolute;
          top: 30px;
          right: 30px;
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .control-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .control-btn i {
          font-size: 20px;
        }

        /* Main Content Container */
        .Home-container {
          position: absolute;
          bottom: 80px;
          left: 100px;
          right: 30px;
          z-index: 5;
        }

        /* Car Info Styles */
        .car-info {
          color: white;
        }

        .car-subtitle {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .subtitle-line {
          width: 50px;
          height: 2px;
          background: var(--slide-color, rgb(206, 206, 240));
          display: inline-block;
        }

        .car-subtitle h6 {
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 14px;
          margin: 0;
        }

        .car-name h1 {
          font-size: 64px;
          font-weight: 700;
          color: white;
          text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
          letter-spacing: 2px;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .body-p {
          margin-bottom: 30px;
        }

        .body-p p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 18px;
          letter-spacing: 1px;
          line-height: 1.6;
          margin-bottom: 15px;
          max-width: 500px;
        }

        .body-p strong {
          color: white;
          font-size: 22px;
          letter-spacing: 2px;
          display: block;
        }

        /* Buttons */
        .home-buttons .btn-buy {
          background: linear-gradient(135deg, #1a1a4e 0%, #0f0f45 100%);
          color: white;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 3px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(15, 15, 69, 0.4);
        }
  .home-buttons .btn-buy a{
          
          color: white;
       
        }

        .btn-buy:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(15, 15, 69, 0.6);
        }

        .btn-buy i {
          font-size: 20px;
          transition: transform 0.3s ease;
          padding-left:5px;
          padding-top:10px;
        }

        .btn-buy:hover i {
          transform: translateX(5px);
        }

        .btn-explore {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 15px 35px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 3px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(10px);
        }

        .btn-explore:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
        }

        /* Thumbnail Slider */
        .thumbnail-slider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .thumbnails-wrapper {
          display: flex;
          gap: 10px;
          overflow: hidden;
          flex: 1;
        }

        .thumbnail-item {
          min-width: 120px;
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .thumbnail-item.active {
          border-color: white;
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
        }

        .thumbnail-item:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }

        .thumbnail-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 5px;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
        }

        .slider-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .slider-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .slider-btn i {
          font-size: 20px;
        }

        /* Slide Indicators */
        .slide-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }

        .indicator {
          width: 30px;
          height: 3px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: white;
          width: 50px;
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        /* Responsive Design */
        @media (max-width: 1400px) {
          .car-name h1 {
            font-size: 52px;
          }
          
          .body-p p {
            font-size: 16px;
            max-width: 400px;
          }
        }

        @media (max-width: 1200px) {
          .Home-container {
            left: 50px;
            right: 20px;
            bottom: 60px;
          }

          .car-name h1 {
            font-size: 48px;
          }

          .thumbnail-item {
            min-width: 100px;
            height: 70px;
          }
        }

        @media (max-width: 991px) {
          .Home-container {
            left: 30px;
            right: 30px;
            bottom: 50px;
          }

          .car-name h1 {
            font-size: 42px;
          }

          .body-p p {
            font-size: 15px;
            max-width: 100%;
          }

          .thumbnail-slider {
            margin-top: 30px;
          }

          .thumbnail-item {
            min-width: 100px;
            height: 60px;
          }
        }

        @media (max-width: 768px) {
          .logo-overlay {
            left: 30px;
            top: 20px;
          }

          .company-logo {
            width: 50px;
          }

          .video-controls {
            top: 20px;
            right: 20px;
          }

          .control-btn {
            width: 40px;
            height: 40px;
          }

          .Home-container {
            left: 20px;
            right: 20px;
            bottom: 40px;
          }

          .car-subtitle h6 {
            font-size: 12px;
            letter-spacing: 2px;
          }

          .car-name h1 {
            font-size: 36px;
            letter-spacing: 1px;
          }

          .body-p p {
            font-size: 14px;
            margin-bottom: 10px;
          }

          .body-p strong {
            font-size: 18px;
          }

          .home-buttons {
            flex-direction: column;
          }

          .btn-buy,
          .btn-explore {
            width: 100%;
            justify-content: center;
            padding: 12px 25px;
            font-size: 14px;
          }

          .thumbnail-slider {
            margin-top: 20px;
          }

          .slider-btn {
            width: 35px;
            height: 35px;
          }

          .thumbnail-item {
            min-width: 80px;
            height: 50px;
          }
        }

        @media (max-width: 576px) {
          .Home-container {
            left: 15px;
            right: 15px;
            bottom: 30px;
          }

          .logo-overlay {
            left: 15px;
            top: 15px;
          }

          .company-logo {
            width: 40px;
          }

          .video-controls {
            top: 15px;
            right: 15px;
            gap: 8px;
          }

          .control-btn {
            width: 35px;
            height: 35px;
          }

          .control-btn i {
            font-size: 16px;
          }

          .car-name h1 {
            font-size: 28px;
          }

          .car-subtitle h6 {
            font-size: 10px;
            letter-spacing: 1px;
          }

          .subtitle-line {
            width: 30px;
          }

          .body-p p {
            font-size: 13px;
          }

          .body-p strong {
            font-size: 16px;
          }

          .home-buttons .btn-buy,
          .btn-explore {
            padding: 10px 20px;
            font-size: 12px;
            letter-spacing: 2px;
          }

          .thumbnail-slider {
            gap: 5px;
          }

          .thumbnail-item {
            min-width: 60px;
            height: 40px;
            border-radius: 5px;
          }

          .slider-btn {
            width: 30px;
            height: 30px;
          }

          .slider-btn i {
            font-size: 16px;
          }

          .indicator {
            width: 20px;
            height: 2px;
          }

          .indicator.active {
            width: 35px;
          }
        }

        @media (max-width: 375px) {
          .car-name h1 {
            font-size: 24px;
          }

          .home-buttons {
            gap: 8px;
          }

          .thumbnail-item {
            min-width: 50px;
            height: 35px;
          }
        }

        /* Landscape mode for mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .Home-container {
            bottom: 20px;
          }

          .car-name h1 {
            font-size: 32px;
            margin-bottom: 10px;
          }

          .body-p {
            margin-bottom: 15px;
          }

          .body-p p {
            margin-bottom: 5px;
          }

          .thumbnail-slider {
            margin-top: 10px;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .car-info {
          animation: fadeInUp 0.8s ease-out;
        }

        .thumbnail-item {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </>
  )
}

export default Home