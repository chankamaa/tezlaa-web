"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const brewSteps = [
  {
    id: 1,
    iconPath: "/icons/beans-icon.png", // Replace with your icon path
    title: "Finest Beans Selected",
    description: "We source ethically grown, high-quality beans from trusted farmers who share our passion for coffee.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    id: 2,
    iconPath: "/icons/roasted-icon.png", // Replace with your icon path
    title: "Perfectly Roasted",
    description: "Our beans are roasted in-house in small batches, locking in aroma and flavor for a truly rich experience.",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 3,
    iconPath: "/icons/handcrafted-icon.png", // Replace with your icon path
    title: "Handcrafted with Love",
    description: "Each cup is carefully brewed and served fresh, balancing taste, aroma, and that perfect café warmth.",
    gradient: "from-red-400 to-pink-500"
  }
]

const statistics = [
  {
    id: 1,
    number: 12,
    suffix: "+",
    label: "Outlets",
    color: "text-orange-600"
  },
  {
    id: 2,
    number: 10,
    suffix: "K",
    label: "Cups Served",
    color: "text-red-600"
  },
  {
    id: 3,
    number: 3,
    suffix: "K",
    label: "Loyal Customers",
    color: "text-orange-600"
  },
  {
    id: 4,
    number: 4.8,
    suffix: "",
    label: "Customer Rating",
    color: "text-red-600",
    decimal: true
  }
]

// Animated Counter Component
function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2000, 
  decimal = false,
  className = "" 
}: {
  value: number
  suffix?: string
  duration?: number
  decimal?: boolean
  className?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true)
      let startTime: number
      let startValue = 0

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentValue = startValue + (value - startValue) * easeOut
        
        setDisplayValue(decimal ? Math.round(currentValue * 10) / 10 : Math.floor(currentValue))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration, decimal, isVisible])

  return (
    <div ref={ref} className={className}>
      {decimal ? displayValue.toFixed(1) : displayValue}{suffix}
    </div>
  )
}

export default function BrewProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
    >
      <motion.div 
        className="container-custom relative z-10"
        style={{ y: backgroundY }}
      >
        {/* Section Header */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Signature Brew Process
          </motion.h2>
        </motion.div>

        {/* Brew Steps */}
        <motion.div 
          ref={stepsRef}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 lg:mb-24"
        >
          {brewSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="text-center group"
              initial={{ opacity: 0, y: 60 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
            >
              {/* Icon Container */}
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Custom Icon Image */}
                <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                  <Image
                    src={step.iconPath}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-gray-600 leading-relaxed max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {step.description}
              </motion.p>

              {/* Step Number */}
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-orange-200 rounded-full flex items-center justify-center font-bold text-orange-600 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={stepsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 300 }}
                style={{ position: 'relative' }}
              >
                {step.id}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 60 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
            >
              {/* Number */}
              <motion.div 
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                <AnimatedCounter 
                  value={stat.number}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                  duration={2000 + index * 200}
                />
              </motion.div>

              {/* Label */}
              <motion.div 
                className="text-gray-700 font-medium text-sm lg:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>

              {/* Decorative Line */}
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scaleX: 0 }}
                animate={statsInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-40"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-24 h-24 bg-red-100 rounded-full opacity-30"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  )
}