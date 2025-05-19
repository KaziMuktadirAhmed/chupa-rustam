import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for project detail page
import ProjectHero from '@/components/Portfolio/ProjectHero';
import ProjectDetails from '@/components/Portfolio/ProjectDetails';
import ProjectGallery from '@/components/Portfolio/ProjectGallery';
import RelatedProjects from '@/components/Portfolio/RelatedProjects';
import CallToAction from '@/components/shared/CallToAction';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { isEnabled: draft } = await draftMode();
  const { slug } = params;

  // Get project data
  const payload = await getPayloadClient();
  const project = await payload
    .find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
      },
      draft,
      limit: 1,
    })
    .then((res: any) => res.docs[0] || null);

  // If project not found, return 404
  if (!project) {
    notFound();
  }

  // Get related projects (excluding current project)
  const relatedProjects = await payload
    .find({
      collection: 'projects',
      where: {
        slug: {
          not_equals: slug,
        },
      },
      draft,
      limit: 3,
    })
    .then((res: any) => res.docs || []);

  return (
    <main className="project-detail-page">
      {draft && <LivePreviewListener />}

      {/* Project Hero Section */}
      <ProjectHero 
        title={project.title}
        client={project.client}
        description={project.description}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Project Details */}
        <ProjectDetails project={project} />
        
        {/* Project Gallery */}
        {project.images && project.images.length > 0 && (
          <ProjectGallery images={project.images} />
        )}
      </div>

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />

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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const payload = await getPayloadClient();
  const project = await payload
    .find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
      },
      draft: false,
      limit: 1,
    })
    .then((res: any) => res.docs[0] || null);

  if (!project) {
    return {
      title: 'Project Not Found | JS SBU | Brain Station 23',
    };
  }

  return generateMeta({
    title: `${project.title} | Projects | JS SBU | Brain Station 23`,
    description: project.meta?.description || `Learn about our ${project.title} project for ${project.client}.`,
  });
}

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const projects = await payload
    .find({
      collection: 'projects',
      limit: 100,
    })
    .then((res: any) => res.docs || []);

  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}
