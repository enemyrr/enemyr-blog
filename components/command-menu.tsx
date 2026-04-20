'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command';

type Item = {
  label: string;
  href: string;
  keywords?: string[];
  external?: boolean;
};

const pages: Item[] = [
  { label: 'Home', href: '/', keywords: ['start', 'index'] },
  { label: 'Bio', href: '/bio', keywords: ['about', 'me'] },
  { label: 'Resume', href: '/resume', keywords: ['cv'] }
];

const projects: Item[] = [
  { label: 'sajn', href: '/sajn', keywords: ['signing'] },
  { label: 'KORALL', href: '/korall', keywords: ['ai', 'product visuals'] },
  { label: 'Kvitty', href: '/kvitty', keywords: ['bookkeeping'] },
  { label: 'RIBBAN', href: '/ribban', keywords: ['ecommerce', 'agency'] }
];

const writing: Item[] = [
  { label: 'Sales for Engineers', href: '/sales' },
  { label: 'Writing a Good Prompt', href: '/prompts' },
  { label: 'Headless Commerce', href: '/ecommerce' },
  { label: 'Being Kind', href: '/kindness' },
  { label: 'Iterative Building', href: '/building' },
  { label: 'Endurance & Discipline', href: '/running' }
];

const external: Item[] = [
  { label: 'GitHub', href: 'https://github.com/enemyrr', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andreasenemyr/', external: true },
  { label: 'Email', href: 'mailto:andreas@enemyr.com', external: true }
];

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const go = React.useCallback(
    (item: Item) => {
      setOpen(false);
      if (item.external) {
        window.open(item.href, item.href.startsWith('mailto:') ? '_self' : '_blank');
      } else {
        router.push(item.href);
      }
    },
    [router]
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-2.5 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Open navigator"
      >
        <span>Navigate</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Navigator" description="Jump to a page.">
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.label} ${item.keywords?.join(' ') ?? ''}`}
                onSelect={() => go(item)}
              >
                {item.label}
                <CommandShortcut>{item.href}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.label} ${item.keywords?.join(' ') ?? ''}`}
                onSelect={() => go(item)}
              >
                {item.label}
                <CommandShortcut>{item.href}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Writing">
            {writing.map((item) => (
              <CommandItem key={item.href} value={item.label} onSelect={() => go(item)}>
                {item.label}
                <CommandShortcut>{item.href}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Elsewhere">
            {external.map((item) => (
              <CommandItem key={item.href} value={item.label} onSelect={() => go(item)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
