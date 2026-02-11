import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CommandPalette from '@/components/CommandPalette'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aman Kumar | Full Stack Developer',
  description: 'Portfolio of Aman Kumar - Full Stack Developer specializing in modern web technologies',
  keywords: ['Aman Kumar', 'Full Stack Developer', 'Web Developer', 'React', 'Next.js', 'Node.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="
          min-h-screen 
          bg-gradient-to-br 
          from-gray-50 via-white to-gray-100 
          text-gray-900
          dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
          dark:text-gray-100
          ">
            <Navbar />
            <CommandPalette />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
