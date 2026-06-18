"use client";

import Link from "next/link";
import {
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import QuoteModal from "./QuoteModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"quote" | "touch">("quote");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openQuoteModal = () => {
    setModalType("quote");
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/10 backdrop-blur-xl supports-backdrop-filter:bg-white/10">
        <div className="flex items-center justify-between whitespace-nowrap px-6 md:px-20 py-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="size-9 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <CodeBracketIcon className="h-5 w-5" />
            </div>

            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Samuel Sylvester
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-10">
            <nav className="flex items-center gap-8 text-sm font-medium text-slate-700">
              <Link
                href="#projects"
                className="hover:text-orange-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="hover:text-orange-500 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </Link>
            </nav>

            <button
              onClick={openQuoteModal}
              className="ml-6 px-5 h-11 rounded-lg bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition-transform"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white/80 backdrop-blur-xl md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col h-full px-8 py-12">
          <nav className="flex flex-col gap-8 text-center text-lg font-medium text-slate-800">
            <Link
              href="#projects"
              onClick={handleLinkClick}
              className="py-4 border-b border-slate-200 hover:text-orange-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              onClick={handleLinkClick}
              className="py-4 border-b border-slate-200 hover:text-orange-500 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#about"
              onClick={handleLinkClick}
              className="py-4 border-b border-slate-200 hover:text-orange-500 transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="mt-auto pb-16">
            <button
              onClick={openQuoteModal}
              className="w-full h-14 rounded-lg bg-linear-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-transform"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonType={modalType}
      />
    </>
  );
}
