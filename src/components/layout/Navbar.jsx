import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-scroll';
import { 
  FaBrain, 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaCode, 
  FaBriefcase, 
  FaProjectDiagram, 
  FaCertificate, 
  FaRss, 
  FaEnvelope 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const headerRef = useRef(null);
  
  // Define navigation items with modern icons, memoized to avoid recreating on each render
  const navItems = useMemo(() => [
    { name: 'Home', to: 'hero', offset: 0, icon: <FaHome /> },
    { name: 'About', to: 'about', offset: -70, icon: <FaUserAlt /> },
    { name: 'Skills', to: 'skills', offset: -70, icon: <FaCode /> },
    { name: 'Experience', to: 'experience', offset: -70, icon: <FaBriefcase /> },
    { name: 'Projects', to: 'projects', offset: -70, icon: <FaProjectDiagram /> },
    { name: 'Certifications', to: 'certifications', offset: -70, icon: <FaCertificate /> },
    { name: 'Blog', to: 'blog', offset: -70, icon: <FaRss /> },
    { name: 'Contact', to: 'contact', offset: -70, icon: <FaEnvelope /> },
  ], []); // Empty dependency array means this only gets created once

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Check if scrolled
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check which section is in view to highlight it in the navbar
      const sections = navItems.map(item => document.getElementById(item.to));
      const currentSection = sections.findIndex(section => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100;
      });
      
      if (currentSection !== -1) {
        setActiveLink(navItems[currentSection].to);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // Now navItems is memoized, it won't change on every render

  // Navbar animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  // Mobile menu animation
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  // Mobile menu item animation
  const mobileItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-bg"></div>
      
      <div className="container navbar-content">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="hero" smooth={true} duration={500}>
            <div className="logo-container">
              <FaBrain className="logo-icon" />
              <div className="logo-text">
                <span className="logo-name">Chandan</span>
                <span className="logo-surname">Sharma</span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="nav-right">
          <div className="desktop-menu">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  spy={true}
                  activeClass="active"
                  className={activeLink === item.to ? 'active' : ''}
                  onSetActive={() => setActiveLink(item.to)}
                >
                  <motion.div className="nav-item">
                    {activeLink === item.to && (
                      <motion.div 
                        className="active-indicator"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mobile-menu-toggle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-menu-inner">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name}
                  className="mobile-menu-item"
                  variants={mobileItemVariants}
                  custom={index}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={item.offset}
                    spy={true}
                    activeClass="active"
                    className={activeLink === item.to ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="mobile-item-content">
                      <div className="mobile-item-icon">
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;