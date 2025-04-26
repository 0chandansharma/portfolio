import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaMobile, FaTools, FaLayerGroup } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import SkillBar from '../ui/SkillBar';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import skillsData from '../../data/skills';

const Skills = () => {
  const [ref, controls] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('programming');
  
  const categories = [
    { id: 'programming', icon: <FaCode />, title: 'Programming' },
    { id: 'frameworks', icon: <FaLayerGroup />, title: 'Frameworks Optimization' },
    { id: 'ai', icon: <FaBrain />, title: 'Artificial Intelligence' },
    { id: 'edge', icon: <FaMobile />, title: 'Edge Computing & Deployment' },
    { id: 'tools', icon: <FaTools />, title: 'Tools' },
    { id: 'libs', icon: <FaServer />, title: 'Libraries & Frameworks' }
  ];
  
  const renderSkills = () => {
    const skills = skillsData[activeCategory];
    return skills.map((skill, index) => (
      <SkillBar
        key={skill.name}
        name={skill.name}
        percentage={skill.percentage}
        delay={index * 0.1}
      />
    ));
  };

  const tabVariants = {
    inactive: { opacity: 0.6, y: 5 },
    active: { 
      opacity: 1, 
      y: 0,
      scale: 1.05,
      transition: { duration: 0.3 } 
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionTitle title="Skills" subtitle="My Technical Level" />
        
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
            className="skills-tabs"
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
                className={`skill-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                variants={tabVariants}
                initial="inactive"
                animate={activeCategory === category.id ? "active" : "inactive"}
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="tab-icon">{category.icon}</div>
                <span>{category.title}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="skills-bars"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderSkills()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;