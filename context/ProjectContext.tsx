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
  id: 'formflash',

  title: 'FormFlash',

  description:
    'A modern form-building platform designed to help teachers create quizzes, tests, assignments, and data collection forms through an intuitive drag-and-drop interface.',

  longDescription:
    'FormFlash is a full-stack SaaS application being built to simplify how educators create and manage assessments and data collection forms. The platform provides a visual drag-and-drop form builder that allows teachers to quickly design quizzes, tests, assignments, and surveys without technical knowledge. Users can customize form fields, preview forms before publishing, and access dedicated dashboards for managing responses and viewing analytics. The project focuses on improving efficiency for educators by replacing repetitive manual processes with a streamlined digital workflow. Built with modern web technologies, FormFlash showcases advanced frontend architecture, dynamic UI design, and scalable SaaS product development.',

  image: '/newcreator.png',

  tags: [
    'Next.js (App Router)',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Drag & Drop',
    'SaaS',
    'Responsive Design',
    'Vercel',
  ],

  stats: [
    {label: 'Product Type', value: 'EdTech SaaS'},
    {label: 'Core Feature', value: 'Drag-and-Drop Form Builder'},
    {label: 'Target Users', value: 'Teachers & Educators'},
  ],

  caseStudy: {
    challenge:
      'Teachers often rely on multiple tools or manual processes to create quizzes, assignments, tests, and data collection forms. The goal of FormFlash is to provide a single platform that simplifies form creation while offering an intuitive user experience and centralized management.',

    solutions: [
      'Designed and developed a visual drag-and-drop form builder interface.',
      'Created a form creation workflow for building quizzes, tests, assignments, and surveys.',
      'Built responsive dashboards for managing forms, responses, and analytics.',
      'Developed form preview and response submission interfaces.',
      'Implemented reusable component architecture for scalable feature development.',
      'Focused on user-centered design to reduce the complexity of form creation for educators.',
    ],

    role: 'Frontend Developer',

    duration: 'Ongoing',

    industry: 'Education Technology (EdTech)',
  },

  category: 'SaaS',

  status: 'In Progress',

  websiteLink: 'https://formflash.vercel.app/',
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
