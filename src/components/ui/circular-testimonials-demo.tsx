import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote: "Capture and analyze customer feedback to uncover valuable insights, improve products, and boost customer satisfaction.",
    name: "Customer Feedback Intelligence",
    designation: "AI Solution",
    src: "https://images.unsplash.com/photo-1552581230-c015914626ed?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote: "Get AI tailored to your business needs, enhancing efficiency and solving unique challenges with personalized solutions.",
    name: "Custom AI Systems",
    designation: "AI Solution",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote: "Organize and update your knowledge base with AI, ensuring accurate and efficient customer support every time.",
    name: "Knowledge Base Optimization",
    designation: "AI Solution",
    src: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote: "Automate routine tasks, boost productivity, and reduce errors with intelligent AI solutions that streamline your operations.",
    name: "AI-Driven Automation",
    designation: "AI Solution",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1368&auto=format&fit=crop",
  },
];

export const CircularTestimonialsDemo = () => (
  <section className="space-y-12 w-full">
    {/* Dark theme testimonials section - fits nicely with the rest of the dark background app */}
    <div className="bg-black/40 border border-white/5 p-8 md:p-16 rounded-3xl min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative backdrop-blur-sm">
      <div
        className="items-center justify-center relative flex w-full"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#a1a1aa",
            testimony: "#e4e4e7",
            arrowBackground: "#3b82f6",
            arrowForeground: "#18181b",
            arrowHoverBackground: "#60a5fa",
          }}
          fontSizes={{
            name: "28px",
            designation: "16px",
            quote: "18px",
          }}
        />
      </div>
    </div>
  </section>
);
