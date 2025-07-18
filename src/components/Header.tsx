
import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-medium text-foreground">
          lucide con
        </div>
        
        <div className="flex items-center gap-4">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
