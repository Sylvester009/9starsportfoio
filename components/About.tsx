import {
  Code,
  Braces,
  FileTerminal,
  Palette,
  Layers,
} from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white" id="about">
      <div className="max-w-[1280px] mx-auto @container">

        <div className="grid grid-cols-1 @[864px]:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative order-2 @[864px]:order-1">
            <div className="absolute -inset-4 border-2 border-[#f47b25]/20 rounded-2xl translate-x-4 translate-y-4 hidden @[864px]:block"></div>

           <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
              <img
                alt="Samuel Sylvester - Frontend Engineer"
                className="w-full h-auto object-cover"
                src="/profile.jpeg"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-8 order-1 @[864px]:order-2">

            <div className="space-y-4">

              <h2 className="text-[#f47b25] font-bold text-sm uppercase tracking-[0.2em]">
                About Me
              </h2>

              <h3 className="text-3xl md:text-5xl font-black text-slate-900">
                Frontend Engineer Crafting Scalable Web Experiences
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">
                I’m a frontend engineer focused on building responsive, performant,
                and production-ready web applications using React, Next.js, and TypeScript.
                I enjoy turning complex UI problems into clean, reusable, and scalable systems.
              </p>

              <p className="text-slate-600 leading-relaxed">
                My work spans frontend architecture, API integration, performance optimization,
                and component system design. I care deeply about writing maintainable code
                and creating interfaces that feel fast, intuitive, and reliable.
              </p>

            </div>

            {/* STACK */}
            <div className="pt-6 border-t border-slate-100">

              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Core Technologies
              </p>

              <div className="flex flex-wrap gap-8 items-center">

                {/* Next.js */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <FileTerminal className="text-slate-400 group-hover:text-[#f47b25] transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Next.js
                  </span>
                </div>

                {/* React */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <Braces className="text-slate-400 group-hover:text-[#f47b25] transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    React
                  </span>
                </div>

                {/* TypeScript */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <Code className="text-slate-400 group-hover:text-[#f47b25] transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    TypeScript
                  </span>
                </div>

                {/* UI */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <Palette className="text-slate-400 group-hover:text-[#f47b25] transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    UI Design
                  </span>
                </div>

                {/* Architecture */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <Layers className="text-slate-400 group-hover:text-[#f47b25] transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Architecture
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
