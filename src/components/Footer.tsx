
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            crafted using lucide. influenced by thoughtful motion design.
          </p>
          <p className="text-sm text-muted-foreground">
            created by{' '}
            <a 
              href="https://www.linkedin.com/in/ramgopal96/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:underline font-medium"
            >
              ramgopal
            </a>
          </p>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-2">
              ready to elevate your design workflow?
            </p>
            <a 
              href="https://www.linkedin.com/in/ramgopal96/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-background bg-foreground rounded-md hover:bg-foreground/90 transition-colors"
            >
              connect with me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
