import { Zap, Sparkles, Layers } from "lucide-react";

export interface TestimonialSlide {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  iconName: "Zap" | "Sparkles" | "Layers";
}

export const testimonialSlides: TestimonialSlide[] = [
  {
    name: "Automation",
    title: "Streamlined Workflows",
    description: "Unlock smarter workflows with intelligent automation that adapts to your business. We don't just replace manual tasks, we reimagine them to be faster, scalable, and insight-driven.",
    imageUrl: "https://edfoal.com/assets/image/service1.jpg",
    href: "/services",
    iconName: "Zap",
  },
  {
    name: "Tailored AI Solutions",
    title: "Custom-built Architecture",
    description: "No off-the-shelf shortcuts — we build AI that is purpose-built for your business goals. From concept to deployment, every solution is custom-trained to think and execute exactly the way your organization works.",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service2.jpg",
    href: "/services",
    iconName: "Sparkles",
  },
  {
    name: "AI Consultancy",
    title: "Strategic Implementation",
    description: "Bridge the gap between possibility and performance. Our consultancy turns AI from a buzzword into a strategic business asset, guiding you from ideation to implementation with absolute clarity and measurable impact.",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service3.jpg",
    href: "/services",
    iconName: "Layers",
  },
];
