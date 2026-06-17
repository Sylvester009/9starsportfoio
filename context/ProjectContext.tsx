'use client';

import React, {createContext, useContext, useState, ReactNode} from 'react';

export interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  stats: {
    label: string;
    value: string;
  }[];
  caseStudy?: {
    challenge: string;
    solutions: string[];
    role: string;
    duration: string;
    industry: string;
    liveSiteUrl?: string;
    nextProjectUrl?: string;
    downloadPdfUrl?: string;
  };
  category: string;
  status: string;
  websiteLink: string;
}

interface ProjectContextType {
  selectedProject: ProjectDetails;
  setSelectedProject: (project: ProjectDetails) => void;
  allProjects: ProjectDetails[];
}

const defaultProject: ProjectDetails = {
  id: 'meatopia-meat-shop',

  title: 'Meatopia E-commerce Platform',

  description:
    'A production-ready e-commerce platform for a meat delivery business, enabling customers to browse products, select weight variants, and complete secure online purchases.',

  longDescription:
    'Meatopia is a full-stack e-commerce web application built for a local butcher business to enable seamless online ordering. Customers can browse available meat products, select weight variants (such as 1kg or 2kg), adjust quantities, and complete secure payments using Paystack. The application features a persistent shopping cart, server-side payment verification, and automated order confirmation emails sent to the business after successful transactions. The platform is deployed on Vercel and currently used by real customers to place orders.',

  image: '/meatopia-profile.png',

  tags: [
    'Next.js (App Router)',
    'TypeScript',
    'Tailwind CSS',
    'Paystack',
    'Nodemailer',
    'Vercel',
  ],

  stats: [
    {label: 'Architecture', value: 'Full-Stack Next.js'},
    {label: 'Checkout Flow', value: 'Single-Page Checkout'},
    {label: 'Deployment', value: 'Vercel + Custom Domain'},
  ],

  caseStudy: {
    challenge:
      'The business relied primarily on manual ordering through phone calls and messaging, which made it difficult for customers to easily browse available products, select specific meat quantities, and complete purchases efficiently.',

    solutions: [
      'Developed a full e-commerce interface with product listings, variant selection (e.g., 1kg / 2kg), and quantity controls.',
      'Implemented a persistent cart system using LocalStorage to maintain cart items across sessions.',
      'Built a single-page checkout experience that combines cart review, customer details form, and payment initiation.',
      'Integrated Paystack Inline payment for secure online transactions.',
      'Implemented server-side payment verification using Next.js API routes to ensure transaction validity.',
      'Automated order confirmation emails using Nodemailer after successful payments.',
    ],

    role: 'Full-Stack Developer',

    duration: '2 Weeks',

    industry: 'Food & Beverage',
  },

  category: 'E-Commerce',

  status: 'Completed',

  websiteLink: 'https://www.meatopia.com.ng',
};

const allProjectsData: ProjectDetails[] = [
  defaultProject,
  {
  id: 'new-english-ecommerce',

  title: 'New English E-commerce Platform',

  description:
    'A full-stack e-commerce platform inspired by Old English Bakery & Superstores, featuring authentication, product management, order tracking, and an administrative dashboard.',

  longDescription:
    'New English is a full-stack e-commerce web application built as a digital replica of Old English Bakery & Superstores. Customers can browse products, add items to their cart, and place orders through a responsive storefront. The platform includes secure authentication powered by Supabase, allowing administrators to manage products and monitor customer orders through a dedicated dashboard. Products and orders are stored in a centralized database, enabling full CRUD operations and real-time inventory management. The application is deployed on Vercel and demonstrates a complete e-commerce workflow without payment gateway integration.',

  image: '/new-english-store.png',

  tags: [
    'Next.js (App Router)',
    'TypeScript',
    'Tailwind CSS',
    'Supabase Auth',
    'Supabase Database',
    'React',
    'Vercel',
  ],

  stats: [
    {label: 'Architecture', value: 'Full-Stack Next.js'},
    {label: 'Authentication', value: 'Supabase Auth'},
    {label: 'Database', value: 'Supabase'},
  ],

  caseStudy: {
    challenge:
      'The goal was to create a digital storefront for a traditional retail business while providing administrators with tools to manage inventory and customer orders. The project required implementing secure authentication, database integration, and administrative workflows that mirror real-world e-commerce operations.',

    solutions: [
      'Built a responsive e-commerce storefront for browsing and ordering products.',
      'Implemented secure user authentication using Supabase Auth.',
      'Created protected admin dashboard routes for store management.',
      'Developed full CRUD functionality for creating, viewing, editing, and deleting products.',
      'Integrated Supabase Database for centralized product and order storage.',
      'Built an order management system that captures customer orders and displays them within the admin dashboard.',
      'Designed a scalable architecture using Next.js App Router and TypeScript.',
    ],

    role: 'Full-Stack Developer',

    duration: '4 Weeks',

    industry: 'Retail & E-Commerce',
  },

  category: 'E-Commerce',

  status: 'Completed',

  websiteLink: 'https://newenglish.vercel.app/',
},
  {
    id: 'kicks-central',
    title: 'Kicks Central',
    description: 'High-traffic footwear marketplace with real-time bidding.',
    longDescription:
      'A sneaker marketplace handling 100K+ daily active users with features like real-time bidding, size matching algorithm, and integrated authentication with social platforms.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMjat8_OrSA9t1aGO_jPZ768nK0yPwo44zMEQeZ4l-ZTyCP-TmroGbgMYWTnBuk0cDYelWl0NLVdWaJmlGjjl2DXXkjgr07ZIYmzdcOv0KkJsciPm6-fZZ2oZhPuoyL4-r8zAaBKIwsKCjkII0VXJrGP9vL0iGpLxNGmiJBGuK2gEVhfQcg8H95h1B4dFv8W4Che37fUqypuRloQBNzQG6an2TCUU647l17HDmktW-LDddHS5EgbrHaaGFx4rzH5jaml-rKl1uves8',
    tags: ['Next.js', 'WebSockets', 'Prisma', 'PostgreSQL'],
    stats: [
      {label: 'Daily Active Users', value: '100K+'},
      {label: 'Bids Processed/sec', value: '500+'},
      {label: 'Conversion Rate', value: '12%'},
    ],
    caseStudy: {
      challenge:
        "The client needed a scalable platform that could handle rapid growth and provide personalized shopping experiences. The existing solution was struggling with slow load times and couldn't handle peak traffic during sales events.",
      solutions: [
        'Implemented server-side rendering with Next.js for optimal performance.',
        'Built AI recommendation engine using Redis for real-time personalization.',
        'Created a headless architecture for maximum scalability.',
      ],
      role: 'Lead Developer & Technical Architect',
      duration: '4 Months (Jan 2024 - Apr 2024)',
      industry: 'Electronics',
    },
    category: 'Fashion',
    status: 'On Waitlist',
    websiteLink: '#',
  },
  {
    id: 'vanilla-bakery',
    title: 'Vanilla Bakery',
    description: 'Sustainable beauty brand with subscription model.',
    longDescription:
      'A modern e-commerce platform for organic skincare products featuring subscription management, ingredient transparency, and personalized skin consultation quizzes.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXuh0bKYADFKvw8jN1IkBXeqnsu8MqwE6ZFeoaelUMRYyUHQTH6_j-xnDWYDqOJ5Lw0efOkYS3DJrulszKZL_9dPxRNI_jo5A7_XwQS9_ZfdzWR8mfBVemnaTa6mtjq-aOEmoCOhoooZfEysRjgQ_YaraQPZT6M_q22Q6DxghQxDTdB7h6k2cPtQOhaNKENlvXnUQzezXOdL8PBgDP14823z-SnK2kSvy30RFRdwvvv8a306e4caBAGCt7SHjMp7MVN05QmUd3N8vW',
    tags: ['Next.js', 'GraphQL', 'Stripe', 'Tailwind CSS'],
    stats: [
      {label: 'Subscription Growth', value: '150%'},
      {label: 'Quiz Completion Rate', value: '78%'},
      {label: 'Customer Retention', value: '92%'},
    ],
    caseStudy: {
      challenge:
        "The client needed a scalable platform that could handle rapid growth and provide personalized shopping experiences. The existing solution was struggling with slow load times and couldn't handle peak traffic during sales events.",
      solutions: [
        'Implemented server-side rendering with Next.js for optimal performance.',
        'Built AI recommendation engine using Redis for real-time personalization.',
        'Created a headless architecture for maximum scalability.',
      ],
      role: 'Lead Developer & Technical Architect',
      duration: '4 Months (Jan 2024 - Apr 2024)',
      industry: 'Electronics',
    },
    category: 'Beauty',
    status: 'In Development',
    websiteLink: '#',
  },
];

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({children}: {children: ReactNode}) {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDetails>(defaultProject);

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        allProjects: allProjectsData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}
