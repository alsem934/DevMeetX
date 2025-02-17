



import React from 'react'
import LayOut from '../Layout/Layout'
import HeroSection from './Hero'
import AboutSection from './About'
import PastEventsSection from './PastEvents'
import V3TeaserSection from './Teaser'
// import MyComponent from './Myexample'

function Home() {
  return (
    <LayOut>
      {/* <MyComponent/> */}
      <HeroSection/>
      <AboutSection/>
      <PastEventsSection/>
    </LayOut>
  )
}

export default Home
