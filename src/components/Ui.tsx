import type { ReactNode, MouseEvent } from "react";
import { C, heading, body } from "../theme";
import { Link } from "../router";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-4"
      style={{ color: light ? C.tealLight : C.teal, ...body }}
    >
      {children}
    </p>
  );
}

export function TealBtn({
  href,
  children,
  full = false,
  submit = false,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  full?: boolean;
  submit?: boolean;
  onClick?: () => void;
}) {
  const cls = `inline-block px-6 py-3 font-semibold text-sm rounded text-white whitespace-nowrap transition-colors duration-200${full ? " w-full text-center" : ""}`;
  const style = { backgroundColor: C.teal, ...heading };
  const hov = (e: MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.backgroundColor = C.tealHover);
  const unHov = (e: MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.backgroundColor = C.teal);

  if (submit) {
    return (
      <button type="submit" className={cls} style={style} onMouseEnter={hov} onMouseLeave={unHov}>
        {children}
      </button>
    );
  }
  return (
    <Link
      href={href ?? "#"}
      className={cls}
      style={style}
      onMouseEnter={hov}
      onMouseLeave={unHov}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export function GhostBtn({
  href,
  children,
  dark = true,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 font-semibold text-sm rounded whitespace-nowrap transition-all duration-200"
      style={{
        border: "1.5px solid rgba(46,107,122,0.5)",
        color: dark ? C.mist : C.teal,
        ...heading,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = C.teal;
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(46,107,122,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(46,107,122,0.5)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }}
    >
      {children}
    </Link>
  );
}

/** Dark page hero used on subpages. */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="pt-[68px]" style={{ backgroundColor: C.navy }}>
      <div className="max-w-[1150px] mx-auto px-6 pt-14 pb-14 md:pt-20 md:pb-20">
        <nav
          className="flex flex-wrap items-center gap-2 text-xs mb-8"
          style={{ color: "rgba(237,239,238,0.45)", ...body }}
          aria-label="Drobečková navigace"
        >
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {c.href ? (
                <Link href={c.href} style={{ color: "rgba(237,239,238,0.6)" }}>
                  {c.label}
                </Link>
              ) : (
                <span style={{ color: C.tealLight }}>{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
            </span>
          ))}
        </nav>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1
          className="text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem] font-bold leading-[1.15] mb-6 max-w-[820px]"
          style={{ color: C.mist, ...heading }}
        >
          {title}
        </h1>
        <p
          className="text-lg leading-relaxed max-w-[640px]"
          style={{ color: "rgba(237,239,238,0.72)", ...body }}
        >
          {lead}
        </p>
      </div>
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${C.teal}, transparent 60%)` }}
      />
    </section>
  );
}

/** Light content card. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`p-7 rounded-[5px] ${className}`}
      style={{
        backgroundColor: "white",
        border: "1px solid rgba(46,107,122,0.13)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </div>
  );
}

export function H2({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl md:text-[2.3rem] font-bold leading-[1.2] mb-5 ${className}`}
      style={{ color: light ? C.mist : C.ink, ...heading }}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h3
      className={`text-base font-bold mb-2 ${className}`}
      style={{ color: light ? C.mist : C.ink, ...heading }}
    >
      {children}
    </h3>
  );
}

export function P({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-base leading-relaxed mb-5 ${className}`}
      style={{ color: light ? "rgba(237,239,238,0.7)" : "rgba(18,28,36,0.68)", ...body }}
    >
      {children}
    </p>
  );
}

/** Closing call-to-action band used at the bottom of subpages. */
export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="py-20" style={{ backgroundColor: C.navyLight }}>
      <div className="max-w-[1150px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: C.mist, ...heading }}>
            {title}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(237,239,238,0.68)", ...body }}>
            {text}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <TealBtn href="/#kontakt">Nezávazná poptávka</TealBtn>
          <GhostBtn href="tel:+420585243460">Zavolat 585 243 460</GhostBtn>
        </div>
      </div>
    </section>
  );
}
