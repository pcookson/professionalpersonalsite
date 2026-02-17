import { RoleSection } from "@/components/RoleSection";

const experiences = [
  {
    role: "Senior Technical Lead",
    company: "Canada Life",
    period: "2022 - Present",
    summary:
      "Lead cross-functional initiatives spanning product, architecture, security, and infrastructure teams to ensure scalable, resilient, and compliant solutions. Balance short-term delivery pressures with long-term architectural sustainability.",
    highlights: [
      "Guide system design decisions across frontend and backend services, with emphasis on performance, maintainability, and reliability.",
      "Direct integration across user experience, service layers, and enterprise systems to ensure cohesive end-to-end delivery.",
      "Champion application performance optimization and operational stability across high-traffic client platforms.",
      "Coach and mentor developers transitioning into complex enterprise stacks, accelerating onboarding and raising engineering standards.",
      "Partner with stakeholders to translate evolving business requirements into clear technical execution strategies."
    ]
  },
  {
    role: "Senior Software Developer",
    company: "Canada Life",
    period: "2020 - 2022",
    summary:
     "Served as senior developer across Canada Life’s Group and Individual client platforms, with responsibility for:",
    highlights: [
      "Full-stack feature implementation",
      "Cross-system integration",
      "User experience enhancements",
      "Application performance improvements",
      "Technical mentorship of junior developers"

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
