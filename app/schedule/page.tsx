import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import GoBackButton from "@/components/GoBackButton";

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-charleston pb-24">
      <PageHeader
        eyebrow="Saturday, September 5, 2026"
        title="Schedule"
        description="The full run of show, start to finish. Times are a guide, not a stopwatch."
      />
      <div className="px-6 md:px-12">
        <Timeline />
      </div>
      <GoBackButton />
    </main>
  );
}
