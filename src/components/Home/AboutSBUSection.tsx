import React from 'react';
import Link from 'next/link';

type AboutSBUSectionProps = {};

const AboutSBUSection: React.FC<AboutSBUSectionProps> = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About JS SBU</h2>
            <p className="text-gray-700 mb-4">
              A dedicated SBU under the BrainStation 23 umbrella, specializing in JavaScript language and related technologies.
            </p>
            <p className="text-gray-700 mb-6">
              We empower businesses by providing scalable, customized software solutions that drive efficiency, enhance user experiences, and accelerate growth. Backed by BrainStation 23's global network and proven track record, we provide a blend of personalized service and multi-domain experience in software development.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4">Why JavaScript?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">98.9%</span>
                  <span>of websites use JavaScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">Top 3</span>
                  <span>technologies for development (Stack Overflow, 2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">97%</span>
                  <span>mobile app developers use Javascript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">Majority</span>
                  <span>of browsers support JavaScript</span>
                </li>
              </ul>
            </div>
            
            <Link 
              href="/about" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Unique Value Propositions</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Key Differentiators</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Expertise in modern frameworks like React.js, Node.js, Nest.js, Angular.js, Next.js and Vue.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Flutter expertise for high-quality cross-platform mobile apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Proven track record in delivering complex projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Only SBU with a technology stack focus and multi-domain experience</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Customer Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Faster Time to Market with quicker deployment cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Scalable, reusable software components to reduce development costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Modern UI/UX designed to engage users effectively</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Tailored digital platforms aligned with client goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSBUSection;
