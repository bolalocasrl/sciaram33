import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/393204488202";

function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
      transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export default function Silvia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* ── NAVBAR ── */}
      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "#fdf1db",
          borderBottom: "1px solid rgba(140,59,59,0.10)",
        }}
      >
        {/* Barra mobile — grid 3 colonne */}
        <div className="md:hidden grid grid-cols-3 items-center px-6 py-3">
          <a href="/" className="justify-self-start">
            <img src="/silvia_logo_fine.png" alt="SCIARAM 33" className="object-contain" style={{ maxHeight: "50px", width: "auto" }} />
          </a>
          <a href="/" className="justify-self-center">
            <img src="/logofinitosciaram33.png" alt="Silvia" className="object-contain" style={{ maxHeight: "52px", width: "auto" }} />
          </a>
          <button className="justify-self-end p-2" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Menu">
            {mobileMenuOpen
              ? <X className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
              : <Menu className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
            }
          </button>
        </div>

        {/* Barra desktop — flex con logo occhio absolute centrato */}
        <div className="relative hidden md:flex" style={{ color: "hsl(var(--foreground))" }}>
          <div className="flex items-center w-full px-8 py-3">
            <div className="flex-1 flex items-center justify-between pr-20">
              <a href="/"><img src="/logofinitosciaram33.png" alt="Silvia" className="object-contain" style={{ maxHeight: "55px", width: "auto" }} /></a>
              <a href="/eventi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Eventi</a>
              <a href="/percorsi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Percorsi</a>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <a href="/"><img src="/silvia_logo_fine.png" alt="SCIARAM 33" className="object-contain" style={{ maxHeight: "65px", width: "auto" }} /></a>
            </div>
            <div className="flex-1 flex items-center justify-between pl-20">
              <a href="/studio" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Lo Studio 33</a>
              <a href="/silvia" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Chi Sono</a>
              <a href="/#contatti" className="text-xs tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-300 hover:bg-primary hover:text-white" style={{ color: "hsl(var(--primary))", border: "1px solid rgba(140,59,59,0.35)" }}>Contatti</a>
            </div>
          </div>
        </div>

        {/* Menu mobile a tendina */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col px-8 pb-6 pt-2 gap-5 text-xs tracking-widest uppercase" style={{ color: "hsl(var(--foreground))", backgroundColor: "#fdf1db" }}>
            <a href="/eventi" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Eventi</a>
            <a href="/percorsi" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Percorsi</a>
            <a href="/studio" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Lo Studio 33</a>
            <a href="/silvia" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Chi Sono</a>
            <a href="/#contatti" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Contatti</a>
          </nav>
        )}
      </header>

      {/* ── IL PERCORSO ── */}
      <section className="pt-32 pb-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* Colonna sinistra — testo */}
          <div className="flex-1 max-w-xl">
            <ScrollReveal direction="left">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">L'anima di SCIARAM 33</p>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Founder
              </h2>
            </ScrollReveal>
            <div className="space-y-8 text-lg text-foreground/85 font-light leading-relaxed">
              <ScrollReveal delay={0.1}>
                <p>
                  Dietro SCIARAM 33 c'è Silvia, ricercatrice spirituale e istruttrice di Pilates.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  Dopo anni di studio, lavoro e ricerche esperienziali, è tornata nella sua terra natale, la Sicilia, per intraprendere un nuovo progetto incentrato sulla coscienza corporale attraverso il movimento e tecniche di riconnessione al sé.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Si è formata nel metodo classico Pilates con specializzazione grandi attrezzi Reformer & Cadillac certificata in Italia. Ha conseguito una formazione in Yoga e Meditazione seguita da maestri orientali in India, nell'area dell'Himalaya e a Bali sullo studio dei chakra e del suono per apprendere le tecniche millenarie di risveglio e presenza. Ha studiato e appreso da sagge maestre illuminate il lavoro sul Divino Femminile, approfondendo la sacralità dell'utero inteso come portale di conoscenza, creazione e potere umano e divino. Ha fatto ricerca nella foresta di Palawan, nelle Filippine, dove ha studiato gli stati alterati di coscienza e ha approfondito tecniche di rilascio Somato-Emozionale, un lavoro che accompagna a liberarsi da blocchi emotivi e ancestrali accumulati nel corpo e a prendere coscienza del proprio corpo. Ha approfondito lo studio della bioenergetica e del linguaggio simbolico ed energetico del corpo per imparare a leggere la mappa dell'anima.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Colonna destra — foto */}
          <div className="flex-1 w-full max-w-lg">
            <ScrollReveal direction="right">
              <img
                src="/chisonosilvia.webp"
                alt="Silvia - SCIARAM 33"
                loading="lazy"
                className="w-full object-cover rounded-[2.5rem] shadow-2xl shadow-primary/10"
                style={{ aspectRatio: "4/5" }}
              />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── FORMAZIONE & COMPETENZE ── */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Percorso di studi</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16 leading-tight">
              Formazione & Competenze
            </h2>
          </ScrollReveal>
          <div className="space-y-10">
            {[
              {
                title: "Pilates Grandi Attrezzi",
                desc: "Istruttrice certificata in Italia con specializzazione e approfondimenti conseguiti all'estero.",
              },
              {
                title: "Yoga e Meditazione",
                desc: <>Formazione in <strong>India</strong>, nell'area dell'Himalaya, seguita da maestri orientali sullo studio dei chakra e del suono per apprendere le tecniche millenarie di equilibrio e presenza.</>,
              },
              {
                title: "Divino Femminile",
                desc: <>Ho appreso da sagge maestre illuminate il lavoro sul <strong>Divino Femminile</strong>, approfondendo la sacralità dell'utero inteso come portale di saggezza, creazione e potere intuitivo.</>,
              },
              {
                title: "Ricerca sulla Coscienza",
                desc: <>Studio e ricerca nella foresta di <strong>Palawan</strong> sugli stati alterati di coscienza, sperimentando la connessione con altri piani e lo studio dello spazio-tempo.</>,
              },
              {
                title: "Scienze Olistiche",
                desc: "Approfondimento in numerologia, astrologia, geometria sacra, sciamanesimo e medicina quantica, intesi come tecnologie di luce e chiavi per la comprensione della propria mappa animica.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-6 border-t border-primary/10 pt-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-2" />
                  <div>
                    <p className="font-medium text-foreground mb-2">{item.title}</p>
                    <p className="text-foreground/85 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELFARE AZIENDALE ── */}
      <section className="py-32 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Collaborazioni</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-10 leading-tight">
              Welfare & Benessere Aziendale
            </h2>
            <p className="text-lg text-foreground/85 font-light leading-relaxed mb-12 max-w-2xl">
              Ho collaborato con realtà aziendali per promuovere il <strong>riequilibrio psico-fisico dei dipendenti</strong>. Attraverso programmi mirati, integro tecniche di movimento consapevole e gestione dello stress per migliorare il clima organizzativo e la qualità della vita lavorativa, portando la consapevolezza nel cuore della produttività.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-primary/30 rounded-full px-6 py-3 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Scrivimi per un progetto aziendale <ChevronRight className="w-3 h-3" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FILOSOFIA ── */}
      <section className="py-32 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-10">
              "Il corpo è il luogo dove tutto inizia e tutto torna. La mia pratica è restituire alle persone il loro spazio interiore."
            </h2>
            <div className="h-[1px] w-20 bg-white/30 mx-auto mb-10" />
            <p className="text-white/70 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Ogni sessione con me è un ascolto. Non alleno corpi — accompagno persone. Il Pilates e lo yoga sono i miei strumenti, ma il vero lavoro è sempre più profondo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Inizia il tuo percorso</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Prenota la tua prima sessione.
            </h2>
            <p className="text-lg text-foreground/85 font-light leading-relaxed mb-12">
              Una chiacchierata su WhatsApp è il primo passo. Raccontami di te, dei tuoi obiettivi. Troveremo insieme il percorso giusto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-xs tracking-widest uppercase rounded-full text-white transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg"
                style={{ backgroundColor: "hsl(var(--primary))" }}
              >
                Scrivimi su WhatsApp <ChevronRight className="w-3 h-3" />
              </a>
              <a
                href="/#contatti"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-xs tracking-widest uppercase rounded-full border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Contattaci <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHATSAPP FISSO ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivici su WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-background py-1 px-6 text-center">
        <img
          src="/silvia_logo_fine.png"
          alt="SCIARAM 33"
          className="mx-auto mb-3 object-contain"
          style={{ maxHeight: "40px", width: "auto" }}
        />
        <p className="text-background/50 text-sm tracking-wide mb-2">
          © {new Date().getFullYear()} SCIARAM 33. Tutti i diritti riservati.
          <a href="/privacy" className="text-background/40 hover:text-background/70 transition-colors underline ml-2 text-xs">Privacy Policy</a>
        </p>
        <p className="text-background/30 text-xs">Movement Medicine · Mazara del Vallo</p>
        <p className="text-background/30 text-xs mt-1">Via Castelvetrano 45, Mazara del Vallo (TP) · P.IVA: 02966860815</p>
      </footer>
    </main>
  );
}
