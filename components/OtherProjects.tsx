'use client';

import Image from 'next/image';
import {useProject} from '@/context/ProjectContext';

export default function OtherProjects() {
  const {allProjects, setSelectedProject} = useProject();

  const handleProjectClick = (project: (typeof allProjects)[0]) => {
    setSelectedProject(project);

    // Get the featured work section element
    const featuredSection = document.getElementById('work');

    // Smooth scroll to the featured work section
    if (featuredSection) {
      featuredSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const statusColors: Record<string, string> = {
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In Progress": "bg-amber-50 text-amber-800 border-amber-200",
  Archived: "bg-rose-50 text-rose-700 border-rose-200",
  };

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto">
      <h3 className="text-2xl font-bold text-slate-900 mb-10">
        Other Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        {allProjects.map(project => (
          <div
            key={project.id}
            role="button"
            tabIndex={0}
            className="group flex flex-col gap-4 cursor-pointer"
            onClick={() => handleProjectClick(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleProjectClick(project);
              }
            }}
            aria-label={`View ${project.title} project`}
            >
            <div className="relative aspect-16/10 bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-lg text-sm font-bold border shadow-sm ${statusColors[project.status] || "bg-slate-500/10 text-slate-500 border-slate-500/20"}`}>
                  {project.status}
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
  );
}
