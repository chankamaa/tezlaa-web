"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Play, Coffee, Heart, Leaf } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const heroSlides = [
  {
    id: 1,
    title: "Good Friends, Good Vibes,",
    subtitle: "Great Coffee at Tezlaa",
    description: "Tezlaa Café brings you coffee that's freshly brewed, sustainably sourced, and made to create moments of joy",
    image: "/images/hero/hero-1.png", // Coffee being poured
    bgColor: "from-orange-400 via-red-400 to-pink-400",
    icon: Coffee,
    ctaText: "See the Moments",
    ctaLink: "/gallery",
    secondaryText: "Discover Our Story",
    secondaryLink: "/our-story"
  },
  {
    id: 2,
    title: "Sustainably Sourced,",
    subtitle: "Passionately Crafted",
    description: "Every cup supports fair-trade farmers and sustainable practices, creating a better world one sip at a time",
    image: "/images/hero/hero-2.png", // Sustainability
    bgColor: "from-green-400 via-emerald-400 to-teal-400",
    icon: Leaf,
    ctaText: "Our Impact",
    ctaLink: "/sustainability",
    secondaryText: "Visit Our Cafés",
    secondaryLink: "/gallery"
  },
  {
    id: 3,
    title: "Where Community",
    subtitle: "Meets Coffee Culture",
    description: "Experience handcrafted beverages in spaces designed to bring people together and create lasting memories",
    image: "/images/hero/hero-3.png", // Community
    bgColor: "from-purple-400 via-violet-400 to-indigo-400",
    icon: Heart,
    ctaText: "Find Us",
    ctaLink: "/gallery",
    secondaryText: "What's Brewing",
    secondaryLink: "/whats-brewing"
  }
]

const floatingElements = [
  { icon: Coffee, delay: 0, x: "10%", y: "20%" },
  { icon: Heart, delay: 1, x: "80%", y: "15%" },
  { icon: Leaf, delay: 2, x: "15%", y: "70%" },
  { icon: Coffee, delay: 3, x: "75%", y: "80%" },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -300])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.8])
  
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = heroSlides[currentSlide]
  const IconComponent = currentSlideData.icon

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: ySpring }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor} mix-blend-multiply transition-all duration-1000`} />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => {
          const Icon = element.icon
          return (
            <motion.div
              key={index}
              className="absolute text-orange-200"
              style={{ left: element.x, top: element.y }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3], 
                scale: [1, 1.2, 1], 
                rotate: [0, 360],
                y: [-20, 20, -20]
              }}
              transition={{
                duration: 6,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-8 h-8 lg:w-12 lg:h-12" />
            </motion.div>
          )
        })}
      </div>

      {/* Main Content */}
      <motion.div 
        ref={containerRef}
        className="container-custom relative z-10"
        style={{ y: y, opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: 15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentSlideData.title}
                  </motion.span>
                  <motion.span
                    className="block text-gradient bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentSlideData.subtitle}
                  </motion.span>
                </h1>

                {/* Description */}
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href={currentSlideData.ctaLink} className="flex items-center space-x-2">
                      <span>{currentSlideData.ctaText}</span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-orange-400"
                  >
                    <Link href={currentSlideData.secondaryLink} className="flex items-center space-x-2">
                      <span>{currentSlideData.secondaryText}</span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Content - Image Carousel */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[4/3] lg:aspect-square max-w-lg mx-auto lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    {/* Placeholder for now - replace with actual images */}
                    <div className={`w-full h-full bg-gradient-to-br ${currentSlideData.bgColor} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <IconComponent className="w-24 h-24 mx-auto mb-4 opacity-80" />
                        <p className="text-lg font-medium">
                          <Image
                      src={currentSlideData.image}
                      alt={currentSlideData.title}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                    />
                        </p>
                      </div>
                    </div>
                    {/* 
                    Uncomment when you have actual images:
                    <Image
                      src={currentSlideData.image}
                      alt={currentSlideData.title}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                    />
                    */}
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-400 rounded-full opacity-15"
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-orange-600 shadow-lg -ml-6 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-orange-600 shadow-lg -mr-6 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Control */}
            <div className="flex justify-center mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-gray-600 hover:text-orange-600"
              >
                <Play className={`w-4 h-4 mr-2 ${!isAutoPlaying ? 'opacity-50' : ''}`} />
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}