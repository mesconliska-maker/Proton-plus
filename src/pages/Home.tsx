import { C, body, heading } from "../theme";
import { COMPANY } from "../data";
import { Link, usePageMeta } from "../router";
import { Icons } from "../components/Icons";
import { MoreIcons } from "../components/MoreIcons";
import { Eyebrow, GhostBtn, TealBtn } from "../components/Ui";
import { ContactSection } from "../components/ContactSection";

/* ══════════════════════════════════════════ HERO ══ */
function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-[68px]"
      style={{ backgroundColor: C.navy }}
    >
      <img
        src="https://images.unsplash.com/photo-1754734387891-36fcbb96f830?w=1920&h=1080&fit=crop&auto=format"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(130deg, rgba(20,32,42,0.93) 0%, rgba(20,32,42,0.72) 55%, rgba(20,32,42,0.9) 100%)",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: C.teal }} />

      <div className="relative z-10 max-w-[1150px] mx-auto px-6 py-28 text-center">
        <Eyebrow light>OD ROKU 1994 · POVOLENÍ STÁTNÍHO ÚŘADU PRO JADERNOU BEZPEČNOST</Eyebrow>

        <h1
          className="text-[2.3rem] sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.13] mb-6 max-w-[820px] mx-auto"
          style={{ color: C.mist, ...heading }}
        >
          Měření radonu s autorizací,{" "}
          <span style={{ color: C.tealLight }}>na kterou se můžete spolehnout</span>
        </h1>

        <p
          className="text-lg leading-relaxed mb-10 max-w-[600px] mx-auto"
          style={{ color: "rgba(237,239,238,0.75)", ...body }}
        >
          Měření radonu v objektech i na pozemcích, radonová diagnostika, osobní dozimetrie
          a protiradonová opatření od projektu po realizaci. Olomouc a celá Morava.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <TealBtn href="/#kontakt">Nezávazná poptávka</TealBtn>
          <GhostBtn href="/#autorizace">Zjistit více o autorizaci</GhostBtn>
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
    para: "§ 6 odst. 5 zákona",
    title: "Měření radonu ve stavbách",
    text: "Měření a hodnocení výskytu radonu a produktů přeměny radonu ve stavbách určených pro bydlení, pobyt nebo práci.",
  },
  {
    para: "§ 6 odst. 4 zákona",
    title: "Radonový index pozemku",
    text: "Měření, hodnocení a stanovení radonového indexu pozemku – podklad pro projektování a stavební řízení u nových staveb.",
  },
  {
    para: "§ 6 odst. 3 písm. b) zákona",
    title: "Osobní dozimetrie",
    text: "Služby osobní dozimetrie na pracovištích se zvýšeným ozářením z přírodních zdrojů a určení efektivní dávky za kalendářní rok.",
  },
];

function RegulatoryStrip() {
  return (
    <section id="autorizace" className="py-24 md:py-32" style={{ backgroundColor: C.navy }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="mb-10 pb-8" style={{ borderBottom: "1px solid rgba(46,107,122,0.2)" }}>
          <p
            className="text-[0.67rem] tracking-[0.24em] uppercase font-semibold mb-2"
            style={{ color: C.tealLight, ...body }}
          >
            OFICIÁLNÍ AUTORIZACE
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: C.mist, ...heading }}>
            Povolení Státního úřadu pro jadernou bezpečnost
          </h2>
          <p className="text-sm" style={{ color: "rgba(237,239,238,0.4)", ...body }}>
            Tři samostatná povolení SÚJB k činnostem, které smí provádět pouze autorizované subjekty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AUTH_ITEMS.map((a) => (
            <div
              key={a.para}
              className="p-7 rounded-[4px]"
              style={{ border: "1px solid rgba(46,107,122,0.28)", background: "rgba(46,107,122,0.07)" }}
            >
              <p className="text-[0.72rem] font-mono tracking-widest mb-3" style={{ color: C.tealLight }}>
                {a.para}
              </p>
              <h3 className="text-base font-bold mb-3" style={{ color: C.mist, ...heading }}>
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(237,239,238,0.68)", ...body }}>
                {a.text}
              </p>
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(46,107,122,0.18)" }}>
                <span className="text-[0.66rem] tracking-wider" style={{ color: "rgba(237,239,238,0.3)", ...body }}>
                  Povolení SÚJB
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-2.5">
          <span className="flex-shrink-0" style={{ color: "rgba(46,107,122,0.6)" }}>
            <Icons.Shield />
          </span>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(237,239,238,0.38)", ...body }}>
            Povolení udělena Státním úřadem pro jadernou bezpečnost (SÚJB) společnosti {COMPANY.name},
            IČ {COMPANY.ic}. Osobní dozimetrie pro pracoviště uvedená pod písm. b), c), d) a e)
            § 87 vyhl. č. 307/2002 Sb. Jednatel: {COMPANY.director}.
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
  { val: "150+", label: "Rodinných domů", sub: "Realizovaná protiradonová opatření" },
  { val: "50+", label: "Škol a školek", sub: "Ozdravná opatření ve veřejných budovách" },
];

function TrustStrip() {
  return (
    <section id="reference" className="py-16 md:py-20" style={{ backgroundColor: C.pearl }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-[2.8rem] md:text-[3.2rem] font-bold leading-none mb-1"
                style={{ color: C.teal, ...heading }}
              >
                {s.val}
              </div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: C.ink, ...heading }}>
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
    desc: "Týdenní i roční měření objemové aktivity radonu v obytných místnostech, na pracovištích a ve veřejných budovách. Výsledky v písemném protokolu.",
    href: "/mereni-radonu",
  },
  {
    Icon: Icons.Building,
    title: "Měření radonového indexu pozemků",
    desc: "Autorizované stanovení radonového indexu pozemku – podklad pro projekt a stavební řízení u novostaveb.",
    href: "/mereni-radonu#pozemky",
  },
  {
    Icon: Icons.Pulse,
    title: "Radonová diagnostika",
    desc: "Vyhledání zdrojů radonu a cest jeho šíření v budově. Podklad pro návrh účinného a hospodárného protiradonového opatření.",
    href: "/mereni-radonu#diagnostika",
  },
  {
    Icon: Icons.Dosimeter,
    title: "Osobní dozimetrie",
    desc: "Sledování radiační zátěže pracovníků na pracovištích se zvýšeným ozářením z přírodních zdrojů. Povolení SÚJB.",
    href: "/#dozimetrie",
  },
  {
    Icon: Icons.Wrench,
    title: "Ozdravná protiradonová opatření",
    desc: "Projekt i realizace – odvětrání podloží, protiradonová izolace, nucená ventilace a související stavební práce.",
    href: "/protiradonova-opatreni",
  },
  {
    Icon: Icons.Chat,
    title: "Konzultační a poradenská činnost",
    desc: "Odborné konzultace pro stavebníky, projektanty, majitele nemovitostí, školy a obce.",
    href: "/#kontakt",
  },
];

function ServicesGrid() {
  return (
    <section id="sluzby" className="py-24 md:py-32" style={{ backgroundColor: C.pearl }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <Eyebrow>CO NABÍZÍME</Eyebrow>
        <h2
          className="text-3xl md:text-[2.4rem] font-bold mb-4 max-w-xl leading-[1.2]"
          style={{ color: C.ink, ...heading }}
        >
          Kompletní servis v oblasti radonu a radiační ochrany
        </h2>
        <p className="text-base mb-14 max-w-xl leading-relaxed" style={{ color: "rgba(18,28,36,0.58)", ...body }}>
          Od prvního měření přes diagnostiku až po realizaci nápravy – vše pod jednou střechou,
          s povolením Státního úřadu pro jadernou bezpečnost.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group block p-7 rounded-[5px] transition-all duration-200"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(46,107,122,0.13)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(46,107,122,0.38)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(46,107,122,0.09)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(46,107,122,0.13)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
              }}
            >
              <div className="mb-4" style={{ color: C.teal }}>
                <s.Icon />
              </div>
              <h3 className="text-[0.93rem] font-bold mb-2" style={{ color: C.ink, ...heading }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(18,28,36,0.58)", ...body }}>
                {s.desc}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: C.teal, ...heading }}
              >
                Více informací <MoreIcons.ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ DOSIMETRY ══ */
const DOSI_POINTS = [
  "Pracoviště se zvýšeným ozářením z přírodních zdrojů (písm. b–e § 87 vyhl. č. 307/2002 Sb.)",
  "Sledování radiační zátěže pracovníků v průběhu roku",
  "Určení efektivní dávky za kalendářní rok",
  "Podklady pro plnění povinností zaměstnavatele vůči SÚJB",
  "Konzultace k opatřením při zvýšených hodnotách",
];

function DosimetrySection() {
  return (
    <section id="dozimetrie" className="py-24 md:py-32" style={{ backgroundColor: C.navy }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow light>OSOBNÍ DOZIMETRIE</Eyebrow>
            <h2
              className="text-3xl md:text-[2.3rem] font-bold mb-5 leading-[1.2]"
              style={{ color: C.mist, ...heading }}
            >
              Měření radiační zátěže na pracovištích se zvýšeným ozářením
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(237,239,238,0.68)", ...body }}>
              Zaměstnanci na pracovištích se zvýšeným ozářením z přírodních zdrojů – typicky
              v prostorách s vyšší koncentrací radonu – musí mít dle legislativy zajištěno
              sledování radiační zátěže. Máme k této činnosti povolení Státního úřadu pro
              jadernou bezpečnost a zajistíme ji pro vás kompletně.
            </p>
            <ul className="space-y-3 mb-8">
              {DOSI_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{ width: 20, height: 20, backgroundColor: "rgba(46,107,122,0.22)", color: C.tealLight }}
                  >
                    <Icons.Check />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(237,239,238,0.75)", ...body }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
            <TealBtn href="/#kontakt">Poptávka osobní dozimetrie</TealBtn>
          </div>

          <div className="relative">
            <div className="rounded-[4px] overflow-hidden" style={{ backgroundColor: C.navyLight }}>
              <img
                src="https://images.unsplash.com/photo-1631816285969-2628b4ef3489?w=700&h=520&fit=crop&auto=format"
                alt="Odborný pracovník při vyhodnocování měření"
                className="w-full object-cover"
                style={{ height: 420, opacity: 0.82 }}
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-[4px] hidden lg:block"
              style={{ backgroundColor: C.teal, opacity: 0.18 }}
            />
            <div
              className="absolute top-5 right-5 px-4 py-3 rounded-[4px]"
              style={{
                backgroundColor: "rgba(20,32,42,0.88)",
                border: "1px solid rgba(46,107,122,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-[0.66rem] tracking-[0.18em] uppercase mb-0.5" style={{ color: C.tealLight, ...body }}>
                Povolení
              </p>
              <p className="text-xs font-bold" style={{ color: C.mist, ...heading }}>
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
  "Radonová diagnostika objektu",
  "Projekt protiradonových opatření",
  "Odvětrání radonu z podloží",
  "Protiradonová izolace",
  "Nucená ventilace vnitřního vzduchu",
  "Kontrolní měření po realizaci",
];

function RemediationSection() {
  return (
    <section id="opatreni" className="py-24 md:py-32" style={{ backgroundColor: C.pearl }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <figure
              className="rounded-[4px] overflow-hidden p-5"
              style={{ backgroundColor: "white", border: "1px solid rgba(46,107,122,0.15)" }}
            >
              <img
                src="/schema-protiradonova-izolace.jpg"
                alt="Schéma umístění protiradonové izolace u domu bez sklepa a se sklepem"
                className="w-full h-auto"
                width={400}
                height={300}
                loading="lazy"
              />
              <figcaption className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(18,28,36,0.5)", ...body }}>
                Protiradonová izolace se pokládá pod celým objektem včetně stěn. Nejsou-li ve
                sklepě obytné místnosti, postačí na ochranu proti radonu pouhá hydroizolace.
              </figcaption>
            </figure>
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 rounded-[4px] hidden lg:block -z-10"
              style={{ backgroundColor: C.teal, opacity: 0.14 }}
            />
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>OZDRAVNÁ OPATŘENÍ</Eyebrow>
            <h2
              className="text-3xl md:text-[2.3rem] font-bold mb-5 leading-[1.2]"
              style={{ color: C.ink, ...heading }}
            >
              Od diagnostiky po realizaci nápravy
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(18,28,36,0.65)", ...body }}>
              Zjistit problém je první krok. Skutečná hodnota naší práce je v tom, že ho také
              vyřešíme. Navrhujeme i realizujeme protiradonová opatření u nových i stávajících
              staveb – od rodinných domů po školy a školky.
            </p>
            <p className="text-base leading-relaxed mb-9" style={{ color: "rgba(18,28,36,0.65)", ...body }}>
              Nemusíte koordinovat různé dodavatele – diagnostiku, projekt, stavební práce
              i kontrolní měření zvládneme jako jeden celek s jedním zodpovědným kontaktem.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
              {REMED_POINTS.map((pt) => (
                <div key={pt} className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: C.teal }}>
                    <Icons.Check />
                  </span>
                  <span className="text-sm" style={{ color: C.ink, ...body }}>
                    {pt}
                  </span>
                </div>
              ))}
            </div>
            <GhostBtn href="/protiradonova-opatreni" dark={false}>
              Více o protiradonových opatřeních
            </GhostBtn>
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
    title: "Tři samostatná povolení SÚJB",
    desc: "Měření radonu ve stavbách, stanovení radonového indexu pozemků a osobní dozimetrie. Činnosti, které smí provádět jen autorizované subjekty.",
  },
  {
    Icon: Icons.Gauge,
    title: "Kompletní servis od diagnostiky po realizaci",
    desc: "Nejen změříme – navrhujeme a realizujeme i nápravná opatření včetně stavebních prací. Jeden kontakt, celé řešení.",
  },
  {
    Icon: Icons.Shield,
    title: "Osobní přístup a přímá komunikace",
    desc: `Jednáte přímo s jednatelem společnosti ${COMPANY.director}. Bez prostředníků a zbytečné administrativy.`,
  },
];

function WhyChooseUs() {
  return (
    <section id="o-nas" className="py-24 md:py-32" style={{ backgroundColor: C.navyLight }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <div>
            <Eyebrow light>O NÁS</Eyebrow>
            <h2 className="text-3xl md:text-[2.4rem] font-bold mb-5 leading-[1.2]" style={{ color: C.mist, ...heading }}>
              Co nás odlišuje od ostatních
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(237,239,238,0.68)", ...body }}>
              Společnost {COMPANY.name} byla založena v lednu roku {COMPANY.founded} v Olomouci.
              Od začátku se specializujeme výhradně na radonovou problematiku a radiační ochranu:
              měření radonu v objektech, radonovou diagnostiku, ozdravná protiradonová opatření,
              konzultační činnost a související stavební práce.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(237,239,238,0.68)", ...body }}>
              Za dobu působení jsme realizovali protiradonová opatření v přibližně 150 rodinných
              domech a 50 základních a mateřských školách.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex gap-5">
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-[4px]"
                  style={{ width: 52, height: 52, backgroundColor: "rgba(46,107,122,0.16)", color: C.tealLight }}
                >
                  <p.Icon />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2" style={{ color: C.mist, ...heading }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(237,239,238,0.62)", ...body }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ WHY MATTERS ══ */
const FAQ = [
  {
    q: "Kdo měření radonu potřebuje?",
    a: "Stavebníci nových domů (radonový index pozemku pro projekt a stavební řízení), majitelé stávajících budov, zaměstnavatelé s pracovišti se zvýšeným ozářením a správci veřejných budov, škol a školek.",
  },
  {
    q: "Jaká je referenční úroveň?",
    a: "Pro stávající stavby s obytnými nebo pobytovými místnostmi je referenční úroveň objemové aktivity radonu 300 Bq/m³, pro projektování nových staveb 200 Bq/m³. Při překročení doporučujeme diagnostiku a návrh opatření.",
  },
  {
    q: "Jak dlouho měření trvá?",
    a: "Elektretovými detektory měříme od jednoho do několika týdnů, stopovými detektory roční průměr. Kontinuální monitory používáme při radonové diagnostice. Výsledky dodáme v písemném protokolu.",
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
              style={{ color: C.ink, ...heading }}
            >
              Radon je přirozenou součástí prostředí – důležité je vědět, jak s ním pracovat
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(18,28,36,0.68)", ...body }}>
              Radon je přírodní radioaktivní plyn, který vzniká rozpadem radia v horninách
              a zeminách podloží. Do budov proniká základovými konstrukcemi, může se uvolňovat
              i ze stavebních materiálů nebo z podzemní vody. Jde o zcela přirozený jev, nikoli
              havárii ani selhání.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(18,28,36,0.68)", ...body }}>
              Při dlouhodobém vdechování však radon a jeho rozpadové produkty zvyšují riziko
              onemocnění plic. Klíčové je proto správné měření a interpretace výsledků – vysoké
              koncentrace jsou technicky dobře řešitelné ověřenými metodami.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(18,28,36,0.68)", ...body }}>
              Svěřte měření subjektu s platným povolením SÚJB – jen tak máte jistotu, že je
              výsledek metodicky správný a použitelný pro stavební řízení i pro plnění
              povinností zaměstnavatele.
            </p>
            <GhostBtn href="/radon" dark={false}>
              Více o radonu a jeho rizicích
            </GhostBtn>
          </div>

          <div className="space-y-4">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="p-6 rounded-[5px]"
                style={{ backgroundColor: "white", border: "1px solid rgba(46,107,122,0.12)" }}
              >
                <h3 className="text-sm font-bold mb-2" style={{ color: C.ink, ...heading }}>
                  {f.q}
                </h3>
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

/* ══════════════════════════════════════════ PAGE ══ */
export default function Home() {
  usePageMeta(
    "PROTON PLUS, spol. s r.o. | Měření radonu, osobní dozimetrie a protiradonová opatření – Olomouc",
    "PROTON PLUS, spol. s r.o., Olomouc. Měření radonu v objektech a radonového indexu pozemků, radonová diagnostika, osobní dozimetrie a ozdravná protiradonová opatření. Povolení SÚJB, na trhu od roku 1994. Tel. 585 243 460.",
  );
  return (
    <>
      <Hero />
      <RegulatoryStrip />
      <TrustStrip />
      <ServicesGrid />
      <DosimetrySection />
      <RemediationSection />
      <WhyChooseUs />
      <WhyItMatters />
      <ContactSection />
    </>
  );
}
