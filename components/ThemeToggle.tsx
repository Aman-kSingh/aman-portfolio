'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const current = theme === 'system' ? systemTheme : theme
  const isDark = current === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-lg border border-gray-300 hover:border-gray-400
                 bg-white/70 text-gray-700 hover:text-gray-900
                 dark:bg-gray-800/60 dark:text-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  )
}
