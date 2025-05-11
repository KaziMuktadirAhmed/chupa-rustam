import Link from 'next/link'
import React from 'react'
import { Home, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

// SVG for decorative elements
const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
)

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <BackgroundPattern />

      <div className="container py-20 max-w-3xl relative z-10 text-center">
        <div className="mb-6 text-primary animate-bounce">
          <svg
            className="mx-auto"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20L3 11M12 20L21 11M12 20V4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>

        <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full" />

        <h2 className="text-3xl font-semibold mb-4 dark:text-gray-200">Page Not Found</h2>

        <p className="text-lg mb-10 max-w-lg mx-auto text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg" className="group">
            <Link href="/" className="flex items-center gap-2">
              <Home size={18} />
              <span>Back to Home</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
