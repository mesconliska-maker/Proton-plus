import { useState, type CSSProperties, type FocusEvent, type FormEvent } from "react";
import { C, body, heading } from "../theme";
import { COMPANY, MAPS_EMBED, MAPS_LINK, tel } from "../data";
import { Icons } from "./Icons";
import { Eyebrow, TealBtn } from "./Ui";

const INTERESTS = [
  "Měření radonu v objektu",
  "Radonový index pozemku",
  "Radonová diagnostika",
  "Protiradonová opatření (projekt / realizace)",
  "Osobní dozimetrie",
  "Konzultace / jiné",
];

export function ContactSection() {
  const [form, setForm] = useState({
    jmeno: "",
    telefon: "",
    email: "",
    zajem: INTERESTS[0],
    popis: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Poptávka z webu – ${form.zajem} – ${form.jmeno}`;
    const bodyText = [
      `Jméno a příjmení: ${form.jmeno}`,
      `Telefon: ${form.telefon || "—"}`,
      `E-mail: ${form.email}`,
      `Zajímám se o: ${form.zajem}`,
      "",
      "Popis poptávky:",
      form.popis || "—",
    ].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    setSent(true);
  };

  const inputBase: CSSProperties = {
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

  const fieldFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    ((e.currentTarget as HTMLElement).style.borderColor = C.teal);
  const fieldBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(46,107,122,0.28)");

  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    marginBottom: 6,
    color: "rgba(237,239,238,0.45)",
    ...heading,
  };

  return (
    <section id="kontakt" className="py-24 md:py-32" style={{ backgroundColor: C.navy }}>
      <div className="max-w-[1150px] mx-auto px-6">
        <div className="mb-14">
          <Eyebrow light>KONTAKT A POPTÁVKA</Eyebrow>
          <h2
            className="text-3xl md:text-[2.4rem] font-bold max-w-xl leading-[1.2]"
            style={{ color: C.mist, ...heading }}
          >
            Potřebujete měření radonu nebo osobní dozimetrii?
          </h2>
          <p className="text-base mt-4 max-w-xl leading-relaxed" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
            Napište nám, co potřebujete, nebo rovnou zavolejte. Ozveme se vám zpravidla
            do jednoho pracovního dne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14">
          {/* form */}
          <div>
            {sent ? (
              <div
                className="p-10 rounded-[5px] text-center"
                style={{ border: "1px solid rgba(46,107,122,0.38)", backgroundColor: "rgba(46,107,122,0.08)" }}
              >
                <div className="flex justify-center mb-4" style={{ color: C.tealLight }}>
                  <Icons.Mail />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: C.mist, ...heading }}>
                  Poptávka je připravena k odeslání
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
                  Otevřel se váš e-mailový program s předvyplněnou zprávou. Stačí ji odeslat.
                  Pokud se nic neotevřelo, napište nám přímo na{" "}
                  <a href={`mailto:${COMPANY.email}`} style={{ color: C.tealLight }}>
                    {COMPANY.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  className="text-xs underline"
                  style={{ color: "rgba(237,239,238,0.5)", ...body }}
                  onClick={() => setSent(false)}
                >
                  Upravit poptávku
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="f-jmeno" style={labelStyle}>Jméno a příjmení</label>
                    <input
                      id="f-jmeno"
                      type="text"
                      value={form.jmeno}
                      onChange={(e) => setForm({ ...form, jmeno: e.target.value })}
                      placeholder="Jan Novák"
                      required
                      autoComplete="name"
                      style={inputBase}
                      onFocus={fieldFocus}
                      onBlur={fieldBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="f-telefon" style={labelStyle}>Telefon</label>
                    <input
                      id="f-telefon"
                      type="tel"
                      value={form.telefon}
                      onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                      placeholder="+420 XXX XXX XXX"
                      autoComplete="tel"
                      style={inputBase}
                      onFocus={fieldFocus}
                      onBlur={fieldBlur}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="f-email" style={labelStyle}>E-mail</label>
                    <input
                      id="f-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jan.novak@email.cz"
                      required
                      autoComplete="email"
                      style={inputBase}
                      onFocus={fieldFocus}
                      onBlur={fieldBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="f-zajem" style={labelStyle}>Zajímám se o</label>
                    <select
                      id="f-zajem"
                      value={form.zajem}
                      onChange={(e) => setForm({ ...form, zajem: e.target.value })}
                      style={{ ...inputBase, backgroundColor: C.navyLight, cursor: "pointer" }}
                      onFocus={fieldFocus}
                      onBlur={fieldBlur}
                    >
                      {INTERESTS.map((i) => (
                        <option key={i} value={i} style={{ backgroundColor: C.navyLight, color: C.mist }}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="f-popis" style={labelStyle}>Popis poptávky</label>
                  <textarea
                    id="f-popis"
                    value={form.popis}
                    onChange={(e) => setForm({ ...form, popis: e.target.value })}
                    placeholder="Popište, co potřebujete – druh objektu, lokalita, jaké měření hledáte…"
                    rows={5}
                    style={{ ...inputBase, resize: "vertical" }}
                    onFocus={fieldFocus}
                    onBlur={fieldBlur}
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <TealBtn submit>Odeslat poptávku</TealBtn>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(237,239,238,0.4)", ...body }}>
                    Odesláním formuláře souhlasíte se zpracováním osobních údajů za účelem
                    vyřízení poptávky.{" "}
                    <a href="/gdpr-proton.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                      Zásady GDPR
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* contact details */}
          <div className="space-y-8">
            <div>
              <p
                className="text-[0.67rem] tracking-[0.2em] uppercase font-semibold mb-5"
                style={{ color: "rgba(237,239,238,0.38)", ...heading }}
              >
                Kontaktní údaje
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: C.tealLight }}>
                    <Icons.Pin />
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: C.mist, ...heading }}>
                      {COMPANY.name}
                    </p>
                    <p className="text-sm" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
                      {COMPANY.street}
                      <br />
                      {COMPANY.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: C.tealLight }}>
                    <Icons.Phone />
                  </span>
                  <div className="space-y-1">
                    {COMPANY.phones.map((ph, i) => (
                      <a
                        key={ph}
                        href={tel(ph)}
                        className="block text-sm transition-colors"
                        style={{
                          color: i === 0 ? C.mist : "rgba(237,239,238,0.6)",
                          ...(i === 0 ? heading : body),
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.tealLight)}
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
                    <Icons.Mail />
                  </span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm transition-colors"
                    style={{ color: C.mist, ...body }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.tealLight)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.mist)}
                  >
                    {COMPANY.email}
                  </a>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: C.tealLight }}>
                    <Icons.Document />
                  </span>
                  <div className="text-sm space-y-0.5" style={{ color: "rgba(237,239,238,0.6)", ...body }}>
                    <p>
                      Jednatel: <span style={{ color: C.mist }}>{COMPANY.director}</span>
                    </p>
                    <p>IČ: {COMPANY.ic}</p>
                    <p>DIČ: {COMPANY.dic}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* map */}
            <div
              className="rounded-[4px] overflow-hidden"
              style={{ border: "1px solid rgba(46,107,122,0.25)", backgroundColor: C.navyLight }}
            >
              <iframe
                title="Mapa – PROTON PLUS, Zeyerova 855/15, Olomouc"
                src={MAPS_EMBED}
                width="100%"
                height="220"
                style={{ border: 0, display: "block", filter: "grayscale(0.2)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-center py-2.5 transition-colors"
                style={{ color: C.tealLight, borderTop: "1px solid rgba(46,107,122,0.25)", ...body }}
              >
                Otevřít v Mapách Google →
              </a>
            </div>

            {/* bronze heritage note */}
            <div
              className="px-5 py-4 rounded-[4px]"
              style={{ backgroundColor: "rgba(138,106,74,0.12)", border: "1px solid rgba(138,106,74,0.25)" }}
            >
              <p className="text-[0.72rem] font-semibold mb-0.5" style={{ color: C.bronze, ...heading }}>
                Specializace od roku 1994
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(237,239,238,0.5)", ...body }}>
                Více než 30 let odborné praxe v oblasti radonové diagnostiky a radiační ochrany.
                Působíme v Olomouci, na střední Moravě i v dalších regionech ČR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
