import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedinIn } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, controls] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+91 9044632710',
      link: 'tel:+919044632710'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      info: 'csiitism@gmail.com',
      link: 'mailto:csiitism@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      info: 'Bangalore, India',
      link: 'https://maps.google.com/?q=Bangalore,India'
    },
    {
      icon: <FaLinkedinIn />,
      title: 'LinkedIn',
      info: 'Connect with me',
      link: 'https://www.linkedin.com/in/0chandansharma/'
    }
  ];
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionTitle title="Contact Me" subtitle="Get in touch" />
        
        <motion.div 
          className="contact-container"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="contact-info"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            <h3 className="contact-title">Let's talk about everything!</h3>
            <p>Don't like forms? Send me an email or connect on LinkedIn. I'll get back to you as soon as possible.</p>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === 'Location' || item.title === 'LinkedIn' ? '_blank' : ''}
                rel={item.title === 'Location' || item.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                className="contact-item"
                whileHover={{ x: 10 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  }
                }}
              >
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-item-info">
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="contact-form"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            <h3>Send me a message</h3>
            
            {submitMessage && (
              <motion.div 
                className={`submit-message ${submitMessage.type}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {submitMessage.text}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="primary-btn form-submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;