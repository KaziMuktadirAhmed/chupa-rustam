import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import SubscriptionForm from '@/components/SubscriptionForm'

// Define local types for our custom fields
type FooterLinkItem = {
  label: string
  link: any
}

type TechnologyStack = {
  category: string
  technologies: string
}

type SocialLink = {
  platform: 'linkedin' | 'github' | 'twitter' | 'facebook' | 'instagram'
  url: string
}

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const quickLinks = (footerData as any)?.quickLinks || []
  const popularServices = (footerData as any)?.popularServices || []
  const technologyStacks = (footerData as any)?.technologyStacks || []
  const socialLinks = (footerData as any)?.socialLinks || []
  const subscriptionEnabled = (footerData as any)?.subscriptionEnabled ?? true
  const copyrightText =
    (footerData as any)?.copyrightText ||
    `© ${new Date().getFullYear()} JS SBU. All rights reserved.`

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'github':
        return <Github className="w-5 h-5" />
      case 'twitter':
        return <Twitter className="w-5 h-5" />
      case 'facebook':
        return <Facebook className="w-5 h-5" />
      case 'instagram':
        return <Instagram className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <footer className="mt-auto border-t border-border bg-gray-900 text-white">
      <div className="container py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and company info */}
          <div>
            <Link className="flex items-center mb-6" href="/">
              <Logo />
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering businesses through digital innovation and technology excellence.
            </p>
            <ThemeSelector />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {(quickLinks as FooterLinkItem[]).map(({ label, link }, i) => (
                <li key={i}>
                  <CMSLink {...link} className="text-gray-400 hover:text-primary transition-colors">
                    {label}
                  </CMSLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2">
              {(popularServices as FooterLinkItem[]).map(({ label, link }, i) => (
                <li key={i}>
                  <CMSLink {...link} className="text-gray-400 hover:text-primary transition-colors">
                    {label}
                  </CMSLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stacks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technology Stacks</h4>
            <ul className="space-y-3">
              {(technologyStacks as TechnologyStack[]).map(({ category, technologies }, i) => (
                <li key={i}>
                  <span className="block text-white font-medium">{category}:</span>
                  <span className="text-gray-400">{technologies}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with subscription form and social links */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400">{copyrightText}</div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 mr-2">Follow Us:</span>
            {(socialLinks as SocialLink[]).map(({ platform, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                {getSocialIcon(platform)}
                <span className="sr-only">{platform}</span>
              </a>
            ))}
          </div>

          {/* Subscription Form */}
          {subscriptionEnabled && (
            <div className="w-full md:w-auto mt-6 md:mt-0">
              <SubscriptionForm />
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
