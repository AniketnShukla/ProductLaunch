import React from 'react'
import './../css/buynow.css'
import img1 from '../assets/buynow-bg1.png';
import img2 from '../assets/phone7.png';
function BuyNow() {
  return (
    <div className='page buy-now' id="buy-now">
      <div className='col1'>
      <h1 className='buynow-header'>Buy now</h1>
      <p className='buy-now-para'>
        Step into the future with the all new Xenon X1.
      <br />
      Get ready to experience the future of technology today, with the latest in technology and innovation, all packed into one stunning package.
      </p>
      <div className='hero-btn-group'>
        <a className='hero-btn' href="#buy-now">Order</a>
      </div>
      </div>
      <div className="col2">
        <div className="tile1">
          <img className='headphone-tile1' src={img1} alt="headphone image" />
        </div>
        <div className="tile2">
            <img className='phone-tile2' src={img2} alt="headphone image" />
        </div>
        
      </div>
    </div>
  )
}

export default BuyNow