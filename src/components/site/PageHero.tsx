import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-[color:var(--cream-deep)] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <span className="eyebrow wr-rise"><span className="rule" />{eyebrow}<span className="rule" /></span>
        <h1 className="wr-rise-2 mt-6 font-display text-5xl text-[color:var(--brown-deep)] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {children && (
          <p className="wr-rise-3 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--brown-soft)]">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}