import React from 'react';
import './../css/phone-features.css';
import img1 from '../assets/phone4.jpg';
import img2 from '../assets/phone5.jpg';
import img3 from '../assets/phone6.jpg';
function PhoneFeatures() {
  return (
    <div className='page phone-features' id="features">
      <div className='content-header'>
        Phone Features
      </div>
      <div className='content'>
        <div className="feature">
          <img src={img1} alt="feature 1" />
          <p className='feature-text'>
          Experience lightning-fast internet speeds and low latency with 5G connectivity.            
          </p>
        </div>
        <div className="feature">
          <img src={img2} alt="feature 2" />
          <p className='feature-text'>
            High refresh rate displays for smoother animations and gaming experiences.
          </p>
        </div>
        <div className="feature">
          <img src={img3} alt="feature 3" />
          <p className='feature-text'>
          Connect to the internet seamlessly with fully integrated Quantum Internet technology, taking connectivity to new levels.            </p>
        </div>
      </div>
    </div>
  )
}

export default PhoneFeatures