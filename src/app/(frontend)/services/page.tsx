import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for services page sections
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesGrid from '@/components/Services/ServicesGrid';
import ProcessSteps from '@/components/Services/ProcessSteps';
import TestimonialsSlider from '@/components/shared/TestimonialsSlider';
import CallToAction from '@/components/shared/CallToAction';

export default async function ServicesPage() {
  const { isEnabled: draft } = await draftMode();

  // Get services from our custom collection
  const payload = await getPayloadClient();
  const services = await payload
    .find({
      collection: 'services',
      draft,
      sort: 'order',
    })
    .then((res: any) => res.docs || []);

  // Get testimonials
  const testimonials = await payload
    .find({
      collection: 'testimonials',
      draft,
    })
    .then((res: any) => res.docs || []);

  return (
    <main className="services-page">
      {draft && <LivePreviewListener />}

      {/* Services Hero Section */}
      <ServicesHero 
        title="Our Services" 
        description="We provide comprehensive JavaScript development services to help businesses build powerful web and mobile applications."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <ServicesGrid services={services} />
        
        {/* Development Process Steps */}
        <ProcessSteps />
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to transform your business?"
        description="Contact us today to discuss how our services can help you achieve your goals."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: 'Services | JS SBU | Brain Station 23',
    description: 'Explore our comprehensive JavaScript development services for web and mobile applications.',
  });
}
