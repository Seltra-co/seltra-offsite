"use client";

import { useEffect, useState } from "react";

type Unit = { label: string; value: number };

function getTimeLeft(targetISO: string): Unit[] {
  const diff = Math.max(0, new Date(targetISO).getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];
}

export default function Countdown({ targetISO }: { targetISO: string }) {
  const [units, setUnits] = useState<Unit[] | null>(null);

  useEffect(() => {
    setUnits(getTimeLeft(targetISO));
    const interval = setInterval(() => setUnits(getTimeLeft(targetISO)), 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  // Avoid a server/client mismatch on first paint.
  if (!units) {
    return <div className="h-[72px] md:h-[92px]" aria-hidden="true" />;
  }

  const isPast = units.every((u) => u.value === 0);
  if (isPast) {
    return (
      <p className="text-sm font-medium text-seagreen md:text-base">
        We&apos;re live — see you at One Airport Square.
      </p>
    );
  }

  return (
    <div className="flex items-center gap-3 md:gap-4" role="timer" aria-label="Countdown to Seltra Offsite 2026">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="glass-card flex w-16 flex-col items-center justify-center rounded-2xl py-3 md:w-20 md:py-4"
        >
          <span className="text-2xl font-semibold tabular-nums text-cultured md:text-3xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[11px] text-cultured/50">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
