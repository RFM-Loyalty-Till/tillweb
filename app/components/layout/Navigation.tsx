'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!logoRef.current) return

    const logo = logoRef.current

    // Magnetic hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(logo, {
        x: x * 0.3,
        y: y * 0.3,
        rotation: x * 0.05,
        duration: 0.6,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(logo, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.4)'
      })
    }

    logo.addEventListener('mousemove', handleMouseMove)
    logo.addEventListener('mouseleave', handleMouseLeave)

    // Scroll-triggered scale animation
    gsap.to(logo, {
      scale: 0.85,
      scrollTrigger: {
        start: 'top top',
        end: '+=100',
        scrub: 1
      }
    })

    return () => {
      logo.removeEventListener('mousemove', handleMouseMove)
      logo.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)

  const navLinks = [
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Till Handheld', href: '/products/till-handheld' },
        { name: 'Kitchen Display', href: '/products/kitchen-display' },
        { name: 'Self-Ordering Kiosk', href: '/products/self-ordering-kiosk' },
        { name: 'Digital Menu', href: '/products/digital-menu' },
        { name: 'Order & Pay', href: '/products/order-and-pay' },
        { name: 'Pay at Table', href: '/products/pay-at-table' },
        { name: 'Inventory', href: '/products/inventory' },
        { name: 'CRM & Loyalty', href: '/products/crm-loyalty' },
        { name: 'Payments', href: '/products/payments' },
        { name: 'Table Management', href: '/products/table-management' },
      ]
    },
    {
      name: 'Features',
      href: '/features',
      dropdown: [
        { name: 'Front of House', href: '/features/front-of-house' },
        { name: 'Back of House', href: '/features/back-of-house' },
        { name: 'Out of House', href: '/features/out-of-house' },
        { name: 'Analytics', href: '/features/analytics' },
      ]
    },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'Academy', href: '/academy' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with GSAP magnetic + scroll effects */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/">
              <div
                ref={logoRef}
                className="relative cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src="/images/Primarylogo-till.png"
                  alt="Till Logo"
                  width={70}
                  height={70}
                  className="w-16 h-16 md:w-20 md:h-20 transition-opacity hover:opacity-90"
                />
              </div>
            </Link>

            {/* Minimal separator line */}
            <div className={`hidden md:block w-px h-12 transition-colors duration-300 ${
              isScrolled ? 'bg-navy/20' : 'bg-white/30'
            }`} />

            {/* Powered by RFM Loyalty */}
            <div className="hidden md:flex flex-col gap-0.5">
              <span className={`text-[10px] uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-navy/40' : 'text-white/50'
              }`}>
                Powered by
              </span>
              <Image
                src="/images/RFM-Logo8.png"
                alt="RFM Loyalty"
                width={90}
                height={18}
                className="opacity-90"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => {
              const isDropdownOpen = link.name === 'Products' ? productsDropdownOpen :
                                     link.name === 'Features' ? featuresDropdownOpen : false
              const setDropdownOpen = link.name === 'Products' ? setProductsDropdownOpen :
                                      link.name === 'Features' ? setFeaturesDropdownOpen : null

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setDropdownOpen && setDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen && setDropdownOpen(false)}
                >
                  <Link href={link.href}>
                    <motion.span
                      className={`${isScrolled ? 'text-navy' : 'text-white'} hover:text-coral transition-colors duration-300 text-sm cursor-pointer lg:whitespace-nowrap`}
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-navy/5 overflow-hidden ${
                            link.name === 'Products' ? 'w-[420px]' : 'w-64'
                          }`}
                        >
                          <div className={`p-2 ${
                            link.name === 'Products' ? 'grid grid-cols-2 gap-0.5' : ''
                          }`}>
                            {link.dropdown.map((item, index) => (
                              <Link key={item.name} href={item.href}>
                                <motion.div
                                  initial={{ opacity: 0, y: -5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.03, duration: 0.2 }}
                                  className="group px-4 py-3 text-navy/80 hover:bg-coral/5 rounded-2xl transition-all duration-200 cursor-pointer text-sm font-medium flex items-center justify-between"
                                >
                                  <span className="group-hover:text-coral transition-colors">{item.name}</span>
                                  <svg
                                    className="w-3.5 h-3.5 text-coral opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              isScrolled
                ? 'bg-coral text-white hover:bg-coral-dark'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}>
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-navy' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-navy/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-navy hover:text-coral transition-colors duration-300 font-medium text-lg cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.div>
                  </Link>

                  {/* Mobile Dropdown */}
                  {link.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item, subIndex) => (
                        <Link key={item.name} href={item.href}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index + subIndex) * 0.1 + 0.1 }}
                            className="block text-navy/70 hover:text-coral transition-colors duration-300 text-base cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="primary" size="md" className="w-full mt-4">
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
