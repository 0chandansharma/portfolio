import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaMobile, FaTools, FaLayerGroup } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import skillsData from '../../data/skills';

const Skills = () => {
  const [ref, controls] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('programming');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const categories = [
    { id: 'programming', icon: <FaCode />, title: 'Programming' },
    { id: 'frameworks', icon: <FaLayerGroup />, title: 'Frameworks Optimization' },
    { id: 'ai', icon: <FaBrain />, title: 'Artificial Intelligence' },
    { id: 'edge', icon: <FaMobile />, title: 'Edge Computing & Deployment' },
    { id: 'tools', icon: <FaTools />, title: 'Tools' },
    { id: 'libs', icon: <FaServer />, title: 'Libraries & Frameworks' }
  ];

  const getCategoryIcon = (id) => {
    const category = categories.find(cat => cat.id === id);
    return category ? category.icon : <FaCode />;
  };
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionTitle title="Skills" subtitle="My Technical Expertise" />
        
        <motion.div 
          className="skills-content"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="skills-categories"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
              }
            }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className={`skill-category ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="category-icon">{category.icon}</div>
                <span>{category.title}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="skills-hexagon-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="hexagon-container"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.05,
                      duration: 0.4
                    }
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className={`hexagon ${hoveredSkill === skill.name ? 'hovered' : ''}`}
                    style={{
                      '--skill-percentage': `${skill.percentage}%`,
                      '--skill-color': getSkillColor(skill.percentage)
                    }}
                  >
                    <div className="hexagon-inner">
                      <div className="hexagon-content">
                        <span className="skill-percentage">{skill.percentage}%</span>
                        <h3 className="skill-name">{skill.name}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="skills-details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="category-details">
              <div className="category-icon large">
                {getCategoryIcon(activeCategory)}
              </div>
              <h2 className="category-title">{getCategoryTitle(activeCategory)}</h2>
              <p className="category-description">
                {getCategoryDescription(activeCategory)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to get skill color based on percentage
function getSkillColor(percentage) {
  if (percentage >= 85) return '#5d74f5'; // Higher primary color
  if (percentage >= 70) return '#3a55e8'; // Primary color
  if (percentage >= 50) return '#00c7c7'; // Secondary color
  return '#ff006e'; // Accent color for lower percentages
}

// Helper function to get category title
function getCategoryTitle(categoryId) {
  const titles = {
    programming: 'Programming Languages',
    frameworks: 'Frameworks Optimization',
    ai: 'Artificial Intelligence & Machine Learning',
    edge: 'Edge Computing & Deployment',
    tools: 'Development Tools',
    libs: 'Libraries & Frameworks'
  };
  return titles[categoryId] || categoryId;
}

// Helper function to get category description
function getCategoryDescription(categoryId) {
  const descriptions = {
    programming: 'Expert in multiple programming languages with a focus on high-performance computing and optimized code.',
    frameworks: 'Specialized in optimizing AI/ML frameworks for performance, particularly for ARM-based architectures.',
    ai: 'Deep expertise in machine learning algorithms, deep learning, and large language models optimization.',
    edge: 'Experience deploying AI solutions at the edge, with focus on quantization and model optimization.',
    tools: 'Proficient with industry-standard development, testing, and deployment tools.',
    libs: 'Skilled with various libraries and frameworks for machine learning and data processing.'
  };
  return descriptions[categoryId] || '';
}

export default Skills;