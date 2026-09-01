"use client";

import { motion } from "framer-motion";
import { FOUNDING_TEAM } from "@/lib/data";

export default function AboutOffsite() {
  return (
    <section className="bg-[#021a15] px-4 pb-24 pt-8 md:px-8 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-[980px]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-[-0.06em] text-white md:text-left"
        >
          About Offsite
        </motion.h2>

        <div className="mt-10 mx-auto max-w-[760px] md:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
          >
            <img
              src="/about_offsite.png"
              alt="Offsite team photo"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-10 max-w-[760px] text-[clamp(1rem,3vw,2.7rem)] leading-[1.4] tracking-[-0.05em] text-white/90"
          >
            <p className="font-medium text-white">Build commerce that runs itself.</p>

            <p className="mt-6 sm:mt-10">
              Seltra Offsite is a day-long, in-person gathering where the Seltra team comes
              together to connect, build, and think clearly about what&apos;s next. This is our
              maiden edition, blending structured sessions with hands-on workshops.
            </p>

            <p className="mt-6 sm:mt-10">
              The theme is <span className="text-[#aef4c5]">Emergence</span>. We&apos;ll look back
              at what we shipped this year, be honest about what worked and what didn&apos;t,
              and line up the year ahead with the kind of clarity that only happens in one
              room, together.
            </p>
          </motion.div>

          <div className="mt-16">
            <p className="mb-7 text-center text-[0.7rem] font-medium uppercase tracking-[0.26em] text-[#aef4c5] md:text-left">
              Founding Team
            </p>

            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-5">
              {FOUNDING_TEAM.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="h-28 w-28 overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_18px_36px_rgba(0,0,0,0.2)] sm:h-32 sm:w-32 md:h-44 md:w-44">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`h-full w-full object-cover ${
                        member.name === "Divine S. Agbanu" ? "scale-[1.12] object-[center_18%]" : ""
                      }`}
                    />
                  </div>

                  <div className="mt-3 max-w-[8rem]">
                    <h3 className="whitespace-nowrap text-[0.6rem] font-semibold leading-tight tracking-[-0.04em] text-[#9ae56d] sm:text-[0.7rem] md:text-[0.95rem]">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 whitespace-nowrap text-[0.5rem] leading-tight text-white/80 sm:text-[0.55rem] md:text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
