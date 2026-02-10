'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiMapPin, FiCode, FiDatabase, FiLayout, FiServer, FiCloud, FiTool } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiCplusplus, SiMongodb, SiPostgresql, SiNodedotjs, SiPython, SiDocker, SiFigma } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'


const skillCategories = [
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Programming Languages',
    color: 'purple',
    skills: [
      { name: '', icon: <FaJava />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 50 },
    ]
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: 'Data Structures',
    color: 'orange',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
    ]
  },
  {
    icon: <FiLayout className="w-6 h-6" />,
    title: 'Frontend Interface',
    color: 'blue',
    skills: [
      { name: 'React', icon: <SiReact />, level: 95 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 50 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 55 },
    ]
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: 'Backend Core',
    color: 'green',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 95 },
      { name: 'Python', icon: <SiPython />, level: 20 },
      { name: 'Express', level: 95 },
    ]
  },
  {
    icon: <FiCloud className="w-6 h-6" />,
    title: 'DevOps & Cloud',
    color: 'cyan',
    skills: [
      { name: 'Docker', icon: <SiDocker />, level: 75 },
      { name: 'AWS', level: 50 },
      { name: 'CI/CD', level: 10 },
    ]
  },
  {
    icon: <FiTool className="w-6 h-6" />,
    title: 'UI/UX Design',
    color: 'pink',
    skills: [
      { name: 'Figma', icon: <SiFigma />, level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Responsive Design', level: 90 },
    ]
  },
]

const colorClasses = {
  purple: {
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-400',
    text: 'text-purple-400 dark:text-purple-400',
    textLight: 'text-purple-600',
    icon: 'bg-purple-500/10 dark:bg-purple-500/10',
    iconLight: 'bg-purple-100',
    barBg: 'bg-gray-700/50 dark:bg-gray-700/50',
    barBgLight: 'bg-purple-100',
  },
  orange: {
    bg: 'bg-orange-500',
    bgLight: 'bg-orange-400',
    text: 'text-orange-400 dark:text-orange-400',
    textLight: 'text-orange-600',
    icon: 'bg-orange-500/10 dark:bg-orange-500/10',
    iconLight: 'bg-orange-100',
    barBg: 'bg-gray-700/50 dark:bg-gray-700/50',
    barBgLight: 'bg-orange-100',
  },
  blue: {
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-400',
    text: 'text-blue-400 dark:text-blue-400',
    textLight: 'text-blue-600',
    icon: 'bg-blue-500/10 dark:bg-blue-500/10',
    iconLight: 'bg-blue-100',
    barBg: 'bg-gray-700/50 dark:bg-gray-700/50',
    barBgLight: 'bg-blue-100',
  },
  green: {
    bg: 'bg-green-500',
    bgLight: 'bg-green-400',
    text: 'text-green-400 dark:text-green-400',
    textLight: 'text-green-600',
    icon: 'bg-green-500/10 dark:bg-green-500/10',
    iconLight: 'bg-green-100',
    barBg: 'bg-gray-700/50 dark:bg-gray-700/50',
    barBgLight: 'bg-green-100',
  },
  cyan: {
    bg: 'bg-cyan-500',
    bgLight: 'bg-cyan-400',
    text: 'text-cyan-400 dark:text-cyan-400',
    textLight: 'text-cyan-600',
    icon: 'bg-cyan-500/10 dark:bg-cyan-500/10',
    iconLight: 'bg-cyan-100',
    barBg: 'bg-gray-700/50 dark:bg-gray-700/50',
    barBgLight: 'bg-cyan-100',
  },
  pink: {
    bg: 'bg-pink-500',
    bgLight: 'bg-pink-400',
    text: 'text-pink-400 dark:text-pink-400',
    textLight: 'text-pink-600',
    icon: 'bg-pink-500/10 dark:bg-pink-500/10',
    iconLight: 'bg-pink-100',
    barBg: 'bg-gray-700/50 dark:bg-gray-700/50',
    barBgLight: 'bg-pink-100',
  },
}

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-gray-800/50 dark:bg-gray-800/50 bg-white/80 rounded-2xl p-8 md:p-12 border border-gray-700 dark:border-gray-700 border-gray-200 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-400 text-gray-600 mb-6">
              <FiMapPin className="w-5 h-5" />
              <span>India</span>
            </div>

            <p className="text-gray-300 dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-6">
              Hello! I'm <span className="text-blue-400 dark:text-blue-400 text-blue-600 font-semibold">Aman Kumar</span>, a passionate Full-Stack Developer. 
              transforming complex ideas into elegant, high-performance web applications. My journey into coding began out of 
              sheer curiosity, fascinated by how lines of text could create interactive digital worlds.
            </p>

            <p className="text-gray-300 dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-6">
              Beyond coding, I'm deeply invested in staying ahead of industry trends and continuously expanding my skill set. 
              I believe in writing clean, maintainable code and following best practices that ensure scalability and performance.
            </p>

            <p className="text-gray-300 dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
              Collaboration is at the heart of my work ethic—I enjoy working with cross-functional teams, sharing knowledge, and learning from others. 
              Whether it's debugging a complex issue at 2 AM or brainstorming innovative solutions with teammates,
              I approach every challenge with enthusiasm and a problem-solving mindset.
            </p>

            <p className="text-gray-300 dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
              My ultimate aim is to create digital products that make a real difference in people's lives.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/10 dark:bg-purple-500/10 bg-purple-100 border border-purple-500/20 dark:border-purple-500/20 border-purple-300 rounded-full text-purple-400 dark:text-purple-400 text-purple-600 text-sm font-medium mb-4">
              SKILLS & EXPERTISE
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Powered by <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Modern Tech</span>
            </h3>
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-lg max-w-3xl mx-auto">
              A carefully curated stack of technologies optimized for performance, scalability, and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <SkillCard key={categoryIndex} category={category} index={categoryIndex} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ category, index }: any) {
  const colors = colorClasses[category.color as keyof typeof colorClasses]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 dark:bg-white/5 bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 dark:border-gray-700/50 border-gray-200 hover:border-gray-600 dark:hover:border-gray-600 hover:border-gray-300 transition-all group shadow-lg dark:shadow-none"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl dark:${colors.icon} ${colors.iconLight} dark:${colors.text} ${colors.textLight}`}>
          {category.icon}
        </div>
        <h4 className="text-lg font-semibold text-white dark:text-white text-gray-900">{category.title}</h4>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill: any, skillIndex: number) => (
          <SkillProgressBar 
            key={skillIndex} 
            skill={skill} 
            colors={colors} 
            isInView={isInView}
            delay={index * 0.1 + skillIndex * 0.15}
          />
        ))}
      </div>
    </motion.div>
  )
}

function SkillProgressBar({ skill, colors, isInView, delay }: any) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 1500 // 1.5 seconds
        const steps = 60
        const increment = skill.level / steps
        const stepDuration = duration / steps

        let current = 0
        const interval = setInterval(() => {
          current += increment
          if (current >= skill.level) {
            setProgress(skill.level)
            clearInterval(interval)
          } else {
            setProgress(Math.floor(current))
          }
        }, stepDuration)

        return () => clearInterval(interval)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, delay])

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {skill.icon && <span className={`text-sm dark:${colors.text} ${colors.textLight}`}>{skill.icon}</span>}
          <span className="text-sm text-gray-300 dark:text-gray-300 text-gray-700 font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-400 text-gray-500 font-semibold">{progress}%</span>
      </div>
      <div className="relative h-2 dark:${colors.barBg} ${colors.barBgLight} rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className={`absolute inset-y-0 left-0 dark:${colors.bg} ${colors.bgLight} rounded-full transition-all duration-300 ease-out`}
        />
      </div>
    </div>
  )
}