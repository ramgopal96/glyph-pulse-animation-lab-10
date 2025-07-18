import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import EnhancedIconGrid from '../components/EnhancedIconGrid';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import TechnicalSection from '../components/TechnicalSection';
import ImpactSection from '../components/ImpactSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EnhancedIconGrid />
      
      {/* Interactive Story */}
      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-foreground leading-tight mb-4">
              solving design friction
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              what started as a simple need for animated icons became a systematic solution 
              for design teams everywhere. here's how we built it.
            </p>
          </div>
        </div>
        
        <ProblemSection />
        <SolutionSection />
        <TechnicalSection />
        <ImpactSection />
        <ProcessSection />
        
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
              The Lasting Impact: A New Standard for Design Efficiency
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                SFcon represents more than a successful side project—it demonstrates how systematic thinking can transform everyday design challenges into opportunities for innovation. The project established a new baseline for how design teams approach micro-interactions, proving that efficiency and creativity can coexist when supported by thoughtful systems.
              </p>
              
              <p>
                The success of SFcon has inspired similar systematic approaches to other design challenges within the organization, creating a culture of continuous improvement and shared resource development. This ripple effect suggests that the most valuable design solutions often emerge from addressing seemingly small inefficiencies with systematic, scalable approaches.
              </p>
              
              <p>
                As design teams continue to evolve and user expectations for polished interactions increase, SFcon serves as a model for how individual initiative can drive systemic improvements that benefit entire organizations. The project demonstrates that the most impactful design work often happens not in creating singular masterpieces, but in building the foundations that enable countless future successes.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
