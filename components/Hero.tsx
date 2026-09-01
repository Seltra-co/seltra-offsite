"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import BackgroundShapes from "./BackgroundShapes";
import { EVENT, getEventStatus, type EventStatus } from "@/lib/data";

const statusStyles: Record<
  EventStatus,
  { badge: string; dot: string; text: string }
> = {
  Scheduled: {
    badge: "border border-white/10 bg-white/5 text-white/70",
    dot: "bg-[#7ee7a7] animate-pulseGlow",
    text: "text-white/70",
  },
  Live: {
    badge: "bg-[#9ae56d] text-[#0d1d16]",
    dot: "bg-[#0d1d16] animate-pulseGlow",
    text: "text-[#d9f5e3]",
  },
  Ended: {
    badge: "border border-white/10 bg-white/5 text-white/40",
    dot: "bg-white/40",
    text: "text-white/70",
  },
};

export default function Hero() {
  const [status, setStatus] = useState<EventStatus>("Scheduled");

  useEffect(() => {
    const updateStatus = () => setStatus(getEventStatus());
    updateStatus();
    const interval = window.setInterval(updateStatus, 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="grain-overlay relative flex min-h-screen flex-col overflow-hidden bg-[#021a15] px-4 pb-14 pt-7 text-cultured md:px-10">
      <BackgroundShapes />

      <div className="relative z-10 mb-6 flex items-center justify-between">
        <Logo variant="white" size="lg" />
      </div>

      <div className="relative z-10 mx-auto mt-6 flex w-full max-w-[980px] flex-col items-center justify-center gap-4 text-center md:mt-10 md:flex-row md:gap-12">
        <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 md:flex">
          <span className="text-2xl leading-none">–</span>
        </div>

        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.6rem,11vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white"
          >
            Welcome to
            <br />
            {EVENT.theme}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-3 text-sm font-medium text-white/75 sm:text-base md:text-[1.35rem] md:leading-snug"
          >
            Building autonomous commerce for the next million merchants.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="hidden md:flex"
        >
          <div className="arrow-glow-bounce flex h-20 w-20 items-center justify-center rounded-[26px] bg-[#9ae56d]">
            <ArrowUpRight className="h-12 w-12 text-[#0c1f14]" strokeWidth={2.25} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2 }}
        className="relative z-10 mx-auto mt-8 w-full max-w-[720px] overflow-hidden rounded-[30px] border border-white/10 bg-[#1d3b31]/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-5 md:mt-10 md:p-7"
      >
        <div className="flex flex-col gap-2 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <span
            className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium sm:px-4 sm:text-base ${statusStyles[status].badge}`}
          >
            <span className={`h-2.5 w-2.5 rounded-full ${statusStyles[status].dot}`} />
            {status}
          </span>
          <div className="flex flex-col items-start gap-1 text-left sm:items-end">
            <span className={`text-sm font-medium ${statusStyles[status].text} sm:text-base md:text-lg`}>
              {EVENT.date} · {EVENT.time}
            </span>
            <span className="text-xs font-medium text-white/65 sm:text-sm md:text-base">
              {EVENT.venue}
            </span>
          </div>
        </div>

        <h2 className="mt-2 text-[clamp(2rem,7vw,4rem)] font-semibold tracking-[-0.06em] text-white">
          Offsite 2026
        </h2>

        <div className="relative mt-5 h-[220px] overflow-hidden rounded-[22px] bg-[#123f2d] sm:h-[250px] md:mt-7 md:h-[290px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(112,255,180,0.18),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(57,115,81,0.7),_transparent_50%)]" />
          <div className="absolute left-[-20%] top-[15%] h-[80%] w-[60%] rounded-full border-[20px] border-[#8adf76]/80 bg-[#0e5a3d]/40 opacity-80" />
          <div className="absolute right-[-14%] top-[10%] h-[70%] w-[58%] rounded-full border-[22px] border-[#1df39a]/70 bg-[#0d503b]/40 opacity-80" />
          <div className="absolute bottom-[-15%] left-[-5%] h-[68%] w-[52%] rounded-full bg-[#0e562f]/80 blur-[18px]" />
          <div className="absolute bottom-[-22%] right-[-2%] h-[60%] w-[65%] rounded-full bg-[#0e562f]/75 blur-[12px]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.18)_18%,transparent_36%)]" />
        </div>
      </motion.div>
    </section>
  );
}
