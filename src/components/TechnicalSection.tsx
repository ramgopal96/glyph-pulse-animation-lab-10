import React from 'react';

const TechnicalSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
          The Technical Foundation: Crafting Performance-First Animations
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            The success of SFcon depended on solving a fundamental challenge in web animation: creating visually engaging micro-interactions that never compromised performance. Through extensive experimentation, I discovered that the most effective approach involved constraining animations to properties that browsers could optimize efficiently.
          </p>
          
          <p>
            My animation system relied on three core techniques that became the foundation of every SFcon component. <strong className="text-foreground">Transform-based animations</strong> handled all movement and scaling effects, ensuring smooth sixty-frames-per-second performance by leveraging hardware acceleration. <strong className="text-foreground">Opacity transitions</strong> managed all fade effects, providing elegant state changes without triggering expensive repaints.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 my-8 font-mono text-sm">
            <div className="text-muted-foreground mb-2">/* Example: The SFcon Heart Icon System */</div>
            <div className="text-foreground space-y-1">
              <div>&lt;svg class="sfcon-heart" viewBox="0 0 24 24"&gt;</div>
              <div className="pl-4">&lt;path d="M12 21.35l-1.45-1.32C5.4..." class="heart-path"/&gt;</div>
              <div className="pl-4">&lt;circle cx="12" cy="12" r="0" class="heart-pulse"/&gt;</div>
              <div>&lt;/svg&gt;</div>
            </div>
          </div>
          
          <p>
            <strong className="text-foreground">Strategic timing functions</strong>, specifically custom cubic-bezier curves, created natural motion that felt responsive without appearing mechanical. The accompanying CSS defined interaction states that could be triggered through simple class modifications, making implementation as straightforward as copying and pasting code while maintaining sophisticated animation behavior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;