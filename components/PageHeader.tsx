import { MapPin } from "lucide-react";
import Logo from "./Logo";
import { EVENT } from "@/lib/data";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="px-5 pb-8 pt-6 md:px-12 md:pb-14 md:pt-10">
      <div className="flex justify-start">
        <Logo variant="white" size="sm" />
      </div>

      <div className="mt-8 max-w-3xl text-left md:mx-auto md:mt-14 md:text-center">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-seagreen md:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-[2.2rem] font-semibold leading-none tracking-[-0.06em] text-cultured md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-cultured/55 md:mx-auto md:mt-4 md:text-base">
          {description}
        </p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-cultured/40 md:text-sm">
          <MapPin className="h-3.5 w-3.5 text-seagreen" />
          {EVENT.venue}
        </p>
      </div>
    </header>
  );
}
