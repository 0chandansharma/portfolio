import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaChevronRight, FaTimes, FaBuilding, FaMapMarkerAlt, FaLink, FaAward } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { workExperience, education } from '../../data/experience';

const Experience = () => {
  const [ref, controls] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('work');
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const modalRef = useRef(null);
  
  const tabs = [
    { id: 'work', icon: <FaBriefcase />, title: 'Work Experience' },
    { id: 'education', icon: <FaGraduationCap />, title: 'Education' },
  ];
  
  const experienceData = {
    work: workExperience,
    education: education,
  };
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // For tab indicator animation
  const tabIndicatorVariants = {
    initial: { left: 0 },
    work: { left: '0%' },
    education: { left: '50%' },
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionTitle title="Experience" subtitle="My professional journey" />
        
        <motion.div 
          className="experience-tabs-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="experience-tabs">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`experience-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="tab-icon">{tab.icon}</div>
                <span>{tab.title}</span>
              </motion.button>
            ))}
            <motion.div 
              className="tab-indicator"
              variants={tabIndicatorVariants}
              initial="initial"
              animate={activeTab}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>
        
        <div className="timeline-container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              className="timeline"
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {experienceData[activeTab].map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="timeline-dot"
                    animate={{ 
                      scale: hoveredIndex === index ? 1.2 : 1,
                      backgroundColor: hoveredIndex === index ? 'var(--primary-color-light)' : 'var(--primary-color)'
                    }}
                  />
                  
                  <motion.div 
                    className="timeline-content"
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: 'var(--primary-color)'
                    }}
                  >
                    <div className="timeline-date">
                      <FaCalendarAlt /> {item.duration}
                    </div>
                    
                    <div className="timeline-header">
                      <h3 className="timeline-title">{item.title}</h3>
                      <div className="timeline-subtitle">
                        <span className="organization">
                          <FaBuilding /> {item.company || item.institution}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {item.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="timeline-description">{item.description}</p>
                    
                    {/* Show 2 highlights in the timeline view */}
                    {item.details && item.details.length > 0 && (
                      <div className="timeline-highlights">
                        <h4>Key Highlights:</h4>
                        <ul>
                          {item.details.slice(0, 2).map((detail, idx) => (
                            <li key={idx}>
                              <FaAward className="highlight-icon" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <motion.button 
                      className="timeline-details-btn"
                      onClick={() => handleItemClick(item)}
                      whileHover={{ x: 5 }}
                    >
                      View Full Details <FaChevronRight />
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClick}
            >
              <motion.div 
                className="modal-content experience-modal"
                ref={modalRef}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  <FaTimes />
                </button>
                
                <div className="modal-header">
                  <div className="modal-title-icon">
                    {activeTab === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                  
                  <div className="modal-title-content">
                    <h2>{selectedItem.title}</h2>
                    <div className="modal-subtitle">
                      <span>
                        <FaBuilding /> {selectedItem.company || selectedItem.institution}
                      </span>
                      <span>
                        <FaMapMarkerAlt /> {selectedItem.location}
                      </span>
                      <span>
                        <FaCalendarAlt /> {selectedItem.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-body">
                  <div className="modal-description">
                    <h3>Overview</h3>
                    <p>{selectedItem.description}</p>
                  </div>
                  
                  {selectedItem.details && selectedItem.details.length > 0 && (
                    <div className="modal-details">
                      <h3>Key Responsibilities & Achievements</h3>
                      <ul className="details-list">
                        {selectedItem.details.map((detail, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <FaAward className="details-icon" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedItem.technologies && (
                    <div className="modal-technologies">
                      <h3>Technologies Used</h3>
                      <div className="tech-tags">
                        {selectedItem.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedItem.link && (
                    <div className="modal-link">
                      <a 
                        href={selectedItem.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-button"
                      >
                        <FaLink /> View More Information
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;