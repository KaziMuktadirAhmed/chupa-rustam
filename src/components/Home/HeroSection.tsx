'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface HeroSectionProps {
  data?: {
    title?: string
    description?: string
    ctaLabel?: string
    ctaUrl?: string
    image?: {
      url?: string
      alt?: string
    }
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const title = data?.title || 'Transforming Ideas into Digital Excellence'
  const description =
    data?.description ||
    'We deliver innovative solutions through a powerful blend of design, technology, and strategic thinking.'
  const ctaLabel = data?.ctaLabel || 'Explore Services'
  const ctaUrl = data?.ctaUrl || '/services'
  const imageUrl = data?.image?.url || '/images/hero-image.jpg'
  const imageAlt = data?.image?.alt || 'JS SBU Digital Services'

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
      </div>

      <div className="container relative z-10 py-28 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">{description}</p>
          <Link href={ctaUrl}>
            <Button className="group bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-lg">
              {ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
