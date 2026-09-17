// Portfolio Data - Single Source of Truth
// All data extracted from the provided Excel spreadsheet

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
  level: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  evidence?: string;
}

export type SkillCategory =
  | "Frontend Engineering"
  | "Backend Engineering"
  | "APIs & Integrations"
  | "Mobile Development"
  | "Database"
  | "AI & Automation"
  | "Cloud & Deployment"
  | "Development Tools";

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
  | "Full-Stack"
  | "Frontend"
  | "AI Automation"
  | "Integrations"
  | "Mobile";

export interface Achievement {
  id: string;
  title: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  status: string;
  bullets: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Abu Huraira Abid",
  initials: "AHA",
  title: "Full-Stack Software Engineer",
  subtitle: "React / Next.js, Django / Python, Laravel, APIs & AI Automation",
  location: "Lahore, Pakistan",
  email: "abu.huraira.abid.9@gmail.com",
  phone: "+92 322 458 3995",
  linkedin: "https://linkedin.com/in/abu-huraira-abid",
  github: "https://github.com/abu-huraira-abid",
  summary:
    "Lead Software Engineer at MAXOBIZ with 3+ years of experience delivering production web and mobile applications, backend APIs and automation solutions. Experienced across React/Next.js, Django/Python, Laravel/PHP, Node.js, React Native and SQL, with hands-on ownership of authentication, webhooks, third-party integrations and deployment workflows. Builds practical n8n-powered AI automation, including voice-call assistants, AI agents, CRM automation and business-process workflows.",
  experience: "3+ years",
  education: [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "The University of Lahore",
      year: "2026",
    },
  ],
  languages: [
    { name: "English", level: "Advanced" },
    { name: "Urdu", level: "Native" },
    { name: "German", level: "Beginner" },
  ],
};

export const skills: Skill[] = [
  // Frontend Engineering
  { name: "React / Next.js", category: "Frontend Engineering", evidence: "PostVault, Optilicious, Bokado, HRMS, Symphony Music, CRM, B2B Crestica, Company House" },
  { name: "JavaScript / TypeScript", category: "Frontend Engineering", evidence: "PostVault, Optilicious, Bokado, HRMS, Symphony Music, CRM, B2B Crestica, Company House" },
  { name: "Tailwind CSS / Bootstrap / jQuery", category: "Frontend Engineering", evidence: "PostVault, Optilicious, Bokado, HRMS, Symphony Music, CRM" },
  // Backend Engineering
  { name: "Python / Django", category: "Backend Engineering", evidence: "PostVault, Web Scraper, Jarvis AI VA" },
  { name: "PHP / Laravel", category: "Backend Engineering", evidence: "CRM, NoteOne Guitar" },
  { name: "Node.js / Express.js", category: "Backend Engineering", evidence: "B2B Crestica, Symphony Music, Company House" },
  // APIs & Integrations
  { name: "REST APIs", category: "APIs & Integrations", evidence: "PostVault, Symphony Music, CRM, B2B Crestica, Company House" },
  { name: "Webhooks / Auth Flows", category: "APIs & Integrations", evidence: "All AI workflow projects, Symphony Music, PostVault" },
  { name: "Stripe / Xero / Open Food Facts", category: "APIs & Integrations", evidence: "PostVault, Symphony Music" },
  // Mobile Development
  { name: "React Native", category: "Mobile Development", evidence: "Bokado" },
  // Database
  { name: "SQL / PostgreSQL / MySQL / SQLite", category: "Database", evidence: "PostVault, Symphony Music, CRM, B2B Crestica, Company House" },
  // AI & Automation
  { name: "n8n", category: "AI & Automation", evidence: "Kaidu, Symphony Music, Website development, SEO, TikTok, LinkedIn" },
  { name: "AI Agents / Voice Assistants", category: "AI & Automation", evidence: "Kaidu, Symphony Music, Website creation workflow" },
  { name: "CRM Automation", category: "AI & Automation", evidence: "In house CRM, Frappe CRM" },
  // Cloud & Deployment
  { name: "AWS / Vercel / Netlify / Neon / Railway", category: "Cloud & Deployment", evidence: "PostVault, CRM, Company House, B2B Crestica, Bokado" },
  { name: "Docker / Nginx / Linux", category: "Cloud & Deployment", evidence: "PostVault, CRM, Company House, B2B Crestica, Bokado" },
  { name: "CI/CD", category: "Cloud & Deployment", evidence: "Professional Summary; Professional Experience" },
  // Development Tools
  { name: "Git / GitHub", category: "Development Tools", evidence: "Use in all projects" },
];

export const projects: Project[] = [
  { id: "p014", name: "HRMS", industry: "Human Resources", productType: "Multi-tenant HR management", description: "A multi-tenant human resources management system.", role: "Frontend contribution", techStack: ["React Native", "Django", "PostgreSQL"], status: "completed", category: "Frontend" },
  {
    id: "p001",
    name: "PostVault",
    url: "https://app.thepostvault.co.uk",
    industry: "Vault Management",
    productType: "Full-Stack SaaS",
    description: "Production vault management application with user and payment management systems, featuring authentication flows and database-backed functionality.",
    role: "Frontend + Backend contributions across multiple modules",
    techStack: ["React", "Django", "PostgreSQL"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p002",
    name: "Optilicious",
    url: "https://app.optiliciousmenus.com",
    industry: "Restaurant / FoodTech",
    productType: "AI SaaS Platform",
    description: "AI-enabled restaurant menu optimization SaaS platform with menu scoring, trend/sales insights, recommendations, supplier workflows and AI-assisted decision support.",
    role: "Frontend Engineering",
    techStack: ["React", "Django", "PostgreSQL"],
    status: "completed",
    category: "Frontend",
  },
  {
    id: "p003",
    name: "Bokado",
    url: "https://app.bokado.io",
    industry: "Food / Diet",
    productType: "Mobile App",
    description: "Food items platform showing products recommended and restricted according to user diet and preferences.",
    role: "Frontend + OpenFoodFact integrations",
    techStack: ["React Native", "Django", "PostgreSQL"],
    status: "completed",
    category: "Mobile",
  },
  {
    id: "p004",
    name: "SymphonyMusic",
    url: "https://portal.symphonymusic.com.au",
    industry: "Education / EdTech",
    productType: "Full-Stack Platform",
    description: "Schools management system with automation of trials, enrollment, terms and payment systems for music education.",
    role: "Full-Stack Development",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p005",
    name: "CRM",
    url: "https://crm.maxobiz.com",
    industry: "Management",
    productType: "Internal Tool",
    description: "In-house leads management system for tracking and managing client leads and communications.",
    role: "Full-Stack Development",
    techStack: ["Laravel", "Vue.js", "MySQL"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p006",
    name: "Kaidu",
    industry: "E-Commerce / Calling",
    productType: "AI Agent",
    description: "Webstore customer live calling agent with CRM management automation for automated customer outreach.",
    role: "Complete Development",
    techStack: ["n8n", "Dograh AI", "Frappe CRM"],
    status: "completed",
    category: "AI Automation",
  },
  {
    id: "p007",
    name: "Company House",
    url: "https://cmphouse.maxobiz.com",
    industry: "UK Company Data",
    productType: "Data Platform",
    description: "UK company house data fetcher with comprehensive company detail retrieval and display.",
    role: "Full-Stack Development",
    techStack: ["React", "Node.js", "PostgreSQL"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p008",
    name: "AI SEO Workflow",
    industry: "SEO Optimization",
    productType: "Automation Workflow",
    description: "AI-powered SEO workflow to optimize any targeted website for Google ranking with automated content analysis.",
    role: "Full-Stack Workflow Development",
    techStack: ["n8n"],
    status: "working",
    category: "AI Automation",
  },
  {
    id: "p009",
    name: "TikTok Video Transcription",
    industry: "Content / Transcription",
    productType: "AI Workflow",
    description: "Automated workflow triggered via Telegram/Google Sheets that downloads video audio, translates it, and saves to Google Docs.",
    role: "Full-Stack Workflow Development",
    techStack: ["n8n"],
    status: "working",
    category: "AI Automation",
  },
  {
    id: "p010",
    name: "Website Creation Workflow",
    industry: "Web Development + AI",
    productType: "AI Workflow",
    description: "AI asks general and field-related questions, then creates a website for the user with SEO optimization.",
    role: "Full-Stack Workflow Development",
    techStack: ["n8n"],
    status: "working",
    category: "AI Automation",
  },
  {
    id: "p011",
    name: "B2B Crestica Form",
    industry: "B2B / E-Commerce",
    productType: "Full-Stack Platform",
    description: "Dynamic catalog with categories, products and sub-product categories, featuring inventory management and order placement.",
    role: "Full-Stack Development",
    techStack: ["React", "Node.js", "PostgreSQL"],
    status: "completed",
    category: "Full-Stack",
  },
  {
    id: "p012",
    name: "NoteOne Guitar",
    industry: "Education / S3 Integration",
    productType: "Backend Integration",
    description: "S3 integration to save Zoom lecture videos to S3 buckets, remove from Zoom recordings, and update S3 links in the app.",
    role: "Backend Integration",
    techStack: ["Laravel"],
    status: "completed",
    category: "Integrations",
  },
  {
    id: "p013",
    name: "LinkedIn Connects",
    industry: "AI Automation",
    productType: "Automation Workflow",
    description: "Automated LinkedIn connection workflow: sends connections, follows up with messages, manages lead lifecycle.",
    role: "Full-Stack Workflow Development",
    techStack: ["n8n"],
    status: "completed",
    category: "AI Automation",
  },
];

export const achievements: Achievement[] = [
  { id: "a001", title: "1st Position — Dean's Honor List 2023 (UOL)" },
  { id: "a002", title: "1st Position — Dean's Honor List 2024 (UOL)" },
  { id: "a003", title: "Gold Medalist" },
  { id: "a004", title: "AI Agent Builder Badge — Make.com" },
  { id: "a005", title: "Automation to AI Agents: Advanced Course Completed" },
];

export const experiences: Experience[] = [
  {
    company: "MAXOBIZ",
    role: "Lead Software Engineer",
    location: "Lahore, Pakistan",
    dates: "May 2026 – Present",
    status: "Current",
    bullets: [
      "Lead end-to-end delivery of full-stack features across frontend UI, backend APIs, database functionality and third-party integrations.",
      "Build and integrate REST APIs, authentication flows, webhooks and external services, including Stripe, Xero and Open Food Facts.",
      "Develop n8n-based AI automation workflows, including voice-call assistants, AI agents, CRM management and business-process automation.",
      "Improve reliability and deployment workflows through debugging, performance work, Docker, Nginx, Linux, CI/CD and cloud platforms.",
    ],
  },
  {
    company: "MAXOBIZ",
    role: "Associate Software Engineer",
    location: "Lahore, Pakistan",
    dates: "Oct 2025 – May 2026",
    status: "Completed",
    bullets: [
      "Delivered full-stack features across responsive frontend interfaces, backend APIs and database-backed functionality.",
      "Implemented REST APIs, authentication flows, webhooks and third-party integrations for production applications.",
      "Contributed to web and mobile solutions using React, Django, Laravel, Node.js and React Native.",
    ],
  },
  {
    company: "MAXOBIZ",
    role: "Software Engineering Intern",
    location: "Lahore, Pakistan",
    dates: "Jul 2025 – Oct 2025",
    status: "Completed",
    bullets: [
      "Built a strong full-stack foundation by contributing to production web applications and learning established development workflows.",
      "Supported frontend, backend and database tasks across the React, Node.js, Django and SQL ecosystem.",
      "Collaborated on debugging, feature implementation and version-controlled delivery using Git and GitHub.",
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
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  "Frontend Engineering",
  "Backend Engineering",
  "APIs & Integrations",
  "Mobile Development",
  "Database",
  "AI & Automation",
  "Cloud & Deployment",
  "Development Tools",
];
