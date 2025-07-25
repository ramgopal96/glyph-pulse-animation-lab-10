import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PlusIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const PlusIcon: React.FC<PlusIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.path
        d="M5 12h14"
        initial={{ pathLength: 0 }}
        animate={{ 
          pathLength: 1,
          rotate: isHovered ? [0, 5, -5, 0] : 0
        }}
        transition={{ 
          pathLength: { duration: 0.3 },
          rotate: { duration: 0.5, ease: "easeInOut" }
        }}
      />
      <motion.path
        d="m12 5v14"
        initial={{ pathLength: 0 }}
        animate={{ 
          pathLength: 1,
          rotate: isHovered ? [0, -5, 5, 0] : 0
        }}
        transition={{ 
          pathLength: { duration: 0.3, delay: 0.1 },
          rotate: { duration: 0.5, ease: "easeInOut", delay: 0.1 }
        }}
      />
      {isHovered && (
        <motion.circle
          cx={12}
          cy={12}
          r={10}
          fill="none"
          stroke="currentColor"
          strokeWidth={0.5}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.svg>
  );
};

export default PlusIcon;