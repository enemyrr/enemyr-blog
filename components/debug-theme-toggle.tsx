'use client';

import { useState, useEffect } from 'react';

export function DebugThemeToggle() {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('dark', 'light');
    if (theme === 'dark') {
      html.classList.add('dark');
    } else if (theme === 'light') {
      html.classList.add('light');
    }
  }, [theme]);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 flex gap-1 bg-black/80 text-white p-2 rounded-lg text-xs font-mono z-50">
      <button
        onClick={() => setTheme('system')}
        className={`px-2 py-1 rounded ${theme === 'system' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
      >
        System
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`px-2 py-1 rounded ${theme === 'light' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-2 py-1 rounded ${theme === 'dark' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
      >
        Dark
      </button>
    </div>
  );
}
