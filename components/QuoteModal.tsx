'use client';

import {Fragment, useState} from 'react';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  Description,
  DialogPanel,
} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonType?: 'quote' | 'touch'; // To customize the modal text based on which button was clicked
}

export default function QuoteModal({
  isOpen,
  onClose,
  buttonType = 'quote',
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'growth',
    message: '',
  });

  const [__isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);

      // Show success toast with custom message
      toast.success(
        'Form sent successfully, Someone will reach out to you within 24-48 hours.',
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: 'growth',
        message: '',
      });

      // Close modal
      onClose();
    } catch (error) {
      // Show error toast if something goes wrong
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const {id, value} = e.target;
    setFormData(prev => ({...prev, [id]: value}));
  };

  const modalTitle = buttonType === 'quote' ? 'Get in Touch' : 'Get in Touch';
  const modalDescription =
    buttonType === 'quote'
      ? "Let's connect on your next e-commerce project and discuss how I can help."
      : "Let's connect on your next e-commerce project and discuss how I can help.";

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay with blur */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
        </TransitionChild>

        {/* Modal container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white shadow-2xl border border-white/20 transition-all">
                {/* Header */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-start">
                  <div>
                    <DialogTitle className="text-2xl font-bold text-slate-900">
                      {modalTitle}
                    </DialogTitle>
                    <Description className="text-slate-500 text-sm mt-1">
                      {modalDescription}
                    </Description>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold text-slate-700 uppercase tracking-wider"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#f47b25]/50 focus:border-[#f47b25] outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold text-slate-700 uppercase tracking-wider"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#f47b25]/50 focus:border-[#f47b25] outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-bold text-slate-700 uppercase tracking-wider"
                    >
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="appearance-none w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#f47b25]/50 focus:border-[#f47b25] outline-none transition-all text-sm"
                      >
                        <option value="essential">
                          Essential (Landing Page / Simple Store)
                        </option>
                        <option value="growth">
                          Growth (Scaling Custom Storefront)
                        </option>
                        <option value="enterprise">
                          Enterprise (Headless / Complex Integration)
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold text-slate-700 uppercase tracking-wider"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#f47b25]/50 focus:border-[#f47b25] outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f47b25] hover:bg-[#f47b25]/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-[#f47b25]/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Inquiry</span>
                    <svg
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>

                  <p className="text-[10px] text-center text-slate-400 uppercase tracking-tighter">
                    Typically responds within 24-48 business hours
                  </p>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
