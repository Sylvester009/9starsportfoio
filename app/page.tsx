import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import OtherProjects from '@/components/OtherProjects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ProjectProvider } from '@/context/ProjectContext'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <ProjectProvider>
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <FeaturedWork />
          <OtherProjects />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
    </ProjectProvider>
  )
}