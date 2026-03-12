type ProjectCardProps = {
  name: string;
  description: string;
  stack: string;
  href?: string;
};

export function ProjectCard({ name, description, stack, href }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-medium text-slate-900">{name}</h2>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            View →
          </a>
        )}
      </div>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <p className="mt-4 text-sm text-slate-500">
        <span className="font-medium text-slate-700">Stack:</span> {stack}
      </p>
    </article>
  );
}
