import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useTheme from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button 
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
};

export default ThemeToggle;