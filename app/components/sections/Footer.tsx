'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Industries', 'Integrations'],
    Company: ['About', 'Careers', 'Blog', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Academy', 'API Reference', 'Community'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security']
  }

  return (
    <footer>
      {/* CTA Section */}
      <section className="py-32 bg-white border-t border-navy/5">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-coral uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="font-palmore text-5xl lg:text-6xl text-navy mt-4 mb-6 uppercase tracking-normal max-w-3xl mx-auto">
              Ready to transform your restaurant?
            </h2>
            <p className="text-xl text-navy/60 mb-12 max-w-2xl mx-auto font-light">
              Join hundreds of restaurants using Till to streamline operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg">
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-navy text-white">
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Image
                src="/images/Primarylogo-till.png"
                alt="Till Logo"
                width={60}
                height={60}
                className="mb-6"
              />
              <p className="text-white/60 mb-6 leading-relaxed">
                Next-generation CloudPOS platform built for restaurants and retail.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={link === 'Academy' ? '/academy' : '#'}
                        className="text-white/60 hover:text-coral transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Till. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
