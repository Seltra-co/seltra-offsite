import Link from "next/link";

type LogoProps = {
  variant?: "green" | "white";
  size?: "sm" | "md" | "lg";
  href?: string | null;
};

const sizes = {
  sm: "h-10 w-auto sm:h-14 md:h-16",
  md: "h-12 w-auto sm:h-16 md:h-20",
  lg: "h-14 w-auto sm:h-18 md:h-20 lg:h-24",
} as const;

export default function Logo({ variant = "white", size = "md", href = "/" }: LogoProps) {
  const imageClassName = sizes[size];
  const logoStyle = variant === "white" ? { filter: "brightness(0) invert(1)" } : undefined;

  const content = (
    <img
      src="/seltra_logo_1.png"
      alt="Seltra logo"
      className={`${imageClassName} object-contain select-none`}
      style={logoStyle}
    />
  );

  if (!href) return content;

  return (
    <Link href={href} className="focus-ring inline-block rounded-md">
      {content}
    </Link>
  );
}
