'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface ProjectDetails {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  stats: {
    label: string
    value: string
  }[]
  caseStudyLink?: string
  category: string
}

interface ProjectContextType {
  selectedProject: ProjectDetails
  setSelectedProject: (project: ProjectDetails) => void
  allProjects: ProjectDetails[]
}

const defaultProject: ProjectDetails = {
  id: 'meat-shop',
  title: 'Meatopia Meat Shop',
  description: 'A full-featured premium meat marketplace built for a boutique butcher shop.',
  longDescription: 'A full-featured premium meat marketplace built for a boutique butcher shop. Features include custom product selection, persistent cart, and a multi-step secure checkout.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF0am3brBHkBuvpycblCGY8A7cw9oK8dSIh7qPUQhg9_hIrJm8XMD4HvXZLMdxAmElfwAq6MIMpO45zAtw5ewxZUYg_Z7UzMYqHh1y9Bf5X7Px_km3NJe4uDMW6Lkn1tTTD2IO47qmxGyL2_TKnt-NcVyzY0h01SffqR9xtSzN_vBjm8FS7gJpgIsd6Mdr2bjB1m8__nZBHcVsOaYayuxI_OBBAQ9-jkVYxsi3mMSkfq77msOB_gUqpDvHSbvTbsvuKkx5yh4oziNj',
  tags: ['Next.js', 'Tailwind CSS', 'Paystack'],
  stats: [
    { label: 'Lighthouse Performance Score', value: '98/100' },
    { label: 'Mobile Conversion Rate Increase', value: '45%' },
    { label: 'CMS Integration', value: 'Live Inventory' },
  ],
  category: 'Food & Beverage'
}

const allProjectsData: ProjectDetails[] = [
  defaultProject,
  {
    id: 'gadgethub',
    title: 'GadgetHub E-Store',
    description: 'Tech retail optimization with AI-powered recommendations.',
    longDescription: 'A cutting-edge electronics e-commerce platform featuring AI-powered product recommendations, real-time inventory sync, and a seamless checkout experience that increased average order value by 35%.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXJqnI3GfE0dMK8OoI4gIgT92Gi7u39EukogwUY0I1IfF-SJVu1rcQWPY0fO6au4CGNJ0G2Ab9AdAfqwBO9D61qH8QU_ub2ho7Bw42CAJnZfJblo_3Rk1GugKYNO1OkW6eRPpPWhDM9GcqD2mfWkf_yGGKCymLGBiKEmEjSXaGpJVhhr0WEkQQ_uIpgemGNM5lCZ1OTuaMmu_sJBW91VrLxWkSXA6-JuiXTngqWLrUYOTemSfEXuwe31pIIw6lY_szw67HxlRFzRr-',
    tags: ['Next.js', 'TypeScript', 'AI', 'Redis'],
    stats: [
      { label: 'Average Order Value Increase', value: '35%' },
      { label: 'Page Load Time', value: '0.8s' },
      { label: 'Products Indexed', value: '50K+' },
    ],
    category: 'Electronics'
  },
  {
    id: 'kicks-central',
    title: 'Kicks Central',
    description: 'High-traffic footwear marketplace with real-time bidding.',
    longDescription: 'A sneaker marketplace handling 100K+ daily active users with features like real-time bidding, size matching algorithm, and integrated authentication with social platforms.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMjat8_OrSA9t1aGO_jPZ768nK0yPwo44zMEQeZ4l-ZTyCP-TmroGbgMYWTnBuk0cDYelWl0NLVdWaJmlGjjl2DXXkjgr07ZIYmzdcOv0KkJsciPm6-fZZ2oZhPuoyL4-r8zAaBKIwsKCjkII0VXJrGP9vL0iGpLxNGmiJBGuK2gEVhfQcg8H95h1B4dFv8W4Che37fUqypuRloQBNzQG6an2TCUU647l17HDmktW-LDddHS5EgbrHaaGFx4rzH5jaml-rKl1uves8',
    tags: ['Next.js', 'WebSockets', 'Prisma', 'PostgreSQL'],
    stats: [
      { label: 'Daily Active Users', value: '100K+' },
      { label: 'Bids Processed/sec', value: '500+' },
      { label: 'Conversion Rate', value: '12%' },
    ],
    category: 'Fashion'
  },
  {
    id: 'vanilla-bakery',
    title: 'Vanilla Bakery',
    description: 'Sustainable beauty brand with subscription model.',
    longDescription: 'A modern e-commerce platform for organic skincare products featuring subscription management, ingredient transparency, and personalized skin consultation quizzes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXuh0bKYADFKvw8jN1IkBXeqnsu8MqwE6ZFeoaelUMRYyUHQTH6_j-xnDWYDqOJ5Lw0efOkYS3DJrulszKZL_9dPxRNI_jo5A7_XwQS9_ZfdzWR8mfBVemnaTa6mtjq-aOEmoCOhoooZfEysRjgQ_YaraQPZT6M_q22Q6DxghQxDTdB7h6k2cPtQOhaNKENlvXnUQzezXOdL8PBgDP14823z-SnK2kSvy30RFRdwvvv8a306e4caBAGCt7SHjMp7MVN05QmUd3N8vW',
    tags: ['Next.js', 'GraphQL', 'Stripe', 'Tailwind CSS'],
    stats: [
      { label: 'Subscription Growth', value: '150%' },
      { label: 'Quiz Completion Rate', value: '78%' },
      { label: 'Customer Retention', value: '92%' },
    ],
    category: 'Beauty'
  }
]

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails>(defaultProject)

  return (
    <ProjectContext.Provider value={{ 
      selectedProject, 
      setSelectedProject,
      allProjects: allProjectsData 
    }}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProject() {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider')
  }
  return context
}