// src/app/page.tsx

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
// import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'

export default function HomePage() {
  return (
    // <SmoothScrollProvider>
      <div className="pt-12 lg:pt-16"> {/* Account for fixed header */}
        <HeroSection />
        <AboutSection />
        
        {/* Placeholder for other sections */}
        <section className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Next Section</h2>
            <p className="text-gray-600">More sections will go here...</p>
          </div>
        </section>
      </div>
    // </SmoothScrollProvider>
  )
}