'use client'

import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Aman.dev
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer crafting digital experiences with passion and precision.
            </p>
            <p className="text-gray-600 dark:text-gray-500 text-sm">India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Connect</h4>

            <div className="flex gap-4">
              <SocialLink href="https://github.com/Aman-kSingh" icon={<FiGithub />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/aman-singh-19q8/" icon={<FiLinkedin />} label="LinkedIn" />
              <SocialLink href="https://x.com/AmanSinghCodes" icon={<FiTwitter />} label="Twitter" />
              <SocialLink href="mailto:amansingh60396@gmail.com" icon={<FiMail />} label="Email" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Aman Kumar • Made with <FiHeart className="text-red-500" /> by Aman
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
