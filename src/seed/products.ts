import { Product } from '../payload-types'

export const productsData: Partial<Product>[] = [
  {
    name: 'AI Chatbot',
    slug: 'ai-chatbot',
    description: [
      {
        children: [
          {
            text: 'Our AI Assistant is an advanced chatbot built on Llama 3 with Groq\'s ultra-fast inference capabilities, enabling real-time, intelligent conversations. Designed for seamless customer support and instant query resolution, it delivers accurate responses, 24/7 availability, and a natural chat experience. Whether answering FAQs or providing complex insights, our chatbot enhances engagement while ensuring speed and reliability.'
          }
        ]
      }
    ],
    features: [
      { feature: 'Instant Answers' },
      { feature: '24/7 Availability' },
      { feature: 'Intelligent Conversations' },
      { feature: 'User-Friendly Interface' },
      { feature: 'Ollama powered' }
    ],
    isFeatured: true,
    meta: {
      title: 'AI Chatbot - Intelligent Customer Support',
      description: 'Advanced AI chatbot built on Llama 3 with Groq\'s ultra-fast inference capabilities for real-time support.',
      keywords: 'AI chatbot, customer support, Llama 3, Groq, intelligent conversations'
    }
  },
  {
    name: 'Tracker 23',
    slug: 'tracker-23',
    description: [
      {
        children: [
          {
            text: 'Tracker 23 is the ultimate time-tracking solution designed to boost productivity and efficiency. Built for individuals and teams, this app provides automated tracking, detailed reports, and real-time analytics to help users optimize their work. With multi-device sync and smart reminders, Tracker 23 ensures seamless time management across all platforms.'
          }
        ]
      }
    ],
    features: [
      { feature: 'Automated Time Tracking' },
      { feature: 'Task Management' },
      { feature: 'Project-Based Tracking' },
      { feature: 'Detailed Reports & Analytics' },
      { feature: 'Reminders & Alerts' },
      { feature: 'Cloud Sync & Multi-Device Access' },
      { feature: 'Idle Time Detection' },
      { feature: 'User-Friendly Dashboard' }
    ],
    isFeatured: true,
    meta: {
      title: 'Tracker 23 - Time Tracking Solution',
      description: 'Ultimate time-tracking solution designed to boost productivity and efficiency for individuals and teams.',
      keywords: 'time tracking, productivity, task management, analytics, project tracking'
    }
  },
  {
    name: 'BS-Commerce',
    slug: 'bs-commerce',
    description: [
      {
        children: [
          {
            text: 'BS-Commerce is a next-generation e-commerce platform designed to empower businesses with a feature-rich and scalable solution. With multi-vendor support, seamless payment integration, and advanced analytics, it provides everything needed to build and grow a successful online store. The platform is built for flexibility, security, and user engagement, making it the ideal choice for modern e-commerce businesses.'
          }
        ]
      }
    ],
    features: [
      { feature: 'Multi-Vendor Support' },
      { feature: 'Customizable Storefronts' },
      { feature: 'Seamless Payment Integration' },
      { feature: 'Advanced Product Management' },
      { feature: 'Order & Delivery Management' },
      { feature: 'Customer Engagement Tools' },
      { feature: 'Analytics & Reporting' }
    ],
    isFeatured: true,
    meta: {
      title: 'BS-Commerce - E-commerce Platform',
      description: 'Next-generation e-commerce platform with multi-vendor support and advanced features for modern businesses.',
      keywords: 'e-commerce, multi-vendor, online store, payment integration, analytics'
    }
  },
  {
    name: 'Money Manager 23',
    slug: 'money-manager-23',
    description: [
      {
        children: [
          {
            text: 'Money Manager 23 is a powerful and intuitive budgeting app designed to help users take control of their finances. Available on Android and iOS, it offers a seamless experience for tracking expenses, managing income, and planning budgets. With features like real-time reports, cloud sync, and multi-currency support, Money Manager 23 ensures users stay on top of their financial goals with ease.'
          }
        ]
      }
    ],
    features: [
      { feature: 'Expense Tracking' },
      { feature: 'Income Management' },
      { feature: 'Budget Planning' },
      { feature: 'Financial Reports' },
      { feature: 'Multi-Currency Support' },
      { feature: 'Recurring Transactions' },
      { feature: 'Cloud Backup & Sync' },
      { feature: 'User-Friendly Interface' }
    ],
    isFeatured: true,
    meta: {
      title: 'Money Manager 23 - Budgeting App',
      description: 'Powerful budgeting app for tracking expenses, managing income, and planning finances on Android and iOS.',
      keywords: 'budgeting app, expense tracking, financial management, multi-currency, cloud sync'
    }
  }
]
