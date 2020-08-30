import Hero from '../components/Hero/Hero'
import Destination from '../components/FeaturedDestination/FeaturedDestination'
import BestSites from '../components/BestSites'
// import React,{useState,useEffect} from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Destination/>
      <BestSites/>
    </div>
  )
}
