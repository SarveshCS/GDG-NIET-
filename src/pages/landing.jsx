import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import CreativeOnboardingCards from '../components/main'
import AboutTheCommunity from '../components/aboutcomp'
import HeroSection8 from '../components/co'
import EventCarousel from '../components/crausal'
import SocialConnect from '../components/connect'
import Footer from '../components/footer'
import CollegeMap from '@/components/map'
import GDSCHeader from '@/components/welcome'
export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <GDSCHeader />
      <HeroSection8 />
      <EventCarousel />
      <SocialConnect />
      <CollegeMap />
      <Footer />
    </>
  )
}
