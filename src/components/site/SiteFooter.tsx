import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-[color:var(--cream-deep)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="font-display text-3xl text-[color:var(--brown-deep)]">Wild Rise Sourdough</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--brown-soft)]">
            Slow-fermented bread, baked in small batches from heritage grain, wild yeast,
            and time. Made for the people who care where their bread comes from.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/#about" className="hover:text-[color:var(--accent)]">Our story</a></li>
            <li><a href="/#products" className="hover:text-[color:var(--accent)]">Breads</a></li>
            <li><Link to="/contact" className="hover:text-[color:var(--accent)]">Contact</Link></li>
            <li><Link to="/gallery" className="hover:text-[color:var(--accent)]">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Visit</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5" /> 218 Mill Road, Hudson Valley, NY</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5" /> hello@wildrisebakery.com</li>
            <li className="flex items-start gap-2"><Instagram size={14} className="mt-0.5" /> <a href="https://instagram.com" className="hover:text-[color:var(--accent)]">@wildrisesourdough</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-[color:var(--brown-soft)] sm:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Wild Rise Sourdough. All rights reserved.</span>
          <span>Baked with patience in the Hudson Valley.</span>
        </div>
      </div>
    </footer>
  );
}