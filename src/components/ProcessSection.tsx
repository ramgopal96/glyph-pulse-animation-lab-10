import React from 'react';

const ProcessSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
          Tools and Process: Building with Purpose
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            The development of SFcon required a carefully orchestrated combination of design and development tools, each serving a specific purpose in the creation pipeline. <strong className="text-foreground">Figma</strong> served as the primary design environment, where I could rapidly prototype interaction concepts and maintain a living library of components that other designers could access immediately.
          </p>
          
          <p>
            <strong className="text-foreground">Adobe Illustrator</strong> handled the precision work of path optimization and SVG preparation, ensuring that every icon maintained crisp edges and minimal file sizes. The development phase relied heavily on <strong className="text-foreground">CSS3 animations</strong> combined with SVG capabilities, creating a hybrid approach that leveraged the strengths of both technologies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">Design Phase</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Figma for rapid prototyping</li>
                <li>• Adobe Illustrator for precision work</li>
                <li>• SVG optimization and preparation</li>
                <li>• Cross-platform testing</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">Development Phase</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• CSS3 animation implementation</li>
                <li>• Performance optimization</li>
                <li>• Browser compatibility testing</li>
                <li>• Documentation creation</li>
              </ul>
            </div>
          </div>
          
          <p>
            Testing became a crucial component of the process, involving systematic evaluation across multiple browsers, devices, and implementation contexts. This comprehensive testing phase revealed edge cases and performance considerations that informed the final optimization strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;