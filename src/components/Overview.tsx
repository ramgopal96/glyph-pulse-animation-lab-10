
import React from 'react';
import { Target, Clock, Users, Zap } from 'lucide-react';

const overviewCards = [
  {
    icon: Target,
    title: 'Objective',
    description: 'Create a comprehensive icon library with built-in micro-animations for consistent UI experiences.'
  },
  {
    icon: Clock,
    title: 'Timeline',
    description: '3 months during internship, from research to final implementation and team adoption.'
  },
  {
    icon: Users,
    title: 'Impact',
    description: 'Adopted by 3 internal teams, reducing icon implementation time by 80%.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'First animated icon library in the company with standardized timing and easing.'
  }
];

const Overview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-foreground mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming how design teams implement micro-interactions through a comprehensive, 
              ready-to-use icon library.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewCards.map((card, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#f06a6a]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#f06a6a]/20 transition-colors">
                    <card.icon className="w-6 h-6 text-[#f06a6a]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
