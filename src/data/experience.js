// data/experience.js with added logo paths and links
const workExperience = [
  {
    id: 1,
    title: 'Senior Researcher',
    company: 'Fujitsu Research',
    location: 'Bangalore, India',
    duration: 'July 2023 - Present',
    description: 'Specializing in AI algorithms and library optimization for next-generation supercomputing, focusing on the DC-CPU MONAKA (ARM-SVE-CPU) successor to the FUGAKU Supercomputer.',
    logo: '/assets/images/Experience/fuji.png', // Add path to company logo
    link: 'https://www.fujitsu.com/global/about/research/', // Add company website link
    details: [
      'Optimized oneDAL for ARM processor which improved machine learning workload by 10x to 200x',
      'Contributed to Open Source community through strategic pull requests and technical discussions',
      'Leading The Unified Acceleration (UXL) Foundation collaborations from Fujitsu',
      'Presented technical work to UXL Foundation Special Interest Group with 300+ global members',
      'Received IP Innovation award and grants from Fujitsu Global for threading optimization research',
      'Collaborated with global teams to design new workflows with OpenBLAS and OpenMP Task Based implementations',
      'Led Threading as a Service research and implementation from scratch for ARM many-core processors',
      'Published work in LINARO, UXL (Linux Foundation), across various technical publications',
      'Optimized time series models and Kalman Filters for ARM architecture'
    ],
    technologies: ['ARM', 'SVE', 'OpenBLAS', 'OpenMP', 'oneDAL', 'oneAPI', 'Threading', 'ML Optimization', 'HPC'],
    link: 'https://github.com/oneapi-src/oneDAL/pull/2614'
  },
  {
    id: 2,
    title: 'Software Engineer ML',
    company: 'Sony India Software Center',
    location: 'Bangalore, India',
    duration: 'Feb 2022 - June 2023',
    description: 'Worked on Smart Camera Platform with IMX500, the world\'s first Intelligent Vision Sensor with edge processing functionality, enabling high-speed edge AI processing without needing a round trip to a server.',
    logo: '/assets/images/Experience/Sony.png', // Add path to company logo
    link: 'https://www.sony.co.in/electronics/support', // Add company website link
    details: [
      'Developed backend services for cloud-based platform to support edge AI device creation and management',
      'Implemented efficient benchmarking systems for AI models on IMX500 target devices',
      'Built robust CICD pipelines using Git actions and Jenkins for microservices deployment',
      'Optimized AI models for edge deployment through quantization, pruning, and DSP conversion',
      'Configured camera device farmhouse with servers for IMX500 chips testing and validation',
      'Received Best Team Award for Smart Camera Platform project contributions',
      'Created comprehensive documentation and user guides for public release',
      'Managed AKS Kubernetes deployments for all microservices',
      'Implemented stringent code quality standards for OSS and SCA compliance'
    ],
    technologies: ['Python', 'Edge AI', 'Docker', 'Kubernetes', 'IMX500', 'Computer Vision', 'Model Optimization', 'CICD', 'Git', 'Jenkins'],
    link: 'https://www.linkedin.com/posts/0chandansharma_sony-activity-7064656892068839424-KIap'
  },
  {
    id: 3,
    title: 'CTO',
    company: 'Metashape.ai',
    location: 'NY, USA',
    duration: 'Feb 2022 - June 2023',
    description: 'Build Finace Analysis Platform',
    logo: '/assets/images/Experience/metashape.png', // Add path to company logo
    link: 'https://www.sony.co.in/electronics/support', // Add company website link
    details: [
      'Developed backend services for cloud-based platform to support edge AI device creation and management',
      'Implemented efficient benchmarking systems for AI models on IMX500 target devices',
      'Built robust CICD pipelines using Git actions and Jenkins for microservices deployment',
      'Optimized AI models for edge deployment through quantization, pruning, and DSP conversion',
      'Configured camera device farmhouse with servers for IMX500 chips testing and validation',
      'Received Best Team Award for Smart Camera Platform project contributions',
      'Created comprehensive documentation and user guides for public release',
      'Managed AKS Kubernetes deployments for all microservices',
      'Implemented stringent code quality standards for OSS and SCA compliance'
    ],
    technologies: ['Python', 'Edge AI', 'Docker', 'Kubernetes', 'IMX500', 'Computer Vision', 'Model Optimization', 'CICD', 'Git', 'Jenkins'],
    link: 'https://www.linkedin.com/posts/0chandansharma_sony-activity-7064656892068839424-KIap'
  },
  {
    id: 4,
    title: 'AI Developer',
    company: 'SandLogic Technologies',
    location: 'Bangalore, India',
    duration: 'Sept 2019 - Feb 2022',
    description: 'Led AI solution development across various industries including manufacturing, retail, and healthcare, while mentoring junior team members and participating in strategic pre-sales activities.',
    logo: '/assets/images/Experience/sandlogic.png', // Add path to company logo
    link: 'https://www.sandlogic.com/', // Add company website link (replace with actual URL)
    details: [
      'Led team of 15+ developers and provided technical guidance on AI/ML projects',
      'Engaged in client interactions, requirements gathering, and pre-sales solution presentations',
      'Designed and developed end-to-end AI solutions including OCR/ICR systems, computer vision applications, and safety monitoring systems',
      'Created PhotoShield system for confidential screen protection during presentations',
      'Developed TXTR, a complete OCR/ICR/IDP solution for handwritten and system-generated texts',
      'Built OutOfDanger safety monitoring system using computer vision for PPE detection and social distancing',
      'Implemented Warehouse.AI for cold storage inventory management using computer vision',
      'Developed efficient face recognition systems capable of working at distances up to 40 feet',
      'Created AutoML pipeline for supervised learning with integration to deep learning models'
    ],
    technologies: ['Python', 'Computer Vision', 'OCR', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Flask', 'Object Detection', 'Face Recognition', 'AutoML'],
    link: null
  },
];

const education = [
  {
    id: 1,
    title: 'M.Tech in Computer Science & Engineering',
    institution: 'Indian Institute of Technology, DHN',
    location: 'India',
    duration: '2017 - 2019',
    description: 'Specialized in Information Systems with emphasis on clustering algorithms, fuzzy logic, and applications of AI in self-driving vehicles and energy prediction.',
    logo: 'assets/images/Experience/IIT.png', // Add path to institution logo
    link: 'https://www.iitism.ac.in/', // Add institution website link
    details: [
      'Thesis: Determining the optimal number of clusters in Stream data using real-time Fuzzy c-means, optimized with Genetic algorithm',
      'Project: Worked with Texas Instruments Auto-motive mm-Wave Radar Sensor (AWR1642) for data collection and speed control of self-driving cars',
      'Project: Energy consumption prediction in households using real-time temperature and humidity data with machine learning algorithms',
      'Teaching Assistant for Data Structure, Algorithms, Machine Learning, and Operating System courses',
      'Assisted 180+ undergraduate/postgraduate students in programming skills development',
      'Designed assignments and examination questions/papers for technical courses',
      'Completed coursework in Advanced Algorithms, Cryptography, Data Mining, Mobile And Wireless Network Security, and High Performance Computing',
      'CGPA: 7.5/10'
    ],
    technologies: ['Machine Learning', 'Fuzzy Logic', 'Clustering Algorithms', 'Data Mining', 'C++', 'Python', 'Radar Sensor Technology', 'Signal Processing'],
    link: null
  },
  {
    id: 2,
    title: 'B.Tech in Computer Science & Engineering',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University',
    location: 'India',
    duration: '2011 - 2015',
    description: 'Gained foundational knowledge in computer science with a focus on software development, mobile applications, and system programming.',
    logo: 'assets//images/Experience/aktu.png', // Add path to institution logo
    link: 'https://aktu.ac.in/', // Add institution website link
    details: [
      'Thesis Project: Developed "INPUT TO PC" Android application to function as a laptop touchpad',
      'Participated in various hackathons and coding competitions throughout the degree program',
      'Completed internships at BSNL and QOS Technology to gain practical industry experience',
      'Learned core computer science concepts including data structures, algorithms, operating systems, computer networks, and database management',
      'Developed strong programming skills in C, C++, and Java',
      'Worked on various mini-projects including a Line Follower Robot using Arduino and a Private Cloud using Eucalyptus'
    ],
    technologies: ['Java', 'Android', 'C/C++', 'Arduino', 'Cloud Computing', 'Mobile App Development', 'Software Engineering'],
    link: null
  },
];

export { workExperience, education };