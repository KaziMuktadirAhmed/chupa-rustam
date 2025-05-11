'use client'

import { ChevronDown, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

const DropdownMenu = ({ title, items }: any) => {
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
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 bg-white dark:bg-gray-900 shadow-md rounded-md py-2 min-w-48 z-10">
          {items.map((item: any, i: any) => (
            <Link
              key={i}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  // We'll still use the CMS links if available, but augment with our hardcoded structure
  const navItems = data?.navItems || []

  // Define the navigation structure according to requirements
  const navigationStructure = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      items: [
        { label: 'About JS SBU', href: '/about' },
        { label: 'Our Vision & Mission', href: '/about/vision-mission' },
        { label: 'Our Team', href: '/about/team' },
      ],
    },
    {
      label: 'Services',
      items: [
        { label: 'Web Application', href: '/services/web-application' },
        { label: 'Mobile App Development', href: '/services/mobile-app' },
        { label: 'UI/UX & Product Design', href: '/services/ui-ux-design' },
        { label: 'Machine Learning & AI', href: '/services/ml-ai' },
      ],
    },
    {
      label: 'Skill Sets',
      items: [
        { label: 'Full Stack Development', href: '/skills/full-stack' },
        { label: 'UI/UX Research', href: '/skills/ui-ux-research' },
        { label: 'System Architecture', href: '/skills/system-architecture' },
        { label: 'Cloud Native Apps', href: '/skills/cloud-native' },
        { label: 'Machine Learning Implementation', href: '/skills/ml-implementation' },
        { label: 'Performance Optimization', href: '/skills/performance-optimization' },
      ],
    },
    { label: 'Portfolio', href: '/portfolio' },
    {
      label: 'Insights',
      items: [
        { label: 'Tech Blogs', href: '/insights/blogs' },
        { label: 'Tutorials', href: '/insights/tutorials' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="flex gap-4 items-center">
      {navigationStructure.map((item, i) => {
        if (item.items) {
          return <DropdownMenu key={i} title={item.label} items={item.items} />
        } else {
          return (
            <Link key={i} href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )
        }
      })}

      {/* Search icon at the end */}
      <Link href="/search" className="ml-2">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
