'use client'

import React from 'react'

const TrustedBySection: React.FC = () => {
  // These would ideally come from the CMS
  const clients = [
    { name: 'Tennant', logo: '/images/clients/tennant.svg' },
    { name: 'Long Shot', logo: '/images/clients/longshot.svg' },
    { name: 'Meed', logo: '/images/clients/meed.svg' },
    { name: 'Client 4', logo: '/images/clients/client4.svg' },
    { name: 'Client 5', logo: '/images/clients/client5.svg' },
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container">
        <h2 className="text-center text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-10">
          Trusted by leading companies
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 md:h-14 w-auto object-contain dark:invert"
                // Fallback to a placeholder if the image fails to load
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/120x60?text=' + client.name
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
