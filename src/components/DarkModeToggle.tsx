
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-3">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};

export default DarkModeToggle;
