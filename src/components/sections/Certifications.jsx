import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper';

const Certifications = () => {
  const [ref, controls] = useScrollAnimation();
  
  const certifications = [
    {
      id: 1,
      title: 'oneDAL OSS contribution',
      image: '/assets/images/certifications/ossoneDAL.png',
      issuer: 'Open Source',
      date: '2023',
      description: 'Contributed to Intel oneDAL optimization for ARM processors, significantly improving machine learning workloads performance.',
      link: 'https://github.com/oneapi-src/oneDAL/pull/2614'
    },
    {
      id: 2,
      title: 'Presented work in UXL Foundation',
      image: '/assets/images/certifications/uxl.png',
      issuer: 'UXL Foundation',
      date: '2023',
      description: 'Presented technical research on AI framework optimization to the UXL Foundation Special Interest Group with 300+ global members.',
      link: 'https://uxlfoundation.org/'
    },
    {
      id: 3,
      title: 'Best Team Award',
      image: '/assets/images/certifications/best_team.png',
      issuer: 'Sony',
      date: '2022',
      description: 'Recognized for outstanding performance and contributions to the Smart Camera Platform project.',
      link: 'https://www.linkedin.com/posts/0chandansharma_sony-activity-7064656892068839424-KIap'
    },
    {
      id: 4,
      title: 'Finalist Under Microprocessor challenge',
      image: '/assets/images/certifications/miety.png',
      issuer: 'MIETY',
      date: '2020',
      description: 'Selected as a finalist in the prestigious Microprocessor Challenge organized by MIETY, demonstrating innovative technical solutions.',
      link: 'https://www.linkedin.com/posts/0chandansharma_certificate-activity-6889203396520251392-Oy9G'
    }
  ];
  
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <SectionTitle title="Certifications & Achievements" subtitle="Recognition for excellence" />
        
        <motion.div 
          className="certifications-container"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.6 }
            }
          }}
        >
          <div className="certifications-wrapper">
            <div className="certifications-slider">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="certifications-swiper"
              >
                {certifications.map((cert) => (
                  <SwiperSlide key={cert.id} className="certification-slide">
                    <div className="certification-card">
                      <div className="certification-image">
                        <img src={cert.image} alt={cert.title} />
                        <div className="certification-overlay">
                          <FaAward className="certification-icon" />
                        </div>
                      </div>
                      
                      <div className="certification-content">
                        <h3 className="certification-title">{cert.title}</h3>
                        
                        <div className="certification-meta">
                          <span className="certification-issuer">{cert.issuer}</span>
                          <span className="certification-date">{cert.date}</span>
                        </div>
                        
                        <p className="certification-description">{cert.description}</p>
                        
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="certification-link"
                        >
                          View Certificate <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              <div className="swiper-button-prev certification-nav-button">
                <FaChevronLeft />
              </div>
              <div className="swiper-button-next certification-nav-button">
                <FaChevronRight />
              </div>
            </div>
          </div>
          
          <div className="certifications-info">
            <div className="certifications-count">
              <span className="count-number">{certifications.length}</span>
              <span className="count-label">Achievements</span>
            </div>
            
            <p className="certifications-text">
              These certifications and achievements represent my commitment to excellence and continuous growth in the field of AI research and optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;