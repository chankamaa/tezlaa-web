"use client"

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Heart, Users, Briefcase, Coffee, Calendar, Wifi } from 'lucide-react'
import Image from 'next/image'

const occasions = [
  {
    id: 1,
    title: "Celebrate Together",
    description: "Host birthdays, anniversaries, or small parties in a warm and welcoming space with fresh brews and delicious bites.",
    image: "/images/occasions/celebrate.jpg",
    icon: Heart,
    gradient: "from-pink-400 via-red-400 to-orange-400",
    features: ["Private seating", "Party packages", "Custom catering"]
  },
  {
    id: 2,
    title: "Meetings & Work",
    description: "Get things done in our calm, comfortable environment. Perfect for team meetings, brainstorming sessions, or solo workdays.",
    image: "/images/occasions/meetings.jpg", 
    icon: Briefcase,
    gradient: "from-blue-400 via-indigo-400 to-purple-400",
    features: ["Free WiFi", "Power outlets", "Quiet zones"]
  },
  {
    id: 3,
    title: "Celebrate Together",
    description: "Host birthdays, anniversaries, or small parties in a warm and welcoming space with fresh brews and delicious bites.",
    image: "/images/occasions/celebrate-2.jpg",
    icon: Users,
    gradient: "from-green-400 via-emerald-400 to-teal-400",
    features: ["Group tables", "Event space", "Celebration menu"]
  }
]

const floatingIcons = [
  { icon: Coffee, x: "5%", y: "10%", delay: 0 },
  { icon: Calendar, x: "90%", y: "15%", delay: 1 },
  { icon: Wifi, x: "8%", y: "80%", delay: 2 },
  { icon: Heart, x: "85%", y: "75%", delay: 3 },
]

export default function OccasionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const cardsY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((element, index) => {
          const Icon = element.icon
          return (
            <motion.div
              key={index}
              className="absolute text-orange-200/30"
              style={{ left: element.x, top: element.y }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { 
                opacity: [0.2, 0.4, 0.2], 
                scale: [1, 1.3, 1], 
                rotate: [0, 360],
                y: [-15, 15, -15]
              } : {}}
              transition={{
                duration: 8,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
            </motion.div>
          )
        })}
      </div>

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
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Space for Every Occasion
          </motion.h2>
        </motion.div>

        {/* Occasions Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          style={{ y: cardsY }}
        >
          {occasions.map((occasion, index) => {
            const Icon = occasion.icon
            return (
              <motion.div
                key={occasion.id}
                className="group relative"
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ y: -10 }}
              >
                {/* Card Container */}
                <div className="relative h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                  {/* Background Image/Gradient */}
                  <div className="absolute inset-0">
                    {/* Placeholder gradient background - replace from this  */}
                    <div className={`w-full h-full bg-gradient-to-br ${occasion.gradient} opacity-90`}>
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    {/* 
                    Uncomment when you have actual images:
                    <Image
                      src={occasion.image}
                      alt={occasion.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    */}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end text-white">
                    {/* Icon */}
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-xl lg:text-2xl font-bold mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {occasion.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-white/90 leading-relaxed mb-6 text-sm lg:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {occasion.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {occasion.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-2 text-sm text-white/80"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ 
                      duration: 6 + index * 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div 
          className="flex justify-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-orange-300 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}