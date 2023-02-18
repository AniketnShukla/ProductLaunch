import React from 'react'
import './../css/footer.css'
function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li>
          <a href="#hero">Product</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#buy-now">Buy</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>
        <div className="footer-bottom">
          <p>&copy; 2023 Xenon. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer