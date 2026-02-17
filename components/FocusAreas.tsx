const focusAreas = [
  {
    title: "Product Engineering",
    copy: "Translate ambiguous requirements into scoped, testable, and shippable software increments."
  },
  {
    title: "System Reliability",
    copy: "Improve stability through observability, incident learning, and iterative performance improvements."
  },
  {
    title: "Team Collaboration",
    copy: "Support teams with clear technical communication, lightweight architecture decisions, and mentoring."
  }
];

export function FocusAreas() {
  return (
    <section aria-labelledby="focus-areas-title" className="space-y-5">
      <h2
        id="focus-areas-title"
        className="text-2xl font-semibold tracking-tight text-slate-900"
      >
        Focus Areas
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <article
            key={area.title}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <h3 className="text-lg font-medium text-slate-900">{area.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{area.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
