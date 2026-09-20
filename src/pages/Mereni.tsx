import { C, body, heading } from "../theme";
import { usePageMeta } from "../router";
import { Icons } from "../components/Icons";
import { MoreIcons } from "../components/MoreIcons";
import { Card, CtaBand, Eyebrow, H2, H3, P, PageHero } from "../components/Ui";

const WHEN = [
  {
    Icon: MoreIcons.Home,
    title: "Novostavba",
    text: "Stanovení radonového indexu pozemku je podkladem pro projekt a stavební řízení. Podle výsledku se navrhuje ochrana stavby.",
  },
  {
    Icon: Icons.Building,
    title: "Stávající dům nebo byt",
    text: "Chcete vědět, jaká je koncentrace radonu ve vašem bydlení – při koupi, rekonstrukci nebo prostě pro jistotu.",
  },
  {
    Icon: MoreIcons.School,
    title: "Školy, školky a veřejné budovy",
    text: "Provozovatelé budov s pobytem dětí a veřejnosti mají ověřování a řešení radonu ve zvláštním zájmu.",
  },
  {
    Icon: Icons.Dosimeter,
    title: "Pracoviště",
    text: "Na pracovištích se zvýšeným ozářením z přírodních zdrojů navazuje na měření osobní dozimetrie pracovníků.",
  },
];

const DETECTORS = [
  {
    Icon: MoreIcons.Calendar,
    name: "Stopové detektory",
    span: "Roční měření",
    text: "Pracují na principu detekce stop alfa částic z radonu a jeho dceřiných produktů ve speciálním materiálu podobném fotografickému filmu. Jsou určeny pro roční měření průměrné hodnoty ekvivalentní objemové aktivity radonu.",
  },
  {
    Icon: MoreIcons.Clock,
    name: "Elektretové detektory",
    span: "1 až několik týdnů",
    text: "Pracují na bázi postupného vybíjení elektretu v ionizační komoře. Míra vybití je přímo úměrná množství radonu v objektu. Jsou určeny pro střednědobé měření průměrné koncentrace radonu.",
  },
  {
    Icon: MoreIcons.Activity,
    name: "Kontinuální monitory",
    span: "Časový průběh",
    text: "Kontinuálně odebírají vzduch a měří koncentraci radonu ve zvolených intervalech. Sledují časové změny, rychlost přísunu radonu do objektu nebo účinnost větrání. Používáme je při radonové diagnostice.",
  },
];

export default function Mereni() {
  usePageMeta(
    "Měření radonu a radonová diagnostika | PROTON PLUS Olomouc",
    "Autorizované měření radonu v objektech, stanovení radonového indexu pozemku a radonová diagnostika. Stopové a elektretové detektory, kontinuální monitory. PROTON PLUS, spol. s r.o., Olomouc – povolení SÚJB.",
  );

  return (
    <>
      <PageHero
        eyebrow="MĚŘENÍ RADONU · POVOLENÍ SÚJB"
        title="Měření radonu v objektech a na pozemcích"
        lead="Měříme a hodnotíme výskyt radonu ve stavbách i radonový index pozemků. Výsledky dodáváme v písemném protokolu, který můžete použít pro stavební řízení, kolaudaci i rozhodnutí o dalším postupu."
        crumbs={[{ label: "Úvod", href: "/" }, { label: "Měření radonu" }]}
      />

      {/* when you need measurement */}
      <section className="py-20 md:py-28" style={{ backgroundColor: C.pearl }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <Eyebrow>KDY MĚŘENÍ POTŘEBUJETE</Eyebrow>
          <H2 className="max-w-xl">Typické situace, kdy se měření radonu vyplatí</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {WHEN.map((w) => (
              <Card key={w.title}>
                <div className="mb-4" style={{ color: C.teal }}>
                  <w.Icon />
                </div>
                <H3>{w.title}</H3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(18,28,36,0.6)", ...body }}>
                  {w.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* in buildings */}
      <section id="objekty" className="py-20 md:py-28" style={{ backgroundColor: C.navy }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <Eyebrow light>MĚŘENÍ RADONU V INTERIÉRECH OBJEKTŮ</Eyebrow>
            <H2 light>Tři druhy detektorů podle účelu měření</H2>
            <P light>
              Pro praktické měření radonu v objektech používáme tři druhy detektorů. Volba závisí
              na tom, zda potřebujete roční průměr, střednědobou hodnotu, nebo detailní časový
              průběh koncentrace.
            </P>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DETECTORS.map((d) => (
              <div
                key={d.name}
                className="p-7 rounded-[4px]"
                style={{ border: "1px solid rgba(46,107,122,0.28)", background: "rgba(46,107,122,0.07)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span style={{ color: C.tealLight }}>
                    <d.Icon />
                  </span>
                  <span
                    className="text-[0.66rem] tracking-[0.16em] uppercase font-semibold px-2 py-1 rounded"
                    style={{ color: C.tealLight, backgroundColor: "rgba(46,107,122,0.18)", ...body }}
                  >
                    {d.span}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-3" style={{ color: C.mist, ...heading }}>
                  {d.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(237,239,238,0.68)", ...body }}>
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* land plots + diagnostics */}
      <section className="py-20 md:py-28" style={{ backgroundColor: C.pearl }}>
        <div className="max-w-[1150px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div id="pozemky">
            <Eyebrow>RADONOVÝ INDEX POZEMKU</Eyebrow>
            <H2>Měření radonu na pozemku před stavbou</H2>
            <P>
              Radonový index pozemku vyjadřuje, jak velké je riziko pronikání radonu z podloží
              do budoucí stavby. Stanovujeme ho měřením koncentrace radonu v půdním vzduchu
              a posouzením propustnosti zemin.
            </P>
            <P>
              Výsledek je podkladem pro projektanta: podle kategorie radonového indexu se volí
              způsob ochrany stavby – od běžné hydroizolace až po protiradonovou izolaci
              v kombinaci s odvětráním podloží.
            </P>
            <ul className="space-y-2.5 mt-6">
              {[
                "Měření provádíme na základě povolení SÚJB (§ 6 odst. 4 zákona)",
                "Protokol o stanovení radonového indexu pozemku",
                "Doporučení ochrany stavby pro projekt",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: C.teal }}>
                    <Icons.Check />
                  </span>
                  <span className="text-sm" style={{ color: C.ink, ...body }}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div id="diagnostika">
            <Eyebrow>RADONOVÁ DIAGNOSTIKA</Eyebrow>
            <H2>Co je radonová diagnostika</H2>
            <P>
              Radonová diagnostika je soubor měření, při nichž se vyhledávají zdroje radonu
              (například radonové riziko základových půd pod objektem), cesty šíření radonu
              v budově a posuzuje se těsnost základové konstrukce proti pronikání radonu.
            </P>
            <P>
              Cílem diagnostiky je získat podklady pro návrh rozumného a hospodárného
              protiradonového opatření. Provádí se tehdy, pokud měření prokáže, že průměrná
              hodnota v budově překračuje referenční úroveň.
            </P>
            <div
              className="mt-6 p-5 rounded-[4px]"
              style={{ backgroundColor: "rgba(46,107,122,0.08)", border: "1px solid rgba(46,107,122,0.2)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: C.ink, ...body }}>
                <strong style={heading}>Dobré vědět:</strong> Při překročení referenční úrovně
                je za stanovených podmínek možné žádat o státní příspěvek na radonovou
                diagnostiku a následná ozdravná opatření. Rádi vám poradíme s postupem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Chcete změřit radon ve svém domě nebo na pozemku?"
        text="Popište nám objekt nebo pozemek a navrhneme vhodný typ a délku měření. Poptávka je nezávazná."
      />
    </>
  );
}
