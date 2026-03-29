import { useEffect } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "kto-sme",
    heading: "Kto sme",
    content: (
      <p>
        Synapso je aplikácia na kognitívny tréning navrhnutá na pomoc
        používateľom zlepšiť pamäť, pozornosť, sústredenie a mentálnu
        flexibilitu prostredníctvom interaktívnych hier pre mozog. Na
        poskytnutie personalizovaného zážitku Synapso vyžaduje používateľský
        účet. Táto politika vysvetľuje, aké osobné údaje zbierame v súvislosti
        s týmto účtom a ako s nimi nakladáme.
      </p>
    ),
  },
  {
    id: "co-zbierame",
    heading: "Aké údaje zbierame",
    content: (
      <>
        <p>Keď si vytvoríte a používate účet Synapso, zbierame:</p>
        <ul>
          <li>E-mailovú adresu</li>
          <li>Používateľské meno / prezývku</li>
          <li>Rok narodenia</li>
          <li>
            Údaje súvisiace s účtom (napr. dátum vytvorenia účtu, história
            prihlásení)
          </li>
          <li>
            Herné štatistiky a aktivitu generovanú pri používaní aplikácie
            (napr. skóre, trvanie sedení, história tréningu)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "preco-zbierame",
    heading: "Prečo tieto údaje zbierame",
    content: (
      <>
        <p>Zhromaždené údaje používame na:</p>
        <ul>
          <li>Vytvorenie a správu vášho účtu</li>
          <li>Overenie identity a umožnenie obnovy hesla</li>
          <li>Uloženie a obnovenie vášho tréningového pokroku</li>
          <li>Zobrazenie vášho profilu a informácií rebríčka</li>
          <li>Generovanie personalizovaných herných štatistík</li>
          <li>Udržiavanie bezpečnosti a spoľahlivosti aplikácie</li>
          <li>Celkové zlepšovanie zážitku z aplikácie v priebehu času</li>
        </ul>
      </>
    ),
  },
  {
    id: "pravny-zaklad",
    heading: "Právny základ",
    content: (
      <p>
        Vaše osobné údaje sú spracúvané predovšetkým na základe poskytovania
        služby Synapso a správy vášho používateľského účtu. Vytvorením účtu
        súhlasíte so spracúvaním vašich údajov tak, ako je opísané v tejto
        politike.
      </p>
    ),
  },
  {
    id: "ako-ulozene",
    heading: "Ako sú údaje uložené",
    content: (
      <p>
        Vaše údaje sú bezpečne uložené pomocou externej infraštruktúry a
        backendových služieb potrebných na prevádzku aplikácie. Prijímame
        primerané technické opatrenia na ochranu vašich informácií pred
        neoprávneným prístupom, stratou alebo zneužitím.
      </p>
    ),
  },
  {
    id: "ako-dlho",
    heading: "Ako dlho sú údaje uchovávané",
    content: (
      <p>
        Osobné údaje sú uchovávané po dobu existencie vášho účtu alebo po dobu
        potrebnú na legitímnu prevádzku služby. Ak požiadate o vymazanie účtu,
        vaše osobné údaje odstránime, pokiaľ dlhšia doba uchovávania nie je
        vyžadovaná príslušným zákonom.
      </p>
    ),
  },
  {
    id: "zdielanie",
    heading: "Zdieľanie údajov",
    content: (
      <p>
        Vaše osobné údaje nepredávame. Údaje sú zdieľané iba s poskytovateľmi
        služieb tretích strán, ktorí sú nevyhnutne potrební na prevádzku
        aplikácie a jej podpornej infraštruktúry. Títo poskytovatelia sú
        zaviazaní nakladať s vašimi údajmi zodpovedne a iba na účely, ktoré
        určíme.
      </p>
    ),
  },
  {
    id: "prava-pouzivatela",
    heading: "Vaše práva",
    content: (
      <p>
        V závislosti od zákona, ktorý sa na vás vzťahuje, môžete mať právo
        požiadať o prístup k vašim osobným údajom, ich opravu, vymazanie alebo
        obmedzenie ich spracúvania. Na uplatnenie ktoréhokoľvek z týchto práv
        nás kontaktujte pomocou nižšie uvedených údajov.
      </p>
    ),
  },
  {
    id: "kontakt",
    heading: "Kontakt",
    content: (
      <p>
        Ak máte akékoľvek otázky alebo žiadosti týkajúce sa vašich osobných
        údajov, kontaktujte nás na adrese{" "}
        <a
          href="mailto:support@synapso.world"
          className="text-primary hover:underline underline-offset-4"
        >
          support@synapso.world
        </a>
        .
      </p>
    ),
  },
  {
    id: "aktualizacie",
    heading: "Aktualizácie tejto politiky",
    content: (
      <p>
        Táto politika ochrany osobných údajov môže byť čas od času aktualizovaná,
        aby odrážala zmeny v našich postupoch alebo platných zákonoch. Najnovšia
        verzia bude vždy dostupná na tejto stránke. Odporúčame vám ju pravidelne
        kontrolovať.
      </p>
    ),
  },
];

const PrivacySK = () => {
  useEffect(() => {
    document.title = "Zásady ochrany osobných údajov — Synapso";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Subtle static background glow */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "70%",
            top: "20%",
            background:
              "radial-gradient(circle, hsl(166 50% 37% / 0.18) 0%, hsl(166 50% 37% / 0.06) 45%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "15%",
            top: "60%",
            background:
              "radial-gradient(circle, hsl(166 50% 37% / 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Page header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Zasady ochrany osobných údajov
            </h1>
          </div>
          <p className="text-muted-foreground text-lg md:text-2xl leading-relaxed mb-7">
            Ako zbierame, používame a chránime vaše osobné údaje v Synapso
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-block text-sm font-medium text-muted-foreground border border-border rounded-full px-4 py-1.5">
              Posledná aktualizácia: 29. marca 2026
            </span>
            <Link
              to="/privacy-policy"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/30 rounded-full px-4 py-1.5 hover:bg-primary/10 transition-colors"
            >
              🇬🇧 English
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="glass rounded-2xl px-8 py-8"
            >
              <div className="flex items-start gap-6">
                <span className="mt-1 shrink-0 text-base font-semibold text-primary/70 w-7 text-right tabular-nums select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <div className="text-muted-foreground text-lg leading-relaxed space-y-4 [&_ul]:mt-2 [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-primary/50">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 Synapso</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacySK;
