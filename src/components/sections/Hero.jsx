import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SocialLinks from '../shared/SocialLinks';
import { FaArrowDown, FaCode, FaBrain, FaServer } from 'react-icons/fa';
import * as THREE from 'three';

const HeroHeader = () => {
  const canvasRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Chandan Sharma";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true, 
      antialias: true 
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: new THREE.Color(0x3a55e8),
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const techBadges = [
    { icon: <FaCode />, text: "AI Optimization" },
    { icon: <FaBrain />, text: "Threading" },
    { icon: <FaServer />, text: "Performance" }
  ];

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="particles-canvas" />
      
      <div className="hero-orbs">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
      </div>
      
      <div className="hero-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
      
      <div className="container hero-content">
        <div className="text-content">
          <motion.div className="hero-badges">
            {techBadges.map((badge, index) => (
              <motion.div 
                key={index}
                className="tech-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {badge.icon}
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <h1 className="hero-title typing-effect">
            <span>{displayText}</span>
            <span className={`cursor ${showCursor ? 'blink' : ''}`}>{isTypingComplete ? '' : '|'}</span>
          </h1>
          
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isTypingComplete ? "visible" : "hidden"}
          >
            <motion.h2 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Senior AI Researcher @ Fujitsu Research
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Specializing in AI/ML/LLM frameworks optimization for performance, focusing on threading for many-core processors, quantization, and energy-efficient solutions
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <Link to="contact" smooth={true} duration={800} offset={-70}>
                <motion.button 
                  className="primary-btn glow-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              
              <a href="/assets/pdfs/chandan_sharma_resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  className="secondary-btn outline-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.button>
              </a>
            </motion.div>
            
            <motion.div 
              className="social-links-container" 
              variants={itemVariants}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          style={{ 
            x: mousePosition.x * 20, 
            y: mousePosition.y * 20 
          }}
        >
          <div className="hero-image-container">
            <div className="blob-container">
              <div className="blob-gradient-overlay"></div>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fill="#3a55e8" 
                  d="M42.7,-67.2C55.9,-59.3,67.7,-48.4,74.9,-34.6C82.1,-20.7,84.8,-3.8,80.3,11.1C75.8,25.9,64.2,38.8,51.3,49.3C38.4,59.9,24.3,68.2,8.8,73.2C-6.7,78.1,-23.6,79.7,-38.3,73.4C-53,67.1,-65.5,52.9,-74.2,36.6C-82.9,20.3,-87.7,1.8,-84.2,-14.7C-80.7,-31.2,-68.9,-45.7,-54.8,-53.8C-40.6,-61.9,-24.1,-63.6,-8.6,-65.8C6.8,-68,22.1,-70.7,35.7,-70.2C49.3,-69.7,69.3,-65.9,75.5,-54.5C81.8,-43.1,74.3,-24.3,71.5,-7.4C68.7,9.5,70.4,25.5,66.8,40.8C63.1,56.1,54.2,70.7,41.5,78.2C28.9,85.7,12.8,86.1,-2.2,84.1C-17.2,82.1,-31.2,77.6,-47.2,72.4C-63.2,67.1,-81.3,61.1,-83.9,48.6C-86.6,36.1,-73.9,17.1,-68.4,1.3C-62.9,-14.5,-64.6,-27,-59.6,-37.2C-54.5,-47.4,-42.6,-55.3,-30.4,-63.5C-18.1,-71.7,-5.5,-80.2,4.9,-78.8C15.3,-77.5,29.6,-66.3,38.1,-58.6C46.6,-50.9,49.3,-46.7,54.8,-39.5C60.3,-32.3,68.6,-22,69.9,-10.8C71.3,0.4,65.7,12.6,61.4,25.1C57.2,37.7,54.2,50.7,45.1,55.6C36,60.5,20.8,57.3,7.4,55.5C-6,53.8,-18.6,53.4,-32.7,51.3C-46.8,49.2,-62.5,45.3,-69.9,36C-77.3,26.7,-76.5,12,-78.3,-4.5C-80,-21,-84.3,-39.3,-80.5,-55.3C-76.6,-71.3,-64.7,-85.1,-49.9,-85.3C-35.1,-85.6,-17.5,-72.4,-0.2,-69.5C17,-66.7,34,-74.2,46.9,-70.6C59.8,-66.9,68.7,-52.2,74.8,-37C80.9,-21.9,84.2,-6.3,79.8,5.9C75.4,18.1,63.3,26.8,55.3,40.2C47.4,53.6,43.6,71.7,34.1,79.5C24.6,87.3,9.5,84.9,-5.5,85.1C-20.4,85.3,-35.2,88.2,-48.3,83.6C-61.3,79,-72.6,67,-79.1,52.8C-85.6,38.5,-87.5,22,-84.6,7.8C-81.6,-6.5,-73.8,-18.4,-65.2,-28.1C-56.5,-37.8,-47,-45.3,-36.6,-51.6C-26.2,-57.9,-14.9,-63.1,-1.2,-64.8C12.5,-66.5,27.6,-64.8,39.8,-58.8C52,-52.9,61.3,-42.8,68.8,-30.7C76.2,-18.6,81.9,-4.6,79.5,7.8C77.1,20.2,66.4,31,57.6,43.5C48.8,56,41.7,70.2,30.3,76.6C19,83,3.3,81.6,-9.5,76.5C-22.2,71.5,-31.9,62.7,-43.1,55.9C-54.3,49.1,-67,44.2,-73.9,35C-80.9,25.7,-82.2,12.1,-81.5,-1.2C-80.8,-14.5,-78.1,-27.5,-71.4,-37.6C-64.8,-47.7,-54.1,-54.9,-42.6,-59C-31.1,-63.1,-18.8,-64,-3.3,-69.2C12.2,-74.3,31,-83.7,42,-80.1C53.1,-76.6,56.5,-60.1,62.8,-46.2C69.1,-32.3,78.3,-21,78.3,-9.7C78.3,1.6,69.1,12.8,63.2,25.6C57.3,38.3,54.7,52.7,45.2,58.8C35.8,64.9,19.4,62.8,6.1,59C-7.2,55.2,-17.4,49.8,-31.7,48.1C-46.1,46.5,-64.5,48.7,-72.6,41.4C-80.7,34.1,-78.4,17.1,-75.1,2.6C-71.7,-11.9,-67.3,-23.8,-60.8,-34.2C-54.3,-44.7,-45.7,-53.6,-35.1,-59.3C-24.6,-65.1,-12.3,-67.7,0.9,-70.1C14.1,-72.5,28.1,-74.7,41.3,-71.7C54.4,-68.7,66.7,-60.4,70.6,-48.7C74.6,-37,70.4,-21.8,67.3,-8.5C64.3,4.7,62.5,15.9,59.3,28.2C56,40.5,51.2,53.9,41.5,60.1C31.8,66.3,17.4,65.5,3.7,64.6C-10,63.7,-23.1,62.8,-35.3,58.3C-47.6,53.7,-58.9,45.4,-65.3,34C-71.6,22.6,-73,8.1,-72.8,-6C-72.7,-20.1,-71,-33.8,-64.3,-43.9C-57.7,-54,-46.1,-60.3,-34.3,-66.5C-22.6,-72.6,-10.8,-78.5,1.9,-80.2C14.6,-81.9,28.1,-79.3,40.3,-73.9C52.5,-68.5,63.3,-60.3,69.3,-49.1C75.2,-37.8,76.3,-23.6,77.7,-9.6C79.1,4.3,80.9,18.1,75.9,28.8C70.9,39.5,59.2,47,47.2,51.6C35.3,56.2,23.1,57.8,10.4,59.3C-2.3,60.7,-15.5,62.1,-29.5,61.7C-43.6,61.4,-58.4,59.3,-68.3,51.2C-78.3,43.2,-83.2,29.2,-86.7,14.5C-90.2,-0.3,-92.3,-15.9,-86.8,-27.9C-81.3,-39.8,-68.3,-48.1,-55.5,-53.8C-42.7,-59.4,-30.1,-62.4,-17.4,-65.7C-4.7,-69.1,8.2,-72.8,20.9,-72.1C33.7,-71.4,46.4,-66.3,55.9,-57.7C65.4,-49.1,71.9,-37,75.4,-24.3C78.8,-11.6,79.2,1.6,74.6,12.3C70,23.1,60.5,31.5,52,39.5C43.5,47.4,36,55,26.7,62.5C17.4,70.1,6.2,77.6,-5.3,78.6C-16.8,79.6,-28.5,74.1,-39.9,67.8C-51.3,61.5,-62.3,54.5,-70.7,44.2C-79.1,34,-84.9,20.6,-83.8,8.3C-82.8,-4.1,-74.9,-15.3,-67.7,-26.2C-60.5,-37.1,-54,-47.7,-44.5,-55.1C-35,-62.5,-22.5,-66.8,-10.1,-68.2C2.4,-69.7,14.8,-68.2,25.3,-64C35.8,-59.8,44.3,-52.8,55.1,-46.1C65.8,-39.3,78.6,-32.8,82.5,-22.5C86.5,-12.2,81.5,1.9,77.2,15.9C72.9,29.9,69.2,43.8,60.4,52.4C51.5,61,37.6,64.2,24.5,67.2C11.4,70.2,-0.9,72.9,-13.3,71.7C-25.8,70.4,-38.5,65.2,-49.2,57.3C-59.9,49.4,-68.6,38.9,-73.3,26.4C-78,13.9,-78.7,-0.6,-74.7,-13.1C-70.7,-25.7,-62,-36.4,-51.4,-43.3C-40.8,-50.3,-28.4,-53.6,-16.3,-58.1C-4.2,-62.7,7.6,-68.6,20.5,-71.1C33.3,-73.6,47.2,-72.8,57.3,-67C67.4,-61.2,73.7,-50.3,76.9,-38.5C80.1,-26.7,80.2,-13.9,80.2,-0.7C80.2,12.5,80.2,25.1,74,34.2C67.9,43.3,55.7,48.9,44.3,54.6C32.9,60.3,22.4,66,10.7,69.4C-1,72.7,-13.9,73.6,-27.2,72.6C-40.6,71.5,-54.3,68.5,-64.5,60.4C-74.7,52.4,-81.3,39.4,-82.9,25.8C-84.6,12.2,-81.2,-2,-76.4,-14.3C-71.6,-26.6,-65.4,-37,-56.4,-44.2C-47.4,-51.4,-35.7,-55.5,-24.5,-60.8C-13.3,-66.1,-2.6,-72.6,9,-74.3C20.7,-76.1,33.2,-73,42.2,-66.4" 
                  transform="translate(100 100)"
                />
              </svg>
              <div className="profile-image-container">
                <img src="/assets/images/chandan-nobg.png" alt="Chandan Sharma" className="profile-image" />
                <div className="profile-glow"></div>
              </div>
            </div>
            <div className="image-decorations">
              <div className="deco-circle circle-1"></div>
              <div className="deco-circle circle-2"></div>
              <div className="deco-line line-1"></div>
              <div className="deco-line line-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Link to="about" smooth={true} duration={800} offset={-70}>
          <FaArrowDown />
          <span>Scroll Down</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroHeader;