// src/app/page.tsx

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import OccasionsSection from '@/components/sections/OccasionsSection'
import BrewProcessSection from '@/components/sections/BrewProcessSection'
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
          
          {/* Placeholder for other sections */}
          <section className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Next Section</h2>
              <p className="text-gray-600">More sections will go here...</p> */}
            </div>
          </section>
        </div>
      </div>
    // </SmoothScrollProvider>
  )
}