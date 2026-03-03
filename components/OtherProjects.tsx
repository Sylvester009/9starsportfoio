"use client"

import Image from 'next/image'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import { useProject } from '@/context/ProjectContext';

export default function OtherProjects() {
  const { allProjects, setSelectedProject } = useProject();
  return (
    <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto">
      <h3 className="text-2xl font-bold text-slate-900 mb-10">Other Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        {allProjects.map((project) => (
        <div key={project.id} className="group flex flex-col gap-4" onClick={() => setSelectedProject(project)}>
          <div className="relative aspect-16/10 bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/90 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                Client Project
              </span>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold">{project.title}</h5>
            <p className="text-sm text-slate-500">{project.category}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}