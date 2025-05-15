'use client'

import { ChevronDown, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

const DropdownMenu = ({ label, dropdownItems }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 bg-white dark:bg-gray-900 shadow-md rounded-md py-2 min-w-48 z-10">
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
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
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

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex flex-col md:flex-row gap-4 items-start md:items-center">
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
            <Link key={i} href={href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )
        }
        return null
      })}

      {/* Search icon at the end */}
      <Link href="/search" className="md:ml-2">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
