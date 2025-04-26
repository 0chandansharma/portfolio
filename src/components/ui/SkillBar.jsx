import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, percentage, delay = 0 }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      
      <div className="skill-bar-bg">
        <motion.div 
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            delay: delay,
            duration: 1.2, 
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;