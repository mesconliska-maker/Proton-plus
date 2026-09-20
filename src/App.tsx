import { useState, useEffect } from "react";

/* ─── colour tokens ─── */
const C = {
  navy: "#14202A",
  navyLight: "#1A2A37",
  navyDark: "#0D1820",
  teal: "#2E6B7A",
  tealHover: "#3A8499",
  tealLight: "#4A9AB2",
  bronze: "#8A6A4A",
  pearl: "#F1F3F1",
  ink: "#121C24",
  mist: "#EDEFEE",
};

/* ─── type helpers ─── */
const H = (level: "h1" | "h2" | "h3") => ({
  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
  color: level === "h1" ? C.mist : undefined,
});

const body = { fontFamily: "'Inter', system-ui, sans-serif" };

/* ─── tiny inline icons ─── */
const Icons = {
  Radiation: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 9.8V4M10.1 10.6 5.7 6.2M10.1 13.4 5.7 17.8M12 14.2V20M13.9 13.4l4.4 4.4M13.9 10.6 18.3 6.2" />
    </svg>
  ),
  Document: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  ),
  Building: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 9v12" />
      <rect x="13" y="13" width="5" height="4" />
    </svg>
  ),
  Dosimeter: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="10" y1="7" x2="14" y2="7" />
      <line x1="10" y1="11" x2="14" y2="11" />
      <circle cx="12" cy="16" r="2" />
    </svg>
  ),
  Gauge: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
      <path d="M12 12 8 8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  Shield: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  ),
  Wrench: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Pulse: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
    </svg>
  ),
  Chat: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  ),
  Phone: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.59 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.5 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.1A16 16 0 0 0 14.9 16.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Pin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
};

/* ─── shared primitives ─── */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-4"
      style={{ color: light ? C.tealLight : C.teal, ...body }}
    >
      {children}
    </p>
  );
}

function TealBtn({
  href,
  children,
  full = false,
  type = "button",
  submit = false,
}: {
  href?: string;
  children: React.ReactNode;
  full?: boolean;
  type?: "button" | "submit";
  submit?: boolean;
}) {
  const cls = `inline-block px-6 py-3 font-semibold text-sm rounded text-white transition-colors duration-200${full ? " w-full text-center" : ""}`;
  const style = {
    backgroundColor: C.teal,
    fontFamily: "'IBM Plex Sans', sans-serif",
  };
  const hov = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.backgroundColor = C.tealHover);
  const unHov = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.backgroundColor = C.teal);

  if (submit) {
    return (
      <button
        type="submit"
        className={cls}
        style={style}
        onMouseEnter={hov}
        onMouseLeave={unHov}
      >
        {children}
      </button>
    );
  }
  return (
    <a href={href} className={cls} style={style} onMouseEnter={hov} onMouseLeave={unHov}>
      {children}
    </a>
  );
}

function GhostBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 font-semibold text-sm rounded transition-all duration-200"
      style={{
        border: `1.5px solid rgba(46,107,122,0.5)`,
        color: C.mist,
        fontFamily: "'IBM Plex Sans', sans-serif",
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
    </a>
  );
}

/* ─── nav data ─── */
const NAV = [
  { label: "Měření radonu", href: "#sluzby" },
  { label: "Osobní dozimetrie", href: "#dozimetrie" },
  { label: "Ozdravná opatření", href: "#opatreni" },
  { label: "O nás", href: "#proc-my" },
  { label: "Kontakt", href: "#kontakt" },
];

/* ══════════════════════════════════════════ HEADER ══ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(20,32,42,0.96)" : C.navy,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: "1px solid rgba(46,107,122,0.18)",
      }}
    >
      <div className="max-w-[1150px] mx-auto px-5 flex items-center h-[68px] gap-8">
        {/* wordmark */}
        <a href="#" className="flex-shrink-0 flex flex-col">
          <span
            className="text-[1.05rem] font-bold tracking-wide leading-none text-white"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            PROTON PLUS
          </span>
          <span
            className="text-[0.6rem] tracking-[0.13em] leading-none mt-[3px] hidden sm:block"
            style={{ color: C.tealLight }}
          >
            Měření radonu a radiační ochrana od 1994
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.82rem] font-medium transition-colors duration-200"
              style={{ color: C.mist, ...body }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.tealLight)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.mist)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* phone + cta */}
        <div className="hidden lg:flex items-center gap-4 ml-6">
          <a
            href="tel:585243460"
            className="flex items-center gap-1.5 text-[0.82rem] transition-colors"
            style={{ color: C.mist, ...body }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.tealLight)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.mist)}
          >
            <Icons.Phone />
            585 243 460
          </a>
          <TealBtn href="#kontakt">Nezávazná poptávka</TealBtn>
        </div>

        {/* hamburger */}
        <button
          className="lg:hidden ml-auto text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div
          className="lg:hidden px-5 pb-6 pt-1"
          style={{ backgroundColor: C.navy, borderTop: "1px solid rgba(46,107,122,0.15)" }}
        >
          <nav className="flex flex-col gap-3 mb-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="py-1 text-sm font-medium"
                style={{ color: C.mist, ...body }}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href="tel:585243460"
              className="flex items-center gap-2 text-sm"
              style={{ color: C.tealLight }}
            >
              <Icons.Phone /> 585 243 460
            </a>
            <TealBtn href="#kontakt" full>
              Nezávazná poptávka
            </TealBtn>
          </div>
        </div>
      )}
    </header>
  );
}

/* ══════════════════════════════════════════ HERO ══ */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: C.navy }}
    >
      <img
        src="https://images.unsplash.com/photo-1754734387891-36fcbb96f830?w=1920&h=1080&fit=crop&auto=format"
        alt="Digitální měřicí přístroje ukazující přesná odečtení"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(130deg, rgba(20,32,42,0.93) 0%, rgba(20,32,42,0.72) 55%, rgba(20,32,42,0.9) 100%)",
        }}
      />
      {/* teal accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ backgroundColor: C.teal }}
      />

      <div className="relative z-10 max-w-[1150px] mx-auto px-6 py-36 text-center">
        <Eyebrow light>
          OD ROKU 1994 — POVOLENÍ STÁTNÍHO ÚŘADU PRO JADERNOU BEZPEČNOST
        </Eyebrow>

        <h1
          className="text-[2.4rem] sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.13] mb-6 max-w-[820px] mx-auto"
          style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          Měření radonu s autorizací,{" "}
          <span style={{ color: C.tealLight }}>které se nemusíte ptát dvakrát</span>
        </h1>

        <p
          className="text-lg leading-relaxed mb-10 max-w-[580px] mx-auto"
          style={{ color: "rgba(237,239,238,0.75)", ...body }}
        >
          Měření radonu v objektech i na pozemcích, osobní dozimetrie a protiradonová opatření
          v Olomouci a okolí.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <TealBtn href="#kontakt">Nezávazná poptávka</TealBtn>
          <GhostBtn href="#autorizace">Zjistit více o autorizaci</GhostBtn>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${C.navy})` }}
      />
    </section>
  );
}

/* ══════════════════════════════════════════ REGULATORY STRIP ══ */
const AUTH_ITEMS = [
  {
    para: "§ 6 odst. 5",
    title: "Měření v objektech",
    text: "Měření a hodnocení výskytu radonu a produktů přeměny radonu ve stavbách určených pro bydlení, pobyt nebo práci.",
  },
  {
    para: "§ 6 odst. 4",
    title: "Radonový index pozemků",
    text: "Měření, hodnocení a stanovení radonového indexu pozemku — povinná součást dokumentace při výstavbě rodinných a bytových domů.",
  },
  {
    para: "§ 6 odst. 3 písm. b",
    title: "Osobní dozimetrie",
    text: "Osobní dozimetrie pro pracoviště se zvýšeným přírodním ozářením, kde zaměstnanci přijímají zvýšenou dávku ionizujícího záření.",
  },
];

function RegulatoryStrip() {
  return (
    <section id="autorizace" className="py-24 md:py-32" style={{ backgroundColor: C.navy }}>
      <div className="max-w-[1150px] mx-auto px-6">
        {/* heading row */}
        <div
          className="mb-10 pb-8"
          style={{ borderBottom: "1px solid rgba(46,107,122,0.2)" }}
        >
          <p
            className="text-[0.67rem] tracking-[0.24em] uppercase font-semibold mb-2"
            style={{ color: C.tealLight, ...body }}
          >
            FORMÁLNÍ LICENČNÍ DOKUMENTACE
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-1"
            style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Povolení Státního úřadu pro jadernou bezpečnost
          </h2>
          <p className="text-sm" style={{ color: "rgba(237,239,238,0.4)", ...body }}>
            Dle vyhlášky č. 307/2002 Sb. o radiační ochraně
          </p>
        </div>

        {/* 3 auth cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AUTH_ITEMS.map((a) => (
            <div
              key={a.para}
              className="p-7 rounded-[4px]"
              style={{
                border: "1px solid rgba(46,107,122,0.28)",
                background: "rgba(46,107,122,0.07)",
              }}
            >
              <p
                className="text-[0.72rem] font-mono tracking-widest mb-3"
                style={{ color: C.tealLight }}
              >
                {a.para}
              </p>
              <h3
                className="text-base font-bold mb-3"
                style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(237,239,238,0.68)", ...body }}>
                {a.text}
              </p>
              <div
                className="mt-5 pt-4"
                style={{ borderTop: "1px solid rgba(46,107,122,0.18)" }}
              >
                <span
                  className="text-[0.66rem] tracking-wider"
                  style={{ color: "rgba(237,239,238,0.3)", ...body }}
                >
                  Vyhl. č. 307/2002 Sb.
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* footer note */}
        <div className="mt-8 flex items-center gap-2.5">
          <span style={{ color: "rgba(46,107,122,0.6)" }}>
            <Icons.Shield />
          </span>
          <p className="text-xs" style={{ color: "rgba(237,239,238,0.38)", ...body }}>
            Autorizace udělena Státním úřadem pro jadernou bezpečnost (SÚJB). PROTON PLUS, spol. s r.o. —
            IČ 60779471. Jednatel: Ing. Jiří Ruprecht.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ TRUST STRIP ══ */
const STATS = [
  { val: "1994", label: "Rok založení", sub: "Specializace od prvního dne" },
  { val: "30+", label: "Let v oboru", sub: "Nepřetržitá odborná praxe" },
  { val: "SÚJB", label: "Autorizace", sub: "Státní úřad pro jadernou bezpečnost" },
  { val: "OL", label: "Olomouc a okolí", sub: "Střední Morava a celá ČR" },
];

function TrustStrip() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: C.pearl }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {STATS.map((s) => (
            <div key={s.val} className="text-center">
              <div
                className="text-[2.8rem] md:text-[3.2rem] font-bold leading-none mb-1"
                style={{ color: C.teal, fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {s.val}
              </div>
              <div
                className="text-sm font-semibold mb-0.5"
                style={{ color: C.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {s.label}
              </div>
              <div className="text-xs leading-snug" style={{ color: "rgba(18,28,36,0.5)", ...body }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ SERVICES GRID ══ */
const SERVICES = [
  {
    Icon: Icons.Gauge,
    title: "Měření radonu v objektech",
    desc: "Krátkodobé i dlouhodobé měření koncentrace radonu v obytných prostorách, pracovištích a veřejných budovách. Výsledky v písemném protokolu.",
  },
  {
    Icon: Icons.Building,
    title: "Měření radonového indexu pozemků",
    desc: "Autorizované stanovení radonového indexu pozemku dle § 6 odst. 4 vyhl. č. 307/2002 Sb. — povinná součást dokumentace při výstavbě.",
  },
  {
    Icon: Icons.Pulse,
    title: "Radonová diagnostika",
    desc: "Komplexní diagnostika zdrojů a cest pronikání radonu do objektu. Základ pro efektivní a cílenou nápravu.",
  },
  {
    Icon: Icons.Dosimeter,
    title: "Osobní dozimetrie",
    desc: "Individuální sledování radiační zátěže zaměstnanců na pracovištích se zvýšeným přírodním ozářením. Autorizace SÚJB.",
  },
  {
    Icon: Icons.Wrench,
    title: "Ozdravná protiradonová opatření",
    desc: "Projektování i realizace sanačních opatření — podtlakové odvětrávání, hydroizolace, těsnění prostupů a dalších ověřených technologií.",
  },
  {
    Icon: Icons.Chat,
    title: "Konzultační a poradenská činnost",
    desc: "Odborná konzultace pro stavební firmy, projektanty, majitele nemovitostí i orgány státní správy a ochrany zdraví.",
  },
];

function ServicesGrid() {
  return (
    <section id="sluzby" className="py-24 md:py-32" style={{ backgroundColor: C.pearl }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <Eyebrow>CO NABÍZÍME</Eyebrow>
        <h2
          className="text-3xl md:text-[2.4rem] font-bold mb-4 max-w-xl leading-[1.2]"
          style={{ color: C.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          Kompletní servis v oblasti radonu a radiační ochrany
        </h2>
        <p
          className="text-base mb-14 max-w-xl leading-relaxed"
          style={{ color: "rgba(18,28,36,0.58)", ...body }}
        >
          Od prvního měření přes diagnostiku až po realizaci nápravy — vše pod jednou střechou,
          vše s formální autorizací Státního úřadu pro jadernou bezpečnost.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="p-7 rounded-[5px] transition-all duration-200 cursor-default"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(46,107,122,0.13)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(46,107,122,0.38)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 18px rgba(46,107,122,0.09)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(46,107,122,0.13)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 4px rgba(0,0,0,0.04)";
              }}
            >
              <div className="mb-4" style={{ color: C.teal }}>
                <s.Icon />
              </div>
              <h3
                className="text-[0.93rem] font-bold mb-2"
                style={{ color: C.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(18,28,36,0.58)", ...body }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ DOSIMETRY ══ */
const DOSI_POINTS = [
  "Individuální dozimetry pro každého pracovníka",
  "Pravidelné vyhodnocování přijatých dávek záření",
  "Protokoly pro orgány ochrany veřejného zdraví",
  "Konzultace k nápravným opatřením při překročení limitů",
  "Autorizace SÚJB — § 6 odst. 3 písm. b, vyhl. č. 307/2002 Sb.",
];

function DosimetrySection() {
  return (
    <section id="dozimetrie" className="py-24 md:py-32" style={{ backgroundColor: C.navy }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* text */}
          <div>
            <Eyebrow light>OSOBNÍ DOZIMETRIE</Eyebrow>
            <h2
              className="text-3xl md:text-[2.3rem] font-bold mb-5 leading-[1.2]"
              style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Měření radiační zátěže na pracovištích se zvýšeným ozářením
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(237,239,238,0.68)", ...body }}
            >
              Zaměstnanci pracující v prostorách se zvýšenou koncentrací radonu nebo jiných přírodních
              radionuklidů musí mít dle platné legislativy zajištěno individuální sledování radiační zátěže.
              Tuto povinnost zákonně plníme jako jedno z mála autorizovaných pracovišť v České republice.
            </p>
            <ul className="space-y-3 mb-8">
              {DOSI_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: "rgba(46,107,122,0.22)",
                      color: C.tealLight,
                    }}
                  >
                    <Icons.Check />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(237,239,238,0.75)", ...body }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
            <TealBtn href="#kontakt">Poptávka osobní dozimetrie</TealBtn>
          </div>

          {/* image */}
          <div className="relative">
            <div
              className="rounded-[4px] overflow-hidden"
              style={{ backgroundColor: C.navyLight }}
            >
              <img
                src="https://images.unsplash.com/photo-1631816285969-2628b4ef3489?w=700&h=520&fit=crop&auto=format"
                alt="Odborný pracovník provádějící měření v laboratoři"
                className="w-full object-cover"
                style={{ height: 420, opacity: 0.82 }}
              />
            </div>
            {/* accent corner square */}
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-[4px] hidden lg:block"
              style={{ backgroundColor: C.teal, opacity: 0.18 }}
            />
            {/* credential badge */}
            <div
              className="absolute top-5 right-5 px-4 py-3 rounded-[4px]"
              style={{
                backgroundColor: "rgba(20,32,42,0.88)",
                border: "1px solid rgba(46,107,122,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-[0.66rem] tracking-[0.18em] uppercase mb-0.5"
                style={{ color: C.tealLight, ...body }}
              >
                Autorizace
              </p>
              <p
                className="text-xs font-bold"
                style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                SÚJB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ REMEDIATION ══ */
const REMED_POINTS = [
  "Radonová sondáž a komplexní diagnostika",
  "Projektová dokumentace sanace",
  "Podtlakové odvětrávání základů",
  "Hydroizolační opatření",
  "Těsnění prostupů a spár",
  "Kontrolní měření po realizaci",
];

function RemediationSection() {
  return (
    <section id="opatreni" className="py-24 md:py-32" style={{ backgroundColor: C.pearl }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* image – left */}
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-[4px] overflow-hidden"
              style={{ backgroundColor: "#D4D9D4" }}
            >
              <img
                src="https://images.unsplash.com/photo-1673978484281-e9370ac3b81c?w=700&h=520&fit=crop&auto=format"
                alt="Realizace protiradonového opatření — lešení v objektu"
                className="w-full object-cover"
                style={{ height: 400 }}
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 rounded-[4px] hidden lg:block"
              style={{ backgroundColor: C.teal, opacity: 0.14 }}
            />
          </div>

          {/* text – right */}
          <div className="order-1 lg:order-2">
            <Eyebrow>OZDRAVNÁ OPATŘENÍ</Eyebrow>
            <h2
              className="text-3xl md:text-[2.3rem] font-bold mb-5 leading-[1.2]"
              style={{ color: C.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Od diagnostiky po realizaci nápravy
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(18,28,36,0.65)", ...body }}
            >
              Zjistit problém je první krok. Skutečná hodnota naší práce je v tom, že ho také vyřešíme.
              Navrhujeme i realizujeme technická protiradonová opatření, která prokazatelně snižují
              koncentraci radonu na bezpečnou a legislativně přijatelnou úroveň.
            </p>
            <p
              className="text-base leading-relaxed mb-9"
              style={{ color: "rgba(18,28,36,0.65)", ...body }}
            >
              Nemusíte koordinovat různé dodavatele — projekt i realizaci sanace zvládneme jako jeden
              celek s jedním zodpovědným kontaktem.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {REMED_POINTS.map((pt) => (
                <div key={pt} className="flex items-start gap-2">
                  <span
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: C.teal }}
                  >
                    <Icons.Check />
                  </span>
                  <span className="text-sm" style={{ color: C.ink, ...body }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ WHY US ══ */
const PILLARS = [
  {
    Icon: Icons.Radiation,
    title: "30 let specializace na radiační ochranu",
    desc: "Nepřetržitá odborná praxe od roku 1994. Hluboké know-how v oblasti radonové problematiky a legislativy radiační ochrany.",
  },
  {
    Icon: Icons.Document,
    title: "Tři samostatné autorizace SÚJB",
    desc: "Měření v objektech, stanovení radonového indexu pozemků a osobní dozimetrie. Tato kombinace je v České republice výjimečná.",
  },
  {
    Icon: Icons.Gauge,
    title: "Kompletní servis od diagnostiky po realizaci",
    desc: "Nejen změříme — navrhujeme a realizujeme i nápravná opatření. Jeden kontakt, celé řešení.",
  },
  {
    Icon: Icons.Shield,
    title: "Osobní přístup jednatele",
    desc: "Zakázky osobně zajišťuje Ing. Jiří Ruprecht. Přímá komunikace bez prostředníků a zbytečné administrativy.",
  },
];

function WhyChooseUs() {
  return (
    <section id="proc-my" className="py-24 md:py-32" style={{ backgroundColor: C.navyLight }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="mb-14">
          <Eyebrow light>PROČ SI VYBRAT NÁS</Eyebrow>
          <h2
            className="text-3xl md:text-[2.4rem] font-bold"
            style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Co nás odlišuje od ostatních
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex gap-5">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-[4px]"
                style={{
                  width: 52,
                  height: 52,
                  backgroundColor: "rgba(46,107,122,0.16)",
                  color: C.tealLight,
                }}
              >
                <p.Icon />
              </div>
              <div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(237,239,238,0.62)", ...body }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ WHY MATTERS ══ */
const FAQ = [
  {
    q: "Kdo měření potřebuje?",
    a: "Stavebníci nových rodinných domů (ze zákona), majitelé starších budov s rizikovým podložím, zaměstnavatelé v prostorách se zvýšenou radiací a správci veřejných budov.",
  },
  {
    q: "Jaká je bezpečná úroveň?",
    a: "Dle platné legislativy je referenční úroveň pro stávající objekty 300 Bq/m³, pro novostavby 200 Bq/m³. Nad touto hodnotou je sanace doporučena nebo povinná.",
  },
  {
    q: "Jak dlouho měření trvá?",
    a: "Krátkodobé měření 3–7 dní, dlouhodobé (přesnější) 2–12 měsíců. Výsledky dodáme v písemném protokolu s odborným posouzením a doporučením.",
  },
];

function WhyItMatters() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: C.pearl }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>PROČ NA TOM ZÁLEŽÍ</Eyebrow>
            <h2
              className="text-3xl md:text-[2.3rem] font-bold mb-6 leading-[1.2]"
              style={{ color: C.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Radon je přirozenou součástí prostředí — důležité je vědět, jak s ním pracovat
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(18,28,36,0.68)", ...body }}>
              Radon je přirozeně se vyskytující radioaktivní plyn, který vzniká rozpadem uranu
              v zemské kůře. Do budov proniká základy a geologickým podložím — jde o zcela
              přirozený jev, nikoli havárii ani selhání.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(18,28,36,0.68)", ...body }}>
              Klíčové je adekvátní měření a správná interpretace výsledků. Vysoké koncentrace
              radonu jsou technicky řešitelné — efektivními a ověřenými metodami. Přesná
              diagnostika je podmínkou účinné sanace.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(18,28,36,0.68)", ...body }}>
              Proto je zásadní svěřit měření odborníkovi s platnou autorizací — jen tak máte
              jistotu, že výsledek je právně závazný, metodicky správný a využitelný pro stavební
              povolení nebo pracovněprávní povinnosti.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="p-6 rounded-[5px]"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(46,107,122,0.12)",
                }}
              >
                <h4
                  className="text-sm font-bold mb-2"
                  style={{ color: C.ink, fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  {f.q}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(18,28,36,0.63)", ...body }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ CONTACT + FOOTER ══ */
function ContactFooter() {
  const [form, setForm] = useState({ jmeno: "", telefon: "", email: "", popis: "" });
  const [sent, setSent] = useState(false);

  const inputBase: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(237,239,238,0.05)",
    border: "1px solid rgba(46,107,122,0.28)",
    borderRadius: 4,
    padding: "10px 14px",
    color: C.mist,
    fontSize: 14,
    ...body,
    outline: "none",
    transition: "border-color 0.15s",
  };

  const fieldFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    ((e.currentTarget as HTMLElement).style.borderColor = C.teal);
  const fieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(46,107,122,0.28)");

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    marginBottom: 6,
    color: "rgba(237,239,238,0.45)",
    fontFamily: "'IBM Plex Sans', sans-serif",
  };

  return (
    <>
      <section id="kontakt" className="py-24 md:py-32" style={{ backgroundColor: C.navy }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <div className="mb-14">
            <Eyebrow light>KONTAKT</Eyebrow>
            <h2
              className="text-3xl md:text-[2.4rem] font-bold max-w-xl leading-[1.2]"
              style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Potřebujete měření radonu nebo osobní dozimetrii?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14">
            {/* form */}
            <div>
              {sent ? (
                <div
                  className="p-10 rounded-[5px] text-center"
                  style={{
                    border: "1px solid rgba(46,107,122,0.38)",
                    backgroundColor: "rgba(46,107,122,0.08)",
                  }}
                >
                  <div className="flex justify-center mb-4" style={{ color: C.tealLight }}>
                    <Icons.Shield />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Poptávka odeslána
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
                    Ozveme se vám co nejdříve — obvykle do jednoho pracovního dne.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Jméno a příjmení</label>
                      <input
                        type="text"
                        value={form.jmeno}
                        onChange={(e) => setForm({ ...form, jmeno: e.target.value })}
                        placeholder="Jan Novák"
                        required
                        style={inputBase}
                        onFocus={fieldFocus}
                        onBlur={fieldBlur}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Telefon</label>
                      <input
                        type="tel"
                        value={form.telefon}
                        onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                        placeholder="+420 XXX XXX XXX"
                        style={inputBase}
                        onFocus={fieldFocus}
                        onBlur={fieldBlur}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jan.novak@email.cz"
                      required
                      style={inputBase}
                      onFocus={fieldFocus}
                      onBlur={fieldBlur}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Popis poptávky</label>
                    <textarea
                      value={form.popis}
                      onChange={(e) => setForm({ ...form, popis: e.target.value })}
                      placeholder="Popište, co potřebujete — druh objektu, lokalita, jaké měření hledáte…"
                      rows={5}
                      style={{ ...inputBase, resize: "vertical" }}
                      onFocus={fieldFocus}
                      onBlur={fieldBlur}
                    />
                  </div>
                  <TealBtn full submit>
                    Odeslat poptávku
                  </TealBtn>
                </form>
              )}
            </div>

            {/* contact details */}
            <div className="space-y-8">
              <div>
                <p
                  className="text-[0.67rem] tracking-[0.2em] uppercase font-semibold mb-5"
                  style={{ color: "rgba(237,239,238,0.38)", fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  Kontaktní údaje
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: C.tealLight }}>
                      <Icons.Pin />
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: C.mist, fontFamily: "'IBM Plex Sans', sans-serif" }}
                      >
                        PROTON PLUS, spol. s r.o.
                      </p>
                      <p className="text-sm" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
                        Zeyerova 855/15
                        <br />
                        Hodolany, 779 00 Olomouc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: C.tealLight }}>
                      <Icons.Phone />
                    </span>
                    <div className="space-y-1">
                      {["585 243 460", "602 424 432", "602 424 431"].map((ph, i) => (
                        <a
                          key={ph}
                          href={`tel:${ph.replace(/\s/g, "")}`}
                          className="block text-sm transition-colors"
                          style={{
                            color: i === 0 ? C.mist : "rgba(237,239,238,0.6)",
                            fontFamily: i === 0 ? "'IBM Plex Sans', sans-serif" : "'Inter', system-ui, sans-serif",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = C.tealLight)
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              i === 0 ? C.mist : "rgba(237,239,238,0.6)")
                          }
                        >
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: C.tealLight }}>
                      <Icons.Document />
                    </span>
                    <div>
                      <p className="text-sm" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
                        Jednatel:{" "}
                        <span style={{ color: C.mist }}>Ing. Jiří Ruprecht</span>
                      </p>
                      <p className="text-sm" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
                        IČ: 60779471
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* map placeholder */}
              <div
                className="rounded-[4px] overflow-hidden flex items-center justify-center flex-col gap-3"
                style={{
                  height: 180,
                  backgroundColor: C.navyLight,
                  border: "1px solid rgba(46,107,122,0.2)",
                }}
              >
                <span style={{ color: "rgba(46,107,122,0.55)" }}>
                  <Icons.Pin />
                </span>
                <p className="text-xs text-center" style={{ color: "rgba(237,239,238,0.38)", ...body }}>
                  Zeyerova 855/15, 779 00 Olomouc
                </p>
                <a
                  href="https://maps.google.com/?q=Zeyerova+855/15,+Olomouc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-4 py-1.5 rounded transition-colors"
                  style={{
                    color: C.tealLight,
                    border: "1px solid rgba(46,107,122,0.35)",
                    ...body,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(46,107,122,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  Otevřít v mapách →
                </a>
              </div>

              {/* bronze heritage note */}
              <div
                className="px-5 py-4 rounded-[4px]"
                style={{
                  backgroundColor: "rgba(138,106,74,0.12)",
                  border: "1px solid rgba(138,106,74,0.25)",
                }}
              >
                <p
                  className="text-[0.72rem] font-semibold mb-0.5"
                  style={{ color: C.bronze, fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  Specializace od roku 1994
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(237,239,238,0.5)", ...body }}>
                  Více než 30 let odborné praxe v oblasti radonové diagnostiky a radiační ochrany
                  v Olomouci a celé České republice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer
        className="py-7"
        style={{ backgroundColor: C.navyDark, borderTop: "1px solid rgba(46,107,122,0.16)" }}
      >
        <div className="max-w-[1150px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span
              className="text-sm font-bold text-white"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              PROTON PLUS
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(237,239,238,0.3)", ...body }}
            >
              spol. s r.o. — IČ 60779471
            </span>
          </div>
          <div
            className="flex flex-wrap justify-center gap-5 text-[0.72rem]"
            style={{ color: "rgba(237,239,238,0.32)", ...body }}
          >
            <span>Autorizace SÚJB</span>
            <span>Měření radonu</span>
            <span>Osobní dozimetrie</span>
            <span>Ozdravná opatření</span>
            <span>Olomouc</span>
          </div>
          <p
            className="text-[0.72rem]"
            style={{ color: "rgba(237,239,238,0.28)", ...body }}
          >
            © 2026 PROTON PLUS, spol. s r.o.
          </p>
        </div>
      </footer>
    </>
  );
}

/* ══════════════════════════════════════════ ROOT ══ */
export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <RegulatoryStrip />
        <TrustStrip />
        <ServicesGrid />
        <DosimetrySection />
        <RemediationSection />
        <WhyChooseUs />
        <WhyItMatters />
        <ContactFooter />
      </main>
    </div>
  );
}
