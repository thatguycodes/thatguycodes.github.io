export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; level?: string }[];
}

export interface ConsultingPackage {
  id: string;
  badge: string;
  title: string;
  duration: string;
  idealFor: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  popular?: boolean;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DomainItem {
  id: number;
  badge: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  targetSla: string;
  consensus: string;
  description: string;
  topology: { label: string; detail: string }[];
  deliverables: { title: string; desc: string }[];
}

export const personalInfo = {
  name: "Letlhogonolo Theodore Obonye",
  shortName: "Theodore Obonye",
  handle: "thatguycodes",
  tagline: "Principal Systems Architect & Technical Advisory",
  bio: "Unifying low-latency event topologies, deterministic Raft consensus, and human-centric engineering culture. Advising high-growth startups and enterprises on distributed resilience, multi-region fault tolerance, and cloud unit economics.",
  location: "Cape Town, South Africa",
  education: "BSc (Hons) Computer Science",
  email: "ltobonye@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/MrObonye", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/letlhogonolo-theodore-obonye-23727b171/", icon: "linkedin" },
    { name: "Twitter / X", url: "https://twitter.com/thatguycodes", icon: "twitter" },
    { name: "Email", url: "mailto:ltobonye@gmail.com", icon: "mail" },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Backend & Distributed Systems",
    skills: [
      { name: "Node.js" },
      { name: "Spring Boot" },
      { name: "Java" },
      { name: "TypeScript / JavaScript" },
      { name: "RESTful APIs" },
      { name: "Microservices" },
      { name: "Service Workers" },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React" },
      { name: "Vue.js" },
      { name: "Angular" },
      { name: "Astro" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3 / ES6+" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Cloud" },
      { name: "Docker" },
      { name: "CI / CD Pipelines" },
      { name: "Git & GitHub Actions" },
      { name: "GitLab CI" },
      { name: "Test-Driven Development (TDD)" },
      { name: "Linux / System Administration" },
    ],
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Oracle SQL" },
    ],
  },
];

export const experienceData: Experience[] = [
  {
    role: "Software Engineer",
    company: "ConnectUS ICT",
    period: "Sep 2018 - Feb 2020",
    location: "South Africa / Botswana",
    description: "Spearheaded frontend and client-side integration for eThebe, a microfinance lending startup application.",
    highlights: [
      "Engineered single-page application (SPA) client architecture communicating with microfinance REST endpoints.",
      "Implemented resilient offline-first support and caching strategies with Service Workers.",
      "Configured automated CI/CD deployment pipelines using GitLab CI, slashing deployment release cycles.",
    ],
    skills: ["React", "JavaScript", "REST APIs", "Service Workers", "GitLab CI", "Microfinance"],
  },
  {
    role: "Systems Administrator",
    company: "UASF / BOCRA",
    period: "Feb 2018 - Aug 2018",
    location: "Botswana",
    description: "Delivered digital infrastructure connectivity for a nationwide initiative expanding technology access to underserved communities.",
    highlights: [
      "Architected and deployed local area networks (LAN) integrated with wide area network (WAN) gateways.",
      "Managed user quota consumption, network policies, firewall rules, and QoS provisioning across remote operational centers.",
    ],
    skills: ["Networking", "LAN/WAN", "System Administration", "Infrastructure", "Security"],
  },
  {
    role: "IP Services Engineer",
    company: "BOFINET",
    period: "May 2016 - Jan 2018",
    location: "Botswana",
    description: "Core telecommunications backbone network routing and high-capacity IP service delivery.",
    highlights: [
      "Monitored and maintained tier-1 IP transmission backbones and multi-protocol network routing nodes.",
      "Resolved mission-critical network incidents and optimized bandwidth routing algorithms for high-availability enterprise clients.",
    ],
    skills: ["IP Routing", "BGP/OSPF", "Telecommunications", "Network Operations", "Troubleshooting"],
  },
  {
    role: "Associate Researcher",
    company: "BITRI (Botswana Institute for Technology Research & Innovation)",
    period: "May 2015 - Apr 2016",
    location: "Botswana",
    description: "Pioneered technology research, scientific data aggregation, and testing protocols for computational prototypes.",
    highlights: [
      "Engineered data collection pipelines and statistical analysis benchmarks for emerging technologies.",
      "Designed and documented automated testing routines ensuring rigorous scientific data fidelity.",
    ],
    skills: ["Research & R&D", "Data Analysis", "Automated Testing", "Systems Evaluation"],
  },
];

export const projectsData: Project[] = [
  {
    title: "eThebe Microfinance Platform",
    description: "A secure digital loan application and micro-lending single page application with reactive state management, asynchronous document uploading, and real-time loan status tracking.",
    tags: ["React", "Service Workers", "REST API", "GitLab CI", "FinTech"],
    featured: true,
  },
  {
    title: "High-Capacity WAN/LAN Infrastructure Gateway",
    description: "Enterprise network design for community internet service provision with bandwidth accounting, QoS prioritization, and failover routing.",
    tags: ["Systems Architecture", "IP Routing", "Linux", "Network Security"],
    featured: true,
  },
  {
    title: "Cloud-Native Developer Portfolio",
    description: "Ultra-fast, accessible personal developer portfolio built with Astro and Tailwind CSS, featuring automated GitHub Actions deployment to GitHub Pages.",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "GitHub Actions"],
    githubUrl: "https://github.com/thatguycodes/thatguycodes.github.io",
    liveUrl: "https://thatguycodes.github.io",
    featured: true,
  },
  {
    title: "Microservices Service Orchestrator",
    description: "Proof-of-concept Spring Boot and Node.js microservices architecture featuring distributed Redis caching, JWT authentication, and PostgreSQL data persistence.",
    tags: ["Java", "Spring Boot", "Node.js", "Redis", "PostgreSQL"],
    featured: false,
  },
];

export const telemetryMetrics: MetricItem[] = [
  {
    id: "01",
    label: "SCALE METRIC // 01",
    value: "120M+",
    title: "Monthly Active Users",
    description: "Orchestrated across 14 sovereign edge regions with automated failover and zero data corruption during regional cloud outages.",
    iconName: "Globe",
  },
  {
    id: "02",
    label: "VELOCITY METRIC // 02",
    value: "3.8x",
    title: "DORA Cycle Time Lift",
    description: "Replaced fragile staging gates with ephemeral previews, hermetic builds, and trunk-based deployment pipelines.",
    iconName: "Zap",
  },
  {
    id: "03",
    label: "CAPEX EFFICIENCY // 03",
    value: "$14.2M",
    title: "Direct Cloud FinOps Saved",
    description: "Engineered tiered warm/cold object storage, eliminated multi-cloud transit egress taxes, and tuned container memory footprints.",
    iconName: "PiggyBank",
  },
  {
    id: "04",
    label: "TALENT DYNAMICS // 04",
    value: "0 → 145",
    title: "Engineers Mentored & Scaled",
    description: "Constructed dual-track engineering career paths, psychological safety rituals, and promoted 18 ICs to Staff+ and Management roles.",
    iconName: "Users",
  },
];

export const consultingPackages: ConsultingPackage[] = [
  {
    id: "resilience-audit",
    badge: "FIXED SCOPE // 2 WEEKS",
    title: "System Resilience & Latency Audit",
    duration: "2 Weeks",
    idealFor: "Scale-ups experiencing p99 latency spikes, outages, or unverified disaster recovery.",
    description: "A comprehensive inspection of your distributed topology, database contention, and failover mechanics to guarantee 99.999% reliability.",
    deliverables: [
      "End-to-end architecture topology & single-point-of-failure (SPOF) audit",
      "p99 latency bottleneck profiling across edge, gateway, and database layers",
      "Automated chaos engineering & kill-switch drill execution playbook",
      "Executive RFC and remediation roadmap for leadership and engineering teams",
    ],
    ctaText: "Request Resilience Audit",
    popular: true,
  },
  {
    id: "cloud-finops",
    badge: "TARGETED SPRINT // 2-3 WEEKS",
    title: "Multi-Cloud FinOps & Cost Optimization",
    duration: "2-3 Weeks",
    idealFor: "Companies spending >$20k/month on AWS or GCP seeking 30-60% unit cost reduction.",
    description: "Surgical cloud infrastructure optimization targeting data egress taxes, compute bin-packing, and tiered cold storage without degrading SLAs.",
    deliverables: [
      "Granular cost-per-tenant and unit economics attribution model",
      "Egress reduction architecture via edge routing and peering optimization",
      "Spot/Graviton compute bin-packing and Karpenter autoscaling policies",
      "Guaranteed 30%+ cloud expenditure salvage blueprint",
    ],
    ctaText: "Request FinOps Sprint",
  },
  {
    id: "fractional-architect",
    badge: "RETAINER // 15-25 HRS/MO",
    title: "Fractional Principal Architect & Advisory",
    duration: "Monthly Retainer",
    idealFor: "Growing engineering orgs needing Staff+/Principal technical direction without full-time executive overhead.",
    description: "Hands-on architectural guidance, RFC technical review, team topology alignment, and executive sparring for founders and VPs of Engineering.",
    deliverables: [
      "Weekly architectural review board & RFC governance oversight",
      "1-on-1 technical mentorship for Staff+ engineers and tech leads",
      "Cloud vendor contract and enterprise EDP negotiation leverage",
      "Zero-to-one cellular architecture design for upcoming product lines",
    ],
    ctaText: "Inquire on Availability",
  },
];

export const architecturalDomains: DomainItem[] = [
  {
    id: 0,
    badge: "01 / CLOUD & EDGE",
    shortTitle: "Distributed Fault Domains",
    title: "High-Throughput, Active-Active Geographic Distribution",
    subtitle: "Kafka, Raft Consensus, Multi-Region Active-Active",
    targetSla: "TARGET SLA: 99.999%",
    consensus: "CONSENSUS: RAFT CLUSTER",
    description: "Constructing fault-isolated computing cells that withstand full cloud region blackouts without human intervention. We pair durable log replication (Apache Kafka & custom Raft state machines) with edge-routed Anycast to maintain deterministic state replication under 450,000 queries per second.",
    topology: [
      { label: "[Ingress Layer]", detail: "Cloudflare Anycast + eBPF Envoy Gateway (p99: 1.8ms)" },
      { label: "[Replication Ring]", detail: "Multi-region Kafka Cluster w/ Tiered Storage" },
      { label: "[State Consensus]", detail: "3-AZ Raft Quorum with Quorum Leases" },
      { label: "[Data Hydration]", detail: "PostgreSQL Logical Replication + ScyllaDB Edge Caches" },
    ],
    deliverables: [
      { title: "Chaos Engineering Audits", desc: "Automated kill-switch drill injections in non-peak production." },
      { title: "Zero Data-Loss RPO=0", desc: "Guaranteed serializability across financial state transactions." },
    ],
  },
  {
    id: 1,
    badge: "02 / ORG ARCHITECTURE",
    shortTitle: "Engineering Culture & Ladders",
    title: "High Agency, Psychological Safety & Staff+ Career Ladders",
    subtitle: "Team Topologies, Staff+ Archetypes, RFC Governance",
    targetSla: "TALENT RETENTION: 94%",
    consensus: "SYSTEM: TEAM TOPOLOGIES",
    description: "Scaling organizations is an engineering challenge governed by Conway’s Law. I architect decoupled stream-aligned squads, supported by autonomous platform teams that treat internal developers as customers. Rigorous RFC culture eliminates backchannel politics and fosters transparent technical discourse.",
    topology: [
      { label: "[RFC Lifecycle]", detail: "Public asynchronous review → 72h consensus window" },
      { label: "[Blameless Retros]", detail: "Root cause timeline analysis with action item ownership" },
      { label: "[IC Dual Track]", detail: "Principal & Fellow equalized to VP/Director compensation" },
    ],
    deliverables: [
      { title: "Stream-Aligned Autonomy", desc: "End-to-end squad ownership from spec to production telemetry." },
      { title: "DORA Metric Transparency", desc: "Lead time for changes reduced from 14 days to 42 minutes." },
    ],
  },
  {
    id: 2,
    badge: "03 / FINOPS STRATEGY",
    shortTitle: "Zero-Tax Cloud Optimization",
    title: "Cloud FinOps & Infrastructure Unit Economics",
    subtitle: "Egress Salvaging, Bare Metal Hybrid, Compute Bin-Packing",
    targetSla: "GROSS MARGIN IMPACT: +14%",
    consensus: "METRIC: EGRESS SALVAGING",
    description: "Unchecked hyperscaler spend cripples software unit margins. By designing hybrid architectures—routing heavy throughput through co-located bare metal while keeping stateless compute on elastic Kubernetes—we achieved a 62% reduction in cloud bills while improving p99 response times.",
    topology: [
      { label: "[Egress Optimization]", detail: "Inter-region peering via Cloudflare Magic Transit" },
      { label: "[Compute Bin-Packing]", detail: "Karpenter autoscaling on Spot instances (74% savings)" },
      { label: "[Tiered Cold Storage]", detail: "S3 Glacier Instant Retrieval for historical immutable logs" },
    ],
    deliverables: [
      { title: "COGS Traceability", desc: "Real-time cost per tenant attribution at microsecond resolution." },
      { title: "Contract Leverage", desc: "Multimillion EDP negotiations across AWS and Google Cloud." },
    ],
  },
  {
    id: 3,
    badge: "04 / APPLIED AI INFRA",
    shortTitle: "Agentic Pipeline Orchestration",
    title: "Autonomous Agentic Pipelines & Low-Latency LLM Serving",
    subtitle: "Local LLM serving, Vector indexes, Streaming evaluation",
    targetSla: "TOKEN LATENCY: 22ms TTFT",
    consensus: "FRAMEWORK: LOCAL-FIRST LLM",
    description: "Moving generative intelligence from brittle chat wrappers into deterministic distributed workflows. We architect vLLM-backed inference clusters with speculative decoding, streaming vector hybrid search, and deterministic validation schemas to guarantee zero hallucinatory state drift in business logic.",
    topology: [
      { label: "[Inference Serving]", detail: "vLLM on TensorRT-LLM with dynamic continuous batching" },
      { label: "[Vector Indexing]", detail: "HNSW hybrid dense/sparse search on Qdrant with sub-5ms lookup" },
      { label: "[Agent Guardrails]", detail: "Constrained JSON grammar decoders for deterministic state output" },
    ],
    deliverables: [
      { title: "Deterministic Validation", desc: "Strict Pydantic/Typebox output guarantees on all LLM actions." },
      { title: "Cost-Per-Token Efficiency", desc: "Self-hosted quantized models saving 80% vs raw API routing." },
    ],
  },
];

