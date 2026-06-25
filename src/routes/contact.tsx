import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Instagram, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wild Rise Sourdough" },
      { name: "description", content: "Visit, write, or follow along. Wild Rise Sourdough — Hudson Valley, NY." },
      { property: "og:title", content: "Contact — Wild Rise Sourdough" },
      { property: "og:description", content: "Get in touch with Wild Rise Sourdough." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1500),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const map: Record<string, string> = {};
      result.error.issues.forEach((i) => (map[String(i.path[0])] = i.message));
      setErrors(map);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Say <em className="not-italic text-[color:var(--accent)]">hello.</em></>}>
        Visit the bakery, write us a note, or follow along online. We love hearing from
        the people who eat our bread.
      </PageHero>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="space-y-10 lg:col-span-5">
            <div>
              <span className="eyebrow"><span className="rule" />Find us</span>
              <h2 className="mt-4 font-display text-3xl text-[color:var(--brown-deep)]">The bakery</h2>
              <p className="mt-3 flex items-start gap-3 text-sm text-[color:var(--brown-soft)]">
                <MapPin size={16} className="mt-0.5" />
                218 Mill Road<br />Hudson Valley, NY 12534
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--brown-soft)]">
                Counter open Fri – Sun · 8am–2pm
              </p>
            </div>
            <div>
              <span className="eyebrow"><span className="rule" />Write</span>
              <p className="mt-4 flex items-center gap-3 text-sm">
                <Mail size={16} />
                <a href="mailto:hello@wildrisebakery.com" className="text-[color:var(--brown-deep)] underline underline-offset-4 hover:text-[color:var(--accent)]">hello@wildrisebakery.com</a>
              </p>
              <p className="mt-3 flex items-center gap-3 text-sm">
                <Instagram size={16} />
                <a href="https://instagram.com/wildrisesourdough" className="text-[color:var(--brown-deep)] underline underline-offset-4 hover:text-[color:var(--accent)]">@wildrisesourdough</a>
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="lg:col-span-7 space-y-5 rounded-sm bg-[color:var(--cream-deep)] p-8 sm:p-10">
            <h2 className="font-display text-3xl text-[color:var(--brown-deep)]">Send a message</h2>
            <Field name="name" label="Your name" error={errors.name} />
            <Field name="email" label="Email" type="email" error={errors.email} />
            <Field name="message" label="Message" textarea error={errors.message} />
            <button type="submit" className="w-full rounded-full bg-[color:var(--brown-deep)] py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--accent)] sm:w-auto sm:px-10">
              Send message
            </button>
            {sent && <p className="text-sm text-[color:var(--accent)]">Thank you — your note is on its way.</p>}
          </form>
        </div>
      </section>

      <section className="border-t border-border bg-[color:var(--cream-deep)] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <span className="eyebrow"><span className="rule" />Location</span>
          <h2 className="mt-3 font-display text-3xl text-[color:var(--brown-deep)]">Find the bakery</h2>
          <div className="mt-8 aspect-[16/7] overflow-hidden rounded-sm border border-border">
            <iframe title="Map to Wild Rise Sourdough" src="https://www.openstreetmap.org/export/embed.html?bbox=-73.85%2C42.10%2C-73.65%2C42.30&layer=mapnik" className="h-full w-full" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const cls =
    "mt-2 w-full rounded-sm border border-border bg-[color:var(--cream)] px-4 py-3 text-sm text-[color:var(--brown-deep)] focus:border-[color:var(--brown-deep)] focus:outline-none";
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} maxLength={1500} />
      ) : (
        <input name={name} type={type} className={cls} maxLength={255} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}