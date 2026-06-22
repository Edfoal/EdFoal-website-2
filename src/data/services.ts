export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  description: string;
  href: string;
  kicker?: string;
  features?: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "automation",
    title: "Automation",
    image: "https://ik.imagekit.io/edfoalImage/assets/image/service1.jpg",
    description: "Streamline your operations and maximize productivity. Our automation services eliminate repetitive workflows, integrate systems seamlessly, and reduce operational costs to help you focus on scaling.",
    href: "/services",
    kicker: "01 / AUTOMATION",
    features: [
      "Custom voice/chat bot integration",
      "Process mining & workflows",
      "Seamless CRM & ERP synchronization",
      "Reduce cycle times by 70%+"
    ]
  },
  {
    id: "tailored-ai",
    title: "Tailored AI Solutions",
    image: "https://ik.imagekit.io/edfoalImage/assets/image/service2.jpg",
    description: "Empower your business with intelligence built around your constraints. We design and train bespoke AI models, agent workflows, and cognitive pipelines suited for your industry requirements.",
    href: "/services",
    kicker: "02 / CUSTOM AI",
    features: [
      "Bespoke LLM fine-tuning",
      "Retrieval-Augmented Generation (RAG)",
      "High-performance semantic caching",
      "Sovereign data hosting options"
    ]
  },
  {
    id: "consultancy",
    title: "AI Consultancy",
    image: "https://ik.imagekit.io/edfoalImage/assets/image/service3.jpg",
    description: "Bridge the gap between possibility and performance. Our consultancy turns AI from a buzzword into a strategic asset, guiding you from ideation to implementation with clarity and impact.",
    href: "/services",
    kicker: "03 / CONSULTANCY",
    features: [
      "Board-ready AI roadmaps",
      "Ethical risk & security audits",
      "API cost & usage optimization",
      "Architectural feasibility studies"
    ]
  }
];
