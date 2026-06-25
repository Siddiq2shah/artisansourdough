import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { z } from "zod";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale — Wild Rise Sourdough" },
      { name: "description", content: "Wholesale sourdough for cafés, bakeries, and specialty grocers. Consistent quality, flexible weekly orders, sample loaves on us." },
      { property: "og:title", content: "Wholesale — Wild Rise Sourdough" },
      { property: "og:description", content: "Wholesale opportunities for cafés, bakeries, and specialty grocers." },
      { property: "og:url", content: "/wholesale" },
    ],
    links: [{ rel: "canonical", href: "/wholesale" }],
  }),
  component: WholesalePage,
});

const schema = z.object({
  bakery: z.string().trim().min(1, "Required").max(120),
  contact: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

function WholesalePage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const map: Record<string, string> = {};
      result.error.issues.forEach((i) => (map[String(i.path[0])] = i.message));
      setErrors(map);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero eyebrow="Wholesale" title={<>Bring Wild Rise to <em className="not-italic text-[color:var(--accent)]">your counter.</em></>}>
        We partner with a small number of cafés, bakeries, and specialty grocers who care
        as deeply about their bread as we do.
      </PageHero>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3 lg:px-10">
          {[
            { t: "Consistent quality", d: "Every loaf shaped, scored, and baked the same way — week after week, year after year." },
            { t: "Flexible ordering", d: "Standing weekly orders or rotating selections. Adjust the night before; we'll bake to match." },
            { t: "Samples on us", d: "Try the breads before you commit. We send a sample box to qualified accounts at no charge." },
          ].map((b) => (
            <div key={b.t} className="border-t border-[color:var(--brown-deep)] pt-6">
              <h3 className="font-display text-2xl text-[color:var(--brown-deep)]">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--brown-soft)]">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[color:var(--cream-deep)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <span className="eyebrow"><span className="rule" />Get in touch</span>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--brown-deep)] sm:text-5xl">Request a sample.</h2>
            <p className="mt-5 leading-relaxed text-[color:var(--brown-soft)]">
              Tell us about your shop. We typically reply within two business days and can
              arrange a sample box for your next delivery window.
            </p>
            <dl className="mt-10 space-y-4 text-sm">
              <div>
                <dt className="eyebrow">Minimum order</dt>
                <dd className="mt-1 text-[color:var(--brown-deep)]">12 loaves, mixed</dd>
              </div>
              <div>
                <dt className="eyebrow">Delivery</dt>
                <dd className="mt-1 text-[color:var(--brown-deep)]">Tue / Thu / Sat — Hudson Valley & NYC</dd>
              </div>
              <div>
                <dt className="eyebrow">Lead time</dt>
                <dd className="mt-1 text-[color:var(--brown-deep)]">Order by 4pm the day prior</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              alert("WE FOUND IT! wholesale.tsx form triggered.");

              const formData = new FormData(e.currentTarget);
              formData.append("access_key", "caf949d1-9cb8-4435-a1ef-0260656fdcb8");

              try {
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });
                const data = await res.json();
                if (data.success) {
                  alert("Web3Forms successfully received the email from Wholesale!");
                  e.currentTarget.reset();
                } else {
                  alert("API Error: " + data.message);
                }
              } catch (err) {
                alert("Network Error: " + err.message);
              }
            }}
            noValidate
            className="lg:col-span-7 space-y-5 rounded-sm bg-[color:var(--cream)] p-8 shadow-[var(--shadow-soft)] sm:p-10"
          >
            <Field name="bakery" label="Bakery name" error={errors.bakery} />
            <Field name="contact" label="Contact person" error={errors.contact} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="email" label="Email" type="email" error={errors.email} />
              <Field name="phone" label="Phone (optional)" type="tel" error={errors.phone} />
            </div>
            <Field name="message" label="Message" textarea error={errors.message} />
            <button type="submit" className="w-full rounded-full bg-[color:var(--brown-deep)] py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--accent)] sm:w-auto sm:px-10">
              Send inquiry
            </button>
          </form>
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
    "mt-2 w-full rounded-sm border border-border bg-[color:var(--cream-deep)] px-4 py-3 text-sm text-[color:var(--brown-deep)] focus:border-[color:var(--brown-deep)] focus:outline-none";
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