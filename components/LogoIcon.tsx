type LogoIconProps = {
  className?: string;
  variant?: "green" | "white";
};

/**
 * Approximation of the Seltra geometric mark: two offset square blocks
 * connected by a diagonal parallelogram, reading as a stylized "S" / arrow.
 * Swap this file for the real brand SVG export whenever it's available.
 */
export default function LogoIcon({ className = "", variant = "green" }: LogoIconProps) {
  const fill = variant === "white" ? "#F8F8F8" : "#158855";
  const fillLight = variant === "white" ? "#F8F8F8" : "#25A56F";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Seltra"
    >
      <rect x="4" y="56" width="28" height="28" rx="2" fill={fillLight} />
      <polygon points="32,84 60,56 60,28 32,56" fill={fill} opacity="0.92" />
      <rect x="60" y="12" width="28" height="28" rx="2" fill={fillLight} />
    </svg>
  );
}
