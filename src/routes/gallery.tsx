import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import crust from "@/assets/gallery-crust.jpg";
import crumb from "@/assets/gallery-crumb.jpg";
import hands from "@/assets/gallery-hands.jpg";
import starter from "@/assets/gallery-starter.jpg";
import cooling from "@/assets/gallery-cooling.jpg";
import sliced from "@/assets/gallery-sliced.jpg";
import hero from "@/assets/hero-sourdough.jpg";
import country from "@/assets/product-country.jpg";
import seeded from "@/assets/product-seeded.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Wild Rise Sourdough" },
      { name: "description", content: "A close look at our bread: crust, crumb, and the quiet hours in between." },
      { property: "og:title", content: "Gallery — Wild Rise Sourdough" },
      { property: "og:description", content: "Artisan sourdough photography: crust, crumb, and the bakery at work." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const images = [
  { src: crust, alt: "Macro photograph of blistered sourdough crust", span: "row-span-2" },
  { src: hands, alt: "Baker's hands shaping dough", span: "" },
  { src: country, alt: "Classic country sourdough boule", span: "" },
  { src: crumb, alt: "Open crumb cross-section of sourdough", span: "" },
  { src: cooling, alt: "Loaves cooling on a wire rack", span: "row-span-2" },
  { src: starter, alt: "Sourdough starter in a glass jar", span: "" },
  { src: hero, alt: "Hand-scored sourdough boule on a wooden board", span: "row-span-2" },
  { src: sliced, alt: "Sliced sourdough with butter and honey", span: "" },
  { src: seeded, alt: "Seeded sourdough loaf on linen", span: "" },
];

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title={<>From dough to <em className="not-italic text-[color:var(--accent)]">table.</em></>}>
        Crust, crumb, and the quiet hours between mix and oven.
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid auto-rows-[18rem] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {images.map((img, i) => (
              <figure key={i} className={`group overflow-hidden rounded-sm bg-[color:var(--cream-deep)] ${img.span}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}