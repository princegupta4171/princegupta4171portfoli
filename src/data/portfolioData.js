export const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

export const stats = [
  { number: '6+',  label: 'Projects' },
  { number: '4',   label: 'Internships' },
  { number: '92%', label: 'ML Accuracy' },
];

export const skillCategories = [
  {
    icon: 'fas fa-code',
    title: 'Languages',
    tags: ['Python', 'JavaScript', 'Java', 'SQL'],
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Front-End',
    tags: ['React.js', 'HTML5', 'Streamlit'],
  },
  {
    icon: 'fas fa-server',
    title: 'Back-End',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: 'fas fa-database',
    title: 'Databases',
    tags: ['MongoDB', 'MySQL', 'Pinecone'],
  },
  {
    icon: 'fas fa-robot',
    title: 'GenAI & ML',
    tags: ['LangChain', 'RAG', 'LLMs', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'],
  },
  {
    icon: 'fas fa-tools',
    title: 'Tools',
    tags: ['Git', 'GitHub', 'Postman', 'OOP', 'DSA'],
  },
];

export const projects = [
  {
    title: 'RAG Document Assistant',
    description: 'RAG-based Q&A assistant using LangChain and FAISS vector database for semantic search, with LLM tool binding for context-aware, accurate responses.',
    detail: 'Built a Retrieval-Augmented Generation (RAG) pipeline that allows users to upload documents and ask natural language questions. The system uses LangChain to orchestrate the pipeline, FAISS for fast vector similarity search, and LLM tool binding to generate context-aware, accurate answers. Supports PDF and text file ingestion with chunking and embedding.',
    tech: ['LangChain', 'FAISS', 'Python', 'GenAI'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Code Generator',
    description: 'AI-powered code generation tool using prompt engineering and LLM tool binding to auto-generate and explain code snippets.',
    detail: 'Developed an intelligent code generation tool that takes natural language prompts and produces clean, well-commented code in multiple programming languages. Uses advanced prompt engineering techniques and LLM tool binding to ensure accurate, context-aware code output. Also provides step-by-step explanations for generated code snippets.',
    tech: ['Python', 'LLM APIs', 'Prompt Engineering'],
    github: '#',
    live: '#',
  },
  {
    title: 'Orbit E-Bike Platform',
    description: 'Full-stack Electric-bike platform with booking management and responsive UI, serving 500+ users. Built during CodeWebX internship.',
    detail: 'A complete MERN stack electric bike rental platform built during the CodeWebX Technology internship. Features include user authentication, bike browsing with filters, real-time booking management, admin dashboard for fleet management, and a fully responsive UI. Reduced page load time by 30% through code splitting and lazy loading. Currently serving 500+ active users.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    image: '/orbit.png',
    github: '#',
    live: 'https://orbit-ebike.vercel.app',
  },
  {
    title: 'Sahi Park — Smart Parking',
    description: 'ML-powered smart parking solution with computer vision-based occupancy detection, achieving 70% reduction in manual intervention.',
    detail: 'An intelligent parking management system that uses computer vision and machine learning to detect parking space occupancy in real time. The system processes live camera feeds, classifies spaces as occupied or vacant, and displays availability on a web dashboard. Achieved a 70% reduction in manual intervention and significantly improved parking efficiency for users.',
    tech: ['ML', 'Computer Vision', 'Full-Stack'],
    image: 'sahi-park.png',
    github: '#',
    live: 'https://sahi-park.vercel.app',
  },
  {
    title: 'MediAssist AI',
    description: 'AI-powered platform using NLP for content categorization, automated tagging, and sentiment analysis with 85%+ accuracy.',
    detail: 'A healthcare-focused AI platform that leverages Natural Language Processing to automatically categorize medical content, generate relevant tags, and perform sentiment analysis on patient feedback. Built with Flask as the backend and integrated NLP models achieving 85%+ accuracy. Helps medical teams quickly organize and analyze large volumes of text data.',
    tech: ['NLP', 'Flask', 'Python', 'HTML/CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Machine Failure Prediction',
    description: 'Supervised learning system predicting machine failures at 92% accuracy, improving automation efficiency by 20%. Built at ROBOKWIK, IIT BHU.',
    detail: 'Developed during the Machine Learning internship at ROBOKWIK, IIT BHU. Built a supervised learning pipeline that analyzes sensor data from industrial machines to predict failures before they occur. Used feature engineering, model selection, and hyperparameter tuning to achieve 92% prediction accuracy. The system improved automation efficiency by 20% and reduced unplanned downtime significantly.',
    tech: ['Machine Learning', 'Scikit-learn', 'Python'],
    image: 'failure.png',
    github: '#',
    live: 'https://machine-failure-kgo3.onrender.com',
  },
];

export const contactLinks = [
  { icon: 'fas fa-envelope', label: 'princegupta4171@gmail.com',       href: 'mailto:princegupta4171@gmail.com' },
  { icon: 'fab fa-linkedin', label: 'linkedin.com/in/princegupta4171', href: 'https://linkedin.com/in/princegupta4171', external: true },
  { icon: 'fab fa-github',   label: 'github.com/princegupta4171',      href: 'https://github.com/princegupta4171',     external: true },
];
