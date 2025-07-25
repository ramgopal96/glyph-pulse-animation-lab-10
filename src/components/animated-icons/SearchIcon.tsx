import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SearchIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const SearchIcon: React.FC<SearchIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
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
        cx="11"
        cy="11"
        r="8"
        animate={{
          scale: isActive ? [1, 1.1, 1] : 1,
          rotate: isActive ? [0, 180, 360] : 0
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.path
        d="m21 21-4.35-4.35"
        animate={{
          pathLength: isActive ? [0, 1] : 1,
          x: isActive ? [0, 2, -2, 0] : 0
        }}
        transition={{ 
          pathLength: { duration: 0.4 },
          x: { duration: 0.3, ease: "easeInOut" }
        }}
      />
      {isActive && (
        <motion.g>
          {/* Scanning lines */}
          {[0, 45, 90, 135].map((angle, i) => (
            <motion.line
              key={i}
              x1={11}
              y1={11}
              x2={11 + Math.cos(angle * Math.PI / 180) * 6}
              y2={11 + Math.sin(angle * Math.PI / 180) * 6}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 1,
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

export default SearchIcon;