'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!formRef.current) return

    const inputs = formRef.current.querySelectorAll('input, textarea')

    inputs.forEach((input, index) => {
      gsap.fromTo(
        input,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.5 + index * 0.1,
          ease: 'power3.out'
        }
      )
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white">
      {/* Hero - Bold like homepage */}
      <section className="relative h-screen flex items-center bg-navy overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-golden/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 2 }}
            className="font-palmore text-[25vw] leading-none text-white uppercase whitespace-nowrap"
          >
            CONTACT
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-24 bg-coral" />
              <span className="text-sm font-medium text-coral uppercase tracking-widest">
                Get in Touch
              </span>
            </div>
            <h1 className="font-palmore text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase tracking-normal leading-[0.85] mb-12">
              Let's Talk<br />About Till
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
              Ready to transform your restaurant operations? Our team is here to answer your questions and help you get started with Till.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-coral to-transparent" />
            <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-beige">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-palmore text-4xl text-navy uppercase tracking-normal mb-8">
                Send Us a Message
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-navy/10 rounded-xl focus:border-coral focus:outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-navy/10 rounded-xl focus:border-coral focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-6 py-4 bg-white border-2 border-navy/10 rounded-xl focus:border-coral focus:outline-none transition-colors"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-6 py-4 bg-white border-2 border-navy/10 rounded-xl focus:border-coral focus:outline-none transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white border-2 border-navy/10 rounded-xl focus:border-coral focus:outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-coral text-white font-semibold rounded-full hover:bg-coral-dark transition-all text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-palmore text-4xl text-navy uppercase tracking-normal mb-8">
                  Contact Info
                </h2>
                <p className="text-xl text-navy/70 leading-relaxed mb-12">
                  Prefer to reach out directly? Use any of the methods below to get in touch with our team.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-coral" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">Email</h3>
                    <a href="mailto:hello@till.com" className="text-navy/70 hover:text-coral transition-colors">
                      hello@till.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-coral" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">Phone</h3>
                    <a href="tel:+97144510012" className="text-navy/70 hover:text-coral transition-colors">
                      +971 4 451 0012
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-coral" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">Office</h3>
                    <p className="text-navy/70">
                      Office 1201, Control Tower<br />
                      Motor City, Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 mt-12">
                <h3 className="text-xl font-semibold text-navy mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-navy/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM GST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM GST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
