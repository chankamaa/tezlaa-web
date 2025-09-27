"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
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
import { Menu, X, MapPin } from 'lucide-react'
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
  const pathname = usePathname()

  useEffect(() => {
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      )}
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group flex-shrink-0"
            data-scroll
            data-scroll-speed="0.5"
          >
            {/* Replace this div with your logo PNG */}
            <div className="w-auto h-12 md:h-14 lg:h-16 relative min-w-[140px] max-w-[280px] overflow-hidden">
              
              <Image
                src="/images/logo/tezlaa-logo.png"
                alt="Tezlaa Café"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent hover:bg-orange-50 hover:text-orange-600 transition-colors',
                        'font-medium text-gray-700',
                        isActiveLink(item.href) && 'text-orange-600 bg-orange-50'
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/locations" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Visit Tezlaa</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent 
              side="right" 
              className="w-full sm:w-80 bg-white border-l border-gray-100"
            >
              <SheetHeader className="border-b border-gray-100 pb-4 mb-6">
                <SheetTitle className="flex items-center justify-between">
                  {/* Mobile Logo */}
                  <div className="w-28 h-7 relative">
                    {/* TODO: Replace with your logo PNG */}
                    <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm font-display">
                        TEZLAA
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg font-medium transition-colors',
                      'hover:bg-orange-50 hover:text-orange-600',
                      isActiveLink(item.href)
                        ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                        : 'text-gray-700'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/locations" className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Visit Tezlaa</span>
                  </Link>
                </Button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-600 mb-2">Handcrafted coffee, cozy spaces</p>
                <p className="text-sm font-medium text-gray-800">+94 777 325 356</p>
                <p className="text-sm text-gray-600">info@tezlaa.com</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}