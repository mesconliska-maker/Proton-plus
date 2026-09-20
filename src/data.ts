/* ─── company facts (source: protonplus.cz + brief) ─── */
export const COMPANY = {
  name: "PROTON PLUS, spol. s r.o.",
  short: "PROTON PLUS",
  street: "Zeyerova 855/15",
  city: "779 00 Olomouc-Hodolany",
  ic: "60779471",
  dic: "CZ60779471",
  email: "protonplus@protonplus.cz",
  phoneMain: "585 243 460",
  phones: ["585 243 460", "585 380 762", "602 424 432", "602 424 431"],
  director: "Ing. Jiří Ruprecht",
  founded: 1994,
};

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Zeyerova+855%2F15%2C+779+00+Olomouc";
export const MAPS_EMBED =
  "https://maps.google.com/maps?q=Zeyerova+855%2F15%2C+779+00+Olomouc&output=embed&z=15";

export const tel = (p: string) => `tel:+420${p.replace(/\s/g, "")}`;

/* ─── navigation ─── */
export const NAV = [
  { label: "Měření radonu", href: "/mereni-radonu" },
  { label: "Protiradonová opatření", href: "/protiradonova-opatreni" },
  { label: "O radonu", href: "/radon" },
  { label: "O nás", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt" },
];
