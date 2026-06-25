import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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
  component: AboutRedirect,
});

function AboutRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/#about");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--cream)] px-6 text-center">
      <div>
        <p className="text-lg text-[color:var(--brown-deep)]">
          Redirecting to our story section on the homepage...
        </p>
        <a
          href="/#about"
          className="mt-4 inline-block rounded-full bg-[color:var(--brown-deep)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)]"
        >
          Go to homepage
        </a>
      </div>
    </div>
  );
}
