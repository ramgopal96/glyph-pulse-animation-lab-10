import React from 'react';

const ImpactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-muted/30">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
          Measuring Success: Beyond Time Savings
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            The impact of SFcon extended far beyond the initial goal of reducing design time, though the quantitative results were compelling. Design teams reported implementing icons <strong className="text-foreground">eighty percent faster</strong> than previous workflows, with consistency improvements that eliminated the revision cycles that previously plagued design handoffs.
          </p>
          
          <p>
            However, the most significant outcome was qualitative: SFcon fundamentally changed how teams approached micro-interactions. Instead of treating animations as nice-to-have additions, designers began incorporating purposeful motion from the earliest stages of their design process. This shift elevated the overall quality of user interfaces and created more engaging, professional experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Faster Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">Teams Adopted First Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Handcrafted Icons</div>
            </div>
          </div>
          
          <p>
            Perhaps most importantly, SFcon demonstrated that systematic approaches to common design challenges could unlock creativity rather than constrain it. By removing the friction of implementing basic micro-interactions, designers could focus their energy on higher-level creative problems and user experience innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;