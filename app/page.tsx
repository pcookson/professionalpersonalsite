import { FocusAreas } from "@/components/FocusAreas";
import { Hero } from "@/components/Hero";
import { SelectedProjects } from "@/components/SelectedProjects";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <FocusAreas />
      <SelectedProjects />
    </div>
  );
}
