'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const AboutSBUSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/team/team-photo.jpg"
                alt="JS SBU Team"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x450?text=JS+SBU+Team'
                }}
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded shadow-lg max-w-xs hidden md:block">
              <p className="font-medium">
                "We believe in crafting technology that makes a real difference."
              </p>
            </div>
          </div>

          {/* Content column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About JS SBU</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              JavaScript Software Business Unit (JS SBU) is a specialized division focused on
              delivering cutting-edge web, mobile, and enterprise solutions powered by modern
              JavaScript technologies.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a team of experienced developers, designers, and strategists, we help businesses
              transform their digital presence and operations through innovative custom software
              solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2 text-lg">Our Mission</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  To empower businesses with technology solutions that drive growth and efficiency.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Our Vision</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  To be the premier partner for JavaScript-based enterprise solutions worldwide.
                </p>
              </div>
            </div>

            <Link href="/about">
              <Button className="group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSBUSection
