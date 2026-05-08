import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
    date: "3 Luglio 2026",
    guest: "Martina Mamani",
    type: "Sciamana Peruviana",
    description:
      "Lettura delle foglie di coca, cerimonia immersiva e spirituale con la tradizione andina.",
    cta: "Prenota il posto",
  },
  {
    date: "Prossimamente",
    guest: "Costellazioni Familiari",
    type: null,
    description:
      "Un viaggio nelle dinamiche profonde della famiglia.",
    cta: "Ricevi aggiornamenti",
  },
];

export default function Eventi() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          backgroundColor: scrolled ? "rgba(245,243,242,0.82)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(140,59,59,0.10)" : "none",
        }}
      >
        <a href="/">
          <img
            src="/silvia_logo_fine.png"
            alt="SCIARAM 33"
            className="object-contain transition-all duration-500"
            style={{ maxHeight: "40px", width: "auto" }}
          />
        </a>
        <nav
          className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase transition-colors duration-500"
          style={{ color: "hsl(var(--foreground))" }}
        >
          <a href="/eventi" className="hover:opacity-60 transition-opacity">Eventi</a>
          <a href="/percorsi" className="hover:opacity-60 transition-opacity">Percorsi</a>
          <a href="/studio" className="hover:opacity-60 transition-opacity">Lo Studio</a>
          <a href="/silvia" className="hover:opacity-60 transition-opacity">Chi Sono</a>
          <a href="/#contatti" className="hover:opacity-60 transition-opacity">Contatti</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-500"
          style={{
            color: "hsl(var(--primary))",
            border: "1px solid rgba(140,59,59,0.35)",
          }}
        >
          Prenota
        </a>
      </header>

      {/* ── SEZIONE PRINCIPALE ── */}
      <section className="pt-40 pb-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">

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
          <div className="space-y-12">
            {eventi.map((ev, i) => (
              <ScrollReveal key={ev.guest} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row md:items-start border-t border-primary/10 pt-10">
                  {/* Data */}
                  <div className="md:w-48 md:shrink-0 mb-4 md:mb-0">
                    <p
                      className="font-serif text-primary leading-tight"
                      style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                    >
                      {ev.date}
                    </p>
                  </div>

                  {/* Divisore verticale — solo desktop */}
                  <div className="hidden md:block border-l border-primary/20 mx-8 self-stretch" />

                  {/* Contenuto */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif text-primary mb-2">{ev.guest}</h2>
                    {ev.type && (
                      <p className="text-xs tracking-widest uppercase text-accent mb-4">{ev.type}</p>
                    )}
                    <p className="text-foreground/70 font-light leading-relaxed mb-6">
                      {ev.description}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* ── CTA AGGIORNAMENTI ── */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-lg text-foreground/70 font-light mb-8">
              Vuoi essere aggiornato sui prossimi eventi?
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-primary/30 rounded-full px-8 py-4 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Scrivici su WhatsApp <ChevronRight className="w-3 h-3" />
            </a>
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
        </p>
        <p className="text-background/30 text-xs">Movement Medicine · Mazara del Vallo</p>
      </footer>
    </main>
  );
}
