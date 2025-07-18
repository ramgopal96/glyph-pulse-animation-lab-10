
import React from 'react';
import { AlertCircle, Repeat, Clock } from 'lucide-react';

const Challenge = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-20 items-center">
            {/* Text Content - 60% */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-semibold text-foreground mb-8">
                The Challenge
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-[#f06a6a]" />
                    Situation
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-[600px]">
                    During my internship, I observed that design teams repeatedly spent time creating 
                    basic micro-interactions for common UI elements, leading to inconsistent animations 
                    across projects and slower design-to-development handoffs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4 flex items-center gap-3">
                    <Repeat className="w-5 h-5 text-[#f06a6a]" />
                    Task
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-[600px]">
                    Create a comprehensive, ready-to-use icon library with built-in micro-animations 
                    that could be easily integrated into existing design systems and development workflows.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual Content - 40% */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-8 border border-red-100 dark:border-red-800/30">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-red-600 dark:text-red-400">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Time Wasted</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-red-700 dark:text-red-300">Icon Creation</span>
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">40%</span>
                    </div>
                    <div className="w-full bg-red-200 dark:bg-red-800/30 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[40%]"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-red-700 dark:text-red-300">Animation Coding</span>
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">35%</span>
                    </div>
                    <div className="w-full bg-red-200 dark:bg-red-800/30 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[35%]"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-red-700 dark:text-red-300">Inconsistencies</span>
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">25%</span>
                    </div>
                    <div className="w-full bg-red-200 dark:bg-red-800/30 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[25%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
