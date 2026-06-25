import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import baker from "@/assets/about-baker.jpg";
import starter from "@/assets/gallery-starter.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Wild Rise Sourdough" },
      { name: "description", content: "How Wild Rise began: years of experimentation, traditional fermentation, and a stubborn belief that bread should take its time." },
      { property: "og:title", content: "Our Story — Wild Rise Sourdough" },
      { property: "og:description", content: "How Wild Rise began — craftsmanship, patience, and quality grain." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title={<>Eleven years of <em className="not-italic text-[color:var(--accent)]">listening to dough.</em></>}>
        Wild Rise is the work of one baker who couldn't leave a loaf alone — and the small
        team that grew up around her bench.
      </PageHero>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={baker} alt="Baker shaping a sourdough boule" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-[color:var(--brown-soft)] lg:col-span-7">
            <span className="eyebrow"><span className="rule" />Elena Marsh, founder</span>
            <h2 className="font-display text-4xl text-[color:var(--brown-deep)]">The first jar</h2>
            <p>
              It began on a windowsill in 2014 — a jar of flour and water that, against all
              expectation, came alive. Elena had spent a decade in restaurant kitchens, but
              the loaf she pulled from her oven that first weekend changed the trajectory of
              everything that followed.
            </p>
            <p>
              For the next four years she baked from her home, refining a single recipe
              through hundreds of failures: hydrations that wouldn't hold, crumbs that closed
              up, crusts that wouldn't sing. She kept notes by hand. She fed the starter at
              the same hours her grandmother had fed her chickens.
            </p>
            <h3 className="pt-6 font-display text-3xl text-[color:var(--brown-deep)]">Patience as a method</h3>
            <p>
              Wild Rise opened in 2019 with three breads and one unwavering rule:
              <em> never rush a loaf.</em> We mix in the afternoon and let the dough rest
              overnight in a cold retard, sometimes for thirty-six hours, sometimes more. It
              is slower than is sensible. It is also why our bread tastes the way it does.
            </p>
            <h3 className="pt-6 font-display text-3xl text-[color:var(--brown-deep)]">Grain that knows where it came from</h3>
            <p>
              We mill our whole-grain flour on a stone burr, fresh each week, from heritage
              wheat grown within a hundred miles of the bakery. Our white flour comes from a
              single mill that has worked with the same farms for three generations. Water,
              flour, sea salt, wild yeast. Nothing more.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[color:var(--cream-deep)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3 lg:px-10">
          {[
            { n: "01", t: "Craftsmanship", d: "Every loaf is shaped by hand. No machines, no shortcuts, no compromise on the final touch." },
            { n: "02", t: "Patience", d: "We bake to the dough's clock, not the calendar. Twenty-four to thirty-six hours of slow fermentation." },
            { n: "03", t: "Provenance", d: "Heritage grain milled fresh on site. Salt from the Atlantic. Wild yeast from our own kitchen." },
          ].map((v) => (
            <div key={v.n}>
              <div className="eyebrow">{v.n}</div>
              <h3 className="mt-3 font-display text-2xl text-[color:var(--brown-deep)]">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--brown-soft)]">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="order-2 lg:order-1">
            <span className="eyebrow"><span className="rule" />The starter</span>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--brown-deep)]">Eleven years old, still hungry.</h2>
            <p className="mt-6 leading-relaxed text-[color:var(--brown-soft)]">
              Our mother starter — affectionately, "Hazel" — has been fed twice a day,
              every day, since 2014. She has travelled in coolers, lived in three
              kitchens, and lifted every loaf we have ever sold. A small portion of Hazel
              is in every bread that leaves our door.
            </p>
            <Link to="/products" className="mt-8 inline-block text-sm uppercase tracking-[0.22em] text-[color:var(--brown-deep)] underline underline-offset-8 hover:text-[color:var(--accent)]">
              See the breads
            </Link>
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden rounded-sm lg:order-2">
            <img src={starter} alt="Active sourdough starter in a glass jar" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}