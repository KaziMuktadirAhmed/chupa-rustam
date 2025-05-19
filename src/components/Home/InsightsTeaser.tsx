import React from 'react';
import Link from 'next/link';

type InsightsTeaserProps = {
  posts: any[];
};

const InsightsTeaser: React.FC<InsightsTeaserProps> = ({ posts }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in JavaScript development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    {new Date(post.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <h3 className="text-xl font-bold my-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || 'No excerpt available'}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            // Fallback if no posts are available
            <>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">May 15, 2025</span>
                  <h3 className="text-xl font-bold my-2">The Future of JavaScript Frameworks</h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the latest trends and innovations in JavaScript frameworks and how they're shaping web development.
                  </p>
                  <Link 
                    href="/blog"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">May 10, 2025</span>
                  <h3 className="text-xl font-bold my-2">Building Scalable React Applications</h3>
                  <p className="text-gray-600 mb-4">
                    Best practices for architecting large-scale React applications that can grow with your business needs.
                  </p>
                  <Link 
                    href="/blog"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">May 5, 2025</span>
                  <h3 className="text-xl font-bold my-2">Flutter vs React Native: A Comparison</h3>
                  <p className="text-gray-600 mb-4">
                    An in-depth analysis of the two leading cross-platform mobile development frameworks.
                  </p>
                  <Link 
                    href="/blog"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsTeaser;
