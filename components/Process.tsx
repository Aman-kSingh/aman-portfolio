'use client'

import { motion } from 'framer-motion'
import { FiSearch, FiLayers, FiCode, FiZap } from 'react-icons/fi'

const processes = [
  {
    number: '01',
    icon: <FiSearch />,
    title: 'Discovery & Analysis',
    subtitle: 'System Scoping',
    description: 'Deep-dive into requirements, user personas, and technical feasibility to define a robust project roadmap.',
    tags: ['Requirements', 'User Stories', 'Tech Stack'],
  },
  {
    number: '02',
    icon: <FiLayers />,
    title: 'System Architecture',
    subtitle: 'Blueprint Design',
    description: 'Designing scalable database schemas, API contracts, and component hierarchies for high-availability systems.',
    tags: ['DB Schema', 'API Design', 'System Diagrams'],
  },
  {
    number: '03',
    icon: <FiCode />,
    title: 'Development & Iteration',
    subtitle: 'Code Construction',
    description: 'Writing clean, typed, and tested code with continuous integration. Agile sprints with regular feedback loops.',
    tags: ['React/Next.js', 'TypeScript', 'Clean Code'],
  },
  {
    number: '04',
    icon: <FiZap />,
    title: 'Deployment & Scaling',
    subtitle: 'Launch Sequence',
    description: 'Automated deployment pipelines, performance optimization, and monitoring for production-grade reliability.',
    tags: ['CI/CD', 'Docker', 'Monitoring'],
  },
]

export default function Process() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-4">EXECUTION_PROTOCOL_V2</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            The Engineering Blueprint
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to building digital products. From abstract concepts to deployed, scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <ProcessCard key={index} process={process} index={index} />
          ))}
        </div>

        {/* Process Steps Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 bg-white/70 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-sm"
        >
          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">01&gt;</span>
              <span>analyzing_inputs...</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">02&gt;</span>
              <span>compiling_blueprint...</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">03&gt;</span>
              <span>executing_build...</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">04&gt;</span>
              <span>system_launch [OK]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessCard({ process, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-white/70 to-white/70 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300"
    >
      {/* Number Badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {process.number}
      </div>

      {/* Icon */}
      <div className="text-blue-400 text-4xl mb-4 group-hover:scale-110 transition-transform">
        {process.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
        {process.title}
      </h3>

      {/* Subtitle */}
      <p className="text-blue-400 text-sm font-semibold mb-4">{process.subtitle}</p>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {process.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {process.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
