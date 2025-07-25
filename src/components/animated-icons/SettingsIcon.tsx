import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SettingsIconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ 
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
      <motion.path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
        animate={{
          rotate: isActive ? [0, 180, 360] : 0
        }}
        transition={{ 
          duration: 1.2,
          ease: "easeInOut"
        }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
          rotate: isActive ? [0, -180, -360] : 0
        }}
        transition={{ 
          duration: 1.2,
          ease: "easeInOut"
        }}
      />
      {isActive && (
        <motion.g>
          {/* Rotating indicators */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.circle
              key={i}
              cx={12 + Math.cos(angle * Math.PI / 180) * 8}
              cy={12 + Math.sin(angle * Math.PI / 180) * 8}
              r={1}
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>
      )}
    </motion.svg>
  );
};

export default SettingsIcon;