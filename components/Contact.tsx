'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_tgc9rf8',        // Replace with your Service ID
        'template_xsh8p9y',       // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '65rRC59kPkuaJDd_t'         // Replace with your Public Key
      )

      console.log('Email sent successfully:', result)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!mounted) {
    return (
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-2">Available for New Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold mb-2">Available for New Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfo
                icon={<FiMail />}
                label="Email"
                value="amansingh60396@gmail.com"
                href="mailto:amansingh60396@gmail.com"
              />
              <ContactInfo
                icon={<FiMapPin />}
                label="Location"
                value="India"
              />
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Bring to the Table</h4>
              <div className="space-y-3">
                {['React & Next.js Ecosystem', 'Scalable Backend Systems', 'Modern UI/UX Design', 'Performance Optimization'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="bg-white/70 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 space-y-6"
            >
              {/* Success/Error Messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-600 dark:text-green-400">
                  <FiCheck className="text-xl" />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400">
                  <p>Failed to send message. Please try again or email me directly.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon, label, value, href }: any) {
  const content = (
    <div className="flex items-start gap-4 p-4 bg-white/70 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
      <div className="text-blue-400 text-2xl mt-1">{icon}</div>
      <div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-gray-900 dark:text-white font-medium">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}