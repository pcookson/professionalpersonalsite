export function Hero() {
  return (
    <section aria-labelledby="home-hero-title" className="space-y-6">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
        Professional Profile
      </p>
      <h1
        id="home-hero-title"
        className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
      >
        Building dependable software that helps teams deliver measurable results.
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
        I partner with product, design, and engineering to ship maintainable
        systems, improve delivery confidence, and create experiences that solve
        real business problems.
      </p>
    </section>
  );
}
