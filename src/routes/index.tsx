import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Instagram, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import hero from "@/assets/hero-sourdough.jpg";
import country from "@/assets/product-country.jpg";
import wheat from "@/assets/product-wheat.jpg";
import seeded from "@/assets/product-seeded.jpg";
import hands from "@/assets/gallery-hands.jpg";
import baker from "@/assets/about-baker.jpg";
import starter from "@/assets/gallery-starter.jpg";
import crust from "@/assets/gallery-crust.jpg";
import crumb from "@/assets/gallery-crumb.jpg";
import cooling from "@/assets/gallery-cooling.jpg";
import sliced from "@/assets/gallery-sliced.jpg";

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

const products = [
  {
    img: country,
    name: "Classic Country Sourdough",
    tagline: "Our cornerstone loaf — a fine first bread for anyone new to real sourdough.",
    ingredients: "Heritage white flour, water, sea salt, wild yeast starter.",
    fermentation: "24 hours, cold retard",
    serving: "Toasted with cultured butter, used as a soup companion, or torn into salad croutons.",
  },
  {
    img: wheat,
    name: "Whole Wheat Sourdough",
    tagline: "Nutty, deeply flavored, with a tight crumb and a honeyed finish.",
    ingredients: "Stone-milled heritage whole wheat, white flour, water, sea salt, wild yeast starter.",
    fermentation: "30 hours, cold retard",
    serving: "Smashed avocado and chili oil, cured salmon and crème fraîche, or raw honey and ricotta.",
  },
  {
    img: seeded,
    name: "Seeded Sourdough",
    tagline: "Toasted sesame, flax, and sunflower folded through a wheat-and-rye crumb.",
    ingredients: "Heritage white flour, rye, water, sea salt, sesame, flax, sunflower, wild yeast starter.",
    fermentation: "36 hours, cold retard",
    serving: "Sharp cheddar and pickles, a winter stew, or thin slices with butter.",
  },
] as const;

const galleryImages = [
  { src: crust, alt: "Macro photograph of blistered sourdough crust", span: "row-span-2" },
  { src: hands, alt: "Baker's hands shaping dough", span: "" },
  { src: country, alt: "Classic country sourdough boule", span: "" },
  { src: crumb, alt: "Open crumb cross-section of sourdough", span: "" },
  { src: cooling, alt: "Loaves cooling on a wire rack", span: "row-span-2" },
  { src: starter, alt: "Sourdough starter in a glass jar", span: "" },
  { src: hero, alt: "Hand-scored sourdough boule on a wooden board", span: "row-span-2" },
  { src: sliced, alt: "Sliced sourdough with butter and honey", span: "" },
  { src: seeded, alt: "Seeded sourdough loaf on linen", span: "" },
] as const;

const wholesaleBenefits = [
  {
    title: "Consistent quality",
    description: "Every loaf is shaped, scored, and baked the same way — week after week, year after year.",
  },
  {
    title: "Flexible ordering",
    description: "Standing weekly orders or rotating selections. Adjust the night before and we bake to match.",
  },
  {
    title: "Samples on us",
    description: "Try the breads before you commit. We send a sample box to qualified accounts at no charge.",
  },
] as const;

function Home() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSent(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "caf949d1-9cb8-4435-a1ef-0260656fdcb8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Web3Forms submission failed");
      }

      setSent(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setSent(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div id="top" />

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-16 lg:pb-32">
          <div className="flex flex-col justify-center lg:col-span-6">
            <span className="eyebrow wr-rise"><span className="rule" />EST. SMALL-BATCH BAKERY</span>
            <h1 className="wr-rise mt-6 font-display text-5xl leading-[1.05] text-[color:var(--brown-deep)] sm:text-6xl lg:text-7xl">
              Naturally Fermented Artisan Sourdough<br />
            </h1>
            <p className="wr-rise-2 mt-7 max-w-lg text-lg leading-relaxed text-[color:var(--brown-soft)]">
              Handcrafted through a slow fermentation process to create exceptional flavor,
              an open crumb, and a crust worth the wait.
            </p>
            <div className="wr-rise-3 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#wholesale"
                className="rounded-full bg-[color:var(--brown-deep)] px-8 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--accent)]"
              >
                Request a Sample
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[color:var(--brown-deep)] px-8 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--brown-deep)] transition-colors hover:bg-[color:var(--brown-deep)] hover:text-[color:var(--cream)]"
              >
                Contact Us
              </a>
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

      <section id="about" className="py-24">
        <PageHero
          eyebrow="Our story"
          title={<>Eleven years of <em className="not-italic text-[color:var(--accent)]">listening to dough.</em></>}
        >
          Wild Rise is the work of one baker who couldn't leave a loaf alone — and the small
          team that grew up around her bench.
        </PageHero>

        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={baker}
                alt="Baker shaping a sourdough boule"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
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

      <section id="products" className="py-24">
        <PageHero
          eyebrow="The breads"
          title={<>Three loaves, baked <em className="not-italic text-[color:var(--accent)]">every day.</em></>}
        >
          Each bread is shaped by hand and given the time it asks for. Pulled from the oven
          in the morning, on shelves before noon.
        </PageHero>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={product.img}
                    alt={product.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-[color:var(--brown-deep)]">{product.name}</h3>
                    <span className="eyebrow hidden sm:inline">{product.tagline}</span>
                  </div>
                  <dl className="grid gap-6 border-t border-border pt-6 text-sm text-[color:var(--brown-soft)]">
                    <div>
                      <dt className="eyebrow">Ingredients</dt>
                      <dd className="mt-2">{product.ingredients}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Fermentation</dt>
                      <dd className="mt-2">{product.fermentation}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Serve it with</dt>
                      <dd className="mt-2">{product.serving}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#wholesale" className="rounded-full border border-[color:var(--brown-deep)] px-8 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--brown-deep)] transition-colors hover:bg-[color:var(--brown-deep)] hover:text-[color:var(--cream)]">
              Request a wholesale sample
            </a>
          </div>
        </div>
      </section>

      <section id="wholesale" className="bg-[color:var(--brown-deep)] py-24 text-[color:var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow text-[color:var(--wheat)]"><span className="rule bg-[color:var(--wheat)]" />For bakeries & cafés</span>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl">Bring Wild Rise to your counter.</h2>
              <p className="mt-5 text-[color:var(--cream)]/80">
                Consistent quality, flexible weekly orders, and samples on us.
              </p>
            </div>
            <a href="#contact" className="rounded-full border border-[color:var(--cream)] px-8 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-[color:var(--cream)] hover:text-[color:var(--brown-deep)]">
              Get in touch
            </a>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {wholesaleBenefits.map((item) => (
              <div key={item.title} className="rounded-sm bg-[color:var(--cream)] p-8 text-[color:var(--brown-deep)] shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--brown-soft)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <PageHero
          eyebrow="Gallery"
          title={<>From dough to <em className="not-italic text-[color:var(--accent)]">table.</em></>}
        >
          Crust, crumb, and the quiet hours between mix and oven.
        </PageHero>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid auto-rows-[18rem] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {galleryImages.map((img, i) => (
              <figure key={i} className={`group overflow-hidden rounded-sm bg-[color:var(--cream-deep)] ${img.span}`}>
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-[color:var(--cream-deep)] py-24">
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

          <form onSubmit={onSubmit} noValidate className="lg:col-span-7 space-y-5 rounded-sm bg-[color:var(--cream)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <input type="hidden" name="access_key" value="caf949d1-9cb8-4435-a1ef-0260656fdcb8" />
            <h2 className="font-display text-3xl text-[color:var(--brown-deep)]">Send a message</h2>
            <label className="block">
              <span className="eyebrow">Your name</span>
              <input name="name" required className="mt-2 w-full rounded-sm border border-border bg-[color:var(--cream-deep)] px-4 py-3 text-sm text-[color:var(--brown-deep)] focus:border-[color:var(--brown-deep)] focus:outline-none" />
            </label>
            <label className="block">
              <span className="eyebrow">Email</span>
              <input name="email" type="email" required className="mt-2 w-full rounded-sm border border-border bg-[color:var(--cream-deep)] px-4 py-3 text-sm text-[color:var(--brown-deep)] focus:border-[color:var(--brown-deep)] focus:outline-none" />
            </label>
            <label className="block">
              <span className="eyebrow">Message</span>
              <textarea name="message" rows={5} required className="mt-2 w-full rounded-sm border border-border bg-[color:var(--cream-deep)] px-4 py-3 text-sm text-[color:var(--brown-deep)] focus:border-[color:var(--brown-deep)] focus:outline-none" />
            </label>
            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-full bg-[color:var(--brown-deep)] py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
            {sent && (
              <p className="text-sm text-[color:var(--accent)]">
                Thank you! Your inquiry has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
