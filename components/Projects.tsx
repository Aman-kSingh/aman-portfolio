'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, payments, and admin dashboard. Built with Next.js, Stripe, and MongoDB.',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    github: 'https://github.com/Aman-kSingh',
    demo: 'https://project-name.com',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses using OpenAI API. Features include message history and user authentication.',
    tags: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    github: 'https://github.com/Aman-kSingh',
    demo: 'https://project-name.com',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    github: 'https://github.com/Aman-kSingh',
    demo: 'https://project-name.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent works. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/70 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 to-transparent opacity-60"></div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FiGithub />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FiExternalLink />
            <span className="text-sm">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
