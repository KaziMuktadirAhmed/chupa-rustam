import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type FeaturedPortfolioProps = {
  projects: any[];
};

const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({ projects }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our most impactful projects that showcase our expertise in JavaScript development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {project.featuredImage ? (
                  <div className="relative h-48">
                    <Image 
                      src={project.featuredImage.url} 
                      alt={project.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">{project.title}</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description?.[0]?.children?.[0]?.text || 'No description available'}
                  </p>
                  <Link 
                    href={`/portfolio/${project.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            // Fallback if no projects are available
            <>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">MEED</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">MEED</h3>
                  <p className="text-gray-600 mb-4">
                    Meed is on a global operation to convert mobile banking with a focus on community and empowerment.
                  </p>
                  <Link 
                    href="/portfolio/meed"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">LONGSHOT</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">LONGSHOT</h3>
                  <p className="text-gray-600 mb-4">
                    The ultimate shooting companion with state-of-the-art camera and integrated mobile application.
                  </p>
                  <Link 
                    href="/portfolio/longshot"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">Shanta EasyX</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Shanta EasyX</h3>
                  <p className="text-gray-600 mb-4">
                    Investment app providing real-time market data, advanced stock analytics, and customized insights.
                  </p>
                  <Link 
                    href="/portfolio/shanta-easyx"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/portfolio" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
