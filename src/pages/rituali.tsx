import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
    status: "confirmed" as const,
    title: "Sciamana Peruviana",
    subtitle: "Cerimonia immersiva",
    description:
      "Un incontro straordinario con una sciamana peruviana di tradizione andina. La serata si apre con una cerimonia di benvenuto, seguita dalla lettura delle foglie di coca — un'antica pratica divinatoria che permette di entrare in contatto con la propria intuizione profonda.",
    details: [
      "Cerimonia di apertura con erbe sacre andine",
      "Lettura delle foglie di coca personalizzata",
      "Meditazione guidata con canti sciamanici",
      "Ritual di chiusura e integrazione",
      "Tisane e silenzio condiviso",
    ],
    practical: "Evento serale. Posti limitati a 12 partecipanti. Abbigliamento comodo consigliato.",
    cta: "Prenota il posto",
  },
  {
    date: "Prossimamente",
    status: "soon" as const,
    title: "Costellazioni Familiari",
    subtitle: "Percorso di esplorazione",
    description:
      "Le costellazioni familiari sono un metodo terapeutico sistemico che permette di esplorare i legami invisibili che ci connettono alla nostra famiglia d'origine. Attraverso rappresentazioni spaziali e movimenti guidati, emergono pattern inconsci che influenzano la nostra vita presente.",
    details: [
      "Introduzione al metodo Hellinger",
      "Sessioni individuali di costellazione in gruppo",
      "Integrazione corporea post-sessione con movimento guidato",
      "Condivisione in cerchio",
      "Materiali di approfondimento",
    ],
    practical: "Data da definire. Iscriviti alla lista d'attesa per essere tra i primi ad essere avvisati.",
    cta: "Iscriviti alla lista d'attesa",
  },
];

export default function Rituali() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-500"
        style={{
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          backgroundColor: scrolled ? "rgba(245,243,242,0.82)" : "rgba(0,0,0,0.10)",
          borderBottom: scrolled ? "1px solid rgba(140,59,59,0.10)" : "none",
        }}
      >
        <a href="/">
          <img
            src="/SilviaLogo_Final.png"
            alt="SCIARAM 33"
            className="object-contain transition-all duration-500"
            style={{
              maxHeight: "40px",
              width: "auto",
              opacity: 1,
            }}
          />
        </a>
        <nav
          className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase transition-colors duration-500"
          style={{ color: scrolled ? "hsl(var(--foreground))" : "rgba(255,255,255,0.92)" }}
        >
          <a href="/#chi-sono" className="hover:opacity-60 transition-opacity">Chi Sono</a>
          <a href="/#percorsi" className="hover:opacity-60 transition-opacity">Percorsi</a>
          <a href="/#lo-studio" className="hover:opacity-60 transition-opacity">Lo Studio</a>
          <a href="/#rituali" className="hover:opacity-60 transition-opacity">Rituali</a>
          <a href="/#contatti" className="hover:opacity-60 transition-opacity">Contatti</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-500"
          style={{
            color: scrolled ? "hsl(var(--primary))" : "rgba(255,255,255,0.92)",
            border: scrolled
              ? "1px solid rgba(140,59,59,0.35)"
              : "1px solid rgba(255,255,255,0.50)",
          }}
        >
          Prenota
        </a>
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: "hsl(var(--primary))" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 w-full max-w-2xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.20, ease: "easeOut" }}
            className="text-white/50 font-light mb-5 tracking-[0.34em] uppercase"
            style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.88rem)" }}
          >
            Ogni mese
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.30, ease: "easeOut" }}
            className="font-serif text-white leading-tight mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 500,
              letterSpacing: "0.08em",
            }}
          >
            Rituali Speciali
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: "easeOut" }}
            className="font-serif italic text-white/75 max-w-lg"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)", lineHeight: "1.85" }}
          >
            "Oltre il movimento, c'è un lavoro più sottile. I rituali mensili sono spazi per incontrare qualcosa di più grande."
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-12 bg-white/30 mx-auto overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-14 h-14 border border-primary rounded-full mx-auto mb-12 flex items-center justify-center">
              <span className="block w-2 h-2 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight mb-10">
              Uno spazio fuori dal tempo ordinario.
            </h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed max-w-2xl mx-auto">
              I rituali mensili di SCIARAM 33 nascono dalla convinzione che il lavoro sul corpo non basti da solo. Alcune trasformazioni richiedono un accesso diverso — attraverso il simbolo, il cerchio, il rito. Questi incontri sono per chi vuole andare più in profondità.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EVENTI ── */}
      {eventi.map((evento, i) => (
        <section
          key={evento.title}
          className={`py-32 px-6 ${i % 2 === 0 ? "bg-secondary/15" : "bg-background"}`}
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="rounded-3xl border border-primary/15 p-10 md:p-14 bg-background">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">{evento.date}</p>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary">{evento.title}</h2>
                    <p className="text-sm tracking-widest uppercase text-foreground/40 mt-2">{evento.subtitle}</p>
                  </div>
                  {evento.status === "confirmed" && (
                    <span className="text-xs tracking-widest uppercase px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 self-start">
                      Data confermata
                    </span>
                  )}
                  {evento.status === "soon" && (
                    <span className="text-xs tracking-widest uppercase px-4 py-2 rounded-full bg-foreground/5 text-foreground/40 border border-foreground/10 self-start">
                      Prossimamente
                    </span>
                  )}
                </div>

                <div className="h-[1px] bg-primary/10 mb-8" />

                <p className="text-lg text-foreground/70 font-light leading-relaxed mb-10">
                  {evento.description}
                </p>

                <div className="mb-10">
                  <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-5">Il programma</p>
                  <ul className="space-y-3">
                    {evento.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-foreground/65 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-2" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-accent font-light italic mb-10">{evento.practical}</p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs tracking-widest uppercase rounded-full text-white transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg"
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                >
                  {evento.cta} <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ── NEWSLETTER / LISTA ── */}
      <section className="py-32 px-6 bg-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Non perderti i prossimi rituali.
            </h2>
            <p className="text-white/70 font-light text-lg leading-relaxed mb-12">
              I posti sono limitati e vanno esauriti rapidamente. Scrivici su WhatsApp per essere inserito nella lista di notifica e ricevere gli aggiornamenti in anteprima.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-widest uppercase rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Iscrivimi alla lista <ChevronRight className="w-3 h-3" />
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
          src="/SilviaLogo_Final.png"
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
