import {Check} from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f8f7f5]" id="services">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#f47b25] font-bold text-sm uppercase tracking-[0.2em]">
            Services &amp; Pricing
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">
            Tailored E-commerce Solutions
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan to launch and scale your online business
            with high-performance tech.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Essential Shop
              </h4>
              <p className="text-slate-500 text-sm">
                For startups needing a solid foundation.
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Custom Next.js setup
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Up to 5 pages
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Stripe payment integration
              </li>
            </ul>
            <button className="w-full py-4 px-6 bg-[#f47b25] text-white font-bold rounded-xl shadow-lg shadow-[#f47b25]/20 hover:scale-[1.02] transition-transform">
              Get Started
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-[#f47b25] shadow-xl relative flex flex-col scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f47b25] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
              Most Popular
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Growth Store
              </h4>
              <p className="text-slate-500 text-sm">For scaling businesses.</p>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Everything in Essential
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Inventory management
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Advanced SEO optimization
              </li>
            </ul>
            <button className="w-full py-4 px-6 bg-[#f47b25] text-white font-bold rounded-xl shadow-lg shadow-[#f47b25]/20 hover:scale-[1.02] transition-transform">
              Get Started
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Enterprise Solution
              </h4>
              <p className="text-slate-500 text-sm">
                Custom solutions for large brands.
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Full headless commerce
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                Custom API integrations
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-[#f47b25] text-xl">
                  <Check />
                </span>
                24/7 Priority support
              </li>
            </ul>
            <button className="w-full py-4 px-6 bg-[#f47b25] text-white font-bold rounded-xl shadow-lg shadow-[#f47b25]/20 hover:scale-[1.02] transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
