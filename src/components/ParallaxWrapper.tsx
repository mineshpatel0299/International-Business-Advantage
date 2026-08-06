"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  offset?: number; // How much it moves (e.g., 50 for moving 50px up/down)
  direction?: 'up' | 'down';
  className?: string;
  style?: React.CSSProperties;
}

export default function ParallaxWrapper({ 
  children, 
  offset = 50, 
  direction = 'up',
  className = "",
  style
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yMove = direction === 'up' ? -offset : offset;
  const y = useTransform(scrollYProgress, [0, 1], [0, yMove]);

  return (
    <motion.div ref={ref} style={{ y, ...style }} className={className}>
      {children}
    </motion.div>
  );
}
