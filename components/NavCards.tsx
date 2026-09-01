"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NAV_CARDS } from "@/lib/data";

export default function NavCards() {
  return (
    <section className="bg-[#021a15] px-4 pb-16 pt-6 md:px-8 md:pb-24">
      <div className="mx-auto grid max-w-[760px] gap-3 md:gap-4">
        {NAV_CARDS.map((card, i) => (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <Link
              href={card.href}
              className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-[#0c2f29]/80 px-4 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#0d352d]/90 sm:px-5 md:rounded-[26px] md:px-7 md:py-6"
            >
              <h3 className="text-[clamp(1.5rem,6vw,3rem)] font-semibold tracking-[-0.06em] text-white">
                {card.title}
              </h3>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f5a40] text-[#aef4c5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-11 sm:w-11 md:h-12 md:w-12">
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
