import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SocialLinks from '../shared/SocialLinks';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contact', to: 'contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <motion.div 
            className="footer-content"
            initial="hidden"
            animate="visible"
            variants={footerVariants}
          >
            <motion.div className="footer-logo" variants={itemVariants}>
              <h2>Chandan Sharma</h2>
              <p>Senior AI Researcher</p>
            </motion.div>
            
            <motion.div className="footer-links" variants={itemVariants}>
              <h3>Quick Links</h3>
              <ul>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div className="footer-contact" variants={itemVariants}>
              <h3>Contact Info</h3>
              <p>csiitism@gmail.com</p>
              <p>+91 9044632710</p>
              <p>Bangalore, India</p>
            </motion.div>
            
            <motion.div className="footer-social" variants={itemVariants}>
              <h3>Follow Me</h3>
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            © {new Date().getFullYear()} Chandan Sharma. All rights reserved. Made with <FaHeart className="heart-icon" /> and React.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;