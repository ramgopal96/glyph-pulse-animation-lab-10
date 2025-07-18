import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Heart, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-gradient-to-b from-background via-[#fef7f0] dark:via-card to-background">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-foreground mb-6 tracking-[-0.03em] leading-tight font-inter">
              Interactive icons that flow.<br />
              <span className="text-[#f06a6a]">Powered by React.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto font-inter">
              An open-source collection of smooth, animated icons for your projects. Feel free to use them, share your feedback, and let's make this library awesome together!
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 text-muted-foreground font-medium font-inter">
                <span>Crafted using</span>
                <span className="text-[#f06a6a] font-semibold">Lucide</span>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>Influenced by thoughtful motion design</span>
              </div>
              <div className="inline-flex items-center gap-2 text-muted-foreground font-medium font-inter">
                <span>By</span>
                <a 
                  href="https://linkedin.com/in/ramgopal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#f06a6a] font-semibold hover:text-[#e55555] transition-colors duration-200 hover:underline"
                >
                  ramgopal
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-32 left-20 text-[#f06a6a]/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Heart size={40} />
        </motion.div>
        
        <motion.div 
          className="absolute top-24 right-32 text-blue-500/20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 10, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Star size={32} />
        </motion.div>
        
        <motion.div 
          className="absolute top-60 left-1/4 text-purple-500/20"
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Sparkles size={28} />
        </motion.div>
        
        <motion.div 
          className="absolute top-48 right-1/4 text-green-500/20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 15, -15, 0] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Zap size={36} />
        </motion.div>

        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#f06a6a]/10 to-[#f06a6a]/5 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/5 rounded-full blur-xl"
          animate={{ 
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5 
          }}
        />

        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full text-foreground" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div 
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f06a6a]/20 to-transparent"
          animate={{ 
            opacity: [0, 0.5, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          animate={{ 
            opacity: [0, 0.3, 0] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3 
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
