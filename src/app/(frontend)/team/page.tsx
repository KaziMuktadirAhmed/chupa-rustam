import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for team page sections
import TeamHero from '@/components/Team/TeamHero';
import TeamGrid from '@/components/Team/TeamGrid';
import JoinTeam from '@/components/Team/JoinTeam';
import CallToAction from '@/components/shared/CallToAction';

export default async function TeamPage() {
  const { isEnabled: draft } = await draftMode();

  // Get team members from our custom collection
  const payload = await getPayloadClient();
  const teamMembers = await payload
    .find({
      collection: 'team-members',
      draft,
    })
    .then((res: any) => res.docs || []);

  return (
    <main className="team-page">
      {draft && <LivePreviewListener />}

      {/* Team Hero Section */}
      <TeamHero 
        title="Our Team" 
        description="Meet the talented professionals behind JS SBU who bring expertise, creativity, and dedication to every project."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Team Grid */}
        <TeamGrid teamMembers={teamMembers} />
        
        {/* Join Our Team Section */}
        <JoinTeam />
      </div>

      {/* Call to Action */}
      <CallToAction 
        title="Want to work with our team?"
        description="Contact us today to discuss how we can help bring your vision to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: 'Our Team | JS SBU | Brain Station 23',
    description: 'Meet the talented professionals behind JS SBU who bring expertise, creativity, and dedication to every project.',
  });
}
