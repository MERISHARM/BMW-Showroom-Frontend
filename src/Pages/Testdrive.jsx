import React from 'react'
import '../Styles/Testdrive.css'
import bmwtestdrive from '../assets/bmwtestdrive.png'

const Testdrive = () => {
  return (
    <div className='background-testdrive py-3'>
         <div className='mb-3 ps-3'>
        <small>
          <a href="/home" className='text-decoration-none text-muted'><i className="bi-arrow-left"></i> Go back</a>
 

        </small>
      </div>
      <div className='container testdrive-container'>
        {/* Header Section */}
        <div className='text-center mb-5'>
          <div className='testdrive-content-header mb-2'>
            <h6>Test Drive Experience</h6>
          </div>
          <h1 className='testdrive-main-title mb-3'>Feel the Road. Own the Moment.</h1>
          <p className='testdrive-subtitle text-muted'>Schedule your personalized test drive with a dedicated BMW advisor.</p>
        </div>

        {/* Content Layout Grid */}
        <div className="row align-items-center g-5">
          {/* Left Column: Image Card Showcase */}
          <div className="col-12 col-md-6">
            <div className="testdrive-showroom-card">
              <img src={bmwtestdrive} alt="BMW Showroom Test Drive" className="img-fluid" />
              <div className="showroom-card-overlay">
                <h3>The Drive That Changes Everything</h3>
                <p>One experience. A lifetime impression.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className='testdrive-form-wrapper shadow-sm'>
              <form className='form-container-layout'>
                
                <div className='form-field-group'>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" placeholder='Merisha RM' name="name" id="name" required />
                </div>

                <div className='form-field-group'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" placeholder='merisha.rm@example.com' name="email" id="email" required />
                </div>

                <div className='form-field-group'>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" placeholder='123-456-7890' name="phone" id="phone" required />
                </div>

                <div className='form-field-group'>
                  <label htmlFor="model">Select Model</label>
                  <select className='car-select' id="model" name="model">
                    <option value="BMW 2 Series">BMW 2 Series</option>
                    <option value="BMW 3 Series">BMW 3 Series</option>
                    <option value="BMW 4 Series">BMW 4 Series</option>
                    <option value="BMW 5 Series">BMW 5 Series</option>
                    <option value="BMW 7 Series">BMW 7 Series</option>
                    <option value="BMW 8 Series">BMW 8 Series</option>
                  </select>
                </div>

                <div className='form-field-group'>
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" name="date" required />
                </div>

                <button type="submit" className='btn-test-submit w-100 mt-2'>
                  Schedule Test Drive
                </button>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testdrive