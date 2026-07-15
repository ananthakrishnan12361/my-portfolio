export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Familiar";

export interface Skill {
  name: string;
  slug: string;
  level: SkillLevel;
  years?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  shortName?: string;
  role: string;
  description: string;
  tech: string[];
  highlights: string[];
  contributions?: string[];
  challenges?: string[];
  gradient: string;
}

export interface Certification {
  name: string;
  issueDate?: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface CertificationProvider {
  id: string;
  name: string;
  slug: string;
  color: string;
  certifications: Certification[];
}

export interface Education {
  degree: string;
  institution: string;
  score?: string;
}

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Major Projects", value: "11+" },
  { label: "Certifications", value: "15+" },
  { label: "Education", value: "MCA" },
];

export const specializations = [
  "MERN Stack",
  "React Ecosystem",
  "NestJS",
  "Cloud Technologies",
  "Microservices",
  "Real-time Communication",
];

export const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", slug: "react", level: "Expert", years: "4+" },
      { name: "Next.js", slug: "nextdotjs", level: "Advanced", years: "3+" },
      { name: "React Native", slug: "react", level: "Advanced", years: "2+" },
      { name: "Angular", slug: "angular", level: "Advanced", years: "2+" },
      { name: "Flutter", slug: "flutter", level: "Intermediate", years: "1+" },
      { name: "JavaScript", slug: "javascript", level: "Expert", years: "4+" },
      { name: "TypeScript", slug: "typescript", level: "Advanced", years: "3+" },
      { name: "HTML5", slug: "html5", level: "Expert", years: "4+" },
      { name: "CSS3", slug: "css3", level: "Expert", years: "4+" },
      { name: "Redux", slug: "redux", level: "Advanced", years: "3+" },
      { name: "Bootstrap", slug: "bootstrap", level: "Advanced", years: "3+" },
      { name: "Material UI", slug: "mui", level: "Advanced", years: "2+" },
      { name: "Ant Design", slug: "antdesign", level: "Advanced", years: "2+" },
      { name: "Hero UI", slug: "heroui", level: "Intermediate", years: "1+" },
      { name: "Vite", slug: "vite", level: "Advanced", years: "2+" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs", level: "Expert", years: "4+" },
      { name: "Express.js", slug: "express", level: "Expert", years: "4+" },
      { name: "NestJS", slug: "nestjs", level: "Advanced", years: "2+" },
      { name: "Python", slug: "python", level: "Advanced", years: "2+" },
      { name: "Django", slug: "django", level: "Advanced", years: "2+" },
      { name: "GraphQL", slug: "graphql", level: "Advanced", years: "2+" },
      { name: "REST APIs", slug: "openapiinitiative", level: "Expert", years: "4+" },
      { name: "Microservices", slug: "docker", level: "Advanced", years: "2+" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", slug: "mysql", level: "Advanced", years: "3+" },
      { name: "PostgreSQL", slug: "postgresql", level: "Advanced", years: "2+" },
      { name: "MSSQL", slug: "microsoftsqlserver", level: "Intermediate", years: "2+" },
      { name: "MongoDB", slug: "mongodb", level: "Advanced", years: "3+" },
      { name: "Redis", slug: "redis", level: "Intermediate", years: "1+" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "Google Cloud Platform", slug: "googlecloud", level: "Advanced", years: "2+" },
      { name: "GCP Cloud Storage", slug: "googlecloudstorage", level: "Intermediate", years: "1+" },
      { name: "GCP BigQuery", slug: "googlebigquery", level: "Intermediate", years: "1+" },
      { name: "GCP VPC Networking", slug: "googlecloud", level: "Intermediate", years: "1+" },
      { name: "GCP IAM & Security", slug: "googlecloud", level: "Intermediate", years: "1+" },
      { name: "GCP Dataflow", slug: "googledataflow", level: "Intermediate", years: "1+" },
      { name: "AWS IAM", slug: "amazonwebservices", level: "Intermediate", years: "1+" },
      { name: "AWS EC2", slug: "amazonwebservices", level: "Intermediate", years: "1+" },
      { name: "AWS S3", slug: "amazonwebservices", level: "Intermediate", years: "1+" },
      { name: "AWS Load Balancer", slug: "amazonwebservices", level: "Familiar", years: "1+" },
      { name: "AWS Amplify", slug: "awsamplify", level: "Intermediate", years: "1+" },
    ],
  },
  {
    category: "Messaging",
    skills: [
      { name: "Socket.io", slug: "socketdotio", level: "Advanced", years: "2+" },
      { name: "Firebase", slug: "firebase", level: "Advanced", years: "2+" },
      {
        name: "Firebase Realtime DB",
        slug: "firebase",
        level: "Advanced",
        years: "2+",
      },
      {
        name: "FCM Notifications",
        slug: "firebase",
        level: "Advanced",
        years: "2+",
      },
      { name: "Kafka", slug: "apachekafka", level: "Intermediate", years: "1+" },
      { name: "RabbitMQ", slug: "rabbitmq", level: "Intermediate", years: "1+" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", slug: "docker", level: "Advanced", years: "2+" },
      { name: "Kubernetes", slug: "kubernetes", level: "Intermediate", years: "1+" },
      { name: "Linux", slug: "linux", level: "Advanced", years: "3+" },
      { name: "CI/CD", slug: "githubactions", level: "Advanced", years: "2+" },
    ],
  },
  {
    category: "Blockchain",
    skills: [
      { name: "Ethereum", slug: "ethereum", level: "Intermediate", years: "1+" },
      { name: "Web3.js", slug: "web3dotjs", level: "Intermediate", years: "1+" },
    ],
  },
  {
    category: "AI Tools",
    skills: [
      { name: "ChatGPT", slug: "openai", level: "Advanced", years: "2+" },
      { name: "Claude", slug: "anthropic", level: "Advanced", years: "1+" },
      { name: "Cursor", slug: "cursor", level: "Advanced", years: "1+" },
      { name: "GitHub Copilot", slug: "githubcopilot", level: "Advanced", years: "2+" },
      { name: "Vibe Coding", slug: "vibecoding", level: "Advanced", years: "1+" },
    ],
  },
  {
    category: "Communication",
    skills: [
      { name: "Twilio", slug: "twilio", level: "Advanced", years: "2+" },
      { name: "WebRTC", slug: "webrtc", level: "Advanced", years: "2+" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", slug: "git", level: "Expert", years: "4+" },
      { name: "GitHub", slug: "github", level: "Expert", years: "4+" },
      { name: "Bitbucket", slug: "bitbucket", level: "Advanced", years: "3+" },
      { name: "Jira", slug: "jira", level: "Advanced", years: "3+" },
      { name: "Postman", slug: "postman", level: "Expert", years: "4+" },
      { name: "VS Code", slug: "visualstudiocode", level: "Expert", years: "4+" },
      { name: "Tortoise Git", slug: "tortoisegit", level: "Advanced", years: "2+" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "JuzGoDigital",
    duration: "Jul 2024 – Present",
    description: [
      "Full stack development across enterprise platforms",
      "Architecture decisions and technical leadership",
      "Mentoring junior and mid-level developers",
      "Microservices development and integration",
      "AI-assisted development workflows",
    ],
    technologies: ["React", "NestJS", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "JuzGoDigital",
    duration: "Sep 2023 – Jun 2024",
    description: [
      "Healthcare platform development",
      "Web3 application integration",
      "Enterprise software solutions",
    ],
    technologies: ["Angular", "React", "Web3.js", "Node.js", "MongoDB"],
  },
  {
    title: "Software Developer",
    company: "VIPAR",
    duration: "Dec 2021 – Aug 2023",
    description: [
      "Developed and maintained web applications using JavaScript-based frameworks",
      "Collaborated on design, build, and testing of new features",
      "Bug fixes, performance improvements, and code optimization",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MySQL"],
  },
  {
    title: "Junior Software Developer",
    company: "Softzane Solutions",
    duration: "Aug 2021 – Nov 2021",
    description: [
      "Assisted in web application development",
      "Learned industry best practices and agile workflows",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "MySQL",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "healthcare-web-app",
    name: "Enterprise Healthcare Web Application",
    shortName: "Healthcare Platform",
    role: "Frontend Developer",
    description:
      "Healthcare platform enabling appointment booking, patient management, and streamlined clinical workflows for medical professionals.",
    tech: ["Angular", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Appointment Booking",
      "Patient Management",
      "Healthcare Workflow",
    ],
    contributions: [
      "Built responsive healthcare UI modules for clinical workflows",
      "Integrated frontend features with backend APIs for end-to-end delivery",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "web3-defi-platform",
    name: "Web3 Decentralized Finance Platform",
    shortName: "Web3 DeFi Platform",
    role: "Frontend Developer",
    description:
      "Web3-enabled capital management platform with smart contract integration and responsive trading interfaces.",
    tech: ["React.js", "Redux", "JavaScript", "Web3.js", "Ethereum"],
    highlights: ["Web3 Integration", "Smart Contracts", "Redux State"],
    contributions: [
      "Responsive UI development",
      "Web3 Integration",
      "Smart Contract Interaction",
      "Redux State Management",
    ],
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    id: "talent-management-platform",
    name: "Talent Recruitment Platform",
    shortName: "Talent Platform",
    role: "Full Stack Developer",
    description:
      "Talent management platform connecting employers with skilled professionals through intelligent matching and profile management.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    highlights: ["Full Stack", "Talent Matching", "Profile Management"],
    contributions: [
      "Designed matching and profile management features across full stack",
      "Built REST APIs and MySQL schemas for search and accounts",
    ],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "collaborative-presentation",
    name: "Real-Time Collaborative Presentation Platform",
    shortName: "Presentation Platform",
    role: "React Frontend Developer",
    description:
      "Collaborative presentation tool with real-time editing, drag-and-drop UI, and presentation management capabilities.",
    tech: ["React.js", "Redux", "Ant Design"],
    highlights: [
      "Real-time Editing",
      "Presentation Management",
      "Drag-and-drop UI",
    ],
    contributions: [
      "Built real-time collaborative editing and slide management",
      "Developed presentation creation and sharing workflows",
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "arvr-collaboration",
    name: "AR/VR Real-Time Video Collaboration Platform",
    shortName: "AR/VR Collaboration",
    role: "Lead Full Stack Developer",
    description:
      "Next-generation communication platform with video calling, AR/VR annotations, and real-time collaboration for distributed teams.",
    tech: [
      "React.js",
      "Vite",
      "NestJS",
      "PostgreSQL",
      "Microservices",
      "Twilio",
      "WebRTC",
      "AR/VR",
    ],
    highlights: [
      "Video Calling",
      "Annotations",
      "Collaboration",
      "Real-time Communication",
    ],
    challenges: [
      "Low-latency WebRTC optimization",
      "Microservices orchestration",
      "AR/VR integration complexity",
    ],
    contributions: [
      "Led full stack delivery of video and annotation collaboration features",
      "Architected NestJS microservices and optimized WebRTC performance",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "social-media-platform",
    name: "Social Media Platform",
    shortName: "Social Media",
    role: "Full Stack Developer",
    description:
      "Scalable social networking platform supporting user profiles, feeds, messaging, and media sharing. Built for high availability on AWS with containerized services, load-balanced APIs, and cloud object storage for user-generated content.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS EC2",
      "AWS Load Balancer",
      "AWS S3",
      "Docker",
    ],
    highlights: [
      "Real-time social feeds and engagement",
      "Media uploads with S3 storage",
      "EC2 + Load Balancer scaling",
      "Dockerized deployment pipeline",
    ],
    contributions: [
      "Developed React frontend for posts, profiles, and interaction flows",
      "Built Express REST APIs and MongoDB data models for users and content",
      "Configured AWS EC2, load balancing, and S3 for reliable media delivery",
      "Containerized services with Docker for consistent environments",
    ],
    challenges: [
      "Handling concurrent traffic across load-balanced instances",
      "Optimizing media upload and delivery performance",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "association-community-app",
    name: "Association Community App",
    shortName: "Association App",
    role: "Full Stack / Mobile Developer",
    description:
      "Mobile-first social application for associations and member communities. Members can publish posts, share achievements, and track association programs and activities through a dedicated member experience.",
    tech: ["React Native", "Node.js", "Express.js", "MySQL"],
    highlights: [
      "Association posts and announcements",
      "Achievement and milestone sharing",
      "Program tracking for members",
      "Cross-platform mobile experience",
    ],
    contributions: [
      "Built React Native screens for feeds, programs, and member profiles",
      "Implemented Express APIs for posts, achievements, and program data",
      "Designed MySQL schemas for members, associations, and activity tracking",
      "Enabled organizers to publish updates and members to follow program progress",
    ],
    challenges: [
      "Structuring association hierarchies and member access in MySQL",
      "Delivering a smooth native experience across devices",
    ],
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    id: "workplace-safety-saas",
    name: "Workplace Safety SaaS Platform",
    shortName: "Workplace Safety SaaS",
    role: "Backend / Full Stack Developer",
    description:
      "B2B SaaS platform that automates workplace safety data collection and analysis. Helps organizations digitize inspections, incidents, and compliance workflows while turning raw operational data into actionable insights.",
    tech: ["Node.js", "Express.js", "MongoDB", "Python"],
    highlights: [
      "Automated safety data collection",
      "Analytics and reporting pipelines",
      "B2B multi-tenant SaaS foundation",
      "Python-powered data processing",
    ],
    contributions: [
      "Developed Express APIs for safety records, inspections, and reporting",
      "Modeled flexible MongoDB documents for evolving compliance datasets",
      "Used Python scripts and services for batch analysis and insight generation",
      "Supported B2B SaaS flows for organizations onboarding safety teams",
    ],
    challenges: [
      "Standardizing diverse safety data into analyzable structures",
      "Balancing real-time capture with reliable batch analytics",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "ecommerce-microservices",
    name: "E-Commerce Microservices Platform",
    shortName: "E-Commerce Platform",
    role: "Full Stack Developer",
    description:
      "Modern e-commerce platform delivered with a microservices architecture. Separates catalog, orders, payments, and user services for independent scaling while providing a responsive React storefront backed by Django and PostgreSQL.",
    tech: ["React.js", "Django", "PostgreSQL", "Microservices"],
    highlights: [
      "Microservices-based commerce architecture",
      "Product catalog and order workflows",
      "PostgreSQL-backed service data stores",
      "Scalable React storefront",
    ],
    contributions: [
      "Built React storefront experiences for browsing, cart, and checkout flows",
      "Implemented Django services for core commerce domains",
      "Designed PostgreSQL models for products, orders, and customer data",
      "Structured services for independent deployment and growth",
    ],
    challenges: [
      "Coordinating data consistency across microservices",
      "Designing clean API boundaries for commerce domains",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "fleet-operations-platform",
    name: "Fleet Operations Platform",
    shortName: "Fleet Operations",
    role: "Full Stack Developer",
    description:
      "Enterprise fleet operations solution that integrates multiple OEMs, hardware devices, and operational systems into one secure, centralized view. Hardware-agnostic design enables seamless coverage across mixed fleets—unifying data management, proactive safety and compliance, and end-to-end fleet visibility so teams can act with confidence.",
    tech: ["Node.js", "Express.js", "MSSQL"],
    highlights: [
      "Multi-OEM and multi-system integration",
      "Hardware-agnostic fleet coverage",
      "Centralized operational intelligence",
      "Safety and compliance visibility",
    ],
    contributions: [
      "Built Express APIs to unify data from OEMs, devices, and ops systems",
      "Designed MSSQL schemas for fleets, assets, events, and compliance records",
      "Created a centralized operational view beyond basic dashboards",
      "Enabled proactive monitoring for safety, compliance, and fleet readiness",
    ],
    challenges: [
      "Normalizing data across mixed OEM and device ecosystems",
      "Delivering a secure, centralized view for operational decision-making",
    ],
    gradient: "from-slate-500 to-zinc-700",
  },
  {
    id: "tender-bidding-platform",
    name: "Online Tender & Bidding Platform",
    shortName: "Tender & Bidding",
    role: "Full Stack Developer",
    description:
      "Online marketplace where organizations publish tenders and suppliers submit competitive bids. Supports tender lifecycle management, secure bidding workflows, and transparent evaluation so buyers and vendors can collaborate efficiently.",
    tech: ["React.js", "NestJS", "PostgreSQL"],
    highlights: [
      "Tender creation and publication",
      "Supplier bidding workflows",
      "Secure bid lifecycle management",
      "Transparent evaluation process",
    ],
    contributions: [
      "Developed React interfaces for buyers, vendors, and bid submission flows",
      "Implemented NestJS APIs for tenders, bids, and user roles",
      "Designed PostgreSQL schemas for tenders, bid rounds, and evaluations",
      "Enforced access control so bids remain confidential until review windows",
    ],
    challenges: [
      "Ensuring fair bidding rules and bid confidentiality",
      "Modeling complex tender and evaluation states in PostgreSQL",
    ],
    gradient: "from-rose-500 to-pink-600",
  },
];

export const certificationProviders: CertificationProvider[] = [
  {
    id: "ibm",
    name: "IBM",
    slug: "ibm",
    color: "#052FAD",
    certifications: [
      {
        name: "IBM Full Stack Software Developer Specialization",
        issueDate: "2023",
      },
    ],
  },
  {
    id: "cisco",
    name: "Cisco",
    slug: "cisco",
    color: "#1BA0D7",
    certifications: [
      { name: "CCNA Introduction to Networks", issueDate: "2023" },
      {
        name: "CCNA Switching Routing and Wireless Essentials",
        issueDate: "2023",
      },
    ],
  },
  {
    id: "google",
    name: "Google Cloud",
    slug: "googlecloud",
    color: "#4285F4",
    certifications: [
      { name: "Google Cloud Essentials", issueDate: "2023" },
      { name: "Baseline Infrastructure", issueDate: "2023" },
      { name: "Create and Manage Cloud Resources", issueDate: "2023" },
      { name: "Networking Fundamentals", issueDate: "2023" },
      { name: "Build and Secure Networks", issueDate: "2023" },
      { name: "Foundational Infrastructure Tasks", issueDate: "2023" },
      { name: "Foundational Data ML AI Tasks", issueDate: "2023" },
      { name: "Baseline Data ML AI", issueDate: "2023" },
    ],
  },
  {
    id: "boardinfinity",
    name: "Board Infinity",
    slug: "boardinfinity",
    color: "#6366F1",
    certifications: [
      { name: "Frontend Development using React", issueDate: "2022" },
    ],
  },
  {
    id: "ucdavis",
    name: "UC Davis",
    slug: "ucdavis",
    color: "#002855",
    certifications: [
      { name: "Data Manipulation in JavaScript", issueDate: "2022" },
    ],
  },
  {
    id: "eccouncil",
    name: "EC-Council",
    slug: "eccouncil",
    color: "#C8102E",
    certifications: [
      { name: "Secure Full Stack MEAN Developer", issueDate: "2023" },
    ],
  },
  {
    id: "coursera",
    name: "Coursera",
    slug: "coursera",
    color: "#0056D2",
    certifications: [
      { name: "Full Stack Software Developer Assessment V2", issueDate: "2023" },
    ],
  },
];

export const education: Education[] = [
  {
    degree: "MCA",
    institution: "Amrita Vishwa Vidyapeetham",
    score: "CGPA: 8.67",
  },
  {
    degree: "BSc Computer Science",
    institution: "University Institute of Technology, Ittiva",
    score: "73%",
  },
  {
    degree: "Higher Secondary",
    institution: "G.H.S.S Thevannoor",
  },
  {
    degree: "SSLC",
    institution: "JHS Ayoor",
  },
];

export const achievements = [
  "Senior Software Engineer",
  "MCA Graduate",
  "Healthcare Product Development",
  "Web3 Development Experience",
  "Full Stack Architecture Design",
  "Cloud Exposure",
  "Microservices Development",
  "AR/VR Integration",
  "Team Leadership",
  "AI Assisted Development",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
