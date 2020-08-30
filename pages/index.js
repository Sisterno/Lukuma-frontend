import Hero from '../components/Hero/Hero'
import Destination from '../components/FeaturedDestination/FeaturedDestination'
import BestSites from '../components/BestSites'
import InfoBox from '../components/InfoBox/InfoBox'
// import React,{useState,useEffect} from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <InfoBox/>
      <Destination/>
      <BestSites/>
      
    </div>
  )
}
