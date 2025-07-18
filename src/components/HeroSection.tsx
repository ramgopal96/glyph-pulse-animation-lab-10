import React from 'react';
import { Search, Command, Download, Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 pb-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
          interactive icons that flow. powered by{' '}
          <span className="text-accent font-normal">react</span>.
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          an open-source collection of smooth, animated icons for your projects. 
          feel free to use them, share your feedback, and let's make this library awesome together!
        </p>
        
        <p className="text-sm text-muted-foreground mb-12">
          crafted using{' '}
          <a href="https://lucide.dev/" className="text-accent hover:underline">lucide</a>
          {'. influenced by thoughtful motion design from '}
          <a href="https://www.linkedin.com/in/ramgopal96/" className="text-accent hover:underline">ramgopal</a>
          {'.'}
        </p>
        
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search 1000+ icons..."
            className="pl-12 pr-20 py-4 text-base bg-background border-border focus:border-foreground transition-colors"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;