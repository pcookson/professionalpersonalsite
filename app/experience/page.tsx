import { RoleSection } from "@/components/RoleSection";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Company Name",
    period: "2022 - Present",
    summary:
      "Owned delivery for a portfolio of customer-facing features while improving service reliability and engineering velocity.",
    highlights: [
      "Introduced release playbooks that reduced rollback rates across quarterly launches.",
      "Partnered with product leadership to prioritize technical debt with clear impact metrics.",
      "Mentored engineers through architecture reviews, pairing sessions, and onboarding plans."
    ]
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    period: "2019 - 2022",
    summary:
      "Built full-stack experiences across multiple services and contributed to a shared frontend design system.",
    highlights: [
      "Shipped API and UI enhancements that increased feature adoption in enterprise accounts.",
      "Implemented end-to-end tests for critical workflows to improve release confidence.",
      "Collaborated with design to standardize reusable patterns and accessibility behavior."
    ]
  }
];

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Experience
      </h1>
      <p className="max-w-2xl text-slate-700">
        A snapshot of recent roles and responsibilities across product
        engineering, platform reliability, and team leadership.
      </p>
      <div className="space-y-6">
        {experiences.map((item) => (
          <RoleSection
            key={`${item.company}-${item.role}`}
            role={item.role}
            company={item.company}
            period={item.period}
            summary={item.summary}
            highlights={item.highlights}
          />
        ))}
      </div>
    </section>
  );
}
