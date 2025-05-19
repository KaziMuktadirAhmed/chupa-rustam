import React from 'react';
import Link from 'next/link';

type CallToActionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link 
          href={buttonLink} 
          className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300 inline-block"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
