'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  author?: {
    name?: string
  }
  publishedDate?: string
  readTime?: string | number
  featuredImage?: {
    url?: string
    alt?: string
  }
}

interface InsightsTeaserProps {
  posts: BlogPost[]
}

const InsightsTeaser: React.FC<InsightsTeaserProps> = ({ posts = [] }) => {
  // Fallback posts if none provided
  const displayPosts =
    posts.length > 0
      ? posts
      : [
          {
            id: '1',
            title: 'Building Scalable Frontend Architecture',
            slug: 'building-scalable-frontend-architecture',
            excerpt:
              'Strategies and best practices for creating maintainable frontend codebases that scale with your product.',
            author: { name: 'Jane Smith' },
            publishedDate: '2023-11-15',
            readTime: '7 min',
          },
          {
            id: '2',
            title: 'The Future of AI in Software Development',
            slug: 'future-ai-software-development',
            excerpt:
              'How artificial intelligence is transforming the way we write code and build applications.',
            author: { name: 'John Doe' },
            publishedDate: '2023-10-28',
            readTime: '9 min',
          },
          {
            id: '3',
            title: 'Optimizing Performance in Modern Web Apps',
            slug: 'optimizing-performance-web-apps',
            excerpt:
              'Practical techniques to improve loading speed and runtime performance in JavaScript applications.',
            author: { name: 'Alex Chen' },
            publishedDate: '2023-10-05',
            readTime: '5 min',
          },
        ]

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return ''

    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    } catch (e) {
      return dateString
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Insights</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Thoughts, tips, and perspectives from our tech experts
            </p>
          </div>
          <Link href="/insights">
            <Button variant="outline" className="group">
              View All Insights
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              href={`/insights/${post.slug}`}
              className="group block bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-48 overflow-hidden">
                {post.featuredImage?.url ? (
                  <img
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary font-medium">JS SBU Insights</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {post.publishedDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedDate)}</span>
                    </div>
                  )}

                  {post.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                {post.author?.name && (
                  <div className="flex items-center gap-2 text-sm mt-4">
                    <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-300">{post.author.name}</span>
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

export default InsightsTeaser
