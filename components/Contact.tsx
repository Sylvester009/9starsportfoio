'use client';

import Link from 'next/link';
import {useState} from 'react';
import QuoteModal from './QuoteModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'quote' | 'touch'>('touch');

  const openContactModal = () => {
    setModalType('touch');
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="px-6 md:px-20 py-24 mb-20" id="contact">
        <div className="max-w-[1280px] mx-auto bg-slate-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
          {/* Background blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f47b25]/20 blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f47b25]/10 blur-[100px] -ml-32 -mb-32"></div>

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
              Interested in boosting your online sales?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto">
              Let&apos;s discuss your project and how we can build a
              high-performing e-commerce experience for your customers.
            </p>
            <div className="flex justify-center" onClick={openContactModal}>
              <Link
                href="#contact"
                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-16 px-10 bg-[#f47b25] text-white text-lg font-bold shadow-2xl shadow-[#f47b25]/40 hover:scale-105 transition-transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonType={modalType}
      />
    </>
  );
}
