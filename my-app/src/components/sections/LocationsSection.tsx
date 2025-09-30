"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const locations = [
  {
    id: 1,
    name: "Tezlaa Cafe Colombo 5",
    address: "45 Main Street, Colombo 05",
    icon: MapPin,
    link: "/locations/colombo-5"
  },
  {
    id: 2,
    name: "Tezlaa Cafe Negombo",
    address: "Beach Road, Negombo",
    icon: MapPin,
    link: "/locations/negombo"
  },
  {
    id: 3,
    name: "Tezlaa Cafe Maharagama",
    address: "High Level Road, Maharagama",
    icon: MapPin,
    link: "/locations/maharagama"
  }
]

export default function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)
  
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const locationsInView = useInView(locationsRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={titleRef}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Our Locations Across
              <br />
              Sri Lanka
            </h2>
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              variant="ghost"
              className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-semibold group"
            >
              <Link href="/gallery" className="flex items-center space-x-2">
                <span>View All Locations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Location Buttons */}
        <motion.div 
          ref={locationsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={locationsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ y: -5 }}
              >
                <Link href={location.link}>
                  <motion.div
                    className="group relative bg-white border-2 border-orange-300 rounded-full py-5 px-8 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      {/* Icon */}
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600 flex-shrink-0" />
                      
                      {/* Text */}
                      <span className="text-base lg:text-lg font-semibold text-orange-600 group-hover:text-orange-700 transition-colors">
                        {location.name}
                      </span>
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-orange-100/0 via-orange-100/50 to-orange-100/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/2 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              y: [-10, 10, -10]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/3 right-20 w-16 h-16 bg-red-200 rounded-full opacity-15"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              y: [10, -10, 10]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  )
}