"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: "What's Brewing", href: '/whats-brewing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: isLoaded ? 0 : -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
        <div className="flex items-center justify-between h-16 lg:h-18 xl:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/" 
              className="flex items-center space-x-2 group flex-shrink-0"
              data-scroll
              data-scroll-speed="0.5"
            >
              <div className="w-auto h-10 md:h-12 lg:h-14 xl:h-16 relative min-w-[120px] max-w-[220px] transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo/tezlaa-logo.png"
                  alt="Tezlaa Café"
                  fill
                  className="object-contain transition-all duration-300"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-2">
                {navigation.map((item, index) => (
                  <NavigationMenuItem key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <Link href={item.href} legacyBehavior passHref>
                        <span
                          className={cn(
                            'relative bg-transparent hover:text-orange-600 transition-colors duration-300 cursor-pointer inline-block',
                            'font-medium text-gray-700 text-sm lg:text-base px-4 py-2.5',
                            'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-orange-500 after:transition-all after:duration-300 after:rounded-full',
                            'hover:after:w-full',
                            isActiveLink(item.href) && 'text-orange-600 after:w-full'
                          )}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden lg:flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Contact Icons */}
            <div className="hidden xl:flex items-center space-x-2 mr-2">
              <motion.a
                href="tel:+94777325356"
                className="p-2 text-gray-600 hover:text-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:info@tezlaa.com"
                className="p-2 text-gray-600 hover:text-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Main CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-red-500 hover:to-red-600 text-white font-semibold text-sm lg:text-base px-6 py-2.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <Link href="/locations" className="flex items-center space-x-2 relative z-10">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Visit Tezlaa</span>
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Trigger */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative p-2 text-gray-700 hover:text-orange-600 transition-all duration-300 group"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isMobileMenuOpen ? 'close' : 'menu'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isMobileMenuOpen ? (
                          <X className="w-6 h-6" />
                        ) : (
                          <Menu className="w-6 h-6" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                    <span className="sr-only">
                      {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    </span>
                  </Button>
                </motion.div>
              </SheetTrigger>

            <SheetContent 
              side="right" 
              className="w-full sm:w-96 bg-white/95 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl"
            >
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full flex flex-col"
              >
                <SheetHeader className="border-b border-gray-200/50 pb-6 mb-8">
                  <SheetTitle className="flex items-center justify-between">
                    {/* Mobile Logo */}
                    <motion.div 
                      className="w-32 h-8 relative"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Image
                        src="/images/logo/tezlaa-logo.png"
                        alt="Tezlaa Café"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation */}
                <nav className="flex-1 space-y-3">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center px-6 py-4 font-medium transition-all duration-300 group relative',
                          'hover:text-orange-600 hover:scale-105 active:scale-95',
                          'after:absolute after:bottom-2 after:left-6 after:w-0 after:h-1 after:bg-orange-500 after:transition-all after:duration-300 after:rounded-full',
                          'hover:after:w-2/3',
                          isActiveLink(item.href)
                            ? 'text-orange-600 after:w-2/3'
                            : 'text-gray-700 hover:text-orange-600'
                        )}
                      >
                        <span className="font-semibold">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-200/50"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-red-500 hover:to-red-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/locations" className="flex items-center justify-center space-x-3 relative z-10">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">Visit Tezlaa</span>
                        
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-200/50"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <div className="text-center space-y-4">
                    <p className="text-sm text-gray-600 font-medium">Handcrafted coffee, cozy spaces</p>
                    
                    {/* Contact Links */}
                    <div className="flex justify-center space-x-6">
                      <motion.a
                        href="tel:+94777325356"
                        className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium">+94 777 325 356</span>
                      </motion.a>
                      
                      <motion.a
                        href="mailto:info@tezlaa.com"
                        className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-medium">Email Us</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}