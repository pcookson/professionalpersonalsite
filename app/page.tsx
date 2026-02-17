import { FocusAreas } from "@/components/FocusAreas";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <FocusAreas />
    </div>
  );
}
