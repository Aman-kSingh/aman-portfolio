'use client'

import { motion } from 'framer-motion'
import { FiLayout, FiServer, FiZap, FiCpu, FiBox, FiTrendingUp } from 'react-icons/fi'

const services = [
  {
    icon: <FiLayout />,
    title: 'Frontend Architecture',
    description: 'Crafting pixel-perfect, accessible, and performant user interfaces using modern React ecosystems.',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: <FiServer />,
    title: 'Backend Engineering',
    description: 'Building robust, scalable, and secure API architectures with microservices and serverless solutions.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    icon: <FiZap />,
    title: 'Performance Engineering',
    description: 'Optimizing web applications for maximum speed, Core Web Vitals, and SEO visibility.',
    tags: ['Lighthouse', 'Vitals', 'SEO', 'Analytics'],
  },
  {
    icon: <FiCpu />,
    title: 'AI Integration',
    description: 'Integrating LLMs and intelligent agents into applications to automate workflows and enhance UX.',
    tags: ['OpenAI', 'LangChain', 'Python', 'Vector DB'],
  },
  {
    icon: <FiBox />,
    title: 'System Design',
    description: 'Architecting high-availability systems with focus on data consistency, caching strategies, and scale.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: <FiTrendingUp />,
    title: 'Full-Stack Development',
    description: 'End-to-end development from concept to deployment, ensuring seamless integration across all layers.',
    tags: ['MERN', 'DevOps', 'Testing', 'Deployment'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Architecting Digital Excellence
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">

            I don't just write code; I engineer solutions. From complex backend systems to immersive frontend experiences, 
          I deliver full-cycle development services designed for scale and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-white/70 to-white/70 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"

    >
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-400 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>
    </motion.div>
  )
}
