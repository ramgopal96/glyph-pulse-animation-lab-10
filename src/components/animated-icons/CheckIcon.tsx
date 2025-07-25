import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CheckIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const CheckIcon: React.FC<CheckIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onClick?.();
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
    >
      <motion.polyline
        points="20,6 9,17 4,12"
        initial={{ pathLength: 0 }}
        animate={{ 
          pathLength: isChecked ? 1 : 0,
          stroke: isChecked ? "#22c55e" : "currentColor"
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
      />
      {isChecked && (
        <motion.g>
          <motion.circle
            cx={12}
            cy={12}
            r={10}
            fill="none"
            stroke="#22c55e"
            strokeWidth="0.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 0.6, 0]
            }}
            transition={{ duration: 0.6 }}
          />
          {/* Success burst */}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={12}
              y1={12}
              x2={12 + Math.cos(i * 60 * Math.PI / 180) * 4}
              y2={12 + Math.sin(i * 60 * Math.PI / 180) * 4}
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default CheckIcon;