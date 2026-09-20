import { useEffect } from "react";
import { C, body, heading } from "./theme";
import { usePath, usePageMeta } from "./router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TealBtn } from "./components/Ui";
import Home from "./pages/Home";
import Mereni from "./pages/Mereni";
import Opatreni from "./pages/Opatreni";
import Radon from "./pages/Radon";

const ROUTES: Record<string, () => React.JSX.Element> = {
  "/": Home,
  "/mereni-radonu": Mereni,
  "/protiradonova-opatreni": Opatreni,
  "/radon": Radon,
};

function NotFound() {
  usePageMeta("Stránka nenalezena | PROTON PLUS", "Požadovaná stránka neexistuje.");
  return (
    <section className="pt-[68px] min-h-[70vh] flex items-center" style={{ backgroundColor: C.navy }}>
      <div className="max-w-[1150px] mx-auto px-6 py-24 text-center">
        <p className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: C.tealLight, ...body }}>
          CHYBA 404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.mist, ...heading }}>
          Stránka nenalezena
        </h1>
        <p className="text-base mb-8" style={{ color: "rgba(237,239,238,0.65)", ...body }}>
          Požadovaná stránka neexistuje nebo byla přesunuta.
        </p>
        <TealBtn href="/">Zpět na úvod</TealBtn>
      </div>
    </section>
  );
}

export default function App() {
  const path = usePath();
  const normalized = path.length > 1 ? path.replace(/\/+$/, "") : path;
  const Page = ROUTES[normalized] ?? NotFound;

  // on first load with a hash (e.g. /#kontakt) scroll to the section
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72 });
      });
    }
  }, []);

  return (
    <div style={{ ...body, backgroundColor: C.navy }}>
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
