'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Service {
  id: string
  title: string
  slug: string
  excerpt?: string
  featuredImage?: {
    url?: string
    alt?: string
  }
}

interface ServicesOverviewProps {
  services: Service[]
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services = [] }) => {
  // Fallback services if none provided
  const displayServices =
    services.length > 0
      ? services
      : [
          {
            id: '1',
            title: 'Web Application Development',
            slug: 'web-application',
            excerpt: 'Enterprise-level web applications and custom software solutions.',
          },
          {
            id: '2',
            title: 'Mobile App Development',
            slug: 'mobile-app',
            excerpt: 'Cross-platform and native apps for iOS and Android devices.',
          },
          {
            id: '3',
            title: 'UI/UX & Product Design',
            slug: 'ui-ux-design',
            excerpt: 'User-centered design approach to create intuitive digital experiences.',
          },
          {
            id: '4',
            title: 'Machine Learning & AI',
            slug: 'ml-ai',
            excerpt: 'Intelligent solutions that leverage data analysis and advanced algorithms.',
          },
          {
            id: '5',
            title: 'Cloud Solutions',
            slug: 'cloud-solutions',
            excerpt: 'Reliable cloud architecture and infrastructure for your business.',
          },
          {
            id: '6',
            title: 'DevOps & CI/CD',
            slug: 'devops',
            excerpt: 'Streamlined development and deployment workflow automation.',
          },
        ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help businesses transform and
            thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group block bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              {service.featuredImage?.url && (
                <div className="mb-4 rounded overflow-hidden">
                  <img
                    src={service.featuredImage.url}
                    alt={service.featuredImage.alt || service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {service.excerpt && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.excerpt}</p>
              )}

              <div className="flex items-center text-primary font-medium">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
