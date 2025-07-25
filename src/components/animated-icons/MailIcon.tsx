import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MailIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const MailIcon: React.FC<MailIconProps> = ({ 
  className = "", 
  size = 24, 
  onClick 
}) => {
  const [isSending, setIsSending] = useState(false);

  const handleClick = () => {
    setIsSending(true);
    onClick?.();
    setTimeout(() => setIsSending(false), 2000);
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
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        animate={{
          y: isSending ? [0, -2, 0] : 0
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.polyline
        points="22,6 12,13 2,6"
        animate={{
          pathLength: isSending ? [0, 1] : 1,
          y: isSending ? [0, -2, 0] : 0
        }}
        transition={{ 
          pathLength: { duration: 0.8 },
          y: { duration: 0.5 }
        }}
      />
      {isSending && (
        <motion.g>
          {/* Flying envelope */}
          <motion.path
            d="M20 8l-2 2h4l-2-2z"
            fill="currentColor"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: [0, 20, 40],
              y: [0, -10, -20],
              opacity: [1, 0.5, 0]
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Trail lines */}
          {[...Array(3)].map((_, i) => (
            <motion.line
              key={i}
              x1={18 - i * 2}
              y1={10}
              x2={16 - i * 2}
              y2={10}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                x: [0, 10, 20]
              }}
              transition={{
                duration: 1,
                delay: 0.3 + i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default MailIcon;