



import React from 'react'
import LayOut from '../Layout/Layout'
import HeroSection from './Hero'
import AboutSection from './About'
import PastEventsSection from './PastEvents'
import V3TeaserSection from './Teaser'

function Home() {
  return (
    <LayOut>
      <HeroSection/>
      <AboutSection/>
      <PastEventsSection/>
    </LayOut>
  )
}

export default Home
