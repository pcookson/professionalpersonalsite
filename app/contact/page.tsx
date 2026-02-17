import { ContactLinks } from "@/components/ContactLinks";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Contact
      </h1>
      <p className="max-w-2xl text-slate-700">
        If you would like to discuss roles, consulting opportunities, or
        collaborations, use any of the contact methods below.
      </p>
      <ContactLinks />
    </section>
  );
}
