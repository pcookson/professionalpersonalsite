import Link from "next/link";

const selectedProjects = [
  {
    title: "Customer Onboarding Platform",
    summary:
      "Led a cross-functional delivery that reduced onboarding cycle time by 35% through automation and workflow redesign."
  },
  {
    title: "Operational Insights Dashboard",
    summary:
      "Designed a real-time KPI dashboard that gave support and operations teams a shared source of truth for key metrics."
  }
];

export function SelectedProjects() {
  return (
    <section aria-labelledby="selected-projects-title" className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2
          id="selected-projects-title"
          className="text-2xl font-semibold tracking-tight text-slate-900"
        >
          Selected Projects
        </h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        >
          View all projects
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <h3 className="text-lg font-medium text-slate-900">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {project.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
