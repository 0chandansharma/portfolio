import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaAward } from 'react-icons/fa';

const Timeline = ({ 
  items, 
  alternating = true,
  showIcons = true,
  iconSize = 'md',
  dateFormat = 'default',
  className = '',
  onItemClick = null 
}) => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Icon size classes
  const iconSizes = {
    sm: 'timeline-icon-sm',
    md: 'timeline-icon-md',
    lg: 'timeline-icon-lg'
  };

  const iconSizeClass = iconSizes[iconSize] || iconSizes.md;

  return (
    <motion.div 
      className={`timeline-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="timeline">
        {items.map((item, index) => (
          <motion.div 
            key={item.id || index}
            className={`timeline-item ${alternating && index % 2 !== 0 ? 'timeline-item-right' : 'timeline-item-left'}`}
            variants={itemVariants}
          >
            <div className="timeline-content-wrapper">
              {showIcons && (
                <div className="timeline-icon-container">
                  <div className={`timeline-icon ${iconSizeClass}`}>
                    {item.icon || (item.type === 'education' ? <FaAward /> : <FaBuilding />)}
                  </div>
                </div>
              )}
              
              <motion.div 
                className="timeline-content"
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => onItemClick && onItemClick(item)}
              >
                <div className="timeline-header">
                  <div className="timeline-date">
                    <FaCalendarAlt /> 
                    <span>{item.duration}</span>
                  </div>
                  
                  <h3 className="timeline-title">{item.title}</h3>
                  
                  <div className="timeline-subtitle">
                    <div className="organization">
                      <FaBuilding /> 
                      <span>{item.company || item.institution}</span>
                    </div>
                    
                    <div className="location">
                      <FaMapMarkerAlt /> 
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-body">
                  <p className="timeline-description">{item.description}</p>
                  
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="timeline-highlights">
                      <h4>Key Achievements</h4>
                      <ul>
                        {item.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx}>
                            <FaAward className="highlight-icon" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      {item.highlights.length > 2 && (
                        <p className="timeline-more">+{item.highlights.length - 2} more achievements</p>
                      )}
                    </div>
                  )}
                  
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="timeline-technologies">
                      {item.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="timeline-tech">{tech}</span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="timeline-tech-more">+{item.technologies.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="timeline-footer">
                  <button className="timeline-details-btn">
                    View Details <span className="arrow-icon">→</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;