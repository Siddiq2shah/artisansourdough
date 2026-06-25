import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--cream)]/85 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl text-[color:var(--brown-deep)] tracking-tight">
            Wild Rise
          </span>
          <span className="eyebrow hidden sm:inline">Sourdough</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) =>
            "href" in item ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-[color:var(--brown-deep)] transition-colors hover:text-[color:var(--accent)]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm tracking-wide text-[color:var(--brown-deep)] transition-colors hover:text-[color:var(--accent)] [&.active]:text-[color:var(--accent)]"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          to="/wholesale"
          className="hidden rounded-full bg-[color:var(--brown-deep)] px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--accent)] md:inline-block"
        >
          Request a Sample
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-full p-2 text-[color:var(--brown-deep)]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-[color:var(--cream)]">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) =>
              "href" in item ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm tracking-wide text-[color:var(--brown-deep)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm tracking-wide text-[color:var(--brown-deep)]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}