
import React from 'react';
import { Code, Figma, Palette, TestTube } from 'lucide-react';

const tools = [
  {
    category: 'Design',
    items: ['Figma', 'Illustrator'],
    icon: Figma,
    color: 'bg-purple-500/10 text-purple-600'
  },
  {
    category: 'Development',
    items: ['SVG', 'CSS3 Animations'],
    icon: Code,
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    category: 'Testing',
    items: ['Multiple browsers', 'Device testing'],
    icon: TestTube,
    color: 'bg-green-500/10 text-green-600'
  },
  {
    category: 'Documentation',
    items: ['Design system docs', 'Usage guidelines'],
    icon: Palette,
    color: 'bg-orange-500/10 text-orange-600'
  }
];

const TechnicalImplementation = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold text-foreground mb-6">
              Technical Implementation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built with modern web technologies and optimized for performance, 
              scalability, and seamless integration into existing workflows.
            </p>
          </div>

          {/* Code Example */}
          <div className="mb-16 bg-card rounded-xl border border-border overflow-hidden">
            <div className="bg-muted px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">
                Example: Animated Heart Icon
              </h3>
            </div>
            <div className="p-6">
              <pre className="text-sm text-muted-foreground overflow-x-auto">
                <code>{`<!-- Example: Animated Heart Icon -->
<svg class="sfcon-heart" viewBox="0 0 24 24">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
           2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>

<style>
.sfcon-heart {
  transition: all 0.3s ease;
}
.sfcon-heart:hover {
  transform: scale(1.2);
  color: #f06a6a;
}
</style>`}</code>
              </pre>
            </div>
          </div>

          {/* Tools Used */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${tool.color} group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {tool.category}
                </h3>
                <ul className="space-y-1">
                  {tool.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Animation Timing</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Quick interactions: 200ms</li>
                  <li>• Standard transitions: 300ms</li>
                  <li>• Complex animations: 500ms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Easing Functions</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• ease-out for entrances</li>
                  <li>• ease-in for exits</li>
                  <li>• spring for playful interactions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Performance</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Optimized SVG paths</li>
                  <li>• GPU-accelerated transforms</li>
                  <li>• Minimal file sizes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalImplementation;
