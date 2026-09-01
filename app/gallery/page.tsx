import EmptyState from "@/components/EmptyState";
import GoBackButton from "@/components/GoBackButton";

export default function GalleryPage() {
  return (
    <>
      <EmptyState
        title="Gallery coming soon"
        message="Photos from the offsite will be added here after September 5, 2026."
      />
      <GoBackButton />
    </>
  );
}
