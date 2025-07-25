import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PlayIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const PlayIcon: React.FC<PlayIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
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
      {!isPlaying ? (
        <motion.polygon
          points="5,3 19,12 5,21"
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 1.1, 1],
            fill: isPlaying ? "currentColor" : "none"
          }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.rect
            x="6"
            y="4"
            width="4"
            height="16"
            fill="currentColor"
            animate={{ scaleY: [1, 0.8, 1] }}
            transition={{ 
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.rect
            x="14"
            y="4"
            width="4"
            height="16"
            fill="currentColor"
            animate={{ scaleY: [1, 0.8, 1] }}
            transition={{ 
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.3
            }}
          />
        </motion.g>
      )}
      {isPlaying && (
        <motion.g>
          {/* Sound waves */}
          {[...Array(3)].map((_, i) => (
            <motion.circle
              key={i}
              cx={12}
              cy={12}
              r={8 + i * 3}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default PlayIcon;