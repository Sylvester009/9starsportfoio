'use client';

import { Fragment, useState } from 'react';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  Description,
  DialogPanel,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonType?: 'quote' | 'touch';
}

export default function QuoteModal({
  isOpen,
  onClose,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);

      toast.success('Message sent successfully. I’ll get back to you soon.');

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      onClose();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>

        {/* overlay */}
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

        {/* modal wrapper */}
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
              <DialogPanel className="w-full max-w-lg rounded-xl bg-white shadow-2xl border border-white/20">

                {/* HEADER */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-start">

                  <div>
                    <DialogTitle className="text-2xl font-bold text-slate-900">
                      Let’s Connect
                    </DialogTitle>

                    <Description className="text-slate-500 text-sm mt-1">
                      Open to frontend engineering roles, collaborations, and interesting product work.
                    </Description>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-5">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50"
                    />

                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50"
                    />

                  </div>

                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, project, or collaboration..."
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#f47b25] text-white font-bold py-3.5 rounded-lg shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 uppercase">
                    Usually responds within 24–48 hours
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
