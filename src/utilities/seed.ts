import { Seed } from 'payload/dist/payload-types';
import seedData from '../seed';

export const seed: Seed = async ({ payload }) => {
  // Create technologies first since they are referenced by projects and products
  if (seedData.technologies && seedData.technologies.length > 0) {
    for (const technology of seedData.technologies) {
      try {
        await payload.create({
          collection: 'technologies',
          data: technology,
        });
        console.log(`Created technology: ${technology.name}`);
      } catch (error) {
        console.error(`Error creating technology ${technology.name}:`, error);
      }
    }
  }

  // Create projects
  if (seedData.projects && seedData.projects.length > 0) {
    for (const project of seedData.projects) {
      try {
        await payload.create({
          collection: 'projects',
          data: project,
        });
        console.log(`Created project: ${project.title}`);
      } catch (error) {
        console.error(`Error creating project ${project.title}:`, error);
      }
    }
  }

  // Create products
  if (seedData.products && seedData.products.length > 0) {
    for (const product of seedData.products) {
      try {
        await payload.create({
          collection: 'products',
          data: product,
        });
        console.log(`Created product: ${product.name}`);
      } catch (error) {
        console.error(`Error creating product ${product.name}:`, error);
      }
    }
  }

  // Create services
  if (seedData.services && seedData.services.length > 0) {
    for (const service of seedData.services) {
      try {
        await payload.create({
          collection: 'services',
          data: service,
        });
        console.log(`Created service: ${service.title}`);
      } catch (error) {
        console.error(`Error creating service ${service.title}:`, error);
      }
    }
  }

  // Create team members
  if (seedData.teamMembers && seedData.teamMembers.length > 0) {
    for (const teamMember of seedData.teamMembers) {
      try {
        await payload.create({
          collection: 'team-members',
          data: teamMember,
        });
        console.log(`Created team member: ${teamMember.name}`);
      } catch (error) {
        console.error(`Error creating team member ${teamMember.name}:`, error);
      }
    }
  }

  // Create testimonials
  if (seedData.testimonials && seedData.testimonials.length > 0) {
    for (const testimonial of seedData.testimonials) {
      try {
        await payload.create({
          collection: 'testimonials',
          data: testimonial,
        });
        console.log(`Created testimonial from: ${testimonial.clientName}`);
      } catch (error) {
        console.error(`Error creating testimonial from ${testimonial.clientName}:`, error);
      }
    }
  }

  // Create industries
  if (seedData.industries && seedData.industries.length > 0) {
    for (const industry of seedData.industries) {
      try {
        await payload.create({
          collection: 'industries',
          data: industry,
        });
        console.log(`Created industry: ${industry.name}`);
      } catch (error) {
        console.error(`Error creating industry ${industry.name}:`, error);
      }
    }
  }

  console.log('Seed completed successfully!');
};

export default seed;
