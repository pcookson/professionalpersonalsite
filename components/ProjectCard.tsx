type ProjectCardProps = {
  name: string;
  description: string;
  stack: string;
};

export function ProjectCard({ name, description, stack }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-medium text-slate-900">{name}</h2>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <p className="mt-4 text-sm text-slate-500">
        <span className="font-medium text-slate-700">Stack:</span> {stack}
      </p>
    </article>
  );
}
