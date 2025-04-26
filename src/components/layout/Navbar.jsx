import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from '../shared/ThemeToggle';
import { FaRobot, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', to: 'hero', offset: 0 },
    { name: 'About', to: 'about', offset: -70 },
    { name: 'Skills', to: 'skills', offset: -70 },
    { name: 'Experience', to: 'experience', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Certifications', to: 'certifications', offset: -70 },
    { name: 'Blog', to: 'blog', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      x: '100%',
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container navbar-content">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="hero" smooth={true} duration={500}>
            <FaRobot className="logo-icon" />
            <span>Chandan Sharma</span>
          </Link>
        </motion.div>

        <div className="nav-right">
          <div className="desktop-menu">
            {navItems.map((item) => (
              <motion.div 
                key={item.name} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  spy={true}
                  activeClass="active"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <ThemeToggle />
          
          <div className="mobile-menu-toggle">
            <motion.button 
              onClick={toggleMenu} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
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
            {navItems.map((item) => (
              <motion.div 
                key={item.name}
                variants={navItemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  spy={true}
                  activeClass="active"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;