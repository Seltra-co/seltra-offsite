import BackgroundShapes from "./BackgroundShapes";

type EmptyStateProps = {
  title: string;
  message: string;
};

export default function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-gradient-dark px-6">
      <BackgroundShapes />
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="/ICON_large.png"
          alt="Seltra logo"
          className="h-20 w-auto object-contain md:h-28"
        />
        <h1 className="mt-8 text-2xl font-semibold text-cultured md:text-3xl">{title}</h1>
        <p className="mt-3 max-w-sm text-sm text-cultured/60 md:text-base">{message}</p>
      </div>
    </div>
  );
}
