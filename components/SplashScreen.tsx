"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

export default function SplashScreen({ onDismiss }: { onDismiss: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    // Give the exit animation time to complete
    setTimeout(onDismiss, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 100 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#021a15] ${
        isExiting ? "pointer-events-none" : ""
      }`}
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-20%] top-[15%] h-[80%] w-[60%] rounded-full border-[20px] border-[#8adf76]/80 bg-[#0e5a3d]/40 opacity-80" />
        <div className="absolute right-[-14%] top-[10%] h-[70%] w-[58%] rounded-full border-[22px] border-[#1df39a]/70 bg-[#0d503b]/40 opacity-80" />
        <div className="absolute bottom-[-15%] left-[-5%] h-[68%] w-[52%] rounded-full bg-[#0e562f]/80 blur-[18px]" />
        <div className="absolute bottom-[-22%] right-[-2%] h-[60%] w-[65%] rounded-full bg-[#0e562f]/75 blur-[12px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(112,255,180,0.18),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(57,115,81,0.7),_transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -40 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-8"
        >
          <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-semibold leading-[1] tracking-[-0.08em] text-white">
            Welcome to
            <br />
            <span className="text-[#9ae56d]">Emergence</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -30 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.05 }}
          className="mb-20"
        >
          <p className="text-base font-medium text-white/75 sm:text-lg md:text-xl">
            Seltra Offsite 2026
          </p>
        </motion.div>

        {/* Glowing Bouncing Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            scale: isExiting ? 0.3 : 1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          className={isExiting ? "" : "cursor-pointer"}
          onClick={handleClick}
        >
          <motion.div
            animate={{ y: isExiting ? 0 : [0, -12, 0] }}
            transition={{
              y: {
                duration: 2,
                repeat: isExiting ? 0 : Infinity,
                ease: "easeInOut",
              },
            }}
            className="arrow-glow-bounce flex h-20 w-20 items-center justify-center rounded-[26px] bg-[#9ae56d] transition-transform hover:scale-110"
          >
            <ArrowDown className="h-12 w-12 text-[#0c1f14]" strokeWidth={2.25} />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.15 }}
          className="mt-12 text-xs text-white/50 sm:text-sm"
        >
          Click to explore
        </motion.p>
      </div>
    </motion.div>
  );
}
