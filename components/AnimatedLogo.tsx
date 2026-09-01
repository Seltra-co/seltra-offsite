"use client";

import { motion } from "framer-motion";
import LogoIcon from "./LogoIcon";

export default function AnimatedLogo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="animate-pulseGlow"
      >
        <LogoIcon variant="white" className="h-20 w-20" />
      </motion.div>
      <span className="font-semibold text-3xl tracking-tight text-shimmer">seltra</span>
    </div>
  );
}
