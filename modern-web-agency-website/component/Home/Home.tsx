'use client'

import {Hero , About , Services, WhyChoose, Price, ClientReview, Order, Contact} from '../Home'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
    const initAOS = async()=> {
        await import('aos');
        AOS.init({
          duration: 1000,
          once: true ,
          easing: 'ease',
          anchorPlacement: 'top-bottom'
      })
    }

    initAOS()
  },[])

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
      <ClientReview />
      <Order />
      <Contact />     
    </div>
  )
}

export default Home