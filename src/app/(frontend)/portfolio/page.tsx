import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for portfolio page sections
import PortfolioHero from '@/components/Portfolio/PortfolioHero';
import ProjectsGrid from '@/components/Portfolio/ProjectsGrid';
import IndustryFilter from '@/components/Portfolio/IndustryFilter';
import TechnologyFilter from '@/components/Portfolio/TechnologyFilter';
import CallToAction from '@/components/shared/CallToAction';

export default async function PortfolioPage() {
  const { isEnabled: draft } = await draftMode();

  // Get projects from our custom collection
  const payload = await getPayloadClient();
  const projects = await payload
    .find({
      collection: 'projects',
      draft,
      sort: 'order',
    })
    .then((res: any) => res.docs || []);

  // Get technologies for filtering
  const technologies = await payload
    .find({
      collection: 'technologies',
      draft,
    })
    .then((res: any) => res.docs || []);

  // Get industries for filtering
  const industries = await payload
    .find({
      collection: 'industries',
      draft,
      sort: 'order',
    })
    .then((res: any) => res.docs || []);

  return (
    <main className="portfolio-page">
      {draft && <LivePreviewListener />}

      {/* Portfolio Hero Section */}
      <PortfolioHero 
        title="Our Portfolio" 
        description="Explore our diverse range of projects across various industries and technologies. Each project showcases our expertise in JavaScript and related technologies."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Filter Projects</h2>
              
              {/* Industry Filter */}
              <IndustryFilter industries={industries} />
              
              {/* Technology Filter */}
              <TechnologyFilter technologies={technologies} />
            </div>
          </aside>
          
          <div className="lg:w-3/4">
            {/* Projects Grid */}
            <ProjectsGrid projects={projects} />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to start your project?"
        description="Contact us today to discuss how we can help bring your vision to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: 'Portfolio | JS SBU | Brain Station 23',
    description: 'Explore our diverse range of JavaScript projects across various industries. See how we've helped businesses transform their digital presence.',
  });
}
