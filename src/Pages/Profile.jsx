import React, { useState } from 'react'
import profile from '../assets/profile.png'
import '../Styles/Profile.css'

const Profile = () => {
  const [activeMenu, setActiveMenu] = useState('My Account');

  const menuItems = [
    { name: 'My Account', icon: 'bi-person' },
    { name: 'My Orders', icon: 'bi-basket' },
    { name: 'Return & Cancel', icon: 'bi-x-circle' },
    { name: 'My Rating & Reviews', icon: 'bi-star' },
    { name: 'My Wishlist', icon: 'bi-heart' },
    { name: 'My Wallet', icon: 'bi-wallet2' },
    { name: 'Change Password', icon: 'bi-keyboard' }
  ];

  return (
    <div className="profile-section-wrapper">
     
      <div className="container py-5">
                <div className='mb-3  ps-3'>
        <small>
          <a href="/home" className='text-decoration-none text-white'><i className="bi-arrow-left"></i> Go back</a>
 

        </small>
      </div>
        <h2 className="profile-main-title mb-4">Profile Workspace</h2>
        
        <div className="row g-4">
          {/* Left Column: Premium Interactive Sidebar */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="profile-sidebar-card">
              <div className="profile-header-box text-center">
                <div className="avatar-wrapper">
                  <img src={profile} alt="Profile" className="profile-picture-main" />
                </div>
                <p className='profile-greeting-text'>Hello,</p>
                <h3 className='profile-display-name'>Merisha RM</h3>
              </div>
              
              <nav className="profile-options-menu">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    className={`profile-option-item ${activeMenu === item.name ? 'active' : ''}`}
                    onClick={() => setActiveMenu(item.name)}
                  >
                    <i className={`bi ${item.icon} menu-icon`}></i>
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column: High-Contrast Form Canvas */}
          <div className="col-12 col-md-8 col-lg-9">
            <div className="form-canvas-panel">
              <div className="panel-header mb-4">
                <h4 className="panel-title-text">Personal Information</h4>
                <p className="panel-subtitle-text">Manage your structural account identity settings</p>
              </div>

              <div className="panel-profile-inline d-flex align-items-center mb-4">
                <img src={profile} alt="Avatar Miniature" className="profile-picture-mini" />
                <div className="ms-3">
                  <span className="upload-badge">Verification Standard Set</span>
                </div>
              </div>

              <form className='profile-dashboard-form'>
                <div className="row g-3">
                  <div className="col-12 col-md-6 form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" placeholder='Merisha RM' name="name" id="name" required />
                  </div>

                  <div className="col-12 col-md-6 form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" placeholder='merisha@example.com' name="email" id="email" required />
                  </div>

                  <div className="col-12 col-md-6 form-group">
                    <label htmlFor="number">Phone Number *</label>
                    <input type="text" placeholder='123-456-7890' name="number" id="number" required/>
                  </div>

                  <div className="col-12 col-md-6 form-group">
                    <label htmlFor="date">Date of Birth *</label>
                    <input type="date" name="date" id="date" required />
                  </div>

                  <div className="col-12 form-group mt-3">
                    <label className="d-block mb-2">Gender Option Matrix</label>
                    <div className="gender-radio-group d-flex gap-4">
                      <label htmlFor="male" className="radio-label">
                        <input type="radio" name="gender" id="male" value="Male" defaultChecked />
                        <span>Male</span>
                      </label>
                      <label htmlFor="female" className="radio-label">
                        <input type="radio" name="gender" id="female" value="Female" />
                        <span>Female</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-action-row mt-4 pt-3">
                  <button type="submit" className="save-changes-btn">Save Configurations</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile