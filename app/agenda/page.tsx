import PageHeader from "@/components/PageHeader";
import AgendaList from "@/components/AgendaList";
import GoBackButton from "@/components/GoBackButton";

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-charleston pb-24">
      <PageHeader
        eyebrow="Session by session"
        title="Agenda"
        description="What each session covers, who's leading it, and what it needs to accomplish. Tap a session to expand it."
      />
      <div className="px-6 md:px-12">
        <AgendaList />
      </div>
      <GoBackButton />
    </main>
  );
}
