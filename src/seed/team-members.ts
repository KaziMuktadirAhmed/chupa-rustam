import { TeamMember } from '../payload-types'

export const teamMembersData: Partial<TeamMember>[] = [
  {
    name: 'John Smith',
    position: 'JavaScript SBU Lead',
    bio: 'With over 15 years of experience in JavaScript development, John leads our SBU with expertise in React, Node.js, and modern web technologies. He has successfully delivered enterprise-level projects for clients across finance, healthcare, and e-commerce sectors.',
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/johnsmith'
      },
      {
        platform: 'github',
        url: 'https://github.com/johnsmith'
      }
    ]
  },
  {
    name: 'Sarah Johnson',
    position: 'Senior Frontend Developer',
    bio: 'Sarah specializes in creating responsive, accessible user interfaces using React and Next.js. Her attention to detail and commitment to user experience has been instrumental in delivering award-winning websites for our clients.',
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/sarahjohnson'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/sarahjdev'
      }
    ]
  },
  {
    name: 'Michael Chen',
    position: 'Backend Developer',
    bio: 'Michael is an expert in Node.js and Express, with deep knowledge of database design and API development. He has architected scalable backend solutions for startups and established enterprises alike.',
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/michaelchen'
      },
      {
        platform: 'github',
        url: 'https://github.com/mchen'
      }
    ]
  },
  {
    name: 'Priya Patel',
    position: 'Mobile App Developer',
    bio: 'Priya leads our mobile development initiatives with Flutter and React Native. Her cross-platform expertise has helped clients launch successful applications on both iOS and Android with efficient development cycles.',
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/priyapatel'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/priyaflutter'
      }
    ]
  },
  {
    name: 'David Wilson',
    position: 'UI/UX Designer',
    bio: 'David combines artistic vision with technical understanding to create intuitive and engaging user experiences. His designs have helped improve conversion rates and user satisfaction across numerous client projects.',
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/davidwilson'
      },
      {
        platform: 'other',
        url: 'https://dribbble.com/davidw'
      }
    ]
  },
  {
    name: 'Emma Rodriguez',
    position: 'DevOps Engineer',
    bio: 'Emma ensures smooth deployment and operation of our applications through CI/CD pipelines, containerization, and cloud infrastructure. Her expertise in AWS and Docker has optimized performance and reliability for our clients.',
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/emmarodriguez'
      },
      {
        platform: 'github',
        url: 'https://github.com/emmar'
      }
    ]
  }
]
