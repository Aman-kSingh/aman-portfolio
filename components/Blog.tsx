'use client'

import { motion } from "framer-motion"

export default function Blog() {
    return (
    <section id="blog" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/10 dark:bg-purple-500/10 bg-purple-100 border border-purple-500/20 dark:border-purple-500/20 border-purple-300 rounded-full text-purple-400 dark:text-purple-400 text-purple-600 text-sm font-medium mb-4">
              The Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Thoughts 
            </span>{' '}
            <span className="text-gray-900 dark:text-white">
                & Insights
            </span>
            </h2>

        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
        Exploring the frontiers of web development, design, and digital experiences. Deep dives into code, career advice, and technical tutorials.
        </p>
        </div>
        </motion.div>
      </div>
    </section>
      )
}
