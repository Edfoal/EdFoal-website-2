"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[EdFoal Fatal Global Error]:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#030914] text-white flex flex-col items-center justify-center p-6 text-center font-sans select-none">
        <div className="max-w-md p-8 rounded-2xl bg-zinc-900 border border-red-500/30 shadow-2xl flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 text-red-400">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Fatal System Error
          </h1>
          <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            We encountered a critical application failure. Please reload your browser to recover.
          </p>
          <button
            onClick={reset}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer shadow-lg shadow-blue-500/25"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
