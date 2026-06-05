import React from 'react'

import { FeaturesGrid } from '../components/shared/FeaturesGrid'
import { HeroSectionWithFlickeringLights } from '../components/shared/hero-sections'
import { IntegrationsSection } from '../components/shared/IntegrationsSection'

const page = () => {
  return (
    <div>
      <HeroSectionWithFlickeringLights/>
      <FeaturesGrid/>
      <IntegrationsSection/>
    </div>
  )
}

export default page