import { FileText, ArrowUpRight } from "lucide-react";
import GoBackButton from "@/components/GoBackButton";
import EmptyState from "@/components/EmptyState";
import Logo from "@/components/Logo";
import BackgroundShapes from "@/components/BackgroundShapes";
import { BROCHURE_URL } from "@/lib/data";

export default function BrochurePage() {
  if (!BROCHURE_URL) {
    return (
      <>
        <EmptyState
          title="Brochure coming soon"
          message="We're finalizing the offsite brochure. Check back shortly."
        />
        <GoBackButton />
      </>
    );
  }

  return (
    <main className="grain-overlay relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-gradient-dark px-6">
      <BackgroundShapes />
      <div className="absolute left-6 top-8 md:left-12 md:top-10">
        <img src="/ICON_large.png" alt="Seltra logo" className="h-9 w-auto object-contain sm:h-12" />
      </div>

      <div className="glass-card relative z-10 flex w-full max-w-md flex-col items-center rounded-3xl p-10 text-center">
        <span className="glass-pill flex h-14 w-14 items-center justify-center rounded-2xl">
          <FileText className="h-6 w-6 text-seagreen" />
        </span>
        <h1 className="mt-6 text-2xl font-semibold text-cultured">2026 Offsite Brochure</h1>
        <p className="mt-2 text-sm text-cultured/55">
          Sessions, structure, and what to bring — in one document.
        </p>
        <a
          href={BROCHURE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-medium text-cultured transition-transform hover:-translate-y-0.5 hover:bg-seagreen"
        >
          View Brochure
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <GoBackButton />
    </main>
  );
}
