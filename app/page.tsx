import React from 'react'

import { CodeSnippetSection } from '../components/shared/code-snippet-section'
import { FeaturesGrid } from '../components/shared/FeaturesGrid'
import { HeroSection } from '../components/shared/hero-sections'
import { LenisProvider } from '../components/provider/LenisProvider'

const page = () => {
  return (
    <LenisProvider>
      <div>
        <HeroSection />
        <CodeSnippetSection />
        <FeaturesGrid />
      </div>
    </LenisProvider>
  )
}

export default page