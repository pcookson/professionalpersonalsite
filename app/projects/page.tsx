import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    name: "Onboarding Workflow Modernization",
    description:
      "Rebuilt onboarding flows into modular services and a guided UI that simplified implementation for enterprise clients.",
    stack: "Next.js, TypeScript, PostgreSQL, Redis",
    outcome: "Reduced average setup time from weeks to days."
  },
  {
    name: "Customer Success Analytics Hub",
    description:
      "Delivered a reporting experience that combined event data, account health indicators, and operational insights.",
    stack: "React, Node.js, Tailwind CSS, BigQuery",
    outcome: "Improved decision-making speed for weekly account reviews."
  },
  {
    name: "Release Readiness Dashboard",
    description:
      "Created a centralized release dashboard with quality gates, incident summaries, and deployment status across teams.",
    stack: "Next.js, GraphQL, Playwright, Vercel",
    outcome: "Cut release coordination overhead and improved launch predictability."
  }
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Projects
      </h1>
      <p className="max-w-2xl text-slate-700">
        Representative projects with placeholder summaries for scope, stack, and
        delivery outcomes.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            stack={project.stack}
            outcome={project.outcome}
          />
        ))}
      </div>
    </section>
  );
}
