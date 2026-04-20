import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { DebugThemeToggle } from '@/components/debug-theme-toggle';
import { CommandMenu } from '@/components/command-menu';

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
    <html lang="en" className={`${inter.className} light`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-dvh bg-background px-6 py-10 text-foreground md:px-10 md:py-14">
          <div className="mx-auto flex max-w-2xl flex-col gap-10">
            <header className="space-y-1">
              <a href="/" className="text-base font-medium text-foreground">
                Andreas Enemyr
              </a>
              <p className="text-sm text-muted-foreground">Stockholm, Sweden</p>
            </header>
            <main className="[&>*:first-child]:mt-0">{children}</main>
          </div>
          <CommandMenu />
          <Analytics />
          {/**{process.env.NODE_ENV === 'development' && <DebugThemeToggle />}*/}
        </div>
      </body>
    </html>
  );
}
