import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { DebugThemeToggle } from '@/components/debug-theme-toggle';

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
    <html lang="en" className={inter.className}>
      <body className="antialiased tracking-tight">
        <div className="h-dvh flex flex-col pt-8 p-8 bg-background text-foreground">
          <main className="flex-1 flex flex-col w-full max-w-[650px] mx-auto mt-0 md:mt-16">
            {children}
          </main>
          <Analytics />
          {process.env.NODE_ENV === 'development' && <DebugThemeToggle />}
        </div>
      </body>
    </html>
  );
}

