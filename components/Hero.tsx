'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiMapPin, FiTwitter, FiInstagram, FiClock } from 'react-icons/fi'

export default function Hero() {
  const [currentTime, setCurrentTime] = useState('')
  const [typedCode, setTypedCode] = useState('')
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    'const developer = {',
    '  name: "Aman Kumar",',
    '  role: "Full Stack Developer",',
    '  skills: ["React", "Node", "Next.js"],',
    '  passion: "Building great products",',
    '  available: true,',
    '};',
    '',
    'developer.createAwesome();'
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }
      setCurrentTime(now.toLocaleTimeString('en-US', options))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine]
      let charIndex = 0
      
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setTypedCode(prev => {
            const lines = prev.split('\n')
            lines[currentLine] = line.substring(0, charIndex)
            return lines.join('\n')
          })
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
            setTypedCode(prev => prev + '\n')
          }, 100)
        }
      }, 50)

      return () => clearInterval(typeInterval)
    }
  }, [currentLine])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/10 bg-green-100 border border-green-500/20 dark:border-green-500/20 border-green-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">Available for work</span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <p className="text-purple-600 dark:text-purple-400 text-sm md:text-base font-medium flex items-center gap-2 mb-4">
                <span className="text-lg">{'>'}_</span> Hello World, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Aman Kumar
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-purple-600 dark:text-purple-400 text-xl"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-400">
                  Full Stack Developer
                </h2>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              Hello! I'm Aman Kumar, a passionate Full-Stack MERN Developer transforming complex ideas into elegant, 
              high-performance web applications. My journey into coding began out of sheer curiosity, fascinated by 
              how lines of text could create interactive digital worlds. What started as a hobby quickly blossomed 
              into a profound career path. I thrive on challenges and constantly seek to deepen my understanding of 
              cutting-edge technologies. My goal is to build solutions that are not only functional and efficient but 
              also deliver exceptional user experiences.
            </motion.p>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FiMapPin className="w-5 h-5" />
              <span>India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                
                View Projects
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all hover:scale-105"
              >
                <FiMail />
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Find me on</p>
              <div className="flex gap-3">
                <SocialLink href="https://github.com/Aman-kSingh" icon={<FiGithub />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/aman-singh-19q8/" icon={<FiLinkedin />} label="LinkedIn" />
                <SocialLink href="https://x.com/AmanSinghCodes" icon={<FiTwitter />} label="Twitter" />
                <SocialLink href="https://www.instagram.com/aman_singh1201/" icon={<FiInstagram />} label="Instagram" />
              </div>
            </motion.div>
          </div>

          {/* Right Side - Code Editor & Stats */}
          <div className="space-y-6">
            {/* Code Editor Window */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
            >
              {/* Window Header */}
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">developer.js</div>
                <div className="text-gray-400">{'{}'}</div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-gray-800 dark:text-gray-200">
                  {typedCode.split('\n').map((line, index) => (
                    <div key={index} className="flex">
                      <span className="text-gray-400 dark:text-gray-600 w-8 text-right pr-4 select-none">{index + 1}</span>
                      <code>
                        <span dangerouslySetInnerHTML={{ __html: highlightCode(line) }} />
                        {index === currentLine && <span className="animate-pulse">|</span>}
                      </code>
                    </div>
                  ))}
                </pre>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  1+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">Years Exp</div>
              </div>

              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">Projects</div>
              </div>

              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-2">
                  0+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">Clients</div>
              </div>
            </motion.div>
          </div>
        </div>     
  
        {/* Discover Me Button */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 dark:bg-purple-500/10 bg-purple-100 border border-purple-500/20 dark:border-purple-500/20 border-purple-300 rounded-full text-purple-400 dark:text-purple-400 text-purple-600 text-sm font-medium hover:bg-purple-500/20 transition-all"
          >
            <span>👋</span>
            Discover Me
          </a>
        </motion.div>
         {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          Crafting Digital <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Experiences</span> with Passion
        </motion.h1>
          {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-16"
        >
          I'm a full-stack developer...
        </motion.p> 

        {/* Main Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
  {/* Left - Hello World Card */}
  <motion.div
    variants={itemVariants}
    className="lg:col-span-5 bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-purple-500/10 dark:bg-purple-500/10 bg-purple-100 rounded-2xl">
        <span className="text-2xl">👋</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hello World!</h2>
    </div>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Hello! I'm Aman Kumar, a passionate Full-Stack Developer transforming complex ideas into elegant, 
      high-performance web applications. My journey into coding began out of sheer curiosity, fascinated by 
      how lines of text could create interactive digital worlds. What started as a hobby quickly blossomed 
      into a profound career path. I thrive on challenges and constantly seek to deepen my understanding of 
      cutting-edge technologies. My goal is to build solutions that are not only functional and efficient but 
      also deliver exceptional user experiences.
    </p>
    
    {/* More About Me Button */}
    <a
      href="#about"
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 group"
    >
      <span>More About Me</span>
      <FiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
    </a>
  </motion.div>


  {/* Center - Profile Photo */}
<motion.div
  variants={itemVariants}
  className="lg:col-span-4 flex justify-center"
>
  <div className="relative">


    {/* Profile Image Container */}
    <div className="relative w-60 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 p-1">
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        {/* Your Photo */}
        <img 
          src="/aman.jpg"
          alt="Aman Kumar" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
         {/* Status Badge - Top Right INSIDE Photo */}
    <div className="absolute top-2 right-2 z-20">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <span className="text-white text-xs font-medium">Open to Work</span>
      </div>
    </div>

        {/* Name Badge Overlay - NEW POSITION */}
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <h3 className="text-white text-xl font-bold mb-1">Aman Kumar</h3>
          <p className="text-white/80 text-sm mb-4">Full Stack Developer</p>
          <div className="flex items-center gap-2 text-white/60 text-xs font-mono bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <FiMapPin className="w-3 h-3" />
            India
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
   {/* Right - Stats & Info */}
  <motion.div
    variants={itemVariants}
    className="lg:col-span-3 space-y-6"
  >
    {/* Combined Stats Box */}
    <div className="bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      {/* Years Experience */}
      <div className="text-center mb-6">
        <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
          1+
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">YEARS EXP.</div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

      {/* Projects */}
      <div className="text-center mb-6">
        <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent mb-2">
          5+
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">PROJECTS</div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

      {/* Happy Clients */}
      <div className="text-center">
        <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent mb-2">
          0+
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">HAPPY CLIENTS</div>
      </div>
    </div>

    {/* Location & Time */}
    <div className="bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
        <FiMapPin className="w-4 h-4" />
        <span className="text-sm">India</span>
      </div>
      <div className="flex items-center gap-2 text-gray-900 dark:text-white">
        <FiClock className="w-4 h-4" />
        <span className="text-2xl font-bold">{currentTime || '00:00 AM'}</span>
      </div>
    </div>
  </motion.div>
</div>       

      </motion.div>
    </section>
  )
}

function highlightCode(line: string): string {
  // Keywords
  line = line.replace(/\b(const|let|var|function|return|true|false)\b/g, '<span class="text-purple-600 dark:text-purple-400">$1</span>')
  
  // Strings
  line = line.replace(/"([^"]*)"/g, '<span class="text-yellow-600 dark:text-yellow-400">"$1"</span>')
  
  // Properties
  line = line.replace(/(\w+):/g, '<span class="text-blue-600 dark:text-blue-400">$1</span>:')
  
  // Functions
  line = line.replace(/\.(\w+)\(/g, '.<span class="text-green-600 dark:text-green-400">$1</span>(')
  
  return line
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:scale-110"
      aria-label={label}
    >
      <div className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors text-lg">
        {icon}
      </div>
    </a>
  )
}