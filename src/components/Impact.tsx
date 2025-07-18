
import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, Award } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    number: 80,
    suffix: '%',
    label: 'Faster Implementation',
    description: 'Reduction in icon implementation time for design teams'
  },
  {
    icon: Users,
    number: 3,
    suffix: '',
    label: 'Teams Adopted',
    description: 'Internal teams using the library during internship'
  },
  {
    icon: Clock,
    number: 100,
    suffix: '+',
    label: 'Icons Created',
    description: 'Handcrafted icons with micro-interactions'
  },
  {
    icon: Award,
    number: 95,
    suffix: '%',
    label: 'Consistency Score',
    description: 'Improved design consistency across projects'
  }
];

const CounterAnimation = ({ target, suffix }: { target: number, suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-5xl font-bold text-[#f06a6a]">
      {count}{suffix}
    </span>
  );
};

const Impact = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              The Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The SFcon Icon Library delivered measurable improvements in design workflow efficiency, 
              consistency, and user experience across multiple teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-200 hover:scale-[1.02] text-center group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#f06a6a]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f06a6a]/20 transition-colors">
                    <metric.icon className="w-8 h-8 text-[#f06a6a]" />
                  </div>
                  <CounterAnimation target={metric.number} suffix={metric.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {metric.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Impact Details */}
          <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-green-100 dark:border-green-800/30">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Design Impact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Eliminated redundant icon creation work</li>
                  <li>• Standardized micro-interaction patterns</li>
                  <li>• Improved design-dev handoff process</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technical Impact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reduced custom animation coding</li>
                  <li>• Enhanced user experience consistency</li>
                  <li>• Improved application performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
