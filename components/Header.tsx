"use client";

import Link from 'next/link';
import { CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'quote' | 'touch'>('quote');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openQuoteModal = () => {
    setModalType('quote');
    setIsModalOpen(true);
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 md:px-20 py-4 sticky top-0 bg-[#f8f7f5]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-[#f47b25] rounded-lg flex items-center justify-center text-white">
            <CodeBracketIcon className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">
            9tarxPortfolio
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-10">
          <div className="flex items-center gap-8">
            <Link
              href="#work"
              className="text-sm font-medium hover:text-[#f47b25] transition-colors"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-[#f47b25] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#f47b25] transition-colors"
            >
              About
            </Link>
          </div>
          <button
            className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-[#f47b25] text-white text-sm font-bold shadow-lg shadow-[#f47b25]/20 hover:scale-105 transition-transform active:scale-95"
            onClick={openQuoteModal}
          >
            <span className="truncate">Get in Touch</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-[#f8f7f5] z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '72px' }} // Adjust based on your header height
      >
        <div className="flex flex-col h-full p-8 pt-12">
          <nav className="flex flex-col gap-8 text-center">
            <Link
              href="#work"
              onClick={handleLinkClick}
              className="text-2xl font-medium hover:text-[#f47b25] transition-colors py-4 border-b border-slate-200"
            >
              Work
            </Link>
            <Link
              href="#services"
              onClick={handleLinkClick}
              className="text-2xl font-medium hover:text-[#f47b25] transition-colors py-4 border-b border-slate-200"
            >
              Services
            </Link>
            <Link
              href="#about"
              onClick={handleLinkClick}
              className="text-2xl font-medium hover:text-[#f47b25] transition-colors py-4 border-b border-slate-200"
            >
              About
            </Link>
          </nav>
          
          <div className="mt-auto pb-16">
            <button
              onClick={openQuoteModal}
              className="w-full cursor-pointer items-center justify-center rounded-lg h-14 px-5 bg-[#f47b25] text-white text-lg font-bold shadow-lg shadow-[#f47b25]/20 hover:scale-105 transition-transform active:scale-95"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonType={modalType}
      />
    </>
  );
}