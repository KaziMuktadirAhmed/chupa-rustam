'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  // Add mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    // Close mobile menu when navigating
    setMobileMenuOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Logo
              logoUrl={typeof data?.logo === 'string' ? data.logo : (data?.logo?.url ?? undefined)}
              logoText={data?.['logo-text']}
              loading="eager"
              priority="high"
              className="dark:invert-0 h-10"
              textClassName="text-gray-900 dark:text-white max-w-none font-medium"
              variant="default"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-gray-800 dark:bg-white transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`h-0.5 w-full bg-gray-800 dark:bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`h-0.5 w-full bg-gray-800 dark:bg-white transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <HeaderNav data={data} />
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800 mt-4 animate-fadeIn">
            <HeaderNav data={data} isMobile={true} />
          </div>
        )}
      </div>
    </header>
  )
}
