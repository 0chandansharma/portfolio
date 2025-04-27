import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  elevation = 'md',
  hoverEffect = true,
  onClick = null,
  color = '',
  fullWidth = false,
  ...rest 
}) => {
  // Card elevations
  const elevationStyles = {
    sm: 'card-elevation-sm',
    md: 'card-elevation-md',
    lg: 'card-elevation-lg',
    none: ''
  };

  // Color variants
  const colorStyles = {
    primary: 'card-primary',
    secondary: 'card-secondary',
    accent: 'card-accent',
    dark: 'card-dark',
    light: 'card-light',
    '': ''
  };

  // Combine all classes
  const cardClasses = [
    'card',
    elevationStyles[elevation] || elevationStyles.md,
    colorStyles[color] || '',
    hoverEffect ? 'card-hover' : '',
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');

  // Add hover animation if hoverEffect is true
  const hoverAnimation = hoverEffect 
    ? { 
        whileHover: { y: -10, boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)' },
        transition: { duration: 0.3 }
      } 
    : {};

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      {...hoverAnimation}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// Card sub-components
const CardHeader = ({ children, className = '', ...rest }) => (
  <div className={`card-header ${className}`} {...rest}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', ...rest }) => (
  <div className={`card-body ${className}`} {...rest}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...rest }) => (
  <div className={`card-footer ${className}`} {...rest}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...rest }) => (
  <h3 className={`card-title ${className}`} {...rest}>
    {children}
  </h3>
);

const CardSubtitle = ({ children, className = '', ...rest }) => (
  <h4 className={`card-subtitle ${className}`} {...rest}>
    {children}
  </h4>
);

const CardImage = ({ src, alt, className = '', ...rest }) => (
  <div className={`card-image-container ${className}`} {...rest}>
    <img src={src} alt={alt} className="card-image" />
  </div>
);

// Add sub-components to Card
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Image = CardImage;

export default Card;