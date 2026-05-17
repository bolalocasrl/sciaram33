import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
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

const eventi = [
  {
    day: "3",
    month: "Luglio",
    year: "2026",
    img: "/sciamanaperu1.webp",
    guest: "Martina Mamani",
    type: "Sciamana Peruviana · Lettura Foglie di Coca",
    description:
      "Martina Mamani Siwar Qoyllur, Maestra Medicina di tradizione Quechua, porta con sé la saggezza andina del Perù. Attraverso la lettura delle foglie di coca, offre un colloquio individuale di 30 minuti con traduzione. Un incontro con la tradizione spirituale andina e la connessione alla Pachamama.",
    cta: "Prenota il posto",
    ctaHref: WHATSAPP_URL,
    ctaExternal: true,
  },
  {
    day: null,
    month: "Prossimamente",
    year: null,
    img: "/costellazionifamiliari.webp",
    guest: "Costellazioni Familiari",
    type: null,
    description:
      "Un viaggio nelle dinamiche profonde della famiglia.",
    cta: "Ricevi aggiornamenti",
    ctaHref: WHATSAPP_URL,
    ctaExternal: true,
  },
];

export default function Eventi() {
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
            <img src="/scrittasilvia.png" alt="Silvia" className="object-contain" style={{ maxHeight: "35px", width: "auto" }} />
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
            <div className="flex items-center justify-between flex-1 pr-24">
              <a href="/"><img src="/scrittasilvia.png" alt="Silvia" className="object-contain" style={{ maxHeight: "45px", width: "auto" }} /></a>
              <a href="/eventi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Eventi</a>
              <a href="/percorsi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Percorsi</a>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <a href="/"><img src="/silvia_logo_fine.png" alt="SCIARAM 33" className="object-contain" style={{ maxHeight: "65px", width: "auto" }} /></a>
            </div>
            <div className="flex items-center justify-between flex-1 pl-24">
              <a href="/studio" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Lo Studio 33</a>
              <a href="/silvia" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Chi Sono</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-300 hover:bg-primary hover:text-white" style={{ color: "hsl(var(--primary))", border: "1px solid rgba(140,59,59,0.35)" }}>Prenota</a>
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
          </nav>
        )}
      </header>

      {/* ── SEZIONE PRINCIPALE ── */}
      <section className="pt-40 pb-32 px-6 bg-background">
        <div className="max-w-5xl mx-auto">

          {/* Intestazione */}
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              I prossimi appuntamenti
            </p>
            <h1
              className="font-serif text-primary mb-20"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 500, letterSpacing: "0.06em" }}
            >
              EVENTI
            </h1>
          </ScrollReveal>

          {/* Lista eventi */}
          <div className="space-y-20">
            {eventi.map((ev, i) => (
              <ScrollReveal key={ev.guest} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 border-t border-primary/10 pt-12">

                  {/* Data — mobile: sopra la foto, desktop: colonna sinistra */}
                  <div className="md:w-28 md:shrink-0 flex md:flex-col items-baseline md:items-start gap-2 md:gap-0">
                    {ev.day ? (
                      <>
                        <span
                          className="font-serif text-primary leading-none"
                          style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 500 }}
                        >
                          {ev.day}
                        </span>
                        <div className="md:mt-1">
                          <p className="text-sm font-light text-primary/70 leading-tight">{ev.month}</p>
                          <p className="text-sm font-light text-primary/50 leading-tight">{ev.year}</p>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm tracking-widest uppercase text-primary/50 font-light">{ev.month}</p>
                    )}
                  </div>

                  {/* Foto */}
                  <div className="md:w-72 md:shrink-0">
                    <div className="overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]">
                      <img
                        src={ev.img}
                        alt={ev.guest}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Contenuto */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-serif text-primary mb-2">{ev.guest}</h2>
                    {ev.type && (
                      <p className="text-xs tracking-widest uppercase text-accent mb-5">{ev.type}</p>
                    )}
                    <p className="text-foreground/85 font-light leading-relaxed mb-8">
                      {ev.description}
                    </p>
                    <a
                      href={ev.ctaHref}
                      {...(ev.ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-primary/30 rounded-full px-5 py-3 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {ev.cta} <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Resta aggiornato</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4 leading-tight">
              Rimani aggiornato sui prossimi eventi
            </h2>
            <p className="text-foreground/85 font-light mb-10">
              Iscriviti per ricevere in anteprima le date dei nuovi appuntamenti.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-4"
            >
              <input
                type="email"
                placeholder="La tua email"
                required
                className="flex-1 px-5 py-3 rounded-full border border-primary/20 bg-background text-foreground font-light text-sm placeholder:text-foreground/65 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 px-8 py-3 rounded-full text-xs tracking-widest uppercase text-white transition-all duration-300 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "hsl(var(--primary))" }}
              >
                Iscriviti
              </button>
            </form>
            <p className="text-foreground/65 text-xs font-light">
              Iscrivendoti accetti il trattamento dei tuoi{" "}
              <a href="/privacy" className="underline underline-offset-2 hover:text-primary transition-colors">
                dati personali
              </a>
              .
            </p>
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
