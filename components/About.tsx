import { Banknote, Braces, Code, FileTerminal, Palette, Terminal } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white" id="about">
      <div className="max-w-[1280px] mx-auto @container">
        <div className="grid grid-cols-1 @[864px]:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 @[864px]:order-1">
            <div className="absolute -inset-4 border-2 border-[#f47b25]/20 rounded-2xl translate-x-4 translate-y-4 hidden @[864px]:block"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
              <img
                alt="Expert Developer"
                className="w-full h-auto object-cover grayscale-50"
                src="/profile.jpeg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 order-1 @[864px]:order-2">
            <div className="space-y-4">
              <h2 className="text-[#f47b25] font-bold text-sm uppercase tracking-[0.2em]">
                About Me
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900">
                Expert E-commerce Development
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                I specialize in building high-conversion storefronts using{' '}
                <span className="text-[#f47b25] font-semibold">Next.js</span>{' '}
                and modern headless architectures. With a focus on performance
                and user experience, I help brands bridge the gap between
                complex inventory and seamless checkout.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether it's custom Stripe integrations or optimizing Shopify
                speed, my goal is to ensure your technical stack works as hard
                as your marketing team.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Mastered Tech Stack
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#f47b25] transition-colors">
                      <FileTerminal />
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Next.js
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#f47b25] transition-colors">
                      <Braces />
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    React
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#f47b25] transition-colors">
                      <Code />
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    TypeScript
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#f47b25] transition-colors">
                      <Banknote />
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Paystack
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#f47b25]/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#f47b25] transition-colors">
                      <Palette />
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Tailwind
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
