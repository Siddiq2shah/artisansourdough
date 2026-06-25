import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import country from "@/assets/product-country.jpg";
import wheat from "@/assets/product-wheat.jpg";
import seeded from "@/assets/product-seeded.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Breads — Wild Rise Sourdough" },
      { name: "description", content: "Classic Country, Whole Wheat, and Seeded sourdough — slow-fermented, hand-shaped, and baked daily." },
      { property: "og:title", content: "Our Breads — Wild Rise Sourdough" },
      { property: "og:description", content: "Three breads, slow-fermented and baked daily." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const products = [
  {
    img: country,
    name: "Classic Country Sourdough",
    tagline: "Our cornerstone loaf — and a fine first bread for anyone new to real sourdough.",
    ingredients: "Heritage white flour, water, sea salt, wild yeast starter.",
    fermentation: "24 hours, cold retard",
    serving: "Toasted with cultured butter and flaky salt. As the base of a long, slow grilled cheese. Torn into a winter soup.",
  },
  {
    img: wheat,
    name: "Whole Wheat Sourdough",
    tagline: "Nutty, deeply flavored, with a tighter crumb and an almost honeyed finish.",
    ingredients: "Stone-milled heritage whole wheat, white flour, water, sea salt, wild yeast starter.",
    fermentation: "30 hours, cold retard",
    serving: "Smashed avocado and chili oil. Cured salmon and creme fraiche. A drizzle of raw honey and ricotta.",
  },
  {
    img: seeded,
    name: "Seeded Sourdough",
    tagline: "Toasted sesame, flax, and sunflower folded through a wheat-and-rye crumb.",
    ingredients: "Heritage white flour, rye, water, sea salt, sesame, flax, sunflower, wild yeast starter.",
    fermentation: "36 hours, cold retard",
    serving: "Stacked with sharp cheddar and pickle. Toasted alongside a winter stew. Sliced thin for an open-faced lunch.",
  },
] as const;

function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="The breads" title={<>Three loaves, baked <em className="not-italic text-[color:var(--accent)]">every day.</em></>}>
        Each bread is shaped by hand and given the time it asks for. Pulled from the oven
        in the morning, on shelves before noon.
      </PageHero>

      <section className="py-24">
        <div className="mx-auto max-w-6xl space-y-28 px-6 lg:px-10">
          {products.map((p, i) => (
            <article key={p.name} className="grid items-center gap-12 lg:grid-cols-12">
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className={`space-y-6 lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="eyebrow"><span className="rule" />No. 0{i + 1}</span>
                <h2 className="font-display text-4xl text-[color:var(--brown-deep)] sm:text-5xl">{p.name}</h2>
                <p className="text-lg leading-relaxed text-[color:var(--brown-soft)]">{p.tagline}</p>
                <dl className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="eyebrow">Ingredients</dt>
                    <dd className="mt-2 text-sm text-[color:var(--brown-deep)]">{p.ingredients}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Fermentation</dt>
                    <dd className="mt-2 text-sm text-[color:var(--brown-deep)]">{p.fermentation}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="eyebrow">Serve it with</dt>
                    <dd className="mt-2 text-sm text-[color:var(--brown-deep)]">{p.serving}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--brown-deep)] py-20 text-[color:var(--cream)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl">Want to taste them in person?</h2>
          <p className="text-[color:var(--cream)]/80">Cafés, markets, and grocers can request a sample loaf, on us.</p>
          <Link to="/wholesale" className="rounded-full border border-[color:var(--cream)] px-8 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-[color:var(--cream)] hover:text-[color:var(--brown-deep)]">
            Request a sample
          </Link>
        </div>
      </section>
    </>
  );
}