"use client";
import * as React from "react";
import { useRef } from "react";
import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const footerLogoUrl = "https://ik.imagekit.io/edfoalImage/assets/image/footerlogo.png";

interface FooterSocialLinkProps {
  item: { label: string; href: string };
  mouseX: MotionValue<number>;
}

function FooterSocialLink({ item, mouseX }: FooterSocialLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-100, 0, 100], [1, 1.6, 1]);
  const scale = useSpring(scaleSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ scale }}
      className="inline-block hover:text-[#e2d59f] transition-colors origin-center cursor-pointer"
    >
      {item.label}
    </motion.a>
  );
}

function Footer() {
  const mouseX = useMotionValue(Infinity);

  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-[#030914] select-none">
      {/* Logo-style gradient watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-11 left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(3.75rem,22vw,12rem)] leading-none tracking-[0.01em] opacity-100 sm:bottom-6 lg:bottom-2"
        style={{
          fontFamily: "AndroidLogo, sans-serif",
          backgroundImage:
            "linear-gradient(180deg, rgba(225,235,244,0.5) 0%, rgba(176,194,211,0.3) 52%, rgba(176,194,211,0.04) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        EdFoal
      </div>

      <div className="relative z-10 mx-auto w-full max-w-360 px-5 pb-6 pt-10 sm:px-6 sm:pt-14 md:px-12 lg:px-20 lg:pt-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-9 text-left lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start lg:gap-16">

          {/* Left — Logo, Description, Socials */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4 inline-block">
              <img
                src={footerLogoUrl}
                alt="Edfoal Logo"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="mb-4 max-w-[280px] text-[13.5px] leading-relaxed text-zinc-400">
              At EdFoal AI, we create tailored AI solutions to reduce costs, save
              time, and enhance business efficiency for growth.
            </p>
            <motion.div
              onMouseMove={(e) => mouseX.set(e.pageX)}
              onMouseLeave={() => mouseX.set(Infinity)}
              className="mt-3 flex flex-wrap items-center justify-start gap-6 text-[15px] font-bold text-white"
            >
              {[
                { label: "Fb.", href: "https://facebook.com" },
                { label: "Tw.", href: "https://twitter.com" },
                { label: "Li.", href: "https://linkedin.com" },
                { label: "In.", href: "https://instagram.com" },
              ].map((item) => (
                <FooterSocialLink key={item.label} item={item} mouseX={mouseX} />
              ))}
            </motion.div>
          </div>

          {/* Right — 3 Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-3 sm:gap-6 lg:ml-auto lg:w-full lg:max-w-190 lg:justify-items-start">

            {/* Our Pages */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold tracking-wide text-[#e2d59f]">
                Our Pages
              </h3>
              <ul className="space-y-3.5">
                {navigationItems.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-[13.5px] text-zinc-400 transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold tracking-wide text-[#e2d59f]">
                Services
              </h3>
              <ul className="space-y-3.5">
                {["Services 1", "Services 2", "Services 3", "Services 4"].map((item) => (
                  <li key={item}>
                    <Link href="/services" className="text-[13.5px] text-zinc-400 transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-4 text-[14px] font-semibold tracking-wide text-[#e2d59f]">
                Contact Us
              </h3>
              <div className="grid gap-4 sm:block sm:space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#e2d59f]" />
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold leading-tight text-white">Send Mail</p>
                    {/* TODO: confirm the real EdFoal contact email — current domain looks like a leftover placeholder */}
                    <Link
                      href="mailto:info@edfoal.com"
                      className="mt-0.5 block text-[14.5px] text-zinc-400 transition-colors hover:text-white"
                    >
                      info@edfoal.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#e2d59f]" />
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold leading-tight text-white">Call Us</p>
                    <p className="mt-0.5 text-[12.5px] text-zinc-400">+91 1234567890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#e2d59f]" />
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold leading-tight text-white">Opening Hours</p>
                    <p className="mt-0.5 text-[12.5px] text-zinc-400">Mon - Fri, <br />9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="relative z-10 mt-10 flex items-center justify-center border-t border-[#e2d59f]/70 pt-5 sm:mt-12">
          <p className="text-center text-xs text-zinc-500">
            Your Company - 2024 All right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };