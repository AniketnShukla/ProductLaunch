import React from 'react'
import AboutUs from '../pages/AboutUs'
import BuyNow from '../pages/BuyNow'
import HeadphoneFeatures from '../pages/HeadphoneFeatures'
import HeadphoneFeature from '../pages/HeadphoneFeatures'
import HeadphoneHero from '../pages/HeadphoneHero'
import PhoneFeatures from '../pages/PhoneFeatures'
import PhoneHero from '../pages/PhoneHero'
import Footer from './Footer'

function MainContent() {
  return (
    <div className='main-content'>
        <PhoneHero />
        <HeadphoneHero />
        <PhoneFeatures />
        <HeadphoneFeatures />
        <BuyNow />
        <AboutUs />
    </div>
  )
}

export default MainContent