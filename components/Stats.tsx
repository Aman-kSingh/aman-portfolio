'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiCode, FiFolder, FiUsers, FiAward } from 'react-icons/fi'

const stats = [
  { 
    icon: <FiCode />, 
    value: 1, 
    suffix: '+', 
    label: 'Years Experience',
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'group-hover:shadow-blue-500/50'
  },
  { 
    icon: <FiFolder />, 
    value: 5, 
    suffix: '+', 
    label: 'Projects Completed',
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'group-hover:shadow-purple-500/50'
  },
  { 
    icon: <FiUsers />, 
    value: 0, 
    suffix: '+', 
    label: 'Happy Clients',
    color: 'from-orange-500 to-red-500',
    bgGlow: 'group-hover:shadow-orange-500/50'
  },
  { 
    icon: <FiAward />, 
    value: 10, 
    suffix: '+', 
    label: 'Technologies',
    color: 'from-green-500 to-emerald-500',
    bgGlow: 'group-hover:shadow-green-500/50'
  },
]

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Journey</span> in Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Achievements and milestones that define my career</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, suffix, label, index, color, bgGlow }: any) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
        setHasAnimated(true)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, hasAnimated])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => !hasAnimated && setHasAnimated(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${bgGlow}`}></div>
      
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 hover:shadow-2xl overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        {/* Icon with gradient background */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${color} mb-6 shadow-lg`}
        >
          <div className="text-white text-2xl">
            {icon}
          </div>
        </motion.div>

        {/* Counter */}
        <motion.div
          className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3`}
        >
          {count}{suffix}
        </motion.div>

        {/* Label */}
        <div className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
          {label}
        </div>

        {/* Animated bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hasAnimated ? '100%' : 0 }}
          transition={{ duration: 1.5, delay: index * 0.1 }}
          className={`h-1 bg-gradient-to-r ${color} rounded-full mt-4`}
        ></motion.div>

        {/* Decorative corner element */}
        <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl`}></div>
      </div>
    </motion.div>
  )
}