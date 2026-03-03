import Link from 'next/link'
import { CodeBracketIcon, Bars3Icon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-20 py-4 sticky top-0 bg-[#f8f7f5]/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <div className="size-8 bg-[#f47b25] rounded-lg flex items-center justify-center text-white">
          <CodeBracketIcon className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-tight">9tarxPortfolio</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-10">
        <div className="flex items-center gap-8">
          <Link href="#work" className="text-sm font-medium hover:text-[#f47b25] transition-colors">
            Work
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-[#f47b25] transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-[#f47b25] transition-colors">
            About
          </Link>
        </div>
        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-[#f47b25] text-white text-sm font-bold shadow-lg shadow-[#f47b25]/20 hover:scale-105 transition-transform">
          <span className="truncate">Get a Quote</span>
        </button>
      </div>
      <div className="md:hidden">
        <Bars3Icon className="h-6 w-6" />
      </div>
    </header>
  )
}