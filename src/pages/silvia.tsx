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

export default function Silvia() {
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
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/chisonosilvia.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)",
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
            className="text-white/70 font-light mb-5 tracking-[0.34em] uppercase"
            style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.88rem)" }}
          >
            L'anima di SCIARAM 33
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
              textShadow: "0 2px 20px rgba(0,0,0,0.40)",
            }}
          >
            Ciao, sono Silvia.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: "easeOut" }}
            className="font-serif italic text-white/80 max-w-lg"
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)",
              lineHeight: "1.85",
              textShadow: "0 2px 14px rgba(0,0,0,0.55)",
            }}
          >
            "Ho dedicato la mia vita a studiare il corpo, il movimento e l'anima. Questo è il mio viaggio."
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

      {/* ── IL PERCORSO ── */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="w-14 h-14 border border-primary rounded-full mx-auto mb-12 flex items-center justify-center">
              <span className="block w-2 h-2 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight text-center mb-16">
              Un percorso fatto di corpi, terre e silenzi.
            </h2>
          </ScrollReveal>

          <div className="space-y-12 text-lg text-foreground/70 font-light leading-relaxed max-w-2xl mx-auto">
            <ScrollReveal delay={0.1}>
              <p>
                La mia storia con il movimento non è iniziata in palestra. È iniziata su una stuoia, in un piccolo studio di yoga a Mumbai, mentre cercavo qualcosa che le parole non riuscivano ancora a definire.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p>
                Per anni ho viaggiato — India, Tailandia, Bali, Sri Lanka. Non come turista, ma come cercatrice. Ho studiato con maestri di yoga nella tradizione Iyengar e Ashtanga. Ho praticato meditazione vipassana. Ho capito che il corpo è l'unico tempio che non possiamo lasciare.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Al rientro in Italia, la formazione in Pilates — prima il Matwork, poi le macchine: Reformer, Cadillac, Ladder Barrel. Ho capito immediatamente la sinergia profonda tra queste due discipline: la precisione del Pilates e la profondità dello yoga si completano, non si escludono.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p>
                SCIARAM 33 nasce da tutto questo. Dal numero 33 — la vibrazione del maestro insegnante nella numerologia. Da "Sciaram", parola che risuona con il sacro e la trasformazione. Un nome che è un'intenzione.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FORMAZIONE ── */}
      <section className="py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full max-w-lg">
            <ScrollReveal direction="left">
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] shadow-2xl shadow-primary/10">
                <img
                  src="/chisonosilvia.webp"
                  alt="Silvia - formazione"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 max-w-xl">
            <ScrollReveal direction="right">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Formazione</p>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-10 leading-tight">
                Un sapere costruito nel tempo.
              </h2>
              <ul className="space-y-6">
                {[
                  { year: "India", desc: "Formazione in Yoga Iyengar e Ashtanga — studio approfondito dell'anatomia del movimento e della respirazione pranayama" },
                  { year: "Tailandia", desc: "Ritiri di meditazione vipassana e pratica di yoga nidra — consapevolezza del corpo sottile" },
                  { year: "Bali", desc: "Immersione nella tradizione balinese di cura del corpo — rituali di guarigione e connessione con la terra" },
                  { year: "Italia", desc: "Certificazione completa in Pilates — Matwork, Reformer, Cadillac, Ladder Barrel, Spine Corrector" },
                  { year: "SCIARAM 33", desc: "Fondazione dello studio a Mazara del Vallo — uno spazio dove il movimento diventa medicina" },
                ].map((item) => (
                  <li key={item.year} className="flex gap-6">
                    <span className="text-xs tracking-widest uppercase text-primary font-medium shrink-0 pt-1 w-24">{item.year}</span>
                    <p className="text-foreground/70 font-light leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
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
            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-12">
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
