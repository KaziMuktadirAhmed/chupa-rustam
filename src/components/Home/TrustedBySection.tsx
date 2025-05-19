import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TrustedBySectionProps = {};

const TrustedBySection: React.FC<TrustedBySectionProps> = () => {
  const clients = [
    { name: 'MEED', logo: '/assets/clients/meed.svg' },
    { name: 'LONGSHOT', logo: '/assets/clients/longshot.svg' },
    { name: 'Shanta Securities', logo: '/assets/clients/shanta.svg' },
    { name: 'TIME TACKLE', logo: '/assets/clients/timetackle.svg' },
    { name: 'REHIVE', logo: '/assets/clients/rehive.svg' },
    { name: 'SYNSPECTIVE', logo: '/assets/clients/synspective.svg' },
    { name: 'HARKARA', logo: '/assets/clients/harkara.svg' },
    { name: 'HUNGRY NAKI', logo: '/assets/clients/hungrynaki.svg' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over a thousand clients worldwide trust us for cutting-edge software solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-16 w-full relative flex items-center justify-center">
                {/* Fallback if image is not available */}
                <span className="text-gray-800 font-semibold">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/portfolio" 
            className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
          >
            View Our Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
