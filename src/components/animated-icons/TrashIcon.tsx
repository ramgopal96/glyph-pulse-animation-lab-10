import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TrashIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const TrashIcon: React.FC<TrashIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    onClick?.();
    setTimeout(() => setIsDeleting(false), 1500);
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
        points="3,6 5,6 21,6"
        animate={{
          pathLength: isDeleting ? [1, 0] : 1
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="m19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
        animate={{
          scaleY: isDeleting ? [1, 0.8, 0] : 1,
          opacity: isDeleting ? [1, 0.5, 0] : 1
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.path
        d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        animate={{
          y: isDeleting ? [0, -2] : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="10"
        y1="11"
        x2="10"
        y2="17"
        animate={{
          opacity: isDeleting ? [1, 0] : 1,
          pathLength: isDeleting ? [1, 0] : 1
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.line
        x1="14"
        y1="11"
        x2="14"
        y2="17"
        animate={{
          opacity: isDeleting ? [1, 0] : 1,
          pathLength: isDeleting ? [1, 0] : 1
        }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      {isDeleting && (
        <motion.g>
          {/* Dust particles */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={12 + (Math.random() - 0.5) * 10}
              cy={12 + (Math.random() - 0.5) * 10}
              r={Math.random() * 1 + 0.5}
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 20,
                y: (Math.random() - 0.5) * 20
              }}
              transition={{
                duration: 1,
                delay: 0.5 + i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default TrashIcon;