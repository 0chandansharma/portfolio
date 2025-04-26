import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Certifications = () => {
  const [ref, controls] = useScrollAnimation();
  
  const certifications = [
    {
      id: 1,
      title: 'oneDAL OSS contribution',
      image: '/assets/images/certifications/ossoneDAL.png',
      issuer: 'Open Source',
      date: '2023',
      link: 'https://github.com/oneapi-src/oneDAL/pull/2614'
    },
    {
      id: 2,
      title: 'Presented work in UXL Foundation',
      image: '/assets/images/certifications/uxl.png',
      issuer: 'UXL Foundation',
      date: '2023',
      link: 'https://uxlfoundation.org/'
    },
    {
      id: 3,
      title: 'Best Team Award',
      image: '/assets/images/certifications/best_team.png',
      issuer: 'Sony',
      date: '2022',
      link: 'https://www.linkedin.com/posts/0chandansharma_sony-activity-7064656892068839424-KIap'
    },
    {
      id: 4,
      title: 'Finalist Under Microprocessor challenge',
      image: '/assets/images/certifications/miety.png',
      issuer: 'MIETY',
      date: '2020',
      link: 'https://www.linkedin.com/posts/0chandansharma_certificate-activity-6889203396520251392-Oy9G'
    }
  ];
  
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <SectionTitle title="Certifications & Achievements" subtitle="Recognition for excellence" />
        
        <motion.div 
          className="certifications-grid"
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
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              className="certification-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{ y: -10 }}
            >
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              
              <div className="certification-info">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">Issuer: {cert.issuer}</p>
                <p className="certification-date">Date: {cert.date}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;