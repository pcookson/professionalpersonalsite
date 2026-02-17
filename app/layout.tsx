import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Personal Site",
  description: "A personal professional website built with Next.js"
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
          <header className="border-b border-slate-200 py-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Your Name
              </Link>
              <nav
                aria-label="Primary navigation"
                className="flex flex-wrap items-center gap-5 text-sm text-slate-600"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-sm hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1 py-12">{children}</main>

          <footer className="border-t border-slate-200 py-5 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
