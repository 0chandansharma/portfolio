import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaBrain, 
  FaMobile, 
  FaTools, 
  FaLayerGroup 
} from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Import skill logos - these would be replaced with your actual imports
// Example: import PythonLogo from '../../assets/images/Tech/python.png';

const Skills = () => {
  const [ref, controls] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('programming');
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  // Categories configuration
  const categories = [
    { 
      id: 'programming', 
      icon: <FaCode />, 
      title: 'Programming',
      description: 'Expert in multiple programming languages with a focus on high-performance computing and optimized code.'
    },
    { 
      id: 'frameworks', 
      icon: <FaLayerGroup />, 
      title: 'Frameworks',
      description: 'Specialized in optimizing AI/ML frameworks for performance, particularly for ARM-based architectures.'
    },
    { 
      id: 'ai', 
      icon: <FaBrain />, 
      title: 'AI & ML',
      description: 'Deep expertise in machine learning algorithms, deep learning, and large language models optimization.'
    },
    { 
      id: 'edge', 
      icon: <FaMobile />, 
      title: 'Edge Computing',
      description: 'Experience deploying AI solutions at the edge, with focus on quantization and model optimization.'
    },
    { 
      id: 'tools', 
      icon: <FaTools />, 
      title: 'Dev Tools',
      description: 'Proficient with industry-standard development, testing, and deployment tools.'
    },
    { 
      id: 'libs', 
      icon: <FaServer />, 
      title: 'Libraries',
      description: 'Skilled with various libraries and frameworks for machine learning and data processing.'
    }
  ];

  // Skills data with logos
  const skillsData = {
    programming: [
      { 
        name: 'Python', 
        level: 'Expert', 
        percentage: 90,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/python.png`,
        description: 'Primary language for ML/AI development, data analysis, and automation.',
        years: 6,
        projects: 20,
        color: '#366B98'
      },
      { 
        name: 'C/C++', 
        level: 'Advanced', 
        percentage: 85,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/cpp.png`,
        description: 'Used for high-performance computing, optimization, and low-level system operations.',
        years: 5,
        projects: 15,
        color: '#00599C'
      },
      { 
        name: 'JavaScript', 
        level: 'Intermediate', 
        percentage: 75,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/javascript.png`,
        description: 'Used for web development, data visualization, and interactive ML demos.',
        years: 3,
        projects: 8,
        color: '#F7DF1E'
      },
      { 
        name: 'Java', 
        level: 'Intermediate', 
        percentage: 70,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/java.png`,
        description: 'Used for enterprise applications and Android development.',
        years: 4,
        projects: 6,
        color: '#007396'
      },
    ],
    frameworks: [
      { 
        name: 'TensorFlow', 
        level: 'Expert', 
        percentage: 90,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/tensorflow.png`,
        description: 'Deep experience optimizing TensorFlow models for various hardware platforms.',
        years: 5,
        projects: 12,
        color: '#FF6F00'
      },
      { 
        name: 'PyTorch', 
        level: 'Expert', 
        percentage: 85,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/pytorch.png`,
        description: 'Extensive work with PyTorch for research and deployment of deep learning models.',
        years: 4,
        projects: 10,
        color: '#EE4C2C'
      },
      { 
        name: 'Scikit-learn', 
        level: 'Expert', 
        percentage: 90,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/scikit-learn.png`,
        description: 'Go-to framework for traditional machine learning algorithms and pipelines.',
        years: 6,
        projects: 15,
        color: '#F89939'
      },
      { 
        name: 'oneDAL', 
        level: 'Expert', 
        percentage: 95,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/intel.png`,
        description: 'Specialized in optimization of Intel oneDAL library for machine learning workloads.',
        years: 3,
        projects: 5,
        color: '#0071C5'
      },
    ],
    ai: [
      // Similar structure for other categories
      { 
        name: 'Deep Learning', 
        level: 'Expert', 
        percentage: 90,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/deep-learning.png`,
        description: 'Expert in neural network architectures, training, and optimization.',
        years: 5,
        projects: 12,
        color: '#3498DB'
      },
      { 
        name: 'Computer Vision', 
        level: 'Expert', 
        percentage: 90,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/computer-vision.png`,
        description: 'Extensive experience with image processing, object detection, and visual recognition.',
        years: 4,
        projects: 10,
        color: '#2ECC71'
      },
    ],
    // Add more categories as needed
    edge: [
      { 
        name: 'Model Quantization', 
        level: 'Expert', 
        percentage: 85,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/quantization.png`,
        description: 'Specialized in reducing model size while preserving accuracy for edge deployment.',
        years: 3,
        projects: 8,
        color: '#9B59B6'
      },
    ],
    tools: [
      { 
        name: 'Docker', 
        level: 'Advanced', 
        percentage: 80,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/docker.png`,
        description: 'Container management for reproducible development and deployment environments.',
        years: 4,
        projects: 12,
        color: '#2496ED'
      },
    ],
    libs: [
      { 
        name: 'NumPy', 
        level: 'Expert', 
        percentage: 90,
        logo: `${process.env.PUBLIC_URL}/assets/images/Tech/numpy.png`,
        description: 'Core numerical computing library used across all data science projects.',
        years: 6,
        projects: 20,
        color: '#013243'
      },
    ]
  };

  // Handle skill click
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  // Close skill detail modal
  const closeSkillDetail = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionTitle title="Skills" subtitle="Technical Expertise" />
        
        <motion.div 
          className="skills-content"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {/* Category Navigation */}
          <div className="skills-navigation">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`skill-category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="category-icon">{category.icon}</div>
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Category Description */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory + "-desc"}
              className="category-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {categories.find(cat => cat.id === activeCategory)?.description}
            </motion.div>
          </AnimatePresence>
          
          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="skills-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {skillsData[activeCategory]?.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
                  onClick={() => handleSkillClick(skill)}
                  style={{ '--skill-color': skill.color }}
                >
                  <div className="skill-card-header">
                    <div className="skill-logo-wrapper">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`} 
                        className="skill-logo" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `${process.env.PUBLIC_URL}/assets/images/Tech/placeholder.png`;
                        }}
                      />
                    </div>
                    <div className="skill-level" style={{ background: skill.color }}>
                      {skill.level}
                    </div>
                  </div>
                  
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-meter-container">
                      <div className="skill-meter-bg">
                        <motion.div 
                          className="skill-meter-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                          style={{ background: skill.color }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                  </div>
                  
                  <div className="skill-card-footer">
                    <div className="skill-stats">
                      <div className="skill-stat">
                        <span className="stat-value">{skill.years}+</span>
                        <span className="stat-label">Years</span>
                      </div>
                      <div className="skill-stat">
                        <span className="stat-value">{skill.projects}+</span>
                        <span className="stat-label">Projects</span>
                      </div>
                    </div>
                    <button className="skill-detail-btn">Details</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            className="skill-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSkillDetail}
          >
            <motion.div 
              className="skill-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--skill-color': selectedSkill.color }}
            >
              <button className="modal-close-btn" onClick={closeSkillDetail}>×</button>
              
              <div className="skill-modal-header">
                <div className="modal-logo-container">
                  <img 
                    src={selectedSkill.logo} 
                    alt={`${selectedSkill.name} logo`} 
                    className="modal-skill-logo" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/assets/images/Tech/placeholder.png`;
                    }}
                  />
                </div>
                <div className="modal-title-container">
                  <h2 className="modal-skill-name">{selectedSkill.name}</h2>
                  <div className="modal-skill-level" style={{ background: selectedSkill.color }}>
                    {selectedSkill.level} • {selectedSkill.percentage}% Proficiency
                  </div>
                </div>
              </div>
              
              <div className="skill-modal-body">
                <div className="modal-skill-description">
                  <h3>Expertise</h3>
                  <p>{selectedSkill.description}</p>
                </div>
                
                <div className="modal-skill-stats">
                  <div className="modal-stat-item">
                    <div className="modal-stat-value">{selectedSkill.years}+</div>
                    <div className="modal-stat-label">Years Experience</div>
                  </div>
                  <div className="modal-stat-item">
                    <div className="modal-stat-value">{selectedSkill.projects}+</div>
                    <div className="modal-stat-label">Projects Completed</div>
                  </div>
                </div>
                
                <div className="skill-progress-container">
                  <h3>Proficiency</h3>
                  <div className="skill-progress-bar">
                    <motion.div 
                      className="skill-progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.percentage}%` }}
                      transition={{ duration: 1 }}
                      style={{ background: selectedSkill.color }}
                    />
                    <div className="skill-progress-markers">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> 
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;