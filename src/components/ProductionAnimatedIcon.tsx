import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProductionAnimatedIconProps {
  icon: LucideIcon;
  name: string;
  animationType: 'morphing' | 'strokeDraw' | 'orbiting' | 'sequential' | 'glowBurst' | 'multiState';
  size?: number;
  className?: string;
}

type IconState = 'idle' | 'hovered' | 'clicked' | 'active';

// Production-grade easing curves inspired by Linear, Figma, Stripe
const easingCurves = {
  smoothFluid: [0.4, 0, 0.2, 1],
  snappyEntrance: [0.175, 0.885, 0.32, 1.275],
  bouncyExit: [0.68, -0.6, 0.32, 1.6],
  mechanicalFeel: [0.5, 0, 0.5, 1],
  elasticSpring: [0.38, 0.285, 0.67, 1.02]
} as const;

const ProductionAnimatedIcon: React.FC<ProductionAnimatedIconProps> = ({
  icon: Icon,
  name,
  animationType,
  size = 32,
  className = ""
}) => {
  const [iconState, setIconState] = useState<IconState>('idle');
  const [isToggled, setIsToggled] = useState(false);
  const controls = useAnimation();
  const burstControls = useAnimation();

  const handleClick = async () => {
    setIconState('clicked');
    
    // Subtle click feedback - Carbon Design inspired
    await controls.start({
      scale: 0.96,
      transition: { duration: 0.1, ease: easingCurves.smoothFluid }
    });
    
    await controls.start({
      scale: 1,
      transition: { duration: 0.15, ease: easingCurves.smoothFluid }
    });

    // For toggle icons, trigger minimal special effects
    if (animationType === 'morphing' || animationType === 'glowBurst') {
      setIsToggled(!isToggled);
    }
    
    setIconState('idle');
  };

  // Get hover animation properties - Carbon Design System inspired: subtle, purposeful
  const getHoverAnimation = () => {
    switch (animationType) {
      case 'morphing':
        return {
          scale: 1.03,
          transition: { duration: 0.15, ease: easingCurves.smoothFluid }
        };
      case 'strokeDraw':
        return {
          scale: 1.02,
          transition: { duration: 0.15, ease: easingCurves.smoothFluid }
        };
      case 'orbiting':
        return {
          scale: 1.02,
          transition: { duration: 0.15, ease: easingCurves.smoothFluid }
        };
      case 'sequential':
        return {
          scale: 1.02,
          y: -1,
          transition: { duration: 0.15, ease: easingCurves.smoothFluid }
        };
      case 'glowBurst':
        return {
          scale: 1.03,
          transition: { duration: 0.15, ease: easingCurves.smoothFluid }
        };
      case 'multiState':
        return {
          scale: 1.02,
          transition: { duration: 0.15, ease: easingCurves.smoothFluid }
        };
      default:
        return {
          scale: 1.02,
          transition: { duration: 0.15, ease: easingCurves.smoothFluid }
        };
    }
  };

  // Stroke draw animation for path-based icons
  const StrokeDrawPath = () => {
    if (animationType !== 'strokeDraw') return null;
    
    return (
      <motion.div
        className="absolute inset-0"
        initial={{ pathLength: 0 }}
        animate={{ 
          pathLength: iconState === 'hovered' || isToggled ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: easingCurves.smoothFluid }}
      />
    );
  };

  // Orbiting dots for activity indication
  const OrbitingDots = () => {
    if (animationType !== 'orbiting') return null;
    
    const isActive = iconState === 'hovered' || isToggled;
    
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-1.5 h-1.5 bg-accent/60 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: `${size/2 + 12}px 0px`
            }}
            animate={{
              rotate: isActive ? 360 : 0,
              scale: isActive ? [1, 1.2, 1] : 1
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: isActive ? Infinity : 0,
                ease: 'linear',
                delay: index * 0.5
              },
              scale: {
                duration: 1.5,
                repeat: isActive ? Infinity : 0,
                ease: easingCurves.smoothFluid,
                delay: index * 0.3
              }
            }}
          />
        ))}
      </div>
    );
  };

  // Sequential bounce for multi-part icons
  const SequentialElements = () => {
    if (animationType !== 'sequential') return null;
    
    const isActive = iconState === 'hovered' || iconState === 'clicked';
    
    return (
      <>
        {/* Arrow element */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: isActive ? 3 : 0,
            y: isActive ? -2 : 0
          }}
          transition={{
            duration: 0.3,
            ease: easingCurves.elasticSpring,
            delay: 0.05
          }}
        />
        
        {/* Tray element */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            y: isActive ? 2 : 0
          }}
          transition={{
            duration: 0.3,
            ease: easingCurves.elasticSpring,
            delay: 0.1
          }}
        />
      </>
    );
  };

  // Glow burst with particles
  const GlowBurst = () => {
    if (animationType !== 'glowBurst') return null;
    
    return (
      <>
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/20 blur-md"
          animate={burstControls}
          initial={{ scale: 0, opacity: 0 }}
        />
        
        {/* Particle burst */}
        {isToggled && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1.2, 0],
                  opacity: [1, 0.8, 0],
                  x: [0, Math.cos(index * 45 * Math.PI / 180) * 25],
                  y: [0, Math.sin(index * 45 * Math.PI / 180) * 25]
                }}
                transition={{
                  duration: 0.8,
                  ease: easingCurves.bouncyExit,
                  delay: index * 0.08
                }}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  // Multi-state flow with progressive enhancement
  const MultiStateFlow = () => {
    if (animationType !== 'multiState') return null;
    
    return (
      <motion.div
        className="absolute inset-0 border-2 border-accent/30 rounded-full"
        animate={{
          scale: iconState === 'hovered' ? 1.2 : iconState === 'clicked' ? 1.4 : 1,
          opacity: iconState === 'hovered' || iconState === 'clicked' ? 0.6 : 0
        }}
        transition={{
          duration: 0.3,
          ease: easingCurves.smoothFluid
        }}
      />
    );
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <motion.div
        className="relative cursor-pointer select-none"
        animate={controls}
        onHoverStart={() => setIconState('hovered')}
        onHoverEnd={() => setIconState('idle')}
        onClick={handleClick}
        whileHover={getHoverAnimation()}
        style={{ transformOrigin: 'center' }}
      >
        <Icon 
          size={size} 
          strokeWidth={1.5}
          className={`transition-colors duration-200 ${
            isToggled && (animationType === 'morphing' || animationType === 'glowBurst') 
              ? 'fill-accent text-accent' 
              : 'text-foreground'
          }`}
        />
        
        <StrokeDrawPath />
        <OrbitingDots />
        <SequentialElements />
        <GlowBurst />
        <MultiStateFlow />
      </motion.div>
    </div>
  );
};

export default ProductionAnimatedIcon;