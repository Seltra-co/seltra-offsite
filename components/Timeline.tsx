"use client";

import { motion } from "framer-motion";
import { SCHEDULE } from "@/lib/data";

const formatStyles: Record<string, string> = {
  Presentation: "text-seagreen",
  Workshop: "text-amber-400",
  Informal: "text-cultured/40",
  Break: "text-cultured/40",
  Opening: "text-seagreen",
  Close: "text-cultured/40",
};

export default function Timeline() {
  return (
    <ol className="relative mx-auto max-w-2xl">
      <div className="absolute bottom-0 left-[5px] top-2 w-px bg-white/10 md:left-[7px]" />
      {SCHEDULE.map((item, i) => (
        <motion.li
          key={item.time + item.title}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
          className="relative flex gap-5 pb-9 pl-6 last:pb-0 md:gap-6 md:pl-8"
        >
          <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-seagreen ring-4 ring-charleston md:h-3.5 md:w-3.5" />
          <div className="w-28 shrink-0 pt-0.5 text-xs text-cultured/50 md:w-36 md:text-sm">
            {item.time}
          </div>
          <div className="glass-card flex-1 rounded-xl px-4 py-3 md:px-5 md:py-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium text-cultured md:text-base">{item.title}</p>
              <span className={`shrink-0 text-xs ${formatStyles[item.format] ?? "text-cultured/40"}`}>
                {item.format}
              </span>
            </div>
            {item.lead !== "—" && (
              <p className="mt-1 text-xs text-cultured/45 md:text-sm">{item.lead}</p>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
