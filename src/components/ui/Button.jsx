import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  disabled = false,
  icon = null,
  iconPosition = 'right',
  fullWidth = false,
  ...rest 
}) => {
  // Button variants
  const variantStyles = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    outline: 'outline-btn',
    text: 'text-btn',
    glow: 'glow-btn'
  };

  // Button sizes
  const sizeStyles = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  };

  // Combine all classes
  const buttonClasses = [
    'btn',
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    fullWidth ? 'btn-full' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...rest}
    >
      {iconPosition === 'left' && icon && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      
      <span className="btn-text">{children}</span>
      
      {iconPosition === 'right' && icon && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </motion.button>
  );
};

export default Button;