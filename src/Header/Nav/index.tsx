'use client'

import { ChevronDown, SearchIcon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import type { Header as HeaderType } from '@/payload-types'

const DropdownMenu = ({ label, dropdownItems }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={dropdownRef}
    >
      <button
        className="flex items-center gap-1 font-medium hover:text-primary transition-colors duration-200 py-2 px-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 min-w-48 z-10 border border-gray-100 dark:border-gray-700 transform origin-top-left">
          {dropdownItems?.map((item: any, i: number) => {
            const href =
              item.link?.url || item.link?.reference?.value?.slug
                ? item.link.reference?.relationTo === 'pages'
                  ? `/${item.link.reference.value.slug}`
                  : item.link.reference?.relationTo === 'posts'
                    ? `/posts/${item.link.reference.value.slug}`
                    : item.link.url || '#'
                : '#'

            return (
              <Link
                key={i}
                href={href}
                className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm transition-colors duration-150 text-gray-800 dark:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const HeaderNav: React.FC<{ data: HeaderType; isMobile?: boolean }> = ({
  data,
  isMobile,
}) => {
  const navItems = data?.navItems || []
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`
      flex flex-col md:flex-row md:gap-x-6 gap-y-3 items-start md:items-center w-full md:w-auto
      ${isMobile ? 'flex' : 'hidden md:flex'}
    `}
    >
      {navItems.map((item, i) => {
        if (item.type === 'dropdown' && item.dropdownItems?.length) {
          return <DropdownMenu key={i} label={item.label} dropdownItems={item.dropdownItems} />
        } else if (item.type === 'link' && item.link) {
          const href =
            item.link.link?.url || item.link.link?.reference?.value?.slug
              ? item.link.link.reference?.relationTo === 'pages'
                ? `/${item.link.link.reference.value.slug}`
                : item.link.link.reference?.relationTo === 'posts'
                  ? `/posts/${item.link.link.reference.value.slug}`
                  : item.link.link.url || '#'
              : '#'

          return (
            <Link
              key={i}
              href={href}
              className="font-medium hover:text-primary transition-colors duration-200 py-2 px-1 block md:inline-block w-full md:w-auto"
            >
              {item.label}
            </Link>
          )
        }
        return null
      })}

      {/* Search Button */}
      <Link
        href="/search"
        className="md:ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
        aria-label="Search"
      >
        <SearchIcon className="w-5 h-5 text-primary" />
      </Link>
    </nav>
  )
}
