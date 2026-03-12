import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    name: "Vesti",
    description:
      "Application to test your investment skills against the S&P 500 using virtual currency.",
    stack: "Next.js, TypeScript, PostgreSQL, Redis",
    href: "https://vesti.patrickcookson.com"
  },
  {
    name: "PAH Analysis Workbench",
    description:
      "Web application to analyze JWST IR spectra",
    stack: "Python, Vue, JavaScript",
  },
  {
    name: "AstroSignals",
    description:
      "AstroSignals is a web application for exploring TESS and Kepler light-curve data and supporting workflows for identifying potential astronomical anomalies in time-series photometry.",
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
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}
