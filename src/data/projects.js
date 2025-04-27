// data/projects.js with three categories and multiple screenshots
const platformProjects = [
  {
    id: 1,
    title: 'oneDAL ARM Optimization',
    description: 'Optimized Intel oneDAL for ARM processor, achieving 10x to 200x performance improvement in machine learning workloads.',
    image: '/assets/images/projects/project1.png',
    screenshots: [
      '/assets/images/projects/screenshots/onedal-arm.jpg',
      '/assets/images/projects/screenshots/onedal-arm-results.jpg',
      '/assets/images/projects/screenshots/onedal-arm-benchmark.jpg'
    ],
    tags: ['Performance Optimization', 'oneDAL', 'ARM', 'Machine Learning'],
    githubLink: 'https://github.com/oneapi-src/oneDAL/pull/2614',
    liveLink: 'https://www.linkedin.com/posts/0chandansharma_smart-camera-platform-activity-7064656892068839424-KIap',
    details: 'Developed optimization techniques for Intel oneDAL library specifically for ARM architecture, focusing on ML workloads. Achieved significant performance gains through novel threading approaches and memory management optimizations.',
    technologies: ['C++', 'ARM', 'oneDAL', 'ML Algorithms', 'Performance Tuning'],
    results: 'Performance improvements ranging from 10x to 200x compared to baseline implementations, enabling efficient ML workloads on ARM-based systems.',
    year: '2023'
  },
  {
    id: 2,
    title: 'Threading as a Service',
    description: 'Developed a novel threading service implementation for ARM many-core processors, optimizing parallel computing workloads.',
    image: '/assets/images/projects/project2.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/threading-service.jpg',
      '/assets/images/projects/screenshots/threading-service-diagram.jpg',
      '/assets/images/projects/screenshots/threading-service-performance.jpg'
    ],
    tags: ['Threading', 'ARM', 'Parallel Computing', 'HPC'],
    githubLink: '#',
    liveLink: '#',
    details: 'Designed and implemented a Threading as a Service (TaaS) system for ARM many-core processors. Created a service layer that optimizes thread management, scheduling, and synchronization for high-performance computing applications.',
    technologies: ['C/C++', 'ARM', 'Parallel Programming', 'System Architecture'],
    results: 'Enabled more efficient utilization of many-core processors, reducing overhead and improving application performance in heavily threaded workloads.',
    year: '2023'
  },
  {
    id: 3,
    title: 'Smart Camera Platform',
    description: 'Contributed to Sony\'s IMX500 intelligent vision sensor platform, enabling edge AI processing for computer vision applications.',
    image: '/assets/images/projects/project3.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/sony-imx500.jpg',
      '/assets/images/projects/screenshots/sony-imx500-demo.jpg',
      '/assets/images/projects/screenshots/sony-imx500-architecture.jpg'
    ],
    tags: ['Edge AI', 'Computer Vision', 'IMX500', 'Python'],
    githubLink: '#',
    liveLink: '#',
    details: 'Worked on the development of Sony\'s smart camera platform featuring the IMX500 intelligent vision sensor. Created backend services and benchmarking systems for AI models on target devices.',
    technologies: ['Python', 'Docker', 'Kubernetes', 'Computer Vision', 'Edge AI'],
    results: 'Successfully deployed a production-ready platform supporting edge AI device creation, management, and optimization.',
    year: '2022'
  }
];

const productProjects = [
  {
    id: 4,
    title: 'TXTR - Handwritten Text Recognition',
    description: 'Built a complete OCR/ICR/IDP solution for handwritten and printed text recognition with high accuracy.',
    image: '/assets/images/projects/project4.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/txtr.jpg',
      '/assets/images/projects/screenshots/txtr-handwriting.jpg',
      '/assets/images/projects/screenshots/txtr-interface.jpg'
    ],
    tags: ['OCR', 'Deep Learning', 'Computer Vision', 'NLP'],
    githubLink: '#',
    liveLink: '#',
    details: 'Developed TXTR, a comprehensive OCR/ICR/IDP solution that processes both handwritten and system-generated texts. Incorporated advanced image processing and deep learning techniques for enhanced recognition accuracy.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLP'],
    results: 'Achieved high accuracy in text recognition across diverse document types, including handwritten notes, forms, and structured documents.',
    year: '2021'
  },
  {
    id: 5,
    title: 'OutOfDanger - Safety Monitoring',
    description: 'Developed a safety monitoring system using computer vision to detect PPE, face masks, and social distancing violations.',
    image: '/assets/images/projects/project5.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/outofdanger.jpg',
      '/assets/images/projects/screenshots/outofdanger-detection.jpg',
      '/assets/images/projects/screenshots/outofdanger-dashboard.jpg'
    ],
    tags: ['Computer Vision', 'Safety', 'Object Detection'],
    githubLink: '#',
    liveLink: '#',
    details: 'Created OutOfDanger, a computer vision-based safety monitoring system for industrial and public spaces. Implemented detection algorithms for PPE compliance, face mask usage, and social distancing enforcement.',
    technologies: ['Python', 'TensorFlow', 'YOLO', 'OpenCV', 'Edge Computing'],
    results: 'Successfully deployed in multiple industrial settings, improving workplace safety compliance and reducing incident rates.',
    year: '2020'
  },
  {
    id: 6,
    title: 'Warehouse.AI - Inventory Management',
    description: 'Created an AI engine to analyze inbound pallets on conveyor belts for warehouse management systems.',
    image: '/assets/images/projects/project6.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/warehouse-ai.jpg',
      '/assets/images/projects/screenshots/warehouse-ai-detection.jpg',
      '/assets/images/projects/screenshots/warehouse-ai-dashboard.jpg'
    ],
    tags: ['Computer Vision', 'Object Detection', 'OCR'],
    githubLink: '#',
    liveLink: '#',
    details: 'Designed Warehouse.AI, an intelligent inventory management system for cold storage facilities. Implemented computer vision algorithms to analyze inbound pallets on conveyor belts, automatically identifying and logging inventory items.',
    technologies: ['Python', 'Computer Vision', 'OCR', 'Object Detection', 'API Integration'],
    results: 'Reduced manual inventory processing time by 85% while maintaining high accuracy in item identification and tracking.',
    year: '2020'
  }
];

const personalProjects = [
  {
    id: 7,
    title: 'PhotoShield - Screen Protection',
    description: 'Developed system for confidential screen protection during presentations in sensitive environments.',
    image: '/assets/images/projects/project7.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/photoshield.jpg',
      '/assets/images/projects/screenshots/photoshield-demo.jpg',
      '/assets/images/projects/screenshots/photoshield-settings.jpg'
    ],
    tags: ['Privacy', 'Computer Vision', 'Real-time Processing'],
    githubLink: '#',
    liveLink: '#',
    details: 'Created PhotoShield, a privacy-focused system that protects confidential information during presentations. Implemented real-time screen analysis and content masking algorithms.',
    technologies: ['Python', 'OpenCV', 'Image Processing', 'Privacy Protection'],
    results: 'Enabled secure presentations in mixed-audience environments by automatically detecting and obscuring sensitive information on-screen.',
    year: '2019'
  },
  {
    id: 8,
    title: 'Face Recognition System',
    description: 'Built advanced face recognition system capable of operating at distances up to 40 feet with high accuracy.',
    image: '/assets/images/projects/project8.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/face-recognition.jpg',
      '/assets/images/projects/screenshots/face-recognition-demo.jpg',
      '/assets/images/projects/screenshots/face-recognition-interface.jpg'
    ],
    tags: ['Face Recognition', 'AI', 'Security'],
    githubLink: '#',
    liveLink: '#',
    details: 'Developed a long-range face recognition system with advanced capabilities for security applications. Implemented novel techniques for recognition at extended distances while maintaining high accuracy.',
    technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Face Recognition Algorithms'],
    results: 'Successfully deployed in security applications with recognition capabilities at up to 40 feet distance, achieving over 95% accuracy under varying lighting conditions.',
    year: '2019'
  },
  {
    id: 9,
    title: 'AutoML Pipeline',
    description: 'Created automated machine learning pipeline for supervised learning with deep learning integration.',
    image: '/assets/images/projects/project9.jpg',
    screenshots: [
      '/assets/images/projects/screenshots/automl.jpg',
      '/assets/images/projects/screenshots/automl-pipeline.jpg',
      '/assets/images/projects/screenshots/automl-results.jpg'
    ],
    tags: ['AutoML', 'Pipeline', 'Deep Learning'],
    githubLink: '#',
    liveLink: '#',
    details: 'Developed an end-to-end AutoML pipeline for supervised learning applications. Implemented automated feature engineering, model selection, hyperparameter tuning, and integration with deep learning frameworks.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow'],
    results: 'Reduced model development time by 70% while maintaining or improving model performance across various ML tasks.',
    year: '2018'
  }
];

// Export the complete projects data organized by categories
const projectsData = {
  platforms: platformProjects,
  products: productProjects,
  projects: personalProjects
};

export default projectsData;