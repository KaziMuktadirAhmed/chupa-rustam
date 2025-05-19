import { Technology } from '../payload-types'

export const technologiesData: Partial<Technology>[] = [
  // Frontend Technologies
  {
    name: 'React.js',
    category: 'frontend',
    description: 'A JavaScript library for building user interfaces, particularly single-page applications.'
  },
  {
    name: 'Next.js',
    category: 'frontend',
    description: 'A React framework that enables server-side rendering and generating static websites.'
  },
  {
    name: 'Angular',
    category: 'frontend',
    description: 'A platform and framework for building single-page client applications using HTML and TypeScript.'
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    description: 'A progressive JavaScript framework for building user interfaces.'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    description: 'A strongly typed programming language that builds on JavaScript.'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.'
  },
  
  // Backend Technologies
  {
    name: 'Node.js',
    category: 'backend',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.'
  },
  {
    name: 'Express.js',
    category: 'backend',
    description: 'A minimal and flexible Node.js web application framework.'
  },
  {
    name: 'Nest.js',
    category: 'backend',
    description: 'A progressive Node.js framework for building efficient and scalable server-side applications.'
  },
  {
    name: 'GraphQL',
    category: 'backend',
    description: 'A query language for APIs and a runtime for executing those queries with existing data.'
  },
  
  // Mobile Technologies
  {
    name: 'Flutter',
    category: 'mobile',
    description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.'
  },
  {
    name: 'React Native',
    category: 'mobile',
    description: 'A framework for building native apps using React and JavaScript.'
  },
  
  // Database Technologies
  {
    name: 'MongoDB',
    category: 'database',
    description: 'A source-available cross-platform document-oriented database program.'
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    description: 'A powerful, open source object-relational database system.'
  },
  {
    name: 'MySQL',
    category: 'database',
    description: 'An open-source relational database management system.'
  },
  
  // DevOps Technologies
  {
    name: 'Docker',
    category: 'devops',
    description: 'A platform for developing, shipping, and running applications in containers.'
  },
  {
    name: 'AWS',
    category: 'devops',
    description: 'Amazon Web Services, a comprehensive cloud computing platform.'
  },
  {
    name: 'Vercel',
    category: 'devops',
    description: 'A platform for frontend frameworks and static sites, built to integrate with headless content, commerce, or database.'
  }
]
