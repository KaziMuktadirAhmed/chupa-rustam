import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for contact page sections
import ContactHero from '@/components/Contact/ContactHero';
import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';
import MapSection from '@/components/Contact/MapSection';

export default async function ContactPage() {
  const { isEnabled: draft } = await draftMode();

  return (
    <main className="contact-page">
      {draft && <LivePreviewListener />}

      {/* Contact Hero Section */}
      <ContactHero 
        title="Contact Us" 
        description="Get in touch with our team to discuss your next project or learn more about our services."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <MapSection />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: 'Contact Us | JS SBU | Brain Station 23',
    description: 'Get in touch with the JavaScript SBU at Brain Station 23 to discuss your project needs.',
  });
}
