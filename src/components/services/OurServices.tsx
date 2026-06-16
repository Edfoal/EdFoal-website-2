"use client";

import React from "react";
import Globe3DDemoSecond from "@/components/ui/3d-globe-demo-2";

export default function OurServices() {
  return (
    <section
      id="services"
      data-theme="light"
      className="w-full relative overflow-hidden bg-white py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center"
    >
      <div
        className="w-full text-center flex flex-col items-center justify-center"
        style={{
          maxWidth: "1450px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          Our Services
        </h2>

        <div className="w-full flex justify-center">
          <Globe3DDemoSecond />
        </div>
      </div>
    </section>
  );
}

