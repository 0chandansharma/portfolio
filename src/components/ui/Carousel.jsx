import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({
  children,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = '',
  slideClassName = '',
  slideVariants = {},
  effect = 'slide'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const autoPlayRef = useRef(null);
  const totalSlides = React.Children.count(children);

  // Default slide variants
  const defaultSlideVariants = {
    slide: {
      incoming: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
      }),
      active: {
        x: 0,
        opacity: 1,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 }
        }
      },
      outgoing: (direction) => ({
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 }
        }
      })
    },
    fade: {
      incoming: { opacity: 0 },
      active: {
        opacity: 1,
        transition: { duration: 0.7 }
      },
      outgoing: {
        opacity: 0,
        transition: { duration: 0.7 }
      }
    },
    zoom: {
      incoming: { opacity: 0, scale: 0.8 },
      active: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7 }
      },
      outgoing: {
        opacity: 0,
        scale: 1.2,
        transition: { duration: 0.7 }
      }
    }
  };

  // Choose variant based on effect prop or use custom variants
  const variants = Object.keys(slideVariants).length > 0 
    ? slideVariants 
    : defaultSlideVariants[effect] || defaultSlideVariants.slide;

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const play = () => {
      autoPlayRef.current = setTimeout(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, interval);
    };
    
    play();
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [autoPlay, currentIndex, interval, totalSlides]);

  // Methods to control carousel
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    
    // Reset auto play timer
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
      if (autoPlay) {
        autoPlayRef.current = setTimeout(() => {
          setDirection(1);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, interval);
      }
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="incoming"
            animate="active"
            exit="outgoing"
            className={`carousel-slide ${slideClassName}`}
          >
            {React.Children.toArray(children)[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {showArrows && totalSlides > 1 && (
        <>
          <motion.button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </motion.button>
          
          <motion.button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </motion.button>
        </>
      )}
      
      {showDots && totalSlides > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;