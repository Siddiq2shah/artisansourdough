import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-sourdough.jpg";
import country from "@/assets/product-country.jpg";
import wheat from "@/assets/product-wheat.jpg";
import seeded from "@/assets/product-seeded.jpg";
import hands from "@/assets/gallery-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wild Rise Sourdough — Naturally Fermented Artisan Bread" },
      { name: "description", content: "Handcrafted, slow-fermented artisan sourdough for cafés, markets, and specialty grocers in the Hudson Valley." },
      { property: "og:title", content: "Wild Rise Sourdough" },
      { property: "og:description", content: "Naturally fermented artisan sourdough, baked in small batches." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-16 lg:pb-32">
          <div className="flex flex-col justify-center lg:col-span-6">
            <span className="eyebrow wr-rise"><span className="rule" />Est. small-batch bakery</span>
            <h1 className="wr-rise mt-6 font-display text-5xl leading-[1.05] text-[color:var(--brown-deep)] sm:text-6xl lg:text-7xl">
              Naturally Fermented<br />
              <em className="not-italic text-[color:var(--accent)]">Artisan Sourdough</em>
            </h1>
            <p className="wr-rise-2 mt-7 max-w-lg text-lg leading-relaxed text-[color:var(--brown-soft)]">
              Handcrafted through a slow fermentation process to create exceptional flavor,
              an open crumb, and a crust worth the wait.
            </p>
            <div className="wr-rise-3 mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/wholesale"
                className="rounded-full bg-[color:var(--brown-deep)] px-8 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--accent)]"
              >
                Request a Sample
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-[color:var(--brown-deep)] px-8 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--brown-deep)] transition-colors hover:bg-[color:var(--brown-deep)] hover:text-[color:var(--cream)]"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["24h+", "Fermentation"],
                ["3", "Ingredients"],
                ["Small", "Batches daily"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-[color:var(--brown-deep)]">{n}</div>
                  <div className="eyebrow mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="wr-rise-2 relative aspect-[4/5] overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={hero}
                alt="Hand-scored artisan sourdough boule with golden crust"
                width={1536}
                height={1920}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-sm bg-[color:var(--cream)] px-6 py-4 shadow-[var(--shadow-soft)] sm:block">
              <div className="eyebrow">Today's bake</div>
              <div className="mt-1 font-display text-xl text-[color:var(--brown-deep)]">Out of the oven at 7am</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section className="border-y border-border bg-[color:var(--cream-deep)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="eyebrow"><span className="rule" />Our philosophy<span className="rule" /></span>
          <p className="mt-6 font-display text-3xl leading-snug text-[color:var(--brown-deep)] sm:text-4xl">
            "Good bread cannot be rushed. We give every loaf the time it asks for —
            sometimes thirty-six hours, sometimes more — because flavor lives in the wait."
          </p>
          <div className="mt-6 eyebrow">— Elena Marsh, head baker</div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow"><span className="rule" />The breads</span>
              <h2 className="mt-4 font-display text-4xl text-[color:var(--brown-deep)] sm:text-5xl">
                Three loaves. Endless tables.
              </h2>
            </div>
            <Link to="/products" className="text-sm uppercase tracking-[0.2em] text-[color:var(--brown-deep)] underline underline-offset-8 hover:text-[color:var(--accent)]">
              See all breads
            </Link>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { img: country, name: "Classic Country", note: "Open crumb · 36-hour" },
              { img: wheat, name: "Whole Wheat", note: "Nutty · 100% stone-milled" },
              { img: seeded, name: "Seeded", note: "Sesame · Flax · Sunflower" },
            ].map((p) => (
              <Link to="/products" key={p.name} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[color:var(--cream-deep)]">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl text-[color:var(--brown-deep)]">{p.name}</h3>
                  <span className="eyebrow">{p.note}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STORY BAND */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={hands} alt="Baker shaping dough by hand" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="eyebrow"><span className="rule" />Our story</span>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--brown-deep)] sm:text-5xl">
              A bakery built on patience.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--brown-soft)]">
              What began with a single jar of starter on a kitchen windowsill became a daily
              practice of feeding, folding, and listening. Every loaf we send out has been
              shaped by hand and watched, hour by hour, through its rise.
            </p>
            <Link to="/about" className="mt-8 self-start text-sm uppercase tracking-[0.22em] text-[color:var(--brown-deep)] underline underline-offset-8 hover:text-[color:var(--accent)]">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--brown-deep)] py-24 text-[color:var(--cream)]">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="eyebrow text-[color:var(--wheat)]"><span className="rule bg-[color:var(--wheat)]" />For bakeries & cafés</span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl">
            Bring Wild Rise to your counter.
          </h2>
          <p className="mt-5 text-[color:var(--cream)]/80">
            Consistent quality, flexible weekly orders, and samples on us.
          </p>
          <Link
            to="/wholesale"
            className="mt-10 inline-block rounded-full border border-[color:var(--cream)] px-8 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-[color:var(--cream)] hover:text-[color:var(--brown-deep)]"
          >
            Explore wholesale
          </Link>
        </div>
      </section>
    </>
  );
}
