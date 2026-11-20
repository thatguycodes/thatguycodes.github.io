export interface ProjectItem {
  title: string;
  slug: string;
  category: string;
  description: string;
  tags: string[];
  accentColor: string;
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string }[];
}

export const personalInfo = {
  name: "Letlhogonolo Theodore Obonye",
  shortName: "Theodore Obonye",
  firstName: "Theodore",
  lastName: "Obonye",
  handle: "thatguycodes",
  jobTitle: "Software Engineer & Cloud Architect",
  tagline: "Software Engineer & Cloud Architect",
  bio: "Software engineer specializing in distributed systems, cloud architecture, and modern reactive frontends. Builds resilient, high-performance applications combining clean architecture with scalable cloud infrastructure.",
  intro:
    "Software engineer specializing in distributed systems, cloud architecture, and modern reactive frontends.<br />Builds resilient, high-performance applications that combine clean architecture with scalable cloud infrastructure.",
  aboutTagline:
    "Architecting scalable distributed services and reactive web platforms that are fast, resilient, and intuitive to use.",
  location: "Cape Town, South Africa",
  country: "South Africa / Botswana",
  coordinates: "-33.9249° S, 18.4241° E",
  education: "BSc (Hons) Computer Science",
  email: "ltobonye@gmail.com",
  socials: [
    { name: "Mail", url: "mailto:ltobonye@gmail.com", icon: "mail" },
    { name: "GitHub", url: "https://github.com/thatguycodes", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/letlhogonolo-theodore-obonye-23727b171/", icon: "linkedin" },
    { name: "Twitter / X", url: "https://twitter.com/thatguycodes", icon: "twitter" },
  ],
};

export const servicesList = [
  { name: "Distributed Systems & Microservices" },
  { name: "AWS Cloud & Scalable Infrastructure" },
  { name: "React, Next.js & TypeScript Frontends" },
  { name: "Docker, Kubernetes & CI/CD Pipelines" },
  { name: "Database Architecture, Redis & Caching" },
];

export const experiencePlaceholders: ExperienceItem[] = [
  {
    role: "Staff Software Engineer / Architect",
    company: "[Enterprise Cloud / Technology Platform]",
    period: "2023 — Present",
    location: "Cape Town / Remote",
    description:
      "Leading the architectural direction of high-throughput distributed services, event messaging, and cloud infrastructure reliability.",
    highlights: [
      "Architected decoupled microservices with sub-10ms p99 latency targets across multi-region deployments.",
      "Engineered automated container deployment pipelines with ephemeral preview environments and hermetic builds.",
      "Established engineering RFC review boards and technical ladders to scale team velocity.",
    ],
    tags: ["Distributed Systems", "Cloud Architecture", "Next.js", "Docker", "AWS"],
    isPlaceholder: true,
  },
  {
    role: "Senior Systems Engineer",
    company: "[FinTech / Scale-Up Infrastructure]",
    period: "2020 — 2023",
    location: "South Africa",
    description:
      "Engineered transactional financial APIs, distributed caching layers, and high-availability database replication topologies.",
    highlights: [
      "Designed asynchronous event-driven queues handling millions of daily transactional records.",
      "Implemented resilient offline-first client synchronization with Service Workers and idempotent API endpoints.",
      "Optimized query performance and connection pooling to reduce database compute overhead by 40%.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka"],
    isPlaceholder: true,
  },
  {
    role: "Software Engineer",
    company: "[Digital Products & Web Agency]",
    period: "2018 — 2020",
    location: "Botswana / South Africa",
    description:
      "Full-stack development of reactive web platforms, single-page client architectures, and automated testing suites.",
    highlights: [
      "Engineered responsive single-page web applications with modular component architecture and strict typing.",
      "Configured automated CI/CD deployment pipelines using GitLab CI and Docker containers.",
      "Enforced Test-Driven Development (TDD) practices across frontend and backend modules.",
    ],
    tags: ["React", "JavaScript", "REST APIs", "Service Workers", "GitLab CI"],
    isPlaceholder: true,
  },
  {
    role: "Systems & Network Administrator",
    company: "[Telecommunications & Research Hub]",
    period: "2015 — 2018",
    location: "Botswana",
    description:
      "Core IP routing backbones, nationwide network provisioning, and automated testing routines for computational prototypes.",
    highlights: [
      "Administered high-capacity network gateways, firewall policies, and QoS traffic bandwidth accounting.",
      "Monitored and maintained tier-1 IP transmission backbones with high-availability failover routing.",
      "Designed data aggregation pipelines and automated benchmarks ensuring scientific data fidelity.",
    ],
    tags: ["IP Routing", "Linux Systems", "Network Security", "Automated Testing"],
    isPlaceholder: true,
  },
];

export const projectPlaceholders: ProjectItem[] = [
  {
    title: "Distributed Mesh Orchestrator",
    slug: "mesh-orchestrator",
    category: "Distributed Systems",
    description:
      "High-throughput event streaming platform featuring decentralized consensus, automatic failover routing, and sub-millisecond message delivery.",
    tags: ["Distributed Systems", "Node.js", "Redis", "Docker"],
    accentColor: "#176cfe",
    isPlaceholder: true,
  },
  {
    title: "Cloud FinOps & Metrics Matrix",
    slug: "cloud-finops-matrix",
    category: "Cloud Engineering",
    description:
      "Multi-cloud telemetry dashboard tracking infrastructure unit economics, egress traffic patterns, and autoscaling efficiency in real-time.",
    tags: ["AWS Cloud", "TypeScript", "Next.js", "PostgreSQL"],
    accentColor: "#ff8400",
    isPlaceholder: true,
  },
  {
    title: "Interactive 3D Systems Topology",
    slug: "topology-3d-visualizer",
    category: "WebGL / Creative Tech",
    description:
      "Interactive 3D WebGL application visualizing distributed cluster topologies, node latency heatmaps, and service dependency graphs.",
    tags: ["Three.js", "WebGL", "TypeScript", "GLSL"],
    accentColor: "#00b4d8",
    isPlaceholder: true,
  },
  {
    title: "Core Microfinance Lending Engine",
    slug: "microfinance-platform",
    category: "FinTech Platform",
    description:
      "Offline-resilient digital loan underwriting single-page platform with reactive state handling, document verification, and automated CI/CD.",
    tags: ["React", "Service Workers", "REST APIs", "CI/CD"],
    accentColor: "#22904b",
    isPlaceholder: true,
  },
  {
    title: "Autonomous Workflow Pipeline",
    slug: "workflow-pipeline",
    category: "Platform Engineering",
    description:
      "Deterministic workflow execution engine with containerized worker pools, priority scheduling, and real-time WebSocket progress telemetry.",
    tags: ["Java", "Spring Boot", "WebSockets", "Kubernetes"],
    accentColor: "#7928ca",
    isPlaceholder: true,
  },
];
