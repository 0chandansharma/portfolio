import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

const Blog = () => {
  const [ref, controls] = useScrollAnimation();
  
  const blogPosts = [
    {
      id: 1,
      title: 'Step by Step Machine Learning: Linear Regression',
      description: 'Technical & Mathematical Explanation of Linear Regression Algorithm',
      date: 'July 15, 2023',
      image: 'assets/images/projects/project1.png',
      link: 'https://blog-en.fltech.dev/entry/2024/10/25/onedal-arm-ai-oss-framework-acceleration-fujitsu-monaka-en'
    },
    {
      id: 2,
      title: 'Step by Step Machine Learning: Logistic Regression',
      description: 'Technical & Mathematical Explanation of Logistic Regression Algorithm',
      date: 'August 2, 2023',
      image: '/assets/images/blog/blog2.jpg',
      link: 'https://medium.com/@deek.sha.rma/step-by-step-machine-learning-logistic-regression-d89644434353'
    },
    {
      id: 3,
      title: 'Step by Step Machine Learning: K Nearest Neighbours',
      description: 'Technical & Mathematical Explanation of K Nearest Neighbours Algorithm',
      date: 'August 18, 2023',
      image: '/assets/images/blog/blog3.jpg',
      link: 'https://medium.com/@deek.sha.rma/step-by-step-machine-learning-k-nearest-neighbours-a2d601684ab1'
    },
    {
      id: 4,
      title: 'Step by Step Machine Learning: Decision Tree',
      description: 'Technical & Mathematical Explanation of Decision Tree Algorithm',
      date: 'September 5, 2023',
      image: '/assets/images/blog/blog4.jpg',
      link: 'https://medium.com/@deek.sha.rma/step-by-step-machine-learning-decision-tree-716c7475fc7f'
    },
    {
      id: 5,
      title: 'Step-by-Step Machine Learning: Naive Bayes',
      description: 'Technical & Mathematical Explanation of Naive Bayes Algorithm',
      date: 'September 20, 2023',
      image: '/assets/images/blog/blog5.jpg',
      link: 'https://medium.com/@deek.sha.rma/step-by-step-machine-learning-naive-bayes-fd40b2abfdd9'
    },
    {
      id: 6,
      title: 'Step-by-Step Machine Learning: Support Vector Machine',
      description: 'Technical & Mathematical Explanation of Support Vector Machine Algorithm',
      date: 'October 10, 2023',
      image: '/assets/images/blog/blog6.jpg',
      link: 'https://medium.com/@deek.sha.rma/step-by-step-machine-learning-support-vector-machine-e824915a803c'
    },
    {
      id: 7,
      title: 'Step-by-Step Machine Learning: Random Forest',
      description: 'Technical & Mathematical Explanation of Random Forest Algorithm',
      date: 'October 25, 2023',
      image: '/assets/images/blog/blog7.jpg',
      link: 'https://medium.com/@deek.sha.rma/step-by-step-machine-learning-random-forest-1bef0d21019e'
    },
    {
      id: 8,
      title: 'Step-by-Step Machine Learning: Adaboost',
      description: 'Technical & Mathematical Explanation of Adaboost Algorithm',
      date: 'November 12, 2023',
      image: '/assets/images/blog/blog8.jpg',
      link: 'https://medium.com/@deek.sha.rma/step-by-step-machine-learning-adaboost-6b82d4d6e360'
    },
    {
      id: 9,
      title: 'Lessons Learned from the "ChatGPT Prompt Engineering for Developers" Course',
      description: 'A summary of the lessons I learned from the "ChatGPT Prompt Engineering for Developers" Course by Andrew NG',
      date: 'December 5, 2023',
      image: '/assets/images/blog/blog9.jpeg',
      link: 'https://medium.com/@deek.sha.rma/lessons-learned-from-the-chatgpt-prompt-engineering-for-developers-course-9a25ff786a75'
    }
  ];
  
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <SectionTitle title="Blog" subtitle="My Technical Articles" />
        
        <motion.div 
          className="blog-container"
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
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="blog-slider"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="blog-card">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="blog-image"
                  />
                  
                  <div className="blog-info">
                    <span className="blog-date">{post.date}</span>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-description">{post.description}</p>
                    
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      Read Article <FaArrowRight />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <motion.div 
            className="blog-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a 
              href="https://medium.com/@csiitism" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn primary-btn"
            >
              View All Articles
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;