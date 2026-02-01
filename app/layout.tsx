import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { DebugThemeToggle } from '@/components/debug-theme-toggle';
import { AISidebarProvider } from '@/lib/ai-sidebar-context';
import { AISidebar } from '@/components/ai-sidebar';

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
        <AISidebarProvider>
          <div className="flex min-h-dvh">
            {/* Main content area */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 bg-background text-foreground">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
                <aside className="md:sticky md:top-12 md:self-start shrink-0">
                  <div className="flex flex-col">
                    <a href="/" className="font-medium text-foreground hover:text-foreground/80">
                      Andreas Enemyr
                    </a>
                    <span className="text-muted-foreground text-sm">
                      Stockholm, Sweden
                    </span>
                  </div>
                </aside>
                <main className="flex-1 max-w-[650px] pb-8 [&>*:first-child]:mt-0">
                  {children}
                </main>
              </div>
              <Analytics />
              {process.env.NODE_ENV === 'development' && <DebugThemeToggle />}
            </div>
            {/* AI Sidebar drawer */}
            <AISidebar />
          </div>
        </AISidebarProvider>
      </body>
    </html>
  );
}

