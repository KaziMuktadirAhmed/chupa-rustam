import React from 'react';
import Image from 'next/image';

type TestimonialsSliderProps = {
  testimonials: any[];
};

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials && testimonials.length > 0 ? (
          testimonials.slice(0, 4).map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image.url} 
                      alt={testimonial.clientName} 
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">
                      {testimonial.clientName.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-bold">{testimonial.clientName}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-${i < testimonial.rating ? 'yellow' : 'gray'}-400`}>★</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))
        ) : (
          // Fallback if no testimonials are available
          <>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-bold">Ahmed Rahman</h4>
                  <p className="text-sm text-gray-600">MEED</p>
                </div>
              </div>
              
              <div className="mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"The JavaScript SBU team at Brain Station 23 delivered an exceptional mobile banking platform that exceeded our expectations."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Thompson</h4>
                  <p className="text-sm text-gray-600">LONGSHOT</p>
                </div>
              </div>
              
              <div className="mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"Working with the JS SBU team was a game-changer for our startup. Their technical knowledge and attention to detail resulted in a sophisticated application."</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
