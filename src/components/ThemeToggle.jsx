import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-700/30 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, type: 'spring' }}
        key={isDark ? 'moon' : 'sun'}
      >
        {isDark ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-400" />
        )}
      </motion.div>
    </button>
  );
};