'use client';

import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f8f7f5]" id="services">
      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#f47b25] font-bold text-sm uppercase tracking-[0.2em]">
            What I Build
          </h2>

          <h3 className="text-3xl md:text-4xl font-black text-slate-900">
            Frontend Engineering Capabilities
          </h3>

          <p className="text-slate-600 max-w-2xl mx-auto">
            A breakdown of the systems, architectures, and frontend solutions I specialize in building using React, Next.js, and TypeScript.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">

            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                UI Engineering
              </h4>
              <p className="text-slate-500 text-sm">
                Building responsive, accessible, and reusable interfaces.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Component-based architecture
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Responsive design systems
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Accessibility-first UI
              </li>
            </ul>
          </div>

          {/* CARD 2 (Highlighted) */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#f47b25] shadow-xl relative flex flex-col scale-105 z-10">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f47b25] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
              Core Focus
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Frontend Architecture
              </h4>
              <p className="text-slate-500 text-sm">
                Scalable systems built for performance and maintainability.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Next.js (SSR / ISR)
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                State management strategies
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Performance optimization
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                API integration patterns
              </li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">

            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Product Engineering
              </h4>
              <p className="text-slate-500 text-sm">
                End-to-end frontend systems for real-world applications.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Fullstack UI integration
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Checkout & form flows
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Dashboard systems
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <Check className="text-[#f47b25] w-4 h-4 mt-1" />
                Scalable project structure
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
