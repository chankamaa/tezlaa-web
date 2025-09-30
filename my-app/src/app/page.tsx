// src/app/page.tsx

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import OccasionsSection from '@/components/sections/OccasionsSection'
import BrewProcessSection from '@/components/sections/BrewProcessSection'
import LocationsSection from '@/components/sections/LocationsSection'
// import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'

export default function HomePage() {
  return (
    // <SmoothScrollProvider>
      <div> {/* No top padding for hero - it should be full screen */}
        <HeroSection />
        <div className="pt-14 lg:pt-16"> {/* Only sections after hero need padding */}
          <AboutSection />
          <OccasionsSection />
          <BrewProcessSection />
          <LocationsSection />
        </div>
      </div>
    // </SmoothScrollProvider>
  )
}