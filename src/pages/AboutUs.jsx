import React from 'react'
import './../css/about-us.css'
import img1 from './../assets/phone1.png';
function AboutUs() {
  return (
    <div className='page about-us' id="about-us">
          <div className="about-us-col1">
            <div >
              <img className='company-image' src={img1} alt="headphone image" />
            </div>
          </div>
          <div className='about-us-col2'>
            <h1 className='about-us-header'>Xenon</h1>
            <p className='about-us-para'>
            Dedicated to delivering the latest in cutting-edge technology to enhance your everyday life. We are a team of passionate individuals who are committed to creating high-quality products that seamlessly integrate into your daily routine.
            <br />
            With a focus on innovation, design, and functionality, we bring you the latest in smartphone and headphone technology. We strive to provide the most advanced products on the market, utilizing the latest advancements in materials.
            </p>
          </div>
        </div>
  )
}

export default AboutUs