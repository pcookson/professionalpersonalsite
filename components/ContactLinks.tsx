const links = [
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    text: "your.email@example.com"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    text: "linkedin.com/in/your-profile"
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    text: "github.com/your-username"
  }
];

export function ContactLinks() {
  return (
    <section aria-labelledby="contact-links-title" className="space-y-5">
      <h2
        id="contact-links-title"
        className="text-2xl font-semibold tracking-tight text-slate-900"
      >
        Contact Links
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.label} className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-500">{link.label}</p>
            <a
              href={link.href}
              className="mt-2 inline-block break-all text-base font-medium text-slate-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
