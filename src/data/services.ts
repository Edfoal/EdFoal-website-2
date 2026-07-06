export interface ServiceItem {
  id: string;
  name: string;
  title: string;
  image: string;
  imageUrl: string;
  description: string;
  paragraphs: string[];
  href: string;
  kicker?: string;
  features?: string[];
  bullets: string[];
}

export type ServiceDetail = ServiceItem;

export const servicesData: ServiceItem[] = [
  {
    id: "tailored-ai",
    name: "Tailored AI Solutions",
    title: "Custom AI, Built Around You — Not the Other Way Around",
    image: "https://ik.imagekit.io/edfoalImage/assets/image/service2.jpg",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service2.jpg",
    description: "Empower your business with intelligence built around your constraints. We design and train bespoke AI models, agent workflows, and cognitive pipelines suited for your industry requirements.",
    paragraphs: [
      "Generic AI tools can't solve unique problems. That's why we design, train, and deploy fully custom AI solutions tailored to your specific business challenges and objectives. Whether you need predictive analytics, computer vision, natural language processing, or a completely new AI product, we start with your goals — not pre-made models.",
      "Our process includes deep collaboration to understand your operations, data landscape, and KPIs. From there, we architect AI that fits seamlessly into your workflow, with clean integration and intuitive usability. Think of it as your own in-house AI team, minus the overhead."
    ],
    href: "/services",
    kicker: "02 / CUSTOM AI",
    features: [
      "Bespoke LLM fine-tuning",
      "Retrieval-Augmented Generation (RAG)",
      "High-performance semantic caching",
      "Sovereign data hosting options"
    ],
    bullets: [
      "Custom AI Solutions",
      "Predictive Analytics",
      "Natural Language Processing",
      "Seamless Integration",
      "Goal-Oriented Design",
      "Collaborative Development"
    ]
  },
  {
    id: "automation",
    name: "Automation",
    title: "Reimagine What's Possible with Intelligent Automation",
    image: "https://ik.imagekit.io/edfoalImage/assets/image/service1.jpg",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service1.jpg",
    description: "Streamline your operations and maximize productivity. Our automation services eliminate repetitive workflows, integrate systems seamlessly, and reduce operational costs to help you focus on scaling.",
    paragraphs: [
      "Our automation services go far beyond basic task elimination. We design systems that think, respond, and improve — not just automate. Whether it's streamlining internal workflows, enhancing customer experiences, or integrating legacy systems, we build automation that adapts to real-world complexity.",
      "By combining AI with process automation, we help businesses reduce operational friction, improve accuracy, and unlock hours of hidden productivity. From robotic process automation (RPA) to intelligent document processing and real-time decision-making tools — we deliver scalable automation that evolves with your needs."
    ],
    href: "/services",
    kicker: "01 / AUTOMATION",
    features: [
      "Custom voice/chat bot integration",
      "Process mining & workflows",
      "Seamless CRM & ERP synchronization",
      "Reduce cycle times by 70%+"
    ],
    bullets: [
      "Intelligent Automation",
      "Seamless Integration",
      "Scalable Solutions",
      "Adaptive Workflows",
      "Real-Time Decision Making",
      "Enhanced Accuracy & Productivity"
    ]
  },
  {
    id: "consultancy",
    name: "AI Consultancy",
    title: "Strategy-First AI Guidance That Delivers Real Impact",
    image: "https://ik.imagekit.io/edfoalImage/assets/image/service3.jpg",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service3.jpg",
    description: "Bridge the gap between possibility and performance. Our consultancy turns AI from a buzzword into a strategic asset, guiding you from ideation to implementation with clarity and impact.",
    paragraphs: [
      "Jumping into AI without a strategy leads to wasted time and missed opportunities. Our consultancy ensures that doesn't happen. We work with you to explore how AI can truly elevate your business — not just as a tech trend, but as a core enabler of growth, efficiency, and innovation.",
      "Whether you're just starting out or scaling existing AI initiatives, we offer expert guidance at every stage — from opportunity discovery and technical roadmapping to vendor evaluation and ethical AI alignment. We don't just advise — we empower your team with the tools, mindset, and roadmap to confidently leverage AI long-term."
    ],
    href: "/services",
    kicker: "03 / CONSULTANCY",
    features: [
      "Board-ready AI roadmaps",
      "Ethical risk & security audits",
      "API cost & usage optimization",
      "Architectural feasibility studies"
    ],
    bullets: [
      "Strategic AI Consulting",
      "Opportunity Discovery",
      "Technical Roadmapping",
      "Ethical AI Alignment",
      "Scalable AI Adoption",
      "Empowered Teams"
    ]
  }
];
