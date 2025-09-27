// src/data/navigation.ts

export interface NavigationItem {
  name: string
  href: string
  description?: string
  icon?: string
}

export const mainNavigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Welcome to Tezlaa Café',
  },
  {
    name: 'Our Story',
    href: '/our-story',
    description: 'Learn about our journey and passion',
  },
  {
    name: 'Sustainability',
    href: '/sustainability',
    description: 'Our commitment to the environment',
  },
  {
    name: "What's Brewing",
    href: '/whats-brewing',
    description: 'Latest news and updates',
  },
  {
    name: 'Gallery',
    href: '/gallery',
    description: 'Find our café locations',
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with us',
  },
]

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/tezlaacafe',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/tezlaacafe',
    icon: 'instagram',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tezlaacafe',
    icon: 'twitter',
  },
]

export const contactInfo = {
  phone: '+94777325356',
  email: 'info@tezlaa.com',
  address: '45 Main Street, Colombo 01, Sri Lanka',
  location: 'Colombo 07',
  hours: 'Monday - Sunday, 9:00 AM - 8:00 PM',
}

export const footerNavigation: NavigationItem[] = [
  {
    name: 'Our Story',
    href: '/our-story',
  },
  {
    name: 'Sustainability',
    href: '/sustainability',
  },
  {
    name: "What's Brewing",
    href: '/whats-brewing',
  },
  {
    name: 'Gallery',
    href: '/gallery',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]