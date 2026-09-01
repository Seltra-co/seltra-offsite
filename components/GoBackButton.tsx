"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  return (
    <Link
      href="/"
      className="glass-pill focus-ring fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-cultured transition-transform hover:-translate-y-0.5 hover:shadow-glow-sea md:bottom-8 md:right-8"
    >
      <ArrowLeft className="h-4 w-4" />
      Go Back
    </Link>
  );
}
