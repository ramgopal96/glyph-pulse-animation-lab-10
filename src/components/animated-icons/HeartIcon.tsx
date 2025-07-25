import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeartIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const HeartIcon: React.FC<HeartIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.path
        d="m19 14c0-2.5-1.5-5-4-5s-4 2.5-4 5c0 0 0 3 4 6 4-3 4-6 4-6z"
        initial={false}
        animate={{
          fill: isLiked ? "currentColor" : "none",
          scale: isLiked ? [1, 1.2, 1] : 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="m10 14c0-2.5-1.5-5-4-5s-4 2.5-4 5c0 0 0 3 4 6 4-3 4-6 4-6z"
        initial={false}
        animate={{
          fill: isLiked ? "currentColor" : "none",
          scale: isLiked ? [1, 1.2, 1] : 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.05
        }}
      />
      {isLiked && (
        <motion.g>
          {/* Burst particles */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={12}
              cy={12}
              r={1}
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.cos(i * 60 * Math.PI / 180) * 15,
                y: Math.sin(i * 60 * Math.PI / 180) * 15
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default HeartIcon;