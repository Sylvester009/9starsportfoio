import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="px-6 md:px-20 py-16 md:py-24 max-w-[1280px] mx-auto">
      <div className="@container">
        <div className="flex flex-col gap-10 @[864px]:flex-row items-center">
          <div className="flex flex-col gap-8 @[864px]:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f47b25]/10 text-[#f47b25] text-xs font-bold uppercase tracking-wider w-fit">
                <span className="size-2 rounded-full bg-[#f47b25] animate-pulse"></span>
                Available for Freelance
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
                I build fast, <span className="text-[#f47b25]">conversion-focused</span> Next.js e-commerce websites
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                Helping businesses sell more products online with high-performance web solutions and seamless checkout experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#work"
                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-[#f47b25] text-white text-base font-bold shadow-xl shadow-[#f47b25]/30 hover:bg-[#f47b25]/90 transition-all"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 border-2 border-slate-200 text-base font-bold hover:bg-slate-100 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="w-full @[864px]:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-[#f47b25] to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full aspect-4/3 bg-slate-200 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXuh0bKYADFKvw8jN1IkBXeqnsu8MqwE6ZFeoaelUMRYyUHQTH6_j-xnDWYDqOJ5Lw0efOkYS3DJrulszKZL_9dPxRNI_jo5A7_XwQS9_ZfdzWR8mfBVemnaTa6mtjq-aOEmoCOhoooZfEysRjgQ_YaraQPZT6M_q22Q6DxghQxDTdB7h6k2cPtQOhaNKENlvXnUQzezXOdL8PBgDP14823z-SnK2kSvy30RFRdwvvv8a306e4caBAGCt7SHjMp7MVN05QmUd3N8vW"
                  alt="E-commerce Analytics Dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 864px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}