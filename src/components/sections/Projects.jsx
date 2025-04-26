import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Projects = () => {
  const [ref, controls] = useScrollAnimation();
  
  const projects = [
    {
      id: 1,
      title: 'oneDAL ARM Optimization',
      description: 'Optimized Intel oneDAL for ARM processor, achieving 10x to 200x performance improvement in machine learning workloads.',
      image: '/assets/images/projects/project1.jpg',
      tags: ['Performance Optimization', 'oneDAL', 'ARM', 'Machine Learning'],
      githubLink: 'https://github.com/oneapi-src/oneDAL/pull/2614',
      liveLink: 'https://www.linkedin.com/posts/0chandansharma_smart-camera-platform-activity-7064656892068839424-KIap'
    },
    {
      id: 2,
      title: 'Threading as a Service',
      description: 'Developed a novel threading service implementation for ARM many-core processors, optimizing parallel computing workloads.',
      image: '/assets/images/projects/project2.jpg',
      tags: ['Threading', 'ARM', 'Parallel Computing', 'HPC'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Smart Camera Platform',
      description: 'Contributed to Sony\'s IMX500 intelligent vision sensor platform, enabling edge AI processing for computer vision applications.',
      image: '/assets/images/projects/project3.jpg',
      tags: ['Edge AI', 'Computer Vision', 'IMX500', 'Python'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'TXTR - Handwritten Text Recognition',
      description: 'Built a complete OCR/ICR/IDP solution for handwritten and printed text recognition with high accuracy.',
      image: '/assets/images/projects/project4.jpg',
      tags: ['OCR', 'Deep Learning', 'Computer Vision', 'NLP'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'OutOfDanger - Safety Monitoring',
      description: 'Developed a safety monitoring system using computer vision to detect PPE, face masks, and social distancing violations.',
      image: '/assets/images/projects/project5.jpg',
      tags: ['Computer Vision', 'Safety', 'Object Detection'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 6,
      title: 'Warehouse.AI - Inventory Management',
      description: 'Created an AI engine to analyze inbound pallets on conveyor belts for warehouse management systems.',
      image: '/assets/images/projects/project6.jpg',
      tags: ['Computer Vision', 'Object Detection', 'OCR'],
      githubLink: '#',
      liveLink: '#'
    }
  ];
  
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionTitle title="Projects" subtitle="My recent work" />
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn secondary-btn"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn primary-btn"
                    >
                      <FaExternalLinkAlt /> View
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;