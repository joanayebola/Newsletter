import CTASection from '@/components/CTASection'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import IndustriesSection from '@/components/IndustriesSection'
import TestimonialsSection from '@/components/TestimonialSection'
import WhySection from '@/components/WhySection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <WhySection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default page
