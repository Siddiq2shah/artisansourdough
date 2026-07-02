import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sourdough.jpg";
import bakerImg from "@/assets/about-baker.jpg";
import countryImg from "@/assets/product-country.jpg";
import wheatImg from "@/assets/product-wheat.jpg";
import seededImg from "@/assets/product-seeded.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wild Rise Sourdough — Handcrafted Artisan Bread" },
      {
        name: "description",
        content:
          "Slow-fermented, hand-shaped artisan sourdough baked daily in the Hudson Valley.",
      },
      { property: "og:title", content: "Wild Rise Sourdough — Handcrafted Artisan Bread" },
      { property: "og:description", content: "Slow-fermented, hand-shaped artisan sourdough baked daily." },
      { property: "og:image", content: "https://artisansourdough.lovable.app/og.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const products = [
  {
    img: countryImg,
    name: "Classic Country",
    blurb:
      "Our flagship boule. Open crumb, deep caramelized crust, gentle tang. Made with organic bread flour and a 24-hour ferment.",
  },
  {
    img: wheatImg,
    name: "Whole Wheat",
    blurb:
      "Freshly milled whole wheat from a family farm in the Finger Lakes. Nutty, hearty, and honest.",
  },
  {
    img: seededImg,
    name: "Seeded Multigrain",
    blurb:
      "Toasted sesame, sunflower, flax, and poppy folded into a rustic country base. Every slice, a full breakfast.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-28">
          <div>
            <span className="eyebrow">Est. Hudson Valley</span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-[color:var(--brown-deep)] sm:text-6xl lg:text-7xl">
              Bread that takes its time.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--brown-soft)]">
              Wild Rise is a small artisan bakery devoted to naturally-leavened
              sourdough. Long, cold fermentations. Stone-milled grain. Nothing
              rushed, nothing hidden.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-[color:var(--brown-deep)] px-7 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--accent)]"
              >
                Our Breads
              </a>
              <Link
                to="/wholesale"
                className="rounded-full border border-[color:var(--brown-deep)] px-7 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--brown-deep)] transition-colors hover:bg-[color:var(--brown-deep)] hover:text-[color:var(--cream)]"
              >
                Wholesale
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="A rustic loaf of sourdough with a burnished crust"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border bg-[color:var(--cream-deep)] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <img
            src={bakerImg}
            alt="Baker shaping dough by hand"
            className="aspect-[4/5] w-full rounded-sm object-cover"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-[color:var(--brown-deep)] sm:text-5xl">
              Small hands, slow bread.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--brown-soft)]">
              Wild Rise began in a home kitchen in 2018, with a jar of wild
              starter and a stubborn belief that bread should take its time.
              Today we bake from a small production kitchen in the Hudson
              Valley, supplying farmers markets, cafés, and a handful of
              specialty grocers we're proud to call partners.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--brown-soft)]">
              Every loaf is mixed, shaped, and scored by hand. No shortcuts,
              no additives — just flour, water, salt, and time.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Baked Daily</span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-[color:var(--brown-deep)] sm:text-5xl">
              Three breads. Each one, our best work.
            </h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="group">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-[color:var(--brown-deep)]">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--brown-soft)]">
                  {p.blurb}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[color:var(--brown-deep)] py-24 text-[color:var(--cream)] lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="eyebrow" style={{ color: "var(--cream)" }}>
            Wholesale
          </span>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
            Serve real sourdough at your counter.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-90">
            We partner with a limited number of cafés, bakeries, and specialty
            grocers. Weekly deliveries, consistent quality, generous margins.
          </p>
          <Link
            to="/wholesale"
            className="mt-10 inline-block rounded-full bg-[color:var(--cream)] px-7 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--brown-deep)] transition-colors hover:bg-[color:var(--accent)] hover:text-[color:var(--cream)]"
          >
            Request a Sample
          </Link>
        </div>
      </section>
    </>
  );
}