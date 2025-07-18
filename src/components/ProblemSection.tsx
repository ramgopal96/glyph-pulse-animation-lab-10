import React from 'react';

const ProblemSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
          The Problem That Wouldn't Go Away
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            During my internship at a fast-growing tech company, I witnessed something that initially seemed like a small inefficiency but revealed itself as a massive workflow bottleneck. Design teams were trapped in what I call the "micro-interaction maze"—spending disproportionate amounts of time recreating basic animated elements that should have been standardized building blocks.
          </p>
          
          <p>
            The situation became crystal clear during a sprint planning meeting when our lead designer mentioned that implementing consistent button hover states across three different projects had consumed nearly two full days of work. The challenge wasn't just the time investment; it was the ripple effect. Inconsistent animations created jarring user experiences, developers received unclear specifications, and design handoffs became lengthy back-and-forth discussions about timing curves and animation details.
          </p>
          
          <p>
            This presented me with a compelling design challenge: <strong className="text-foreground">How might we transform repetitive micro-interaction creation into a seamless, standardized process that preserves creative freedom while dramatically reducing implementation time?</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;