"use client";

import { motion } from "framer-motion";

/**
 * Sparse geometric accents echoing the offsite standee: an asterisk burst,
 * a soft curved flame, and offset blocks. Kept subtle and low-opacity so
 * they read as texture, not clutter.
 */
export default function BackgroundShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Asterisk / star burst, top right */}
      <motion.svg
        className="absolute -right-10 top-16 h-40 w-40 opacity-[0.12] md:h-56 md:w-56"
        viewBox="0 0 100 100"
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M50 0 L58 38 L96 26 L64 50 L96 74 L58 62 L50 100 L42 62 L4 74 L36 50 L4 26 L42 38 Z"
          fill="#25A56F"
        />
      </motion.svg>

      {/* Offset block pair, bottom left */}
      <motion.div
        className="absolute -left-8 bottom-24 opacity-[0.10]"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 140 90" className="h-28 w-44 md:h-36 md:w-56">
          <rect x="0" y="30" width="60" height="60" fill="#158855" />
          <rect x="50" y="0" width="60" height="60" fill="#25A56F" />
        </svg>
      </motion.div>

      {/* Soft curved glow, center right */}
      <motion.div
        className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-seagreen opacity-[0.10] blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
