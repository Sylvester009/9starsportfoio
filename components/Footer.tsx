import Link from 'next/link'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-10 border-t border-slate-200 text-center text-sm text-slate-500">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo and Copyright */}
        <div className="flex items-center gap-2">
          <div className="size-6 bg-[#f47b25]/20 rounded-md flex items-center justify-center text-[#f47b25]">
            <CodeBracketIcon className="h-4 w-4" />
          </div>
          <span className="font-bold text-slate-900">9tarxPortfolio © 2026</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          <Link href="#" className="hover:text-[#f47b25] transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-[#f47b25] transition-colors">
            GitHub
          </Link>
          <Link href="#" className="hover:text-[#f47b25] transition-colors">
            LinkedIn
          </Link>
        </div>

        {/* Tech Stack */}
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}