import React from 'react';

const SolutionSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-muted/30">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
          Building the Solution: More Than Just Icons
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Rather than creating another static icon library, I envisioned SFcon as a comprehensive micro-interaction ecosystem. The key insight was that designers needed more than just visual assets—they needed complete interaction patterns that could be implemented with zero additional work.
          </p>
          
          <p>
            My approach centered on three core principles that would differentiate SFcon from existing solutions. First, I focused on creating <strong className="text-foreground">interaction-first designs</strong> rather than treating animations as afterthoughts. Each icon began its life as a micro-interaction, with the static state serving as just one frame in a carefully choreographed motion sequence.
          </p>
          
          <p>
            Second, I prioritized <strong className="text-foreground">seamless integration</strong> by ensuring every component worked flawlessly across design tools and development environments. Finally, I built <strong className="text-foreground">systematic consistency</strong> into every element, from timing curves to color transitions, creating a cohesive language of motion.
          </p>
          
          <p>
            The technical implementation required careful balance between visual appeal and performance optimization. I developed a systematic approach to SVG animation that leveraged CSS transforms and opacity changes rather than complex path manipulations, ensuring smooth performance across devices while maintaining the expressive quality that makes micro-interactions delightful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;