import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // Imported for routing
import background from '../assets/backgroundvideo.mp4'
import companylogo from '../assets/companylogo.png'

const Index = () => {
  // States to control stage of visibility: 'waiting', 'loading', or 'done'
  const [stage, setStage] = useState('waiting') 
  const navigate = useNavigate()

  useEffect(() => {
    // Stage 1: Wait for 1 minute (60,000ms), then switch to loading
    const initialTimer = setTimeout(() => {
      setStage('loading')
    }, 60000) // 1 minute

    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    // Stage 2: Once it hits 'loading', wait 3 seconds (3,000ms), then route to /home
    if (stage === 'loading') {
      const redirectTimer = setTimeout(() => {
        navigate('/home')
      }, 3000) // 3 seconds

      return () => clearTimeout(redirectTimer)
    }
  }, [stage, navigate])

  return (
    <div className='index-container'>
      <div className='video-wrapper'>
        <video src={background}  autoPlay muted loop></video>
      </div>

      {/* The main content only displays once the 1 minute waiting period ends */}
      {stage !== 'waiting' && (
        <div className='Main-page-content'>
          <div className="Logo">
            <img src={companylogo} alt="Company Logo" />
          </div>
          <h1>MEJIG</h1>
          <br/>
          <p>Welcome to BMW — where luxury, innovation, and performance redefine the driving experience.</p>
          <p>Explore premium cars crafted with cutting-edge technology, elegant design, and unmatched comfort.</p>
          <div className='Main-page-button'>
            <button>Loading...</button>
          </div>
        </div>
      )}
        
      <style>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .index-container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .Main-page-content {
          color: white;
          z-index: 1;
          max-width: 600px;
          padding: 20px;
          /* Your animation handles sliding up into view instantly when rendered */
          animation: slideToCenter 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .Main-page-content h1 {
          font-size: 100px;
          color: rgb(15, 15, 69);
          text-shadow: 1px 2px 2px white;
          letter-spacing: 5px;
        }
        .Main-page-content p {
          font-size: 15px;
          color: white;
          letter-spacing: 2px;
          text-align: justify;
          font-weight: bold;
          text-transform: uppercase;
        }
        .Main-page-content button {
          background: transparent;
          border: none;
          color: white;
          margin-top: 30px;
          font-size: 50px;
          font-weight: bold;
          letter-spacing: 3px;
        }
        .Logo img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 15px;
        }
        @keyframes slideToCenter {
          0% {
            opacity: 0;
            transform: translateY(100vh); 
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  )
}

export default Index