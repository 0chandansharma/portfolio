import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
// Import required modules
import { EffectCards, Pagination, Autoplay } from 'swiper';

const AboutImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  
  // Add all your about images here
  const aboutImages = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/assets/images/About/about.png`,
      alt: "About Chandan 1"
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/assets/images/About/about.png`,
      alt: "About Chandan 2"
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/assets/images/About/about.png`,
      alt: "About Chandan 3"
    },
    {
        id: 4,
        src: `${process.env.PUBLIC_URL}/assets/images/About/about.png`,
        alt: "About Chandan 4"
      },
    // Add more images as needed
  ];

  // Open the modal with a specific image
  const openModal = (index) => {
    setActiveImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate between images in the modal
  const navigateImage = (direction) => {
    if (direction === 'next') {
      setActiveImage((prev) => (prev + 1) % aboutImages.length);
    } else {
      setActiveImage((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
    }
  };

  return (
    <div className="about-gallery-container">
      <motion.div 
        className="about-image-card-gallery"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCards, Pagination, Autoplay]}
          className="about-swiper"
        >
          {aboutImages.map((image, index) => (
            <SwiperSlide key={image.id} className="about-slide">
              <div className="about-image-card">
                <div className="about-image-container">
                  <img src={image.src} alt={image.alt} />
                  {/* <motion.button 
                    className="expand-button"
                    onClick={() => openModal(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExpand />
                  </motion.button> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      
      {/* Fullscreen Modal */}
      {isModalOpen && (
        <motion.div 
          className="image-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            
            <div className="modal-image-container">
              <img 
                src={aboutImages[activeImage].src} 
                alt={aboutImages[activeImage].alt} 
                className="modal-image"
              />
            </div>
            
            <div className="modal-navigation">
              <motion.button 
                className="nav-button prev"
                onClick={() => navigateImage('prev')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              
              <span className="image-counter">
                {activeImage + 1} / {aboutImages.length}
              </span>
              
              <motion.button 
                className="nav-button next"
                onClick={() => navigateImage('next')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AboutImageGallery;