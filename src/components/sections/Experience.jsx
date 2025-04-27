import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaChevronRight, FaTimes, FaBuilding, FaMapMarkerAlt, FaLink, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { workExperience, education } from '../../data/experience';

const Experience = () => {
  const [ref, controls] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('work');
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredTechStack, setHoveredTechStack] = useState(null);
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

  // Show all technologies on hover
  const handleTechStackHover = (index) => {
    setHoveredTechStack(index);
  };

  const handleTechStackLeave = () => {
    setHoveredTechStack(null);
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
        
        <div className="experience-cards">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              className="experience-grid"
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {experienceData[activeTab].map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="experience-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)' }}
                >
                  <div className="experience-card-header">
                    {item.logo && (
                      <div className="organization-logo">
                        <img
                          src={`${process.env.PUBLIC_URL}${item.logo}`}
                          alt={item.company || item.institution}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `${process.env.PUBLIC_URL}/assets/logos/placeholder.svg`;
                          }}
                        />
                      </div>
                    )}
                    <div className="experience-header-content">
                      <h3 className="experience-title">{item.title}</h3>
                      <div className="experience-subtitle">
                        <span className="organization">
                          <FaBuilding /> {item.company || item.institution}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="experience-card-body">
                    <div className="experience-duration">
                      <FaCalendarAlt /> {item.duration}
                    </div>
                    
                    <p className="experience-description">{item.description}</p>
                    
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="tech-stack-container">
                        <div className="tech-stack-label">Technologies:</div>
                        <div className="tech-stack">
                          {item.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                          
                          {item.technologies.length > 3 && (
                            <div 
                              className="tech-more"
                              onMouseEnter={() => handleTechStackHover(index)}
                              onMouseLeave={handleTechStackLeave}
                            >
                              +{item.technologies.length - 3}
                              
                              {hoveredTechStack === index && (
                                <div className="tech-stack-tooltip">
                                  {item.technologies.slice(3).map((tech, i) => (
                                    <span key={i} className="tooltip-tech">{tech}</span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="experience-card-footer">
                    {item.link && (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="organization-link"
                      >
                        Visit <FaExternalLinkAlt />
                      </a>
                    )}
                    
                    <motion.button 
                      className="details-button"
                      onClick={() => handleItemClick(item)}
                      whileHover={{ x: 5 }}
                    >
                      View Details <FaChevronRight />
                    </motion.button>
                  </div>
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
                  
                  {selectedItem.logo && (
                    <div className="modal-logo">
                      <img
                        src={`${process.env.PUBLIC_URL}${selectedItem.logo}`}
                        alt={selectedItem.company || selectedItem.institution}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `${process.env.PUBLIC_URL}/assets/logos/placeholder.svg`;
                        }}
                      />
                    </div>
                  )}
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
                  
                  {selectedItem.technologies && selectedItem.technologies.length > 0 && (
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
                        <FaLink /> Visit Organization Website
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