import Hero from '../components/Hero/Hero'
import Destination from '../components/FeaturedDestination/FeaturedDestination'
import InfoBox from '../components/InfoBox/InfoBox'
import LandingListTours from '../components/LandingListTours/LandingListTours'
import MostVisitedDestination from '../components/MostVisitedDestination/MostVisitedDestination'
// import React,{useState,useEffect} from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <InfoBox/>
      <Destination/>
      <LandingListTours Title="Tours Recomendados"/>
      <LandingListTours Title="Experiencias inolvidables"/>
      <MostVisitedDestination/>
    </div>
  )
}
