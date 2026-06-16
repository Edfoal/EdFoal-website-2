"use client";

import React from "react";

const Logo1 = () => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 select-none">
    <g transform="translate(10, 8)">
      <circle cx="12" cy="12" r="3" fill="#9ca3af" />
      <rect x="11" y="2" width="2" height="4" rx="1" fill="#9ca3af" />
      <rect x="11" y="18" width="2" height="4" rx="1" fill="#9ca3af" />
      <rect x="2" y="11" width="4" height="2" rx="1" fill="#9ca3af" />
      <rect x="18" y="11" width="4" height="2" rx="1" fill="#9ca3af" />
      <rect x="5" y="5" width="2" height="4" rx="1" fill="#9ca3af" transform="rotate(45 6 7)" />
      <rect x="17" y="17" width="2" height="4" rx="1" fill="#9ca3af" transform="rotate(45 18 19)" />
      <rect x="17" y="5" width="2" height="4" rx="1" fill="#9ca3af" transform="rotate(-45 18 7)" />
      <rect x="5" y="17" width="2" height="4" rx="1" fill="#9ca3af" transform="rotate(-45 6 19)" />
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="#9ca3af" letterSpacing="-0.03em">Logoipsum</text>
  </svg>
);

const Logo2 = () => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 select-none">
    <g transform="translate(10, 8)">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6 12C6 11 7 10 9 10C11 10 11 12 13 12C15 12 15 10 17 10C17 10 18 10.5 18 12C18 13.5 17 14 17 14C15 14 15 12 13 12C11 12 11 14 9 14C7 14 6 13 6 12Z" fill="#9ca3af"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="#9ca3af" letterSpacing="-0.03em">Logoipsum</text>
  </svg>
);

const Logo3 = () => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 select-none">
    <g transform="translate(10, 8)">
      <circle cx="12" cy="6" r="3.5" fill="#9ca3af"/>
      <circle cx="6" cy="12" r="3.5" fill="#9ca3af"/>
      <circle cx="18" cy="12" r="3.5" fill="#9ca3af"/>
      <circle cx="12" cy="18" r="3.5" fill="#9ca3af"/>
      <circle cx="12" cy="12" r="1.5" fill="#ffffff"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="#9ca3af" letterSpacing="-0.03em">Logoipsum</text>
  </svg>
);

const Logo4 = () => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 select-none">
    <g transform="translate(10, 8)">
      <circle cx="12" cy="12" r="10" fill="#9ca3af"/>
      <path d="M13 5L7 13H12L11 19L17 11H12L13 5Z" fill="#ffffff"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" fill="#9ca3af" letterSpacing="-0.03em">Logoipsum</text>
  </svg>
);

export default function LogoTicker() {
  const logos = [
    <Logo1 key="l1" />,
    <Logo2 key="l2" />,
    <Logo3 key="l3" />,
    <Logo4 key="l4" />,
  ];

  // Repeat the core logo set multiple times to ensure seamless infinite looping track
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div 
      data-theme="light"
      className="w-full bg-white overflow-hidden relative flex flex-col justify-center gap-4 py-4" 
      style={{ height: "150px" }}
    >
      <style>{`
        @keyframes tickerAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerAnimation 25s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading at the top */}
      <div className="w-full text-center relative z-20">
        <h3 className="text-gray-500 font-bold text-[14px] md:text-[16px] tracking-tight leading-tight">
          We work with the best companies
        </h3>
      </div>

      {/* Scrolling Logos Container */}
      <div className="w-full overflow-hidden relative py-2 z-20">
        {/* Fade gradients on inner scroll edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-full overflow-hidden">
          <div className="ticker-track gap-16 md:gap-24">
            {repeatedLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center shrink-0">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
