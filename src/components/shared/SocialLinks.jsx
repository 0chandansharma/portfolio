import React from 'react';
import { FaLinkedinIn, FaGithub, FaMediumM, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/0chandansharma/', ariaLabel: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/0chandansharma', ariaLabel: 'GitHub' },
    { icon: <FaMediumM />, url: 'https://medium.com/@csiitism', ariaLabel: 'Medium' },
    { icon: <FaTwitter />, url: '#', ariaLabel: 'Twitter' },
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.ariaLabel}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;