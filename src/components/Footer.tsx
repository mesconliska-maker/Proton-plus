import { C, body, heading } from "../theme";
import { COMPANY, tel } from "../data";
import { Link } from "../router";
import { Logo } from "./Logo";

const FOOTER_LINKS = [
  { label: "Měření radonu a diagnostika", href: "/mereni-radonu" },
  { label: "Protiradonová opatření", href: "/protiradonova-opatreni" },
  { label: "Osobní dozimetrie", href: "/#dozimetrie" },
  { label: "Radon a jeho rizika", href: "/radon" },
  { label: "Autorizace SÚJB", href: "/#autorizace" },
  { label: "Kontakt a poptávka", href: "/#kontakt" },
];

export function Footer() {
  const muted = "rgba(237,239,238,0.5)";
  const hover = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = C.tealLight);
  const unhover = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = muted);

  return (
    <footer style={{ backgroundColor: C.navyDark, borderTop: "1px solid rgba(46,107,122,0.16)" }}>
      <div className="max-w-[1150px] mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-8 mb-12">
          {/* brand */}
          <div>
            <Link href="/" className="inline-block mb-4" ariaLabel="PROTON PLUS – úvodní stránka">
              <Logo variant="light" height={44} />
            </Link>
            <p className="text-sm leading-relaxed max-w-[360px]" style={{ color: muted, ...body }}>
              Radon a měření radonu v objektech i na pozemcích, radonová diagnostika, ozdravná
              protiradonová opatření, osobní dozimetrie a optimalizace radiační ochrany. Autorizace Státního úřadu pro jadernou
              bezpečnost, na trhu od roku {COMPANY.founded}.
            </p>
          </div>

          {/* links */}
          <div>
            <p
              className="text-[0.67rem] tracking-[0.2em] uppercase font-semibold mb-4"
              style={{ color: "rgba(237,239,238,0.38)", ...heading }}
            >
              Služby a informace
            </p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: muted, ...body }}
                    onMouseEnter={hover}
                    onMouseLeave={unhover}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p
              className="text-[0.67rem] tracking-[0.2em] uppercase font-semibold mb-4"
              style={{ color: "rgba(237,239,238,0.38)", ...heading }}
            >
              Kontakt
            </p>
            <address className="not-italic text-sm space-y-1.5" style={{ color: muted, ...body }}>
              <p style={{ color: C.mist }}>{COMPANY.name}</p>
              <p>
                {COMPANY.street}
                <br />
                {COMPANY.city}
              </p>
              <p>
                <a href={tel(COMPANY.phoneMain)} onMouseEnter={hover} onMouseLeave={unhover}>
                  {COMPANY.phoneMain}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} onMouseEnter={hover} onMouseLeave={unhover}>
                  {COMPANY.email}
                </a>
              </p>
              <p className="pt-1 text-xs">
                IČ: {COMPANY.ic} · DIČ: {COMPANY.dic}
              </p>
            </address>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.72rem]"
          style={{ borderTop: "1px solid rgba(46,107,122,0.14)", color: "rgba(237,239,238,0.32)", ...body }}
        >
          <p>© {new Date().getFullYear()} {COMPANY.name} · Všechna práva vyhrazena.</p>
          <a
            href="/gdpr-proton.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            onMouseEnter={hover}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(237,239,238,0.32)")}
          >
            Zásady ochrany osobních údajů (GDPR)
          </a>
        </div>
      </div>
    </footer>
  );
}
