import { getPayloadClient } from '@/utilities/getPayload'
import { draftMode } from 'next/headers'
import React from 'react'
import type { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { homeStatic } from '@/endpoints/seed/home-static'

// Components for home page sections
import HeroSection from '@/components/Home/HeroSection'
import TrustedBySection from '@/components/Home/TrustedBySection'
import ServicesOverview from '@/components/Home/ServicesOverview'
import FeaturedPortfolio from '@/components/Home/FeaturedPortfolio'
import InsightsTeaser from '@/components/Home/InsightsTeaser'
import AboutSBUSection from '@/components/Home/AboutSBUSection'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export default async function HomePage() {
  const { isEnabled: draft } = await draftMode()

  // Get homepage data
  const payload = await getPayloadClient()
  let homePage = await payload
    .find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
      draft,
      limit: 1,
    })
    .then((res: any) => res.docs[0] || null)

  // If no page is found, use the static version
  if (!homePage) {
    homePage = homeStatic as any
  }

  // Get featured posts for the portfolio section
  const featuredPortfolio = await payload
    .find({
      collection: 'posts',
      where: {
        featured: {
          equals: true,
        },
        postType: {
          equals: 'portfolio',
        },
      },
      draft,
      limit: 3,
    })
    .then((res: any) => res.docs || [])

  // Get latest blog posts
  const latestBlogs = await payload
    .find({
      collection: 'posts',
      where: {
        postType: {
          equals: 'blog',
        },
      },
      draft,
      sort: '-publishedDate',
      limit: 3,
    })
    .then((res: any) => res.docs || [])

  // Get services
  const services = await payload
    .find({
      collection: 'posts',
      where: {
        postType: {
          equals: 'service',
        },
      },
      draft,
      limit: 6,
    })
    .then((res: any) => res.docs || [])

  return (
    <main>
      {draft && <LivePreviewListener />}

      {/* Hero Section */}
      {homePage && <HeroSection data={homePage.hero} />}

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Services Overview */}
      <ServicesOverview services={services} />

      {/* Featured Portfolio Projects */}
      <FeaturedPortfolio projects={featuredPortfolio} />

      {/* Latest Insights/Blogs */}
      <InsightsTeaser posts={latestBlogs} />

      {/* About JS SBU Section */}
      <AboutSBUSection />
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadClient()
  const homePage = await payload
    .find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
      draft: false,
      limit: 1,
    })
    .then((res: any) => res.docs[0] || null)

  return generateMeta({ doc: homePage || homeStatic })
}
