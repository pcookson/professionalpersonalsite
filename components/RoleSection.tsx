type RoleSectionProps = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export function RoleSection({
  role,
  company,
  period,
  summary,
  highlights
}: RoleSectionProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-xl font-medium text-slate-900">{role}</h2>
        <p className="text-sm text-slate-500">{period}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-slate-700">{company}</p>
      <p className="mt-3 leading-7 text-slate-600">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span aria-hidden="true" className="pt-1 text-slate-400">
              •
            </span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
