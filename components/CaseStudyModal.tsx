'use client'

import { Fragment } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon, FolderOpenIcon, ArrowTopRightOnSquareIcon, LightBulbIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useProject } from '@/context/ProjectContext'

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const { selectedProject } = useProject()

  // You can customize this data based on the selected project
  const caseStudyData = {
    title: selectedProject.title,
    description: selectedProject.longDescription || selectedProject.description,
    heroImage: selectedProject.image,
    challenge: selectedProject.caseStudy?.challenge,
    solutions: selectedProject.caseStudy?.solutions || [],
    role: selectedProject.caseStudy?.role,
    duration: selectedProject.caseStudy?.duration,
    industry: selectedProject.category || "E-commerce",
    tools: selectedProject.tags,
    liveSiteUrl: "#",
    nextProjectUrl: "#",
    downloadPdfUrl: "#"
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay with blur */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm" />
        </TransitionChild>

        {/* Modal container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header / Navigation Bar */}
                <header className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-white sticky top-0 z-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#f47b25]/10 p-2 rounded-lg">
                      <FolderOpenIcon className="h-5 w-5 text-[#f47b25]" />
                    </div>
                    <DialogTitle className="text-slate-900 text-lg font-bold tracking-tight">
                      {caseStudyData.title} Case Study
                    </DialogTitle>
                  </div>
                  <button 
                    onClick={onClose}
                    className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </header>

                {/* Scrollable Content */}
                <div className="overflow-y-auto">
                  {/* Hero Image Section */}
                  <div className="px-6 py-4">
                    <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-sm">
                      <Image
                        src={caseStudyData.heroImage}
                        alt={caseStudyData.title}
                        fill
                        className="object-cover h-auto"
                        sizes="(max-width: 1024px) 100vw, w-auto"
                      />
                    </div>
                  </div>

                  {/* Title & Quick Info */}
                  <div className="px-8 py-6">
                    <div className="flex flex-wrap justify-between items-start gap-6">
                      <div className="flex-1 min-w-[300px]">
                        <h2 className="text-slate-900 text-4xl font-black leading-tight tracking-tight mb-4">
                          {caseStudyData.title}
                        </h2>
                        <p className="text-slate-600 text-lg font-normal leading-relaxed">
                          {caseStudyData.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <a 
                          href={caseStudyData.liveSiteUrl}
                          className="bg-[#f47b25] hover:bg-[#f47b25]/90 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md"
                        >
                          Visit Live Site
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Two Column Layout */}
                  <div className="px-8 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-50 pt-8 mt-4">
                    {/* Main Content (2/3) */}
                    <div className="lg:col-span-2 space-y-10">
                      {/* Challenge Section */}
                      <section>
                        <h3 className="text-slate-900 text-xl font-bold mb-4 flex items-center gap-2">
                          <CheckCircleIcon className="h-6 w-6 text-[#f47b25]" />
                          The Challenge
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {caseStudyData.challenge}
                        </p>
                      </section>

                      {/* Solution Section */}
                      <section>
                        <h3 className="text-slate-900 text-xl font-bold mb-4 flex items-center gap-2">
                          <LightBulbIcon className="h-6 w-6 text-[#f47b25]" />
                          The Solution
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed mb-4">
                          We implemented a "mobile-first" approach, redesigning the navigation to be more intuitive and thumb-friendly. Key solutions included:
                        </p>
                        <ul className="space-y-3">
                          {caseStudyData.solutions.map((solution, index) => (
                            <li key={index} className="flex gap-3 text-slate-600">
                              <CheckCircleSolid className="h-5 w-5 text-[#f47b25] shrink-0 mt-0.5" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    {/* Sidebar Metadata (1/3) */}
                    <div className="lg:col-span-1 space-y-8">
                      {/* Project Details */}
                      <div>
                        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Project Details</h4>
                        <div className="space-y-6">
                          <div className="flex flex-col gap-1">
                            <span className="text-slate-900 font-semibold">Role</span>
                            <span className="text-slate-600 text-sm">{caseStudyData.role}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-slate-900 font-semibold">Duration</span>
                            <span className="text-slate-600 text-sm">{caseStudyData.duration}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-slate-900 font-semibold">Industry</span>
                            <span className="text-slate-600 text-sm">{caseStudyData.industry}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tools Used */}
                      <div>
                        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudyData.tools.map((tool) => (
                            <span 
                              key={tool}
                              className="px-3 py-1 bg-[#f47b25]/10 text-[#f47b25] text-xs font-bold rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact CTA */}
                      <div className="p-5 bg-[#f8f7f5] rounded-xl border border-slate-100">
                        <p className="text-slate-900 font-bold mb-2">Want to see more?</p>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4">
                          I can provide a deeper technical walkthrough of the backend architecture upon request.
                        </p>
                        <button className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                          Contact Me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-slate-100 px-8 py-4 bg-slate-50/50 flex justify-between items-center text-slate-400 text-xs">
                  <span>© 2026 Project Case Study Portfolio</span>
                  <div className="flex gap-4">
                    <a href={caseStudyData.nextProjectUrl} className="hover:text-[#f47b25] transition-colors">Next Project</a>
                    <span className="text-slate-200">|</span>
                    <a href={caseStudyData.downloadPdfUrl} className="hover:text-[#f47b25] transition-colors">Download PDF</a>
                  </div>
                </footer>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}