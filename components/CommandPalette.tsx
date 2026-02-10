'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { FiHome, FiUser, FiFolder, FiBriefcase, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const navigate = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank')
    } else if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = href
    }
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
        <Command className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl">
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
            <Command.Input
              placeholder="Type a command or search..."
              className="flex h-14 w-full bg-transparent py-3 text-sm text-gray-900 dark:text-white outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>
          
          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-gray-600 dark:text-gray-400 text-xs font-semibold px-2 py-1.5">
              <CommandItem icon={<FiHome />} onSelect={() => navigate('#home')}>
                Home
              </CommandItem>
              <CommandItem icon={<FiUser />} onSelect={() => navigate('#about')}>
                About
              </CommandItem>
              <CommandItem icon={<FiFolder />} onSelect={() => navigate('#projects')}>
                Projects
              </CommandItem>
              <CommandItem icon={<FiBriefcase />} onSelect={() => navigate('#services')}>
                Services
              </CommandItem>
              <CommandItem icon={<FiMail />} onSelect={() => navigate('#contact')}>
                Contact
              </CommandItem>
            </Command.Group>

            <Command.Group heading="Social" className="text-gray-600 dark:text-gray-400 text-xs font-semibold px-2 py-1.5 mt-2">
              <CommandItem icon={<FiGithub />} onSelect={() => navigate('https://github.com/Aman-kSingh')}>
                GitHub
              </CommandItem>
              <CommandItem icon={<FiLinkedin />} onSelect={() => navigate('https://www.linkedin.com/in/aman-singh-19q8/')}>
                LinkedIn
              </CommandItem>
              <CommandItem icon={<FiTwitter />} onSelect={() => navigate('https://x.com/AmanSinghCodes')}>
                Twitter
              </CommandItem>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
      <div className="fixed inset-0 -z-10" onClick={() => setOpen(false)} />
    </div>
  )
}

function CommandItem({ 
  icon, 
  children, 
  onSelect 
}: { 
  icon: React.ReactNode
  children: React.ReactNode
  onSelect: () => void 
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <span className="text-gray-600 dark:text-gray-400">{icon}</span>
      {children}
    </Command.Item>
  )
}
