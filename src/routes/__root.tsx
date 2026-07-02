import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import appCss from "@/styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wild Rise Sourdough — Handcrafted Artisan Bread" },
      {
        name: "description",
        content:
          "Slow-fermented, hand-shaped artisan sourdough baked daily. Wholesale for bakeries, farmers markets, and specialty grocers.",
      },
      { property: "og:title", content: "Wild Rise Sourdough" },
      { property: "og:description", content: "Handcrafted artisan sourdough, slow-fermented and baked daily." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[color:var(--cream)] text-[color:var(--brown-deep)] antialiased">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-display text-5xl text-[color:var(--brown-deep)]">Page not found</h1>
        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-[color:var(--brown-deep)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--cream)]"
        >
          Back home
        </a>
      </div>
    </div>
  );
}