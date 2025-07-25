import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DownloadIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = () => {
    setIsDownloading(true);
    onClick?.();
    setTimeout(() => setIsDownloading(false), 2000);
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
      <motion.path
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        animate={{
          pathLength: isDownloading ? [0, 1] : 1
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.polyline
        points="7,10 12,15 17,10"
        animate={{
          y: isDownloading ? [0, 3, 0] : 0
        }}
        transition={{ 
          duration: 0.6,
          repeat: isDownloading ? Infinity : 0,
          repeatType: "reverse"
        }}
      />
      <motion.line
        x1="12"
        y1="15"
        x2="12"
        y2="3"
        animate={{
          pathLength: isDownloading ? [1, 0.3, 1] : 1
        }}
        transition={{
          duration: 0.8,
          repeat: isDownloading ? Infinity : 0
        }}
      />
      {isDownloading && (
        <motion.g>
          {/* Progress indicator */}
          <motion.rect
            x="6"
            y="19"
            width="12"
            height="2"
            rx="1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ width: 0 }}
            animate={{ width: 12 }}
            transition={{ duration: 2 }}
          />
          {/* Moving particles */}
          {[...Array(3)].map((_, i) => (
            <motion.circle
              key={i}
              cx={12}
              cy={8}
              r={0.5}
              fill="currentColor"
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: [0, 8, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default DownloadIcon;