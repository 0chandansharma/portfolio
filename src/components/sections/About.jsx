import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBrain, FaLaptopCode } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import AboutImageGallery from './AboutImageGallery';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
  const [ref, controls] = useScrollAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionTitle title="About Me" subtitle="My Introduction" />
        
        <motion.div 
          className="about-content"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {/* Replace your single image with the gallery component */}
          <motion.div 
            className="about-image-gallery-wrapper"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8 }
              }
            }}
          >
            <AboutImageGallery />
          </motion.div>
          
          <div className="about-text">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              I'm a Senior AI Researcher at Fujitsu Research with over 6 years of experience in AI/ML optimization. My expertise lies in optimizing ML/DL/LLM frameworks for performance, with a particular focus on threading for many-core processors, quantization for small devices, and efficient BLAS library operations.
            </motion.p>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 }
                }
              }}
            >
              I'm passionate about developing energy-efficient AI solutions for industries, contributing to open-source communities, and pushing the boundaries of technology for next-generation supercomputing.
            </motion.p>
            
            <motion.div 
              className="achievement-cards"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              <motion.div 
                className="achievement-card"
                custom={0}
                variants={cardVariants}
              >
                <FaRocket className="card-icon" />
                <h3>15+</h3>
                <p>AI Projects Completed</p>
              </motion.div>
              
              <motion.div 
                className="achievement-card"
                custom={1}
                variants={cardVariants}
              >
                <FaBrain className="card-icon" />
                <h3>10+</h3>
                <p>Research Papers & Articles</p>
              </motion.div>
              
              <motion.div 
                className="achievement-card" 
                custom={2}
                variants={cardVariants}
              >
                <FaLaptopCode className="card-icon" />
                <h3>5+</h3>
                <p>Open Source Contributions</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="about-cta"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.6, duration: 0.6 }
                }
              }}
            >
              <a 
                href="/assets/pdfs/chandan_sharma_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn primary-btn"
              >
                Download Resume <span>→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;