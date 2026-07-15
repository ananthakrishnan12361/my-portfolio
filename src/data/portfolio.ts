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
  { label: "Major Projects", value: "5+" },
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
    id: "jgdhealth",
    name: "JGDHealth",
    role: "Frontend Developer",
    description:
      "Healthcare platform enabling appointment booking, patient management, and streamlined clinical workflows for medical professionals.",
    tech: ["Angular", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Appointment Booking",
      "Patient Management",
      "Healthcare Workflow",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "fu-capital",
    name: "FU-Capital",
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
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "talentely",
    name: "Talentely",
    role: "Full Stack Developer",
    description:
      "Talent management platform connecting employers with skilled professionals through intelligent matching and profile management.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    highlights: ["Full Stack", "Talent Matching", "Profile Management"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "google-slides",
    name: "Google Slides-like Application",
    role: "React Frontend Developer",
    description:
      "Collaborative presentation tool with real-time editing, drag-and-drop UI, and presentation management capabilities.",
    tech: ["React.js", "Redux", "Ant Design"],
    highlights: [
      "Real-time Editing",
      "Presentation Management",
      "Drag-and-drop UI",
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "arvr-calling",
    name: "AR/VR Calling Platform",
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
    gradient: "from-pink-500 to-rose-600",
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
