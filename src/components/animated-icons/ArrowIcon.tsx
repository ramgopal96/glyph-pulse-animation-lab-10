import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ArrowIconProps {
  className?: string;
  size?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  onClick?: () => void;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ 
  className = "", 
  size = 24, 
  direction = 'right',
  onClick 
}) => {
  const [isMoving, setIsMoving] = useState(false);

  const handleClick = () => {
    setIsMoving(true);
    onClick?.();
    setTimeout(() => setIsMoving(false), 1000);
  };

  const getRotation = () => {
    switch (direction) {
      case 'up': return -90;
      case 'down': return 90;
      case 'left': return 180;
      default: return 0;
    }
  };

  const getMoveDirection = () => {
    switch (direction) {
      case 'up': return { x: 0, y: -5 };
      case 'down': return { x: 0, y: 5 };
      case 'left': return { x: -5, y: 0 };
      default: return { x: 5, y: 0 };
    }
  };

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
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ rotate: getRotation() }}
    >
      <motion.line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        animate={{
          ...getMoveDirection(),
          pathLength: isMoving ? [1, 0.5, 1] : 1
        }}
        transition={{ 
          x: { duration: 0.6, repeat: isMoving ? 2 : 0, repeatType: "reverse" },
          y: { duration: 0.6, repeat: isMoving ? 2 : 0, repeatType: "reverse" },
          pathLength: { duration: 0.4 }
        }}
      />
      <motion.polyline
        points="12,5 19,12 12,19"
        animate={{
          ...getMoveDirection()
        }}
        transition={{ 
          duration: 0.6,
          repeat: isMoving ? 2 : 0,
          repeatType: "reverse"
        }}
      />
      {isMoving && (
        <motion.g>
          {/* Motion trail */}
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={i}
              x1={3 - i * 2}
              y1={12}
              x2={1 - i * 2}
              y2={12}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                x: [0, ...Array(5).fill(0).map((_, j) => (j + 1) * 3)]
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default ArrowIcon;