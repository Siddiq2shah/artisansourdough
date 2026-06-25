import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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
  component: ProductsRedirect,
});

function ProductsRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/#products");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--cream)] px-6 text-center">
      <div>
        <p className="text-lg text-[color:var(--brown-deep)]">
          Redirecting to the breads section on the homepage...
        </p>
        <a
          href="/#products"
          className="mt-4 inline-block rounded-full bg-[color:var(--brown-deep)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)]"
        >
          Go to homepage
        </a>
      </div>
    </div>
  );
}

