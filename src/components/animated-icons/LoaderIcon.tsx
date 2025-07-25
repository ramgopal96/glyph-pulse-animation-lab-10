import React from 'react';
import { motion } from 'framer-motion';

interface LoaderIconProps {
  className?: string;
  size?: number;
  isLoading?: boolean;
}

const LoaderIcon: React.FC<LoaderIconProps> = ({ 
  className = "", 
  size = 24, 
  isLoading = true 
}) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      animate={{ rotate: isLoading ? 360 : 0 }}
      transition={{
        duration: 1,
        repeat: isLoading ? Infinity : 0,
        ease: "linear"
      }}
    >
      <motion.path
        d="M21 12a9 9 0 1 1-6.219-8.56"
        animate={{
          pathLength: isLoading ? [0, 1] : 1
        }}
        transition={{
          duration: 1.5,
          repeat: isLoading ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      {isLoading && (
        <motion.g>
          {/* Orbital dots */}
          {[...Array(3)].map((_, i) => (
            <motion.circle
              key={i}
              cx={12}
              cy={3}
              r={1}
              fill="currentColor"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transformOrigin: '12px 12px' }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default LoaderIcon;