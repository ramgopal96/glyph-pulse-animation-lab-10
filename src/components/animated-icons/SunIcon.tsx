import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SunIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const SunIcon: React.FC<SunIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isGlowing, setIsGlowing] = useState(false);

  const handleClick = () => {
    setIsGlowing(!isGlowing);
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
      <motion.circle
        cx="12"
        cy="12"
        r="5"
        animate={{
          scale: isGlowing ? [1, 1.2, 1] : 1,
          fill: isGlowing ? "#fbbf24" : "none"
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.g
        animate={{
          rotate: isGlowing ? [0, 360] : 0
        }}
        transition={{
          duration: 4,
          repeat: isGlowing ? Infinity : 0,
          ease: "linear"
        }}
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.g>
      {isGlowing && (
        <motion.g>
          {/* Glow particles */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={12 + Math.cos(i * 45 * Math.PI / 180) * 8}
              cy={12 + Math.sin(i * 45 * Math.PI / 180) * 8}
              r={0.5}
              fill="#fbbf24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: Math.cos(i * 45 * Math.PI / 180) * 4,
                y: Math.sin(i * 45 * Math.PI / 180) * 4
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default SunIcon;