
export type Project = {
  slug: string;
  title: string;
  categoryTags: string[];
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  featured?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  context?: string;
  role?: string;
  architecture?: string;
  decisions?: string[];
  highlights: string[];
  results?: string;
};

// Single source of truth for projects 项目数据源
export const projects: Project[] = [
  {
    slug: 'distributed-ecommerce',
    title: 'Nexus Commerce',
    categoryTags: ['Backend', 'System Design'],
    shortDescription: 'High-concurrency microservices architecture for global retail scale.',
    longDescription: 'A comprehensive distributed e-commerce solution built to handle extreme traffic peaks. The architecture prioritizes eventual consistency, low latency, and high availability.',
    techStack: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
    featured: true,
    repoUrl: 'https://github.com/qiyue-chen/nexus-commerce',
    context: 'Designed for a high-growth retail startup needing to scale from 10k to 1M daily orders.',
    role: 'Lead System Architect',
    architecture: 'Microservices with event-driven synchronization using Apache Kafka and specialized read-models in Redis.',
    decisions: [
      'Chose gRPC over REST for internal service communication to reduce serialization overhead.',
      'Implemented the Outbox Pattern to ensure reliable event delivery to Kafka.',
      'Used Redis bloom filters to optimize inventory availability checks.'
    ],
    highlights: [
      'Maintained 99.99% uptime during Black Friday traffic spikes.',
      'Reduced database load by 60% through aggressive multi-level caching.',
      'Designed a pluggable payment orchestration layer supporting 10+ providers.'
    ],
    results: 'Successfully handled 1.2M orders in a single 24-hour window with sub-200ms p99 latency.'
  },
  {
    slug: 'ai-learning-companion',
    title: 'Aura Intelligence',
    categoryTags: ['AI/ML', 'Full Stack'],
    shortDescription: 'Adaptive learning platform powered by RAG and large language models.',
    longDescription: 'An AI-native education tool that personalizes the learning path for every user by analyzing performance in real-time and retrieving relevant context from a vast knowledge base.',
    techStack: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'Pinecone', 'Tailwind'],
    featured: true,
    demoUrl: 'https://aura-demo.example.com',
    repoUrl: 'https://github.com/qiyue-chen/aura-intelligence',
    context: 'Exploring the boundary between traditional curriculum and AI-assisted personalized learning.',
    role: 'Full Stack Engineer & AI Researcher',
    architecture: 'Next.js frontend with a Python FastAPI backend handling the LLM orchestration and vector search.',
    highlights: [
      'Optimized vector retrieval using HNSW indexing for sub-10ms similarity searches.',
      'Developed a streaming response UI with graceful error recovery.',
      'Implemented automated prompt evaluation cycles to ensure educational accuracy.'
    ],
    results: 'Improved student retention rates by 22% in beta testing compared to static video courses.'
  },
  {
    slug: 'algorithm-visualizer',
    title: 'Graph Theory Lab',
    categoryTags: ['Frontend', 'Education'],
    shortDescription: 'Interactive workspace for exploring complex graph algorithms in real-time.',
    longDescription: 'A high-performance visualization tool designed for computer science education. It allows users to manipulate nodes and edges and watch algorithms execute step-by-step.',
    techStack: ['TypeScript', 'Canvas API', 'React', 'Web Workers'],
    featured: false,
    demoUrl: 'https://graph-lab.example.com',
    repoUrl: 'https://github.com/qiyue-chen/graph-lab',
    highlights: [
      'Offloaded complex graph traversals to Web Workers to maintain 60FPS UI performance.',
      'Custom physics engine for force-directed layouts.',
      'Supports real-time code injection for user-defined heuristics.'
    ]
  }
];

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getFeaturedProjects = () => projects.filter(p => p.featured);
