'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Blog/>
      <Process />
      <Services />
      <Contact />

    </div>
  )
}
