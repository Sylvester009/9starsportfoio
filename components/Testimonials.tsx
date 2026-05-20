import { Building2, MoveLeft, MoveRight, Quote, Rocket, Store } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">

          <div className="space-y-4">
            <h2 className="text-[#f47b25] font-bold text-sm uppercase tracking-[0.2em]">
              Experience & Feedback
            </h2>

            <h3 className="text-3xl md:text-4xl font-black text-slate-900">
              Real-World Engineering Impact
            </h3>

            <p className="text-slate-600 max-w-xl">
              Feedback and outcomes from collaboration, development work, and real project contributions.
            </p>
          </div>

          {/* arrows (optional UI only) */}
          <div className="flex gap-4">
            <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <MoveLeft />
            </button>

            <button className="size-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
              <MoveRight />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 relative">

            <Quote className="text-[#f47b25] w-8 h-8" />

            <p className="text-slate-700 text-lg leading-relaxed italic">
              "Delivered a well-structured frontend system with React and Next.js.
              Code quality and component reusability were solid throughout the project."
            </p>

            <div className="mt-auto flex items-center gap-4 border-t border-slate-50 pt-6">

              <div className="size-10 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <Building2 className="text-slate-400 w-5 h-5" />
              </div>

              <div>
                <h5 className="font-bold text-slate-900">
                  Team Lead
                </h5>
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  Ductape Technologies
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 relative">

            <Quote className="text-[#f47b25] w-8 h-8" />

            <p className="text-slate-700 text-lg leading-relaxed italic">
              "Demonstrated strong frontend fundamentals while building responsive interfaces
              and assisting in production-ready feature delivery."
            </p>

            <div className="mt-auto flex items-center gap-4 border-t border-slate-50 pt-6">

              <div className="size-10 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <Store className="text-slate-400 w-5 h-5" />
              </div>

              <div>
                <h5 className="font-bold text-slate-900">
                  Mentorship Feedback
                </h5>
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  Everst School
                </p>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 relative">

            <Quote className="text-[#f47b25] w-8 h-8" />

            <p className="text-slate-700 text-lg leading-relaxed italic">
              "Strong understanding of frontend architecture, performance considerations,
              and modern React patterns in real project scenarios."
            </p>

            <div className="mt-auto flex items-center gap-4 border-t border-slate-50 pt-6">

              <div className="size-10 rounded bg-slate-100 flex items-center justify-center shrink-0">
                <Rocket className="text-slate-400 w-5 h-5" />
              </div>

              <div>
                <h5 className="font-bold text-slate-900">
                  Technical Evaluation
                </h5>
                <p className="text-xs text-slate-500 uppercase font-semibold">
                  ALX Africa Program
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
