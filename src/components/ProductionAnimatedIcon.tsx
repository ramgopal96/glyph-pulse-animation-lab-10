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

  // Stroke draw animation - tells the story of creation/completion
  const StrokeDrawPath = () => {
    if (animationType !== 'strokeDraw') return null;
    
    const isActive = iconState === 'hovered' || isToggled;
    
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, hsl(var(--accent)) 0%, transparent ${isActive ? '100%' : '0%'})`,
          borderRadius: '50%',
          mask: `radial-gradient(circle at center, transparent 60%, black 62%)`,
          WebkitMask: `radial-gradient(circle at center, transparent 60%, black 62%)`
        }}
        animate={{
          rotate: isActive ? 360 : 0,
          opacity: isActive ? 0.6 : 0
        }}
        transition={{ 
          rotate: { duration: 1.2, ease: 'linear' },
          opacity: { duration: 0.3, ease: easingCurves.smoothFluid }
        }}
      />
    );
  };

  // Orbiting elements - stories of process and activity
  const OrbitingDots = () => {
    if (animationType !== 'orbiting') return null;
    
    const isActive = iconState === 'hovered' || isToggled;
    
    return (
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary orbit ring */}
        <motion.div
          className="absolute inset-0 border border-accent/20 rounded-full"
          animate={{
            scale: isActive ? 1.3 : 1,
            opacity: isActive ? 0.4 : 0
          }}
          transition={{ duration: 0.4, ease: easingCurves.smoothFluid }}
        />
        
        {/* Orbiting particles */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: `${size/2 + 10}px 0px`
            }}
            animate={{
              rotate: isActive ? [0, 360] : 0,
              scale: isActive ? [0.8, 1.2, 0.8] : 0
            }}
            transition={{
              rotate: {
                duration: 2 + index * 0.2,
                repeat: isActive ? Infinity : 0,
                ease: 'linear'
              },
              scale: {
                duration: 1 + index * 0.2,
                repeat: isActive ? Infinity : 0,
                ease: easingCurves.smoothFluid
              }
            }}
          />
        ))}
      </div>
    );
  };

  // Sequential animation - tells stories of flow and direction
  const SequentialElements = () => {
    if (animationType !== 'sequential') return null;
    
    const isActive = iconState === 'hovered' || iconState === 'clicked';
    
    return (
      <>
        {/* Directional flow indicators */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-0.5 h-3 bg-accent/40 rounded-full"
            style={{
              top: '50%',
              left: `${30 + index * 20}%`,
              transformOrigin: 'center'
            }}
            animate={{
              scaleY: isActive ? [0, 1, 0] : 0,
              opacity: isActive ? [0, 0.8, 0] : 0
            }}
            transition={{
              duration: 0.6,
              ease: easingCurves.smoothFluid,
              delay: index * 0.1,
              repeat: isActive ? Infinity : 0,
              repeatDelay: 0.8
            }}
          />
        ))}
        
        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/30 rounded-full overflow-hidden"
          animate={{
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-full bg-accent rounded-full"
            animate={{
              x: isActive ? ['0%', '100%'] : '0%'
            }}
            transition={{
              duration: 1.5,
              ease: easingCurves.smoothFluid,
              repeat: isActive ? Infinity : 0
            }}
          />
        </motion.div>
      </>
    );
  };

  // Glow burst - stories of energy and activation
  const GlowBurst = () => {
    if (animationType !== 'glowBurst') return null;
    
    const isActive = iconState === 'hovered' || isToggled;
    
    return (
      <>
        {/* Core energy glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: isActive ? [1, 1.4, 1.2] : 1,
            opacity: isActive ? [0, 0.8, 0.4] : 0
          }}
          transition={{
            duration: 0.6,
            ease: easingCurves.smoothFluid,
            repeat: isActive ? Infinity : 0,
            repeatType: 'reverse'
          }}
        />
        
        {/* Energy rings */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 border border-accent/20 rounded-full"
            animate={{
              scale: isActive ? [1, 1.5 + index * 0.2] : 1,
              opacity: isActive ? [0.6, 0] : 0
            }}
            transition={{
              duration: 1 + index * 0.2,
              ease: easingCurves.smoothFluid,
              delay: index * 0.15,
              repeat: isActive ? Infinity : 0
            }}
          />
        ))}
        
        {/* Activation particles */}
        {isToggled && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-0.5 h-0.5 bg-accent rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.6, 0],
                  x: [0, Math.cos(index * 30 * Math.PI / 180) * (20 + Math.random() * 10)],
                  y: [0, Math.sin(index * 30 * Math.PI / 180) * (20 + Math.random() * 10)]
                }}
                transition={{
                  duration: 0.8 + Math.random() * 0.4,
                  ease: easingCurves.bouncyExit,
                  delay: index * 0.05
                }}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  // Multi-state flow - stories of state transitions and feedback
  const MultiStateFlow = () => {
    if (animationType !== 'multiState') return null;
    
    const getStateColor = () => {
      switch (iconState) {
        case 'hovered': return 'hsl(var(--accent) / 0.3)';
        case 'clicked': return 'hsl(var(--accent) / 0.5)';
        case 'active': return 'hsl(var(--accent) / 0.7)';
        default: return 'transparent';
      }
    };
    
    return (
      <>
        {/* State indicator ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: getStateColor() }}
          animate={{
            scale: iconState === 'hovered' ? 1.15 : iconState === 'clicked' ? 1.25 : 1,
            rotate: iconState === 'clicked' ? [0, 180, 360] : 0
          }}
          transition={{
            scale: { duration: 0.2, ease: easingCurves.smoothFluid },
            rotate: { duration: 0.6, ease: easingCurves.mechanicalFeel }
          }}
        />
        
        {/* Progress segments */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: `0 -${size/2 + 8}px`
            }}
            animate={{
              rotate: index * 90,
              scale: iconState === 'hovered' || iconState === 'clicked' ? 1 : 0.3,
              opacity: iconState === 'hovered' || iconState === 'clicked' ? 0.8 : 0.2
            }}
            transition={{
              duration: 0.3,
              ease: easingCurves.smoothFluid,
              delay: index * 0.05
            }}
          />
        ))}
      </>
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
        <motion.div
          animate={{
            scale: animationType === 'morphing' && isToggled ? [1, 1.1, 1] : 1,
            rotate: animationType === 'morphing' && iconState === 'clicked' ? [0, -2, 2, 0] : 0
          }}
          transition={{
            scale: { duration: 0.4, ease: easingCurves.elasticSpring },
            rotate: { duration: 0.3, ease: easingCurves.smoothFluid }
          }}
        >
          <Icon 
            size={size} 
            strokeWidth={1.5}
            className={`transition-all duration-300 ${
              isToggled && (animationType === 'morphing' || animationType === 'glowBurst') 
                ? 'fill-accent text-accent drop-shadow-sm' 
                : 'text-foreground'
            } ${
              iconState === 'hovered' ? 'drop-shadow-sm' : ''
            }`}
          />
        </motion.div>
        
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