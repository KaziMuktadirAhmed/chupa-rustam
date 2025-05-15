'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface Project {
  id: string
  title: string
  slug: string
  excerpt?: string
  client?: string
  featuredImage?: {
    url?: string
    alt?: string
  }
  categories?: Array<{
    title: string
  }>
}

interface FeaturedPortfolioProps {
  projects: Project[]
}

const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({ projects = [] }) => {
  // Fallback projects if none provided
  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            id: '1',
            title: 'Financial Dashboard App',
            client: 'Banking Corp',
            slug: 'financial-dashboard',
            excerpt:
              'A comprehensive financial dashboard with real-time data visualization and analytics.',
            categories: [{ title: 'Web Application' }, { title: 'Analytics' }],
          },
          {
            id: '2',
            title: 'E-commerce Mobile Platform',
            client: 'RetailGiant',
            slug: 'ecommerce-mobile-app',
            excerpt:
              'Native mobile application with seamless shopping experience and payment integration.',
            categories: [{ title: 'Mobile App' }, { title: 'E-commerce' }],
          },
          {
            id: '3',
            title: 'Healthcare Management System',
            client: 'MedCare Solutions',
            slug: 'healthcare-management-system',
            excerpt:
              'End-to-end solution for managing patient data, appointments, and medical records.',
            categories: [{ title: 'Web Application' }, { title: 'Healthcare' }],
          },
        ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover some of our most impactful work
            </p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="group">
              View All Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                {project.featuredImage?.url ? (
                  <img
                    src={project.featuredImage.url}
                    alt={project.featuredImage.alt || project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">No image</span>
                  </div>
                )}
                {project.client && (
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-xs py-1 px-2 rounded">
                    {project.client}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {project.excerpt && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.excerpt}</p>
                )}

                {project.categories && project.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPortfolio
