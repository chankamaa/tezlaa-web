"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const footerNavigation = [
  { name: 'Our Story', href: '/our-story' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: "What's Brewing", href: '/whats-brewing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/tezlaacafe',
    icon: Facebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tezlaacafe',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/tezlaacafe',
    icon: Instagram,
  },
]

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+94777325356',
    href: 'tel:+94777325356',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@tezlaa.com',
    href: 'mailto:info@tezlaa.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Colombo 07',
    href: 'https://maps.google.com/?q=Colombo+07+Sri+Lanka',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100" style={{backgroundColor: '#FEF4EE'}} data-scroll-section>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          {/* Logo and Description */}
          <div className="text-center mb-12" data-scroll data-scroll-speed="0.5">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6 group">
              <div className="w-40 h-10 lg:w-48 lg:h-12 mx-auto relative">
                <Image
                  src="/images/logo/tezlaa-logo.png"
                  alt="Tezlaa Café"
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Tezlaa Café serves handcrafted coffee, cozy spaces, and sustainable vibes — 
              making every visit a moment worth savoring.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12" data-scroll data-scroll-speed="0.3">
            {footerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 hover:underline underline-offset-4"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center mb-12" data-scroll data-scroll-speed="0.2">
            <div className="flex items-center space-x-1">
              <span className="text-gray-700 font-medium mr-4">Follow Us on:</span>
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8" data-scroll data-scroll-speed="0.1">
            <div className="flex items-center">
              <h3 className="text-gray-900 font-semibold text-lg">Contact Details</h3>
            </div>

            {contactDetails.map((contact) => (
              <div key={contact.label} className="flex items-center">
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center space-x-2 text-gray-900 hover:text-orange-600 transition-colors duration-200"
                >
                  <contact.icon className="w-5 h-5 text-gray-900 group-hover:text-orange-600 transition-colors" />
                  <span className="font-medium">{contact.value}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-600 text-sm">
            Copyright © {currentYear} tezlaa.com
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-orange-600 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/help"
              className="text-gray-600 hover:text-orange-600 text-sm transition-colors duration-200"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}