// Portfolio Data - Single Source of Truth
// Aligned with Abu Huraira Abid's updated CV

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: string;
  currentRole: string;
  currentCompany: string;
  education: Education[];
  languages: Language[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
}

export interface Language {
  name: string;
  level?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  evidence?: string;
}

export type SkillCategory =
  | "Python & Backend"
  | "AI, GenAI & RAG"
  | "Frontend (React & Next.js)"
  | "Workflow Automation"
  | "Databases & Async"
  | "Cloud, DevOps & Testing"
  | "Mobile & Secondary";

export interface Project {
  id: string;
  name: string;
  url?: string;
  industry: string;
  productType: string;
  description: string;
  role: string;
  techStack: string[];
  status: "completed" | "working";
  category: ProjectCategory;
}

export type ProjectCategory =
  | "AI Automation"
  | "Full-Stack"
  | "Frontend"
  | "Mobile"
  | "Integrations";

export interface Achievement {
  id: string;
  title: string;
  category: "highlight";
}

export interface Experience {
  company: string;
  employmentType: string;
  role: string;
  location?: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  dates: string;
  duration: string;
  status: "Current" | "Completed";
  overview: string;
  bullets: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Abu Huraira Abid",
  initials: "AHA",
  title: "Python Developer | AI Engineer | Full-Stack Developer",
  subtitle: "Python, FastAPI / Django, React / Next.js, AI Agents, RAG & Workflow Automation",
  location: "Pakistan | Open to Remote Roles Only",
  email: "hurairaabid75@gmail.com",
  phone: "+923346256125",
  linkedin: "https://linkedin.com/in/abu-huraira-abid",
  github: "https://github.com/abu-huraira-abid",
  summary:
    "Full-Stack Developer and AI Engineer with 8 years of software development experience and strong expertise in Python, JavaScript, and React. Builds end-to-end applications spanning interactive frontends, backend services, REST APIs, and database integrations. Combines full-stack engineering with AI capabilities, including large language model (LLM) integration, retrieval-augmented generation (RAG), AI agents, natural language processing (NLP), and workflow automation.",
  experience: "8 years",
  currentRole: "Senior Full-Stack Engineer | Python & AI Engineering",
  currentCompany: "GOBRANDME LTD",
  education: [
    {
      degree: "Master's Degree",
      field: "Computer Science",
      institution: "The University of Lahore",
      year: "07/2018 – 03/2020",
    },
    {
      degree: "Bachelor's Degree",
      field: "Computer Science",
      institution: "The University of Lahore",
      year: "04/2014 – 03/2018",
    },
  ],
  languages: [
    { name: "English", level: "Proficient" },
    { name: "Urdu", level: "Native" },
    { name: "German", level: "Proficient" },
  ],
};

export const skillCategories: SkillCategory[] = [
  "Python & Backend",
  "AI, GenAI & RAG",
  "Frontend (React & Next.js)",
  "Workflow Automation",
  "Databases & Async",
  "Cloud, DevOps & Testing",
  "Mobile & Secondary",
];

export const skills: Skill[] = [
  // Python & Backend (Primary)
  { name: "Python / FastAPI / Django", category: "Python & Backend", evidence: "GOBRANDME LTD, Maxobiz, DevBatch, PostVault, Optilicious, Bokado, HRMS" },
  { name: "Django REST Framework / Flask", category: "Python & Backend", evidence: "PostVault, DevBatch, REST API services" },
  { name: "Node.js / REST APIs / Microservices", category: "Python & Backend", evidence: "GOBRANDME, SymphonyMusic, Company House, B2B Crestica Form" },
  { name: "Asynchronous Programming / System Design", category: "Python & Backend", evidence: "GOBRANDME, Celery & Redis pipelines" },

  // AI, GenAI & RAG (Primary)
  { name: "OpenAI / Claude / Gemini", category: "AI, GenAI & RAG", evidence: "GOBRANDME, prompt engineering, structured outputs, tool calling" },
  { name: "LangChain / LangGraph / AI Agents", category: "AI, GenAI & RAG", evidence: "Multi-agent workflows, tool calling, Kaidu" },
  { name: "RAG / Embeddings / Vector Databases", category: "AI, GenAI & RAG", evidence: "Document ingestion, chunking, semantic search" },
  { name: "NLP / Hugging Face / MCP", category: "AI, GenAI & RAG", evidence: "Text analysis, information extraction, Model Context Protocol" },
  { name: "PyTorch / TensorFlow / scikit-learn", category: "AI, GenAI & RAG", evidence: "Pandas, NumPy, feature engineering, model evaluation" },

  // Frontend (React & Next.js) (Primary)
  { name: "React / Next.js", category: "Frontend (React & Next.js)", evidence: "PostVault, Optilicious, SymphonyMusic, Company House, B2B Crestica Form" },
  { name: "TypeScript / JavaScript", category: "Frontend (React & Next.js)", evidence: "All modern frontend and Node.js applications" },
  { name: "HTML5 / CSS3 / Tailwind CSS", category: "Frontend (React & Next.js)", evidence: "Responsive web design, reusable components, state management" },

  // Workflow Automation (Primary)
  { name: "n8n / Make / Zapier", category: "Workflow Automation", evidence: "Kaidu, AI SEO Workflow, TikTok Video Transcription, LinkedIn Connects" },
  { name: "Python Automation / Webhooks", category: "Workflow Automation", evidence: "Data collection, third-party integrations, business process automation" },

  // Databases & Async
  { name: "PostgreSQL / MySQL / MongoDB", category: "Databases & Async", evidence: "Schema design, migrations, query optimization across SaaS platforms" },
  { name: "Redis / Celery / ETL Pipelines", category: "Databases & Async", evidence: "Caching, asynchronous background processing, data synchronization" },

  // Cloud, DevOps & Testing
  { name: "AWS / Azure / GCP", category: "Cloud, DevOps & Testing", evidence: "Cloud infrastructure, S3 integrations, production deployments" },
  { name: "Docker / Kubernetes / CI/CD", category: "Cloud, DevOps & Testing", evidence: "GitHub Actions, containerized deployments, logging & monitoring" },
  { name: "pytest / Unit & API Testing", category: "Cloud, DevOps & Testing", evidence: "Integration testing, API security, performance optimization" },

  // Mobile & Secondary
  { name: "React Native", category: "Mobile & Secondary", evidence: "Bokado, HRMS" },
  { name: "Cursor / Claude Code / GitHub Copilot", category: "Mobile & Secondary", evidence: "AI-assisted development, refactoring, test creation" },
  { name: "Git / GitHub", category: "Mobile & Secondary", evidence: "Version control and collaborative code reviews" },
  { name: "Laravel", category: "Mobile & Secondary", evidence: "Legacy CRM and NoteOne Guitar S3 integration" },
];

export const projects: Project[] = [
  // 1. AI Automation & Voice Agent
  {
    id: "p006",
    name: "Kaidu",
    industry: "E-Commerce / Calling",
    productType: "AI Voice Agent & CRM Automation Platform",
    description:
      "E-commerce customer engagement solution integrating AI voice agents, n8n workflow automation, and Frappe CRM for automated outbound calling, record updates, and customer follow-ups.",
    role: "Designed and configured n8n workflows coordinating Dograh AI voice calls and Frappe CRM updates",
    techStack: ["n8n", "Dograh AI", "Frappe CRM"],
    status: "completed",
    category: "AI Automation",
  },
  // 2. Python / Django + React SaaS Platforms
  {
    id: "p001",
    name: "PostVault",
    url: "https://app.thepostvault.co.uk",
    industry: "Vault Management",
    productType: "Secure Vault Management SaaS",
    description:
      "Full-stack SaaS platform supporting centralized vault operations, user administration, authentication flows, and payment processing.",
    role: "Connected React interfaces with Django REST APIs and PostgreSQL across account management and operational workflows",
    techStack: ["Python", "Django", "React.js", "PostgreSQL", "REST APIs"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p002",
    name: "Optilicious",
    url: "https://app.optiliciousmenus.com",
    industry: "Restaurant / FoodTech",
    productType: "AI Restaurant Analytics & Menu Optimization Platform",
    description:
      "AI-powered restaurant menu optimization SaaS platform presenting menu scores, sales analytics, food trends, and AI-generated recommendations.",
    role: "Built responsive React.js dashboards and data visualizations integrated with Python/Django backend services",
    techStack: ["React.js", "Python", "Django", "PostgreSQL"],
    status: "completed",
    category: "Frontend",
  },
  {
    id: "p003",
    name: "Bokado",
    url: "https://app.bokado.io",
    industry: "Food / Diet",
    productType: "Personalized Nutrition & Food Discovery App",
    description:
      "Mobile food discovery platform helping users browse products and identify items compatible with their dietary preferences and restrictions.",
    role: "Developed React Native mobile interfaces and integrated Open Food Facts APIs through Python/Django backend services",
    techStack: ["React Native", "Python", "Django", "PostgreSQL", "Open Food Facts API"],
    status: "completed",
    category: "Mobile",
  },
  {
    id: "p014",
    name: "HRMS",
    industry: "Human Resources",
    productType: "Multi-Tenant HR & Employee Management App",
    description:
      "Multi-tenant HR management platform supporting employee information, HR operations, and organization-specific workflows.",
    role: "Developed React Native mobile interfaces connected with Python/Django backend services",
    techStack: ["React Native", "Python", "Django", "PostgreSQL"],
    status: "completed",
    category: "Mobile",
  },
  // 3. React + Node.js Full-Stack Platforms
  {
    id: "p004",
    name: "SymphonyMusic",
    url: "https://portal.symphonymusic.com.au",
    industry: "Education / EdTech",
    productType: "Education Operations & Enrollment Platform",
    description:
      "Full-stack education management platform covering student trials, enrollment, academic terms, and payment processing.",
    role: "Built responsive React.js administrative interfaces, Node.js/Express REST APIs, and PostgreSQL workflows",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p007",
    name: "Company House",
    url: "https://cmphouse.maxobiz.com",
    industry: "UK Company Data",
    productType: "Company Intelligence & Data Integration Platform",
    description:
      "Full-stack platform for retrieving, processing, storing, and displaying UK company records through external API integrations.",
    role: "Implemented automated data retrieval workflows and interactive React/Node.js search and review interfaces",
    techStack: ["React.js", "Node.js", "PostgreSQL", "API Integration"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p011",
    name: "B2B Crestica Form",
    industry: "B2B / E-Commerce",
    productType: "B2B Commerce & Inventory Management Platform",
    description:
      "B2B commerce platform with dynamic product catalogs, hierarchical categories, inventory management, and business order processing.",
    role: "Built React.js interfaces and Node.js/PostgreSQL backend workflows for catalog navigation, stock visibility, and orders",
    techStack: ["React.js", "Node.js", "PostgreSQL"],
    status: "completed",
    category: "Full-Stack",
  },
  // 4. Additional AI & Workflow Automation Projects
  {
    id: "p008",
    name: "AI SEO Workflow",
    industry: "SEO Optimization",
    productType: "Automation Workflow",
    description: "AI-powered SEO workflow to analyze target websites and automate content optimization for search rankings.",
    role: "Workflow Automation Development",
    techStack: ["n8n", "Python Automation"],
    status: "working",
    category: "AI Automation",
  },
  {
    id: "p009",
    name: "TikTok Video Transcription",
    industry: "Content / Transcription",
    productType: "AI Workflow",
    description: "Automated workflow triggered via Telegram or Google Sheets that downloads video audio, translates it, and saves to Google Docs.",
    role: "Workflow Automation Development",
    techStack: ["n8n"],
    status: "working",
    category: "AI Automation",
  },
  {
    id: "p010",
    name: "Website Creation Workflow",
    industry: "Web Development + AI",
    productType: "AI Workflow",
    description: "AI-guided workflow that gathers domain requirements and generates SEO-ready website structures.",
    role: "Workflow Automation Development",
    techStack: ["n8n"],
    status: "working",
    category: "AI Automation",
  },
  {
    id: "p013",
    name: "LinkedIn Connects",
    industry: "AI Automation",
    productType: "Automation Workflow",
    description: "Automated LinkedIn connection and follow-up workflow supporting lead outreach lifecycle management.",
    role: "Workflow Automation Development",
    techStack: ["n8n"],
    status: "completed",
    category: "AI Automation",
  },
  // 5. Legacy Laravel Projects (Lower-Priority Supporting Position)
  {
    id: "p005",
    name: "CRM",
    url: "https://crm.maxobiz.com",
    industry: "Management",
    productType: "Internal Leads Management Tool",
    description: "In-house leads management system for tracking and managing client leads and communications.",
    role: "Full-Stack Maintenance & Feature Development",
    techStack: ["Laravel", "Vue.js", "MySQL"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p012",
    name: "NoteOne Guitar",
    industry: "Education / S3 Integration",
    productType: "Backend Integration",
    description: "S3 integration to archive Zoom lecture videos to Amazon S3 buckets, remove Zoom recordings, and update application links.",
    role: "Backend Integration",
    techStack: ["Laravel", "AWS S3"],
    status: "completed",
    category: "Integrations",
  },
];

export const achievements: Achievement[] = [
  {
    id: "a001",
    title: "Delivered a full-stack SaaS platform using Python, Django, React.js, and PostgreSQL, integrating authentication, user administration, payment processing, and centralized vault operations.",
    category: "highlight",
  },
  {
    id: "a002",
    title: "Automated customer outreach and follow-ups by connecting AI voice agents, n8n workflows, and Frappe CRM, reducing manual coordination across sales and support activities.",
    category: "highlight",
  },
  {
    id: "a003",
    title: "Built React.js dashboards for an AI-powered restaurant platform, integrating Python backend services to present menu scores, sales analytics, and AI-generated recommendations.",
    category: "highlight",
  },
  {
    id: "a004",
    title: "Developed RESTful APIs and backend workflows using Node.js, Express.js, and PostgreSQL to support student enrollment, academic term management, and payment processing.",
    category: "highlight",
  },
  {
    id: "a005",
    title: "Implemented automated data retrieval and third-party API integrations to collect, process, and organize UK company records within a full-stack web application.",
    category: "highlight",
  },
  {
    id: "a006",
    title: "Integrated Open Food Facts APIs with Python and Django backend services to support personalized food discovery and dietary recommendations through React Native interfaces.",
    category: "highlight",
  },
];

export const experiences: Experience[] = [
  {
    company: "GOBRANDME LTD",
    employmentType: "Full-time",
    role: "Senior Full-Stack Engineer | Python & AI Engineering",
    location: "Cheshire East, England, United Kingdom",
    workMode: "Remote",
    dates: "Dec 2023 – Present",
    duration: "~3 yrs",
    status: "Current",
    overview:
      "Develop full-stack applications and AI-powered solutions, combining Python backend engineering, React-based frontends, and workflow automation.",
    bullets: [
      "Build SaaS applications using Python, Django, React.js, and PostgreSQL, integrating user administration, authentication, payment processing, and operational workflow.",
      "Develop backend services, REST APIs, and third-party integrations that connect application interfaces, databases, and external platforms.",
      "Create responsive interfaces and interactive dashboards using React.js and JavaScript, including data visualizations for menu scoring, sales analytics, and AI-generated recommendations.",
      "Integrate AI voice agents with n8n and CRM systems to automate outbound customer calls, follow-ups, and communication tracking.",
      "Build full-stack features using Node.js, Express.js, and PostgreSQL for enrollment management, payments, and business administration.",
      "Implement API-driven data retrieval and processing workflows to collect, organize, and display information from external sources.",
      "Develop React Native interfaces connected to Python and Django backend services for personalized food discovery and organization-specific HR workflows.",
    ],
  },
  {
    company: "Maxobiz",
    employmentType: "Full-time",
    role: "Full-Stack Developer | Python & React",
    workMode: "Hybrid",
    dates: "Mar 2021 – Nov 2023",
    duration: "2 yrs 9 mos",
    status: "Completed",
    overview:
      "Developed web applications and backend services using Python, React, JavaScript, and SQL, contributing across frontend development, API integration, and database management.",
    bullets: [
      "Built backend services and REST APIs using Python, Django, and Flask, implementing business logic, data validation, and error handling.",
      "Developed responsive React interfaces with reusable components, application state management, and backend API integration.",
      "Integrated third-party services and Node.js components to support data exchange and business workflows.",
      "Designed relational database models and maintained PostgreSQL and MySQL queries, migrations, and data access logic.",
      "Created Python scripts to automate data collection, transformation, and synchronization across connected applications.",
      "Implemented authentication and role-based permissions to control access to application features and records.",
      "Wrote unit and integration tests, investigated defects, and refactored code to improve application reliability and maintainability.",
      "Collaborated with product, design, and engineering teams on requirements, code reviews, documentation, and feature delivery.",
    ],
  },
  {
    company: "DevBatch",
    employmentType: "Full-time",
    role: "Software Developer | Python & Web Development",
    workMode: "On-site",
    dates: "Apr 2018 – Feb 2021",
    duration: "2 yrs 11 mos",
    status: "Completed",
    overview:
      "Developed web application features, backend components, and automation scripts using Python, JavaScript, and SQL.",
    bullets: [
      "Built Python and Django application components, implementing business logic, form validation, and database operations.",
      "Developed responsive web interfaces using HTML, CSS, and JavaScript, connecting frontend features with backend functionality.",
      "Integrated REST APIs to exchange information between applications and external services.",
      "Wrote SQL queries and maintained database models to support application features and reporting.",
      "Created Python scripts for data collection, cleaning, transformation, and repetitive task automation.",
      "Investigated software defects, added unit tests, and refactored code to improve readability and maintainability.",
      "Used Git for version control and contributed to code reviews, technical documentation, and application releases.",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Automation", href: "#automation" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
