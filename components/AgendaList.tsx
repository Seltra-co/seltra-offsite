"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AGENDA } from "@/lib/data";

export default function AgendaList() {
  const [openId, setOpenId] = useState<string | null>(AGENDA[0]?.id ?? null);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {AGENDA.map((session, i) => {
        const isOpen = openId === session.id;
        return (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
            className="glass-card overflow-hidden rounded-2xl"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : session.id)}
              className="focus-ring flex w-full items-center gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              aria-expanded={isOpen}
            >
              <span className="text-sm text-cultured/35 md:text-base">{session.number}</span>

              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-cultured md:text-lg">
                  {session.title}
                </p>
                <p className="mt-0.5 text-xs text-cultured/50 md:text-sm">
                  {session.presenter} · {session.time}
                </p>
              </div>

              <span className="glass-pill hidden shrink-0 rounded-full px-3 py-1 text-xs text-seagreen sm:inline-block">
                {session.format}
              </span>

              <ChevronDown
                className={`h-4 w-4 shrink-0 text-cultured/50 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-cultured/65 md:px-6 md:text-base">
                    {session.objective}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
