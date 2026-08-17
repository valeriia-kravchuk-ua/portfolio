import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Valeriia Kravchuk — Fullstack Developer',
  description:
      'Portfolio of Valeriia Kravchuk — Fullstack Developer specializing in React, Next.js and Node.js.',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
      </html>
  );
}