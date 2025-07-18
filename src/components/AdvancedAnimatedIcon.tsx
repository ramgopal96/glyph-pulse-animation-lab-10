import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AdvancedAnimatedIconProps {
  icon: LucideIcon;
  name: string;
  animationType: 'morphing' | 'strokeDraw' | 'orbiting' | 'sequential' | 'glowBurst' | 'multiState';
  size?: number;
  className?: string;
  onClick?: () => void;
  onStateChange?: (state: IconState) => void;
}

type IconState = 'idle' | 'hovered' | 'active' | 'success' | 'error';

const AdvancedAnimatedIcon: React.FC<AdvancedAnimatedIconProps> = ({
  icon: Icon,
  name,
  animationType,
  size = 32,
  className = "",
  onClick,
  onStateChange
}) => {
  const [iconState, setIconState] = useState<IconState>('idle');
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();

  const handleStateChange = (newState: IconState) => {
    setIconState(newState);
    onStateChange?.(newState);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleStateChange(isClicked ? 'idle' : 'active');
    onClick?.();
  };

  // Get animation properties based on state and type
  const getAnimateProps = () => {
    const baseProps = { scale: 1, rotate: 0, y: 0, x: 0 };
    
    switch (iconState) {
      case 'hovered':
        switch (animationType) {
          case 'morphing':
            return { scale: 1.05 };
          case 'strokeDraw':
            return { scale: 1.05, pathLength: 1 };
          case 'sequential':
            return { scale: 1.05, y: -2 };
          case 'multiState':
            return { scale: 1.05, rotate: 5 };
          default:
            return { scale: 1.05 };
        }
      
      case 'active':
        switch (animationType) {
          case 'morphing':
            return { scale: 1.15, rotate: 2 };
          case 'strokeDraw':
            return { scale: 1.1, pathLength: 1 };
          case 'sequential':
            return { scale: 1.2, y: -8 };
          case 'multiState':
            return { x: 20, scale: 0.8 };
          default:
            return { scale: 1.1 };
        }
      
      default:
        return baseProps;
    }
  };

  // Get transition properties
  const getTransition = () => {
    switch (animationType) {
      case 'morphing':
        return { 
          type: "spring" as const, 
          stiffness: 400, 
          damping: 25
        };
      case 'strokeDraw':
        return { 
          duration: 0.4
        };
      case 'sequential':
        return { 
          type: "spring" as const, 
          stiffness: 300, 
          damping: 20 
        };
      case 'multiState':
        return { 
          duration: 0.8
        };
      default:
        return { 
          type: "spring" as const, 
          stiffness: 400, 
          damping: 25 
        };
    }
  };

  // Wiggle effect for morphing after activation
  const triggerWiggle = () => {
    if (animationType === 'morphing' && iconState === 'active') {
      controls.start({
        rotate: [0, -3, 3, 0],
        transition: { duration: 0.4, ease: "easeInOut" }
      });
    }
  };

  // Orbiting elements for certain animation types
  const OrbitingElements = () => {
    if (animationType !== 'orbiting') return null;
    
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: `${size/2 + 8}px 0px`
            }}
            animate={{
              rotate: iconState === 'hovered' || iconState === 'active' ? 360 : 0
            }}
            transition={{
              duration: 2,
              repeat: iconState === 'hovered' || iconState === 'active' ? Infinity : 0,
              ease: 'linear',
              delay: index * 0.3
            }}
          />
        ))}
      </div>
    );
  };

  // Glow burst effect
  const GlowBurst = () => {
    if (animationType !== 'glowBurst' || iconState !== 'active') return null;
    
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, index) => (
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
              scale: [0, 1, 0],
              opacity: [1, 0.8, 0],
              x: [0, Math.cos(index * 60 * Math.PI / 180) * 30],
              y: [0, Math.sin(index * 60 * Math.PI / 180) * 30]
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: index * 0.1
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <motion.div
        className="relative cursor-pointer"
        animate={getAnimateProps()}
        transition={getTransition()}
        onHoverStart={() => handleStateChange('hovered')}
        onHoverEnd={() => iconState !== 'active' && handleStateChange('idle')}
        onClick={handleClick}
        onAnimationComplete={triggerWiggle}
        style={{ transformOrigin: 'center' }}
      >
        <Icon 
          size={size} 
          strokeWidth={1.5}
          className="transition-colors duration-200"
        />
        
        <OrbitingElements />
        <GlowBurst />
      </motion.div>
    </div>
  );
};

export default AdvancedAnimatedIcon;