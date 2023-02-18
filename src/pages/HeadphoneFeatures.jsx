import React from 'react'
import './../css/headphone-features.css'
import img1 from '../assets/headphone2.jpg';
import img2 from '../assets/headphone3.jpg';
import img3 from '../assets/headphone4.jpg';
function HeadphoneFeatures() {
  return (
       <div className='page headphone-features'>
      <div className='content-header'>
        Headphone Features
      </div>
      <div className='content'>
        <div id='tile-image1'></div>
        <div className="feature" id='feature1'>
          <img src={img1} alt="feature 1" />
          <p className='feature-text'>
          Utilize advanced sensors that can detect everything from the environment around you to the music you're listening to, providing you with a completely personalized listening experience.          </p>
        </div>
        <div className="feature" id='feature2'>
          <img src={img2} alt="feature 2" />
          <p className='feature-text'>
Get the most out of your music with advanced, real-time music analysis and equalization technology, that will enhance every note and every beat.          </p>
        </div>
        <div className="feature" id='feature3'>
          <img src={img3} alt="feature 3" />
          <p className='feature-text'>
          Experience the most comfortable and ergonomic headphones possible, designed with advanced 3D scanning and printing technology, custom-fit to your own unique head shape.              </p>
        </div>
      </div>
    </div>
  )
}

export default HeadphoneFeatures