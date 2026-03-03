'use client';

import Image from 'next/image';
import {CheckCircleIcon} from '@heroicons/react/24/solid';
import {useProject} from '@/context/ProjectContext';
import {AnimatePresence, motion} from 'framer-motion';
import {useEffect, useState} from 'react';

export default function FeaturedWork() {
  const {selectedProject} = useProject();
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    // Check if we just scrolled to this section
    const checkIfJustScrolled = () => {
      const hash = window.location.hash;
      if (hash === '#work') {
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 1500);
      }
    };

    checkIfJustScrolled();
    window.addEventListener('hashchange', checkIfJustScrolled);

    return () => window.removeEventListener('hashchange', checkIfJustScrolled);
  }, []);
  return (
    <section
      className={`bg-white py-20 px-6 md:px-20 border-y border-slate-100 ${
        isHighlighted ? 'shadow-[0_0_30px_rgba(244,123,37,0.3)]' : ''
      }`}
      id="work"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            key={selectedProject.id + '-title'}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            <div className="space-y-2">
              <h2 className="text-[#f47b25] font-bold text-sm uppercase tracking-[0.2em]">
                Portfolio
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                Featured Project
              </h3>
            </div>
          </motion.div>
        </div>
        <div className="@container">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.95}}
              transition={{duration: 0.3}}
              className="grid grid-cols-1 @[1024px]:grid-cols-2 gap-12 items-center bg-background-[#f8f7f5] rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <div className="w-full aspect-video md:aspect-square bg-slate-100 relative group overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col gap-6">
                <div className="flex gap-2 flex-wrap">
                  {selectedProject.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-200 rounded text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-bold text-slate-900 leading-tight">
                  {selectedProject.title}
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>
                <ul className="space-y-3">
                  {selectedProject.stats.map((stat, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-[#f47b25]" />
                      {stat.value} {stat.label}
                    </li>
                  ))}
                </ul>
                <button className="flex w-fit items-center justify-center rounded-lg h-12 px-8 bg-[#f47b25] text-white text-base font-bold shadow-lg shadow-[#f47b25]/20 hover:translate-y-[-2px] transition-all mt-4">
                  View Website
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
