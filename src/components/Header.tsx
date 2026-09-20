import { useEffect, useState } from "react";
import { C, body } from "../theme";
import { COMPANY, NAV, tel } from "../data";
import { Link, usePath } from "../router";
import { Icons } from "./Icons";
import { Logo } from "./Logo";
import { TealBtn } from "./Ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePath();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close the mobile drawer whenever the route changes
  useEffect(() => setOpen(false), [path]);

  const isActive = (href: string) => !href.includes("#") && path === href;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(20,32,42,0.96)" : C.navy,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: "1px solid rgba(46,107,122,0.18)",
      }}
    >
      <div className="max-w-[1150px] mx-auto px-5 flex items-center justify-between h-[68px] gap-6">
        {/* logo */}
        <Link href="/" className="flex-shrink-0 flex items-center" ariaLabel="PROTON PLUS – úvodní stránka">
          <Logo variant="light" height={40} />
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Hlavní navigace">
          {NAV.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className="text-[0.8rem] font-medium whitespace-nowrap transition-colors duration-200 py-1"
                style={{
                  color: active ? C.tealLight : C.mist,
                  borderBottom: active ? `1.5px solid ${C.tealLight}` : "1.5px solid transparent",
                  ...body,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.tealLight)}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = active ? C.tealLight : C.mist)
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* phone + cta */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <a
            href={tel(COMPANY.phoneMain)}
            className="hidden xl:flex items-center gap-1.5 text-[0.82rem] whitespace-nowrap transition-colors"
            style={{ color: C.mist, ...body }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.tealLight)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.mist)}
          >
            <Icons.Phone />
            {COMPANY.phoneMain}
          </a>
          <TealBtn href="/#kontakt">Nezávazná poptávka</TealBtn>
        </div>

        {/* hamburger */}
        <button
          className="lg:hidden text-white p-1 -mr-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div
          className="lg:hidden px-5 pb-6 pt-2"
          style={{ backgroundColor: C.navy, borderTop: "1px solid rgba(46,107,122,0.15)" }}
        >
          <nav className="flex flex-col mb-5" aria-label="Mobilní navigace">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2.5 text-[0.95rem] font-medium"
                style={{
                  color: isActive(n.href) ? C.tealLight : C.mist,
                  borderBottom: "1px solid rgba(46,107,122,0.12)",
                  ...body,
                }}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href={tel(COMPANY.phoneMain)}
              className="flex items-center gap-2 text-sm"
              style={{ color: C.tealLight, ...body }}
            >
              <Icons.Phone /> {COMPANY.phoneMain}
            </a>
            <TealBtn href="/#kontakt" full onClick={() => setOpen(false)}>
              Nezávazná poptávka
            </TealBtn>
          </div>
        </div>
      )}
    </header>
  );
}
