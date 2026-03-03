import { Building2, MoveLeft, MoveRight, Quote, Rocket, Store } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-[#f47b25] font-bold text-sm uppercase tracking-[0.2em]">
              Testimonials
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">
              What My Clients Say
            </h3>
            <p className="text-slate-600 max-w-xl">
              Proven results from business owners who transformed their online
              presence.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <MoveLeft />
            </button>
            <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <MoveRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 relative">
            <span className="material-symbols-outlined text-[#f47b25] text-4xl leading-none">
              <Quote />
            </span>
            <p className="text-slate-700 text-lg leading-relaxed italic">
              "The Next.js site increased our conversions by 40% in the first
              month! Performance is night and day compared to our old platform."
            </p>
            <div className="mt-auto flex items-center gap-4 border-t border-slate-50 pt-6">
              <div className="size-10 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-slate-400">
                  <Building2 />
                </span>
              </div>
              <div>
                <h5 className="font-bold text-slate-900">
                  Alex Johnson
                </h5>
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  CEO of Prime Meats
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 relative">
            <span className="material-symbols-outlined text-[#f47b25] text-4xl leading-none">
              <Quote />
            </span>
            <p className="text-slate-700 text-lg leading-relaxed italic">
              "Working with this developer was a game-changer. Our mobile
              engagement tripled, and the checkout process is finally seamless."
            </p>
            <div className="mt-auto flex items-center gap-4 border-t border-slate-50 pt-6">
              <div className="size-10 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-slate-400">
                  <Store />
                </span>
              </div>
              <div>
                <h5 className="font-bold text-slate-900">
                  Sarah Miller
                </h5>
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  Founder of Kicks Central
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 relative">
            <span className="material-symbols-outlined text-[#f47b25] text-4xl leading-none">
              <Quote />
            </span>
            <p className="text-slate-700 text-lg leading-relaxed italic">
              "Our headless architecture handles thousands of visitors without
              breaking a sweat. The SEO improvements were almost immediate."
            </p>
            <div className="mt-auto flex items-center gap-4 border-t border-slate-50 pt-6">
              <div className="size-10 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-slate-400">
                  <Rocket />
                </span>
              </div>
              <div>
                <h5 className="font-bold text-slate-900">
                  David Chen
                </h5>
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  CTO of GadgetHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
