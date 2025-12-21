import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Andreas Enemyr',
    template: '%s | Andreas Enemyr'
  },
  description: 'My portfolio, blog, and personal website.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <body className="antialiased tracking-tight">
        <div className="h-dvh flex flex-col pt-8 p-8 bg-[#1A1A1A] text-zinc-200">
          <main className="flex-1 flex flex-col w-full max-w-[650px] mx-auto mt-0 md:mt-16">
            {children}
          </main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}

