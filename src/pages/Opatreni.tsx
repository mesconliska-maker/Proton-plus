import { C, body, heading } from "../theme";
import { usePageMeta } from "../router";
import { Icons } from "../components/Icons";
import { MoreIcons } from "../components/MoreIcons";
import { Card, CtaBand, Eyebrow, H2, H3, P, PageHero } from "../components/Ui";

/* table: category of radon index vs. recommended measure (source: protonplus.cz) */
const CATEGORIES = ["nízké", "střední", "dolní oblast vysokého", "vysoké"];
const MEASURES: { name: string; cells: ("x" | "*" | "")[] }[] = [
  { name: "Hydroizolace", cells: ["x", "x", "x", "x"] },
  { name: "Protiradonová izolace", cells: ["", "*", "*", ""] },
  { name: "Protiradonová izolace + odvětrání podloží", cells: ["", "", "", "*"] },
  { name: "Protiradonová izolace + odvětraná vzduchová mezera", cells: ["", "", "", "*"] },
];

const METHODS = [
  {
    Icon: MoreIcons.Layers,
    title: "Radon z podloží",
    items: [
      "Svépomocně realizovatelná opatření (utěsnění prostupů, větrání)",
      "Odvětrání radonu z podloží",
      "Výměna podlahových konstrukcí s protiradonovou izolací",
      "Nucená ventilace vnitřního vzduchu",
    ],
  },
  {
    Icon: MoreIcons.Home,
    title: "Radon ze stavebních materiálů",
    items: [
      "Odstranění materiálů s vysokou rychlostí plošné exhalace radonu",
      "Snížení exhalace neprodyšnou úpravou vnitřního povrchu konstrukcí (nátěry, tapety)",
      "Odvětrání radonu z interiéru",
    ],
  },
  {
    Icon: MoreIcons.Drop,
    title: "Radon z vody",
    items: [
      "Odstranění radonu z vody speciálním zařízením (např. aerací) – zejména u větších zdrojů pro hromadné zásobování",
      "Dostatečné odvětrání místností s velkou spotřebou vody (koupelny, kuchyně), aby se radon uvolněný z vody nešířil do budovy",
    ],
  },
];

const STEPS = [
  { n: "01", title: "Měření a diagnostika", text: "Ověříme koncentraci radonu a najdeme zdroje i cesty jeho šíření objektem." },
  { n: "02", title: "Projekt opatření", text: "Navrhneme řešení odpovídající stavu objektu, dispozici a výsledkům diagnostiky." },
  { n: "03", title: "Realizace", text: "Provedeme stavební práce vlastními silami – izolace, odvětrání, ventilace." },
  { n: "04", title: "Kontrolní měření", text: "Ověříme účinnost opatření a předáme protokol s výsledky." },
];

function Cell({ v }: { v: "x" | "*" | "" }) {
  if (!v) return <td className="text-center py-3 px-2" style={{ color: "rgba(18,28,36,0.2)" }}>–</td>;
  return (
    <td className="text-center py-3 px-2">
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
        style={{
          backgroundColor: v === "x" ? "rgba(46,107,122,0.14)" : "rgba(138,106,74,0.16)",
          color: v === "x" ? C.teal : C.bronze,
          ...heading,
        }}
      >
        {v === "x" ? <Icons.Check /> : "*"}
      </span>
    </td>
  );
}

export default function Opatreni() {
  usePageMeta(
    "Protiradonová opatření – projekt a realizace | PROTON PLUS Olomouc",
    "Ozdravná protiradonová opatření u nových i stávajících staveb: odvětrání podloží, protiradonová izolace, nucená ventilace. Projekt i realizace včetně stavebních prací. PROTON PLUS, spol. s r.o., Olomouc.",
  );

  return (
    <>
      <PageHero
        eyebrow="OZDRAVNÁ PROTIRADONOVÁ OPATŘENÍ"
        title="Protiradonová opatření od projektu po realizaci"
        lead="Navrhujeme a realizujeme opatření proti radonu u novostaveb i stávajících objektů. Za dobu působení jsme je provedli v přibližně 150 rodinných domech a 50 základních a mateřských školách."
        crumbs={[{ label: "Úvod", href: "/" }, { label: "Protiradonová opatření" }]}
      />

      {/* process */}
      <section className="py-20 md:py-28" style={{ backgroundColor: C.pearl }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <Eyebrow>JAK POSTUPUJEME</Eyebrow>
          <H2 className="max-w-xl">Jeden dodavatel pro celý proces</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {STEPS.map((s) => (
              <Card key={s.n}>
                <p className="text-[0.72rem] font-mono tracking-widest mb-3" style={{ color: C.teal }}>
                  {s.n}
                </p>
                <H3>{s.title}</H3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(18,28,36,0.6)", ...body }}>
                  {s.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* new buildings */}
      <section id="nove-stavby" className="py-20 md:py-28" style={{ backgroundColor: C.navy }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div>
              <Eyebrow light>NOVÉ STAVBY</Eyebrow>
              <H2 light>Ochrana novostavby podle radonového indexu pozemku</H2>
              <P light>
                Návrh protiradonových opatření u nových staveb vychází z kategorie radonového
                rizika pozemku zjištěné při radonovém průzkumu. Metody vedoucí k ochraně objektu
                v jednotlivých kategoriích shrnuje tabulka.
              </P>
              <figure
                className="rounded-[4px] overflow-hidden p-4 mt-6"
                style={{ backgroundColor: "white", border: "1px solid rgba(46,107,122,0.25)" }}
              >
                <img
                  src="/schema-protiradonova-izolace.jpg"
                  alt="Schéma umístění protiradonové izolace u domu bez sklepa a se sklepem"
                  className="w-full h-auto"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <figcaption className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(18,28,36,0.55)", ...body }}>
                  Protiradonová izolace položená pod celým objektem (i pod stěnami). U podsklepených
                  domů se izolace v podlaze neprodyšně napojuje na izolaci stěn.
                </figcaption>
              </figure>
            </div>

            <div>
              <div className="overflow-x-auto rounded-[4px]" style={{ backgroundColor: "white" }}>
                <table className="w-full text-sm" style={{ ...body, color: C.ink, minWidth: 560 }}>
                  <thead>
                    <tr style={{ backgroundColor: "rgba(46,107,122,0.08)" }}>
                      <th className="text-left py-3 px-4 font-semibold" style={heading}>
                        Opatření
                      </th>
                      {CATEGORIES.map((c) => (
                        <th key={c} className="py-3 px-2 text-center text-xs font-semibold leading-tight" style={heading}>
                          {c}
                        </th>
                      ))}
                    </tr>
                    <tr>
                      <th className="text-left py-2 px-4 text-[0.66rem] uppercase tracking-[0.16em] font-semibold" style={{ color: "rgba(18,28,36,0.45)", ...body }}>
                        Kategorie radonového indexu pozemku
                      </th>
                      <th colSpan={4} />
                    </tr>
                  </thead>
                  <tbody>
                    {MEASURES.map((m, i) => (
                      <tr key={m.name} style={{ borderTop: "1px solid rgba(46,107,122,0.12)", backgroundColor: i % 2 ? "rgba(46,107,122,0.03)" : "white" }}>
                        <td className="py-3 px-4 font-medium">{m.name}</td>
                        {m.cells.map((c, j) => (
                          <Cell key={j} v={c} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-1.5 text-xs leading-relaxed" style={{ color: "rgba(237,239,238,0.55)", ...body }}>
                <p>
                  <span className="font-bold" style={{ color: C.tealLight }}>✓</span> – standardní
                  doporučené použití
                </p>
                <p>
                  <span className="font-bold" style={{ color: C.bronze }}>*</span> – použití
                  doporučené pouze v případech, kdy nejsou v kontaktních podlažích obytné místnosti,
                  nebo v kombinaci s nucenou ventilací vnitřního vzduchu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* existing buildings */}
      <section id="stavajici-stavby" className="py-20 md:py-28" style={{ backgroundColor: C.pearl }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <Eyebrow>STÁVAJÍCÍ STAVBY</Eyebrow>
            <H2>Opatření u stávajících objektů vychází z diagnostiky</H2>
            <P>
              Podkladem pro projekt protiradonových opatření u stávajících staveb je výsledek
              podrobné radonové diagnostiky objektu, která zjišťuje druh, polohu a vydatnost
              zdroje radonu a cesty jeho šíření objektem.
            </P>
            <P>
              Dále zohledňujeme celkový stav objektu, dispoziční řešení (polohu obytných
              místností ve vztahu k podloží), těsnost obvodového pláště a systém větrání.
              Největší pozornost věnujeme stavu kontaktních konstrukcí. Důsledný stavebně
              technický průzkum ve vztahu k výsledkům diagnostiky může v konečném důsledku
              ušetřit značné množství finančních prostředků.
            </P>
          </div>

          <Eyebrow>ZPŮSOBY ODSTRANĚNÍ RADONU</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
            {METHODS.map((m) => (
              <Card key={m.title}>
                <div className="mb-4" style={{ color: C.teal }}>
                  <m.Icon />
                </div>
                <H3 className="mb-4">{m.title}</H3>
                <ul className="space-y-2.5">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="mt-1 flex-shrink-0" style={{ color: C.teal }}>
                        <Icons.Check />
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(18,28,36,0.68)", ...body }}>
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Máte v domě zvýšenou koncentraci radonu?"
        text="Navrhneme a zrealizujeme opatření, které ji prokazatelně sníží. Začínáme diagnostikou, končíme kontrolním měřením."
      />
    </>
  );
}
