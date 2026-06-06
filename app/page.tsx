import React from 'react'

import { CodeSnippetSection } from '../components/shared/code-snippet-section'
import { ConsolePreview } from '../components/shared/console-preview'
import { FAQSection } from '../components/shared/faq-section'
import { FeaturesGrid } from '../components/shared/FeaturesGrid'
import { FinalCTASection } from '../components/shared/final-cta-section'
import { HeroSection } from '../components/shared/hero-sections'
import { PricingSection } from '../components/shared/pricing-section'
import { LenisProvider } from '../components/provider/LenisProvider'

const page = () => {
  return (
    <LenisProvider>
      <div>
        <HeroSection />
        <ConsolePreview />
        <CodeSnippetSection />
        <FeaturesGrid />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </LenisProvider>
  )
}

export default page