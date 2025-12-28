import React from 'react'
import WhyHero from './components/Hero'
import Features from '@/components/Features'
import WhyFeaturesSection from './components/features-center'
import SpecialSolutionSection from './components/Benefits'
import FinalCTASection from './components/FinalCTASection'
import QuoteSection from './components/QuoteSection'


const page = () => {
    return (
        <>
            <WhyHero />
            <WhyFeaturesSection />
            <SpecialSolutionSection />
            <FinalCTASection />
            <QuoteSection />
        </>
    )
}

export default page