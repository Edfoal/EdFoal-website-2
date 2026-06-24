"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  Phone,
  Globe,
  CheckCircle,
  ArrowRight,
  Check,
} from "lucide-react";
import { FaFacebook, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { OriginButton } from "@/components/ui/OriginButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RobotHero } from "@/components/ui/RobotHero";
import useLenis from "@/hooks/useLenis";
import { cn } from "@/lib/utils";

// If you have a Google Sheets deployment URL, paste it here to enable active submission:
const GOOGLE_SHEETS_URL = "";

export default function ContactPage() {
  // Initialize Lenis scroll smoothing
  useLenis();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "US",
    phone: "",
    message: "",
    services: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (serviceName: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(serviceName);
      const updatedServices = alreadySelected
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName];
      return { ...prev, services: updatedServices };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      if (GOOGLE_SHEETS_URL) {
        const formElement = e.currentTarget;
        const body = new FormData(formElement);
        body.set("services", formData.services.join(", "));

        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          body: body,
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "US",
            phone: "",
            message: "",
            services: [],
          });
        } else {
          throw new Error("Unable to submit to sheet. Please check script configuration.");
        }
      } else {
        // Simulation/Mock submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "US",
          phone: "",
          message: "",
          services: [],
        });
      }
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Website design",
    "Content creation",
    "UX design",
    "Strategy & consulting",
    "User research",
    "Other",
  ];

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-purple-500/10 selection:text-purple-900 overflow-hidden">
        {/* Light Background Gradients & Grid */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-white -z-50 pointer-events-none select-none">
          {/* Light Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-70"
            style={{
              backgroundSize: "50px 50px",
              backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)"
            }}
          />

          {/* Noise overlay */}
          <div className="noise-overlay" />

          {/* Soft violet/blue gradient blurs adapted for white theme */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.04),transparent_50%)]" />
          
          <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-purple-400/5 blur-[120px]" />
          <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[140px]" />
        </div>

        {/* Floating Navbar */}
        <Navbar />

        {/* RobotHero Section */}
        <RobotHero
          kicker="Contact Us"
          title={
            <span className="text-[#f5e1b8]">Tailored AI Solutions</span>
          }
          subtitle="Explore how we're transforming businesses with cutting-edge AI solutions tailored just for you!"
        />

        {/* Main Content & Footer inside light theme wrapper */}
        <div data-theme="light">
          {/* Main Content Section */}
          <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-16 pb-20">
          <div className="w-full rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[650px]">
              
              {/* Left Column: Info Sidebar */}
              <div className="lg:col-span-5 bg-zinc-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-200 flex flex-col justify-between">
                <div>
                  {/* Heading */}
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
                    Get in touch
                  </h1>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                    We'd love to hear from you. Our friendly team is always here to chat.
                  </p>

                  {/* Info Blocks */}
                  <div className="space-y-8">
                    {/* Chat */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shrink-0 shadow-sm">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 text-base mb-1">
                          Chat to us
                        </h3>
                        <p className="text-zinc-500 text-xs md:text-sm mb-2">
                          Our friendly team is here to help.
                        </p>
                        <a
                          href="mailto:info@edfoal.com"
                          className="text-sm font-semibold text-zinc-800 hover:text-purple-600 transition-colors"
                        >
                          info@edfoal.com
                        </a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shrink-0 shadow-sm">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 text-base mb-1">
                          Office
                        </h3>
                        <p className="text-zinc-500 text-xs md:text-sm mb-2">
                          Come say hello at our office HQ.
                        </p>
                        <p className="text-sm font-semibold text-zinc-800 leading-relaxed">
                          100 Smith Street<br />Collingwood VIC 3066 AU
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shrink-0 shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 text-base mb-1">
                          Phone
                        </h3>
                        <p className="text-zinc-500 text-xs md:text-sm mb-2">
                          Mon-Fri from 8am to 5pm.
                        </p>
                        <a
                          href="tel:+15550000000"
                          className="text-sm font-semibold text-zinc-800 hover:text-purple-600 transition-colors"
                        >
                          +1 (555) 000-0000
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons Footer */}
                <div className="flex items-center gap-5 mt-16 text-zinc-400">
                  <a href="#" className="hover:text-purple-600 transition-colors" aria-label="Facebook">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-purple-600 transition-colors" aria-label="X">
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-purple-600 transition-colors" aria-label="LinkedIn">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-purple-600 transition-colors" aria-label="YouTube">
                    <FaYoutube className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-purple-600 transition-colors" aria-label="Website">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Form Container */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.div
                      key="form-container"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Header */}
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 mb-2">
                          Level up your brand
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-base">
                          You can reach us anytime via{" "}
                          <a
                            href="mailto:info@edfoal.com"
                            className="text-zinc-900 font-medium hover:text-purple-600 transition-colors"
                          >
                            info@edfoal.com
                          </a>
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* First & Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="firstName" className="text-zinc-700 text-sm font-medium mb-2 block">
                              First name *
                            </label>
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="First name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="text-zinc-700 text-sm font-medium mb-2 block">
                              Last name *
                            </label>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Last name"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="text-zinc-700 text-sm font-medium mb-2 block">
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
                          />
                        </div>

                        {/* Phone Number with Prefix */}
                        <div>
                          <label htmlFor="phone" className="text-zinc-700 text-sm font-medium mb-2 block">
                            Phone number
                          </label>
                          <div className="flex rounded-lg border border-zinc-200 bg-zinc-50/50 focus-within:border-purple-500 focus-within:bg-white transition-all overflow-hidden">
                            <select
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleInputChange}
                              className="bg-transparent border-r border-zinc-200 text-zinc-700 text-sm px-3 py-2.5 focus:outline-none cursor-pointer hover:bg-zinc-100/50"
                            >
                              <option value="US" className="bg-white text-zinc-950">US +1</option>
                              <option value="GB" className="bg-white text-zinc-950">GB +44</option>
                              <option value="IN" className="bg-white text-zinc-950">IN +91</option>
                              <option value="CA" className="bg-white text-zinc-950">CA +1</option>
                              <option value="AU" className="bg-white text-zinc-950">AU +61</option>
                            </select>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="flex-1 bg-transparent border-none px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-0"
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="text-zinc-700 text-sm font-medium mb-2 block">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Leave us a message..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-all min-h-[120px] resize-none"
                          />
                        </div>

                        {/* Services Checkboxes */}
                        <div>
                          <span className="text-zinc-700 text-sm font-medium mb-3 block">
                            Services
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {serviceOptions.map((service) => {
                              const isChecked = formData.services.includes(service);
                              return (
                                <label
                                  key={service}
                                  className="flex items-center gap-3 cursor-pointer group select-none"
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleServiceChange(service)}
                                    className="sr-only"
                                  />
                                  <div
                                    className={cn(
                                      "w-5 h-5 rounded border border-zinc-200 bg-zinc-50/50 group-hover:border-zinc-300 flex items-center justify-center transition-all duration-200 shrink-0",
                                      isChecked && "border-purple-600 bg-purple-50 text-purple-600"
                                    )}
                                  >
                                    {isChecked && <Check className="w-3.5 h-3.5" />}
                                  </div>
                                  <span className="text-zinc-500 group-hover:text-zinc-800 text-sm transition-colors duration-200">
                                    {service}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </div>

                        {/* Submit Error */}
                        {submitError && (
                          <div className="text-sm font-semibold text-rose-600 p-4 rounded-lg bg-rose-50 border border-rose-100">
                            {submitError}
                          </div>
                        )}

                        {/* Submit Button */}
                        <OriginButton
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 rounded-full text-sm font-semibold tracking-wide border-[0.5px]"
                          style={{
                            "--ic-card": "#ffffff",
                            "--ic-card-foreground": "#0f172a",
                            "--ic-border": "#0f172a",
                            "--ic-foreground": "#0f172a",
                            "--ic-background": "#ffffff",
                          } as React.CSSProperties}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-4 h-4 border-2 border-zinc-950/25 border-t-zinc-950 rounded-full animate-spin" />
                              <span>Submitting...</span>
                            </div>
                          ) : (
                            <span>Get started</span>
                          )}
                        </OriginButton>
                      </form>
                    </motion.div>
                  ) : (
                    /* Success Screen */
                    <motion.div
                      key="success-container"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.2,
                        }}
                        className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                      >
                        <CheckCircle className="w-8 h-8" />
                      </motion.div>

                      <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-3 tracking-tight">
                        Message Sent!
                      </h2>
                      <p className="text-zinc-500 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
                        Thanks for reaching out! Our team will review your message and connect with you shortly.
                      </p>

                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 hover:text-purple-500 uppercase tracking-widest transition-colors duration-200 cursor-pointer"
                      >
                        <span>Send another message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
  );
}
