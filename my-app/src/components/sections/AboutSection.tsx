"use client"

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Heart, Coffee, Leaf, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description: "Every bean roasted to perfection"
  },
  {
    icon: Heart,
    title: "Served with Love", 
    description: "Crafted with care and passion"
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Ethical sourcing & eco practices"
  },
  {
    icon: Users,
    title: "Community",
    description: "Bringing people together"
  }
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" })
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            ref={contentRef}
            style={{ y, opacity }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-orange-600 tracking-wider uppercase">
                Our Story
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Rooted in Passion,</span>
                <span className="block mt-2">Served with Love</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Tezlaa Café was built on a simple belief: great coffee should do good. 
                From working with ethical farmers to using sustainable practices, we care 
                about every step of the journey. Each cup we serve is a celebration of 
                flavor, community, and a better planet — brewed with passion, served with 
                love, and meant to brighten your day.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300 group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 group-hover:bg-orange-200 rounded-xl mb-3 transition-colors">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/our-story">
                  Learn About Tezlaa
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            ref={imageRef}
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 100 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div 
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Placeholder for café interior image */}
                <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <Coffee className="w-16 h-16 mx-auto mb-4 text-orange-600" />
                    <p className="text-lg font-medium">
                      {/* TODO: Replace with actual café interior image */}
                      Café Interior Image
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      /images/cafe/interior-main.jpg
                    </p>
                  </div>
                </div>
                {/* 
                Uncomment when you have the actual image:
                <Image
                  src="/images/cafe/interior-main.jpg"
                  alt="Tezlaa Café Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                */}
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={imageInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -5, rotate: 2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">12+</div>
                    <div className="text-xs text-gray-600">Outlets</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">10K</div>
                    <div className="text-xs text-gray-600">Cups Served</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-60"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-red-200 rounded-full opacity-40"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [0, -90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}