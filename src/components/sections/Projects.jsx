import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaCubes, FaProjectDiagram, FaChevronRight, FaTimes, FaChevronLeft } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import projectsData from '../../data/projects';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

const Projects = () => {
  const [ref, controls] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('platforms');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Categories configuration
  const categories = [
    { id: 'platforms', icon: <FaLayerGroup />, title: 'Platforms' },
    { id: 'products', icon: <FaCubes />, title: 'Products' },
    { id: 'projects', icon: <FaProjectDiagram />, title: 'Projects' }
  ];
  
  // Open project detail modal
  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Close project detail modal
  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      openProjectDetail(project);
      e.preventDefault();
    }
  };

  const handleModalKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeProjectDetail();
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionTitle title="My Work" subtitle="Platforms, Products & Projects" />
        
        {/* Category Tabs */}
        <div className="projects-categories">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeCategory === category.id}
              aria-label={`Show ${category.title} category`}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.title}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="sync">
          <motion.div 
            key={activeCategory}
            className="projects-grid"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {projectsData[activeCategory] && projectsData[activeCategory].map((project) => (
              <motion.div 
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)' }}
                onClick={() => openProjectDetail(project)}
                onKeyDown={(e) => handleKeyDown(e, project)}
                tabIndex={0}
                role="button"
                aria-label={`View details of ${project.title}`}
              >
                <div className="project-card-image">
                  <img 
                    src={`${process.env.PUBLIC_URL}${project.image}`} 
                    alt={project.title} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/assets/images/projects/placeholder.jpg`;
                    }}
                  />
                  <div className="project-card-overlay">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
                
                <div className="project-card-content">
                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="project-tag-more">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="project-links">
                    {project.githubLink && project.githubLink !== '#' && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <FaGithub />
                      </a>
                    )}
                    
                    {project.liveLink && project.liveLink !== '#' && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    
                    <div className="project-year">{project.year}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Project Detail Modal with Screenshot Carousel */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetail}
              onKeyDown={handleModalKeyDown}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <motion.div 
                className="project-modal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close-btn" 
                  onClick={closeProjectDetail}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
                
                <div className="project-modal-header">
                  <h2 id="project-modal-title">{selectedProject.title}</h2>
                  <div className="project-modal-meta">
                    <span className="project-modal-year">{selectedProject.year}</span>
                    <div className="project-modal-links">
                      {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                        <a 
                          href={selectedProject.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-modal-link"
                          aria-label={`GitHub repository for ${selectedProject.title}`}
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      
                      {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                        <a 
                          href={selectedProject.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-modal-link"
                          aria-label={`Live demo for ${selectedProject.title}`}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-modal-body">
                  {/* Screenshot Carousel */}
                  <div className="project-modal-screenshots">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      navigation={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      modules={[Pagination, Navigation, Autoplay]}
                      className="project-screenshots-swiper"
                    >
                      {selectedProject.screenshots && selectedProject.screenshots.map((screenshot, index) => (
                        <SwiperSlide key={index} className="project-screenshot-slide">
                          <div className="project-screenshot-container">
                            <img 
                              src={`${process.env.PUBLIC_URL}${screenshot}`}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              className="project-screenshot"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `${process.env.PUBLIC_URL}/assets/images/projects/placeholder-screenshot.jpg`;
                              }}
                            />
                            <div className="screenshot-caption">
                              Screenshot {index + 1} of {selectedProject.screenshots.length}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  
                  <div className="project-modal-content">
                    <div className="project-modal-section">
                      <h3>Overview</h3>
                      <p>{selectedProject.details}</p>
                    </div>
                    
                    <div className="project-modal-section">
                      <h3>Technologies Used</h3>
                      <div className="project-modal-technologies">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="project-modal-tech">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-modal-section">
                      <h3>Results</h3>
                      <p>{selectedProject.results}</p>
                    </div>
                    
                    <div className="project-modal-tags">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="project-modal-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;