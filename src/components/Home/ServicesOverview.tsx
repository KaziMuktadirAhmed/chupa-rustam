import React from 'react';
import Link from 'next/link';

type ServicesOverviewProps = {
  services: any[];
};

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive JavaScript development services to help businesses build powerful web and mobile applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            ))
          ) : (
            // Fallback if no services are available
            <>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  We create responsive, user-friendly websites and web applications using modern JavaScript frameworks.
                </p>
                <Link 
                  href="/services#web-development"
                  className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
                <p className="text-gray-600 mb-4">
                  Our team specializes in building cross-platform mobile applications using Flutter and React Native.
                </p>
                <Link 
                  href="/services#mobile-app-development"
                  className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">E-commerce Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We develop comprehensive e-commerce platforms with secure payment gateways and inventory management.
                </p>
                <Link 
                  href="/services#e-commerce-solutions"
                  className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
