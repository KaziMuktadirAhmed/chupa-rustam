import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroSectionProps = {
  data: {
    title: string;
    description: string;
    cta?: {
      label: string;
      url: string;
    };
    image?: {
      url: string;
      alt: string;
    };
  };
};

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {data.title || 'DRIVING DIGITAL TRANSFORMATION WORLDWIDE'}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {data.description || 'We empower businesses by providing scalable, customized software solutions that drive efficiency, enhance user experiences, and accelerate growth.'}
            </p>
            {data.cta && (
              <Link 
                href={data.cta.url} 
                className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300"
              >
                {data.cta.label}
              </Link>
            )}
          </div>
          <div className="md:w-1/2 flex justify-center">
            {data.image ? (
              <Image 
                src={data.image.url} 
                alt={data.image.alt} 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl"
              />
            ) : (
              <div className="relative w-full h-[400px]">
                <div className="absolute inset-0 bg-blue-700 bg-opacity-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">JS SBU</h3>
                    <p>JavaScript Strategic Business Unit</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
