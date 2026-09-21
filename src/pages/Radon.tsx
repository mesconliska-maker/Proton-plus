import { C, body, heading } from "../theme";
import { Link, usePageMeta } from "../router";
import { Icons } from "../components/Icons";
import { MoreIcons } from "../components/MoreIcons";
import { Card, CtaBand, Eyebrow, GhostBtn, H2, H3, P, PageHero } from "../components/Ui";

const SOURCES = [
  {
    Icon: MoreIcons.Layers,
    title: "Podloží",
    text: "Nejvýznamnější zdroj. Radon vzniká v horninách a zeminách a do domu proniká netěsnostmi základových konstrukcí – spárami, prostupy a trhlinami.",
  },
  {
    Icon: MoreIcons.Home,
    title: "Stavební materiály",
    text: "Některé materiály s vyšším obsahem radia uvolňují (exhalují) radon do vnitřního prostředí. Týká se to především starších staveb.",
  },
  {
    Icon: MoreIcons.Drop,
    title: "Voda",
    text: "Radon rozpuštěný v podzemní vodě se uvolňuje při jejím používání – v koupelnách a kuchyních. Významný je u vlastních studní.",
  },
];

const LEVELS = [
  { val: "300 Bq/m³", label: "Referenční úroveň", sub: "stávající stavby s obytnými nebo pobytovými místnostmi" },
  { val: "200 Bq/m³", label: "Nové stavby", sub: "hodnota, se kterou se počítá při projektování novostaveb" },
];

export default function Radon() {
  usePageMeta(
    "Radon – co je radon, jeho rizika a měření radonu | PROTON PLUS Olomouc",
    "Co je radon, jak vzniká, jak proniká do budov a proč je důležité ho měřit. Referenční úrovně a možnosti ochrany. PROTON PLUS, spol. s r.o., Olomouc – měření radonu s povolením SÚJB.",
  );

  return (
    <>
      <PageHero
        eyebrow="O RADONU"
        title="Radon: přírodní plyn, se kterým je dobré počítat"
        lead="Radon je součástí prostředí, ve kterém žijeme. Nejde o havárii ani selhání – ale při dlouhodobém působení ve vyšších koncentracích zvyšuje riziko onemocnění plic. Proto se vyplatí ho změřit a v případě potřeby řešit."
        crumbs={[{ label: "Úvod", href: "/" }, { label: "O radonu" }]}
      />

      {/* what is radon */}
      <section className="py-20 md:py-28" style={{ backgroundColor: C.pearl }}>
        <div className="max-w-[1150px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>CO JE RADON</Eyebrow>
            <H2>Jak radon vzniká a proč se dostává do budov</H2>
            <P>
              Radon je přírodní radioaktivní plyn vznikající rozpadem radia (²²⁶Ra) v podložních
              horninách a zeminách. Je bez barvy a bez zápachu, takže ho nelze vnímat smysly.
              Má snahu unikat z prostředí s vyšší hustotou (z horniny a zeminy, kde vznikl)
              do prostředí s hustotou nižší – do ovzduší.
            </P>
            <P>
              Pod budovou se radon hromadí a netěsnostmi základových konstrukcí proniká do
              interiéru, kde se – zejména při nedostatečném větrání – jeho koncentrace zvyšuje.
              V různých místech republiky je výskyt radonu v podloží velmi rozdílný.
            </P>
          </div>
          <div>
            <Eyebrow>VLIV NA ZDRAVÍ</Eyebrow>
            <H2>Proč na koncentraci radonu záleží</H2>
            <P>
              Jsou-li radon a jeho rozpadové produkty vdechnuty, ať už samotné, nebo usazené
              na prachových a aerosolových částicích, zůstávají v dýchacích cestách a plicních
              sklípcích, kde se dále rozpadají a působí na plicní tkáň zářením alfa.
            </P>
            <P>
              Dlouhodobé výzkumy prokázaly, že při dlouhodobém působení radonu se zvyšuje
              pravděpodobnost vzniku rakoviny plic – radon je po kouření její druhou nejčastější
              příčinou. Podle odhadů vědeckého výboru OSN (UNSCEAR) tvoří radon a jeho rozpadové
              produkty přibližně polovinu celkového průměrného ročního ozáření člověka z přírodních
              zdrojů.
            </P>
            <P>
              Riziko roste s dávkou a délkou působení. Legislativa proto stanovuje referenční
              úrovně, při jejichž překročení se doporučuje situaci řešit.
            </P>
          </div>
        </div>
      </section>

      {/* reference levels */}
      <section className="py-20 md:py-28" style={{ backgroundColor: C.navy }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div>
              <Eyebrow light>REFERENČNÍ ÚROVNĚ</Eyebrow>
              <H2 light>Kdy je koncentrace radonu příliš vysoká</H2>
              <P light>
                Objemová aktivita radonu se udává v becquerelech na metr krychlový (Bq/m³).
                Referenční úroveň není hranicí mezi „bezpečné" a „nebezpečné" – vyjadřuje
                hodnotu, nad kterou se považuje za účelné koncentraci radonu snižovat.
              </P>
              <P light>
                Zda je referenční úroveň překročena, spolehlivě zjistí pouze měření. Odhad
                podle radonového indexu lokality nebo typu domu nestačí.
              </P>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <GhostBtn href="/mereni-radonu">Jak měření probíhá</GhostBtn>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {LEVELS.map((l) => (
                <div
                  key={l.val}
                  className="p-7 rounded-[4px]"
                  style={{ border: "1px solid rgba(46,107,122,0.28)", background: "rgba(46,107,122,0.07)" }}
                >
                  <div className="text-[2rem] font-bold leading-none mb-2" style={{ color: C.tealLight, ...heading }}>
                    {l.val}
                  </div>
                  <div className="text-sm font-semibold mb-1" style={{ color: C.mist, ...heading }}>
                    {l.label}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "rgba(237,239,238,0.55)", ...body }}>
                    {l.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* sources */}
      <section className="py-20 md:py-28" style={{ backgroundColor: C.pearl }}>
        <div className="max-w-[1150px] mx-auto px-6">
          <Eyebrow>ODKUD SE RADON V DOMĚ BERE</Eyebrow>
          <H2 className="max-w-xl">Tři zdroje radonu v budovách</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {SOURCES.map((s) => (
              <Card key={s.title}>
                <div className="mb-4" style={{ color: C.teal }}>
                  <s.Icon />
                </div>
                <H3>{s.title}</H3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(18,28,36,0.6)", ...body }}>
                  {s.text}
                </p>
              </Card>
            ))}
          </div>

          <div
            className="mt-10 p-6 md:p-8 rounded-[5px] flex flex-col md:flex-row md:items-center gap-6"
            style={{ backgroundColor: "white", border: "1px solid rgba(46,107,122,0.15)" }}
          >
            <span className="flex-shrink-0" style={{ color: C.teal }}>
              <Icons.Wrench />
            </span>
            <div className="flex-1">
              <h3 className="text-base font-bold mb-1" style={{ color: C.ink, ...heading }}>
                Radon lze řešit – a většinou to není složité
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(18,28,36,0.62)", ...body }}>
                Od utěsnění prostupů a lepšího větrání až po odvětrání podloží nebo protiradonovou
                izolaci. Každému opatření předchází diagnostika, aby řešení mířilo na skutečný zdroj.
              </p>
            </div>
            <Link
              href="/protiradonova-opatreni"
              className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap"
              style={{ color: C.teal, ...heading }}
            >
              Způsoby odstranění radonu <MoreIcons.ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Nevíte, jak je na tom váš dům?"
        text="Měření radonu je jediný spolehlivý způsob, jak to zjistit. Ozvěte se nám a navrhneme vhodný postup."
      />
    </>
  );
}
