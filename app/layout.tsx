import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Samuel Sylvester | Frontend Engineer',
  description:
    'Frontend Engineer specializing in React, Next.js, TypeScript, and scalable web applications.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Web Developer',
    'Software Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Samuel Sylvester' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#f8f7f5] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
