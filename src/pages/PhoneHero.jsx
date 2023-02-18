import React from 'react'
import './../css/phone-hero.css'
function PhoneHero() {
  
  return (
    <div className='page phone-hero' id="hero">
        <div className='hero-phone-para'>
          <h1>
            Introducing Xenon, 
            <h2>
              the revolutionary new age smartphone that is set to change the game
            </h2>
          </h1>
          <h3>
            Meet the perfect combination of style and substance, packed with cutting-edge features and technology
          </h3>
          <div className='hero-btn-group'>
            <a className='hero-btn' href="#buy-now">Order Now</a>
          </div>

        </div>
    </div>
  )
}

export default PhoneHero