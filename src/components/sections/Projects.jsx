import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaCubes, FaProjectDiagram, FaChevronRight, FaTimes } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

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
  
  // Project data for all categories
  const projectsData = {
    platforms: [
      {
        id: 1,
        title: 'oneDAL ARM Optimization',
        description: 'Optimized Intel oneDAL for ARM processor, achieving 10x to 200x performance improvement in machine learning workloads.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project1.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/onedal-arm.jpg`,
        tags: ['Performance Optimization', 'oneDAL', 'ARM', 'Machine Learning'],
        githubLink: 'https://github.com/oneapi-src/oneDAL/pull/2614',
        liveLink: 'https://www.linkedin.com/posts/0chandansharma_smart-camera-platform-activity-7064656892068839424-KIap',
        details: 'Developed optimization techniques for Intel oneDAL library specifically for ARM architecture, focusing on ML workloads. Achieved significant performance gains through novel threading approaches and memory management optimizations.',
        technologies: ['C++', 'ARM', 'oneDAL', 'ML Algorithms', 'Performance Tuning'],
        results: 'Performance improvements ranging from 10x to 200x compared to baseline implementations, enabling efficient ML workloads on ARM-based systems.',
        year: '2023'
      },
      {
        id: 2,
        title: 'Threading as a Service',
        description: 'Developed a novel threading service implementation for ARM many-core processors, optimizing parallel computing workloads.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project2.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/threading-service.jpg`,
        tags: ['Threading', 'ARM', 'Parallel Computing', 'HPC'],
        githubLink: '#',
        liveLink: '#',
        details: 'Designed and implemented a Threading as a Service (TaaS) system for ARM many-core processors. Created a service layer that optimizes thread management, scheduling, and synchronization for high-performance computing applications.',
        technologies: ['C/C++', 'ARM', 'Parallel Programming', 'System Architecture'],
        results: 'Enabled more efficient utilization of many-core processors, reducing overhead and improving application performance in heavily threaded workloads.',
        year: '2023'
      },
      {
        id: 3,
        title: 'Smart Camera Platform',
        description: 'Contributed to Sony\'s IMX500 intelligent vision sensor platform, enabling edge AI processing for computer vision applications.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project3.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/sony-imx500.jpg`,
        tags: ['Edge AI', 'Computer Vision', 'IMX500', 'Python'],
        githubLink: '#',
        liveLink: '#',
        details: 'Worked on the development of Sony\'s smart camera platform featuring the IMX500 intelligent vision sensor. Created backend services and benchmarking systems for AI models on target devices.',
        technologies: ['Python', 'Docker', 'Kubernetes', 'Computer Vision', 'Edge AI'],
        results: 'Successfully deployed a production-ready platform supporting edge AI device creation, management, and optimization.',
        year: '2022'
      }
    ],
    products: [
      {
        id: 4,
        title: 'TXTR - Handwritten Text Recognition',
        description: 'Built a complete OCR/ICR/IDP solution for handwritten and printed text recognition with high accuracy.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project4.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/txtr.jpg`,
        tags: ['OCR', 'Deep Learning', 'Computer Vision', 'NLP'],
        githubLink: '#',
        liveLink: '#',
        details: 'Developed TXTR, a comprehensive OCR/ICR/IDP solution that processes both handwritten and system-generated texts. Incorporated advanced image processing and deep learning techniques for enhanced recognition accuracy.',
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLP'],
        results: 'Achieved high accuracy in text recognition across diverse document types, including handwritten notes, forms, and structured documents.',
        year: '2021'
      },
      {
        id: 5,
        title: 'OutOfDanger - Safety Monitoring',
        description: 'Developed a safety monitoring system using computer vision to detect PPE, face masks, and social distancing violations.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project5.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/outofdanger.jpg`,
        tags: ['Computer Vision', 'Safety', 'Object Detection'],
        githubLink: '#',
        liveLink: '#',
        details: 'Created OutOfDanger, a computer vision-based safety monitoring system for industrial and public spaces. Implemented detection algorithms for PPE compliance, face mask usage, and social distancing enforcement.',
        technologies: ['Python', 'TensorFlow', 'YOLO', 'OpenCV', 'Edge Computing'],
        results: 'Successfully deployed in multiple industrial settings, improving workplace safety compliance and reducing incident rates.',
        year: '2020'
      },
      {
        id: 6,
        title: 'Warehouse.AI - Inventory Management',
        description: 'Created an AI engine to analyze inbound pallets on conveyor belts for warehouse management systems.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project6.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/warehouse-ai.jpg`,
        tags: ['Computer Vision', 'Object Detection', 'OCR'],
        githubLink: '#',
        liveLink: '#',
        details: 'Designed Warehouse.AI, an intelligent inventory management system for cold storage facilities. Implemented computer vision algorithms to analyze inbound pallets on conveyor belts, automatically identifying and logging inventory items.',
        technologies: ['Python', 'Computer Vision', 'OCR', 'Object Detection', 'API Integration'],
        results: 'Reduced manual inventory processing time by 85% while maintaining high accuracy in item identification and tracking.',
        year: '2020'
      }
    ],
    projects: [
      {
        id: 7,
        title: 'PhotoShield - Screen Protection',
        description: 'Developed system for confidential screen protection during presentations in sensitive environments.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project7.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/photoshield.jpg`,
        tags: ['Privacy', 'Computer Vision', 'Real-time Processing'],
        githubLink: '#',
        liveLink: '#',
        details: 'Created PhotoShield, a privacy-focused system that protects confidential information during presentations. Implemented real-time screen analysis and content masking algorithms.',
        technologies: ['Python', 'OpenCV', 'Image Processing', 'Privacy Protection'],
        results: 'Enabled secure presentations in mixed-audience environments by automatically detecting and obscuring sensitive information on-screen.',
        year: '2019'
      },
      {
        id: 8,
        title: 'Face Recognition System',
        description: 'Built advanced face recognition system capable of operating at distances up to 40 feet with high accuracy.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project8.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/face-recognition.jpg`,
        tags: ['Face Recognition', 'AI', 'Security'],
        githubLink: '#',
        liveLink: '#',
        details: 'Developed a long-range face recognition system with advanced capabilities for security applications. Implemented novel techniques for recognition at extended distances while maintaining high accuracy.',
        technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Face Recognition Algorithms'],
        results: 'Successfully deployed in security applications with recognition capabilities at up to 40 feet distance, achieving over 95% accuracy under varying lighting conditions.',
        year: '2019'
      },
      {
        id: 9,
        title: 'AutoML Pipeline',
        description: 'Created automated machine learning pipeline for supervised learning with deep learning integration.',
        image: `${process.env.PUBLIC_URL}/assets/images/projects/project9.jpg`,
        screenshot: `${process.env.PUBLIC_URL}/assets/images/projects/screenshots/automl.jpg`,
        tags: ['AutoML', 'Pipeline', 'Deep Learning'],
        githubLink: '#',
        liveLink: '#',
        details: 'Developed an end-to-end AutoML pipeline for supervised learning applications. Implemented automated feature engineering, model selection, hyperparameter tuning, and integration with deep learning frameworks.',
        technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow'],
        results: 'Reduced model development time by 70% while maintaining or improving model performance across various ML tasks.',
        year: '2018'
      }
    ]
  };
  
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
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="projects-grid"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            exit={{ opacity: 0 }}
          >
            {projectsData[activeCategory].map((project) => (
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
                  <img src={project.image} alt={project.title} />
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
        
        {/* Project Detail Modal */}
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
                  <div className="project-modal-screenshot">
                    <img src={selectedProject.screenshot} alt={`${selectedProject.title} screenshot`} />
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