"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--color-purple-accent, #8b5cf6),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-[8px] p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex min-h-[120px] w-full rounded-[8px] border-none bg-gray-50 px-[16px] py-[10px] text-sm text-black transition duration-400 group-hover/input:shadow-none placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626] dark:focus-visible:ring-neutral-600`,
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
