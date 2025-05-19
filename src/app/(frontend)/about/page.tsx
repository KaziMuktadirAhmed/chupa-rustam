import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for about page sections
import AboutHero from '@/components/About/AboutHero';
import TeamSection from '@/components/About/TeamSection';
import TechnologiesSection from '@/components/About/TechnologiesSection';
import ValuesSection from '@/components/About/ValuesSection';
import StatsSection from '@/components/About/StatsSection';
import CallToAction from '@/components/shared/CallToAction';

export default async function AboutPage() {
  const { isEnabled: draft } = await draftMode();

  // Get team members from our custom collection
  const payload = await getPayloadClient();
  const teamMembers = await payload
    .find({
      collection: 'team-members',
      draft,
    })
    .then((res: any) => res.docs || []);

  // Get technologies
  const technologies = await payload
    .find({
      collection: 'technologies',
      draft,
    })
    .then((res: any) => res.docs || []);

  return (
    <main className="about-page">
      {draft && <LivePreviewListener />}

      {/* About Hero Section */}
      <AboutHero 
        title="About JS SBU" 
        description="A dedicated SBU under the BrainStation 23 umbrella, specializing in JavaScript language and related technologies."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Company Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                We empower businesses by providing scalable, customized software solutions that drive efficiency, enhance user experiences, and accelerate growth. Backed by BrainStation 23's global network and proven track record, we provide a blend of personalized service and multi-domain experience in software development.
              </p>
              <p className="text-lg">
                Since our inception in 2006, we have grown into a prominent global IT & software services provider, driving innovation and delivering tailored solutions to organizations worldwide.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">SBU JavaScript AT A GLANCE</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 
                  <span>Leading innovation since 2006</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 
                  <span>Specialized JavaScript expertise</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 
                  <span>Multi-domain experience</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 
                  <span>Global client portfolio</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <ValuesSection />
        
        {/* Stats Section */}
        <StatsSection />
      </div>

      {/* Team Section */}
      <TeamSection teamMembers={teamMembers} />

      {/* Technologies Section */}
      <TechnologiesSection technologies={technologies} />

      {/* Call to Action */}
      <CallToAction 
        title="Ready to work with our team?"
        description="Contact us today to discuss how we can help bring your vision to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: 'About Us | JS SBU | Brain Station 23',
    description: 'Learn about the JavaScript SBU at Brain Station 23, our team, values, and technology expertise.',
  });
}
