import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    name: "Muscle Gainification App",
    description:
      "Application to gamify strength and hypertrophy for those currently involved in resistence training.",
    stack: "Next.js, TypeScript, PostgreSQL, Redis"
  },
  {
    name: "Architectural Decision Dashboard",
    description:
      "Dashboard to integrate software architecture decision making with Jira and Confluence",
    stack: "React, Node.js, Tailwind CSS",
  }
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Projects
      </h1>
      <p className="max-w-2xl text-slate-700">
        A selection of ongoing personal projects.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
}
