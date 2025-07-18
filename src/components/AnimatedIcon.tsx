
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  Icon: LucideIcon;
  name: string;
  animation?: 'hover' | 'pulse' | 'rotate' | 'bounce' | 'scale' | 'shake' | 'flip' | 'swing';
  size?: number;
  onClick?: () => void;
}

const animationVariants = {
  hover: {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.05 },
    transition: { 
      type: "spring" as const, 
      stiffness: 400, 
      damping: 25,
      mass: 0.8
    }
  },
  pulse: {
    rest: { scale: 1 },
    hover: { 
      scale: [1, 1.08, 1],
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const,
        times: [0, 0.5, 1]
      }
    },
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  },
  rotate: {
    rest: { rotate: 0 },
    hover: { 
      rotate: 180,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const
      }
    },
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" as const
    }
  },
  bounce: {
    rest: { y: 0 },
    hover: { 
      y: [-4, 0],
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
        times: [0, 1]
      }
    },
    transition: { 
      type: "spring" as const,
      stiffness: 500,
      damping: 15
    }
  },
  scale: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    },
    transition: { 
      type: "spring" as const, 
      stiffness: 400, 
      damping: 25
    }
  },
  shake: {
    rest: { x: 0 },
    hover: { 
      x: [-2, 2, -2, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        times: [0, 0.33, 0.66, 1]
      }
    },
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" as const
    }
  },
  flip: {
    rest: { rotateY: 0 },
    hover: { 
      rotateY: 180,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const
      }
    },
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" as const
    }
  },
  swing: {
    rest: { rotate: 0 },
    hover: { 
      rotate: [0, 10, -8, 0],
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        times: [0, 0.33, 0.66, 1]
      }
    },
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" as const
    }
  }
};

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  Icon, 
  name, 
  animation = 'hover',
  size = 24,
  onClick 
}) => {
  const variant = animationVariants[animation];

  return (
    <motion.div 
      className="flex flex-col items-center gap-3 p-4 cursor-pointer select-none"
      onClick={onClick}
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        variants={{
          rest: variant.rest,
          hover: variant.hover
        }}
        transition={variant.transition}
        className="text-foreground"
        style={{ transformOrigin: "center" }}
      >
        <Icon size={size} strokeWidth={1.5} />
      </motion.div>
      <span className="text-xs text-muted-foreground font-medium text-center leading-tight font-inter">{name}</span>
    </motion.div>
  );
};

export default AnimatedIcon;
