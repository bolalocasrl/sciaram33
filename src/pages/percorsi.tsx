import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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

const salaMacchinePieces = [
  {
    name: "Cadillac",
    desc: "La macchina più completa del Pilates. Permette di lavorare in sospensione, in trazione e in appoggio, rendendo possibili esercizi impossibili altrove. Ideale per riabilitazione e per chi cerca una pratica profonda e articolata.",
  },
  {
    name: "Reformer",
    desc: "Il simbolo del Pilates. Una piattaforma scorrevole con un sistema di molle regolabili che crea resistenza e supporto simultanei. Ogni esercizio sul Reformer richiede controllo, precisione e consapevolezza corporea totale.",
  },
  {
    name: "Ladder Barrel",
    desc: "Una combinazione di scala e barile che permette un'estensione della colonna profonda e sicura. Fondamentale per aprire il petto, allungare i flessori dell'anca e aumentare la mobilità laterale.",
  },
];

const salaMatworkPieces = [
  {
    name: "Pilates Matwork & Piccoli Attrezzi",
    desc: "La radice di tutto. Il Pilates a corpo libero su tappetino nasce dalla connessione tra respiro, centro e movimento — solo il tuo corpo e la tua consapevolezza, con il sostegno di foam roller, magic circle, elastic band, soft ball. Strumenti semplici che amplificano la consapevolezza propriocettiva e permettono un lavoro più mirato su specifiche catene muscolari.",
  },
  {
    name: "Yoga & Meditazione",
    desc: "Non uno yoga spettacolare, ma uno yoga onesto. Uno yoga che dialoga con il Pilates — attenzione all'allineamento, all'apertura e alla presenza. Il silenzio è parte della pratica: la meditazione guidata è integrata nelle sessioni per portare la mente nello stesso stato di quiete e attenzione che il corpo sta imparando a trovare.",
  },
];

export default function Percorsi() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [yogaModalOpen, setYogaModalOpen] = useState(false);

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
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "hsl(var(--primary))",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        {/* Barra mobile — grid 3 colonne */}
        <div className="md:hidden grid grid-cols-3 items-center px-6 py-3">
          <a href="/" className="justify-self-start">
            <img src="/logofooternavbar.png" alt="SCIARAM 33" className="object-contain" style={{ maxHeight: "50px", width: "auto", filter: "brightness(0) invert(1)" }} />
          </a>
          <a href="/" className="justify-self-center">
            <img src="/scrittanuova.png" alt="Silvia" className="object-contain" style={{ maxHeight: "52px", width: "auto" }} />
          </a>
          <button className="justify-self-end p-2" onClick={() => setMobileMenuOpen((o) => !o)} aria-label="Menu">
            {mobileMenuOpen
              ? <X className="w-5 h-5" style={{ color: "white" }} />
              : <Menu className="w-5 h-5" style={{ color: "white" }} />
            }
          </button>
        </div>

        {/* Barra desktop — flex con logo occhio absolute centrato */}
        <div className="relative hidden md:flex" style={{ color: "rgba(255,255,255,0.85)" }}>
          <div className="flex items-center w-full px-8 py-2">
            <div className="flex-1 flex items-center justify-around pr-16">
              <a href="/"><img src="/scrittanuova.png" alt="Silvia" className="object-contain" style={{ maxHeight: "45px", width: "auto" }} /></a>
              <a href="/eventi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Eventi</a>
              <a href="/percorsi" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Percorsi</a>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <a href="/"><img src="/logofooternavbar.png" alt="SCIARAM 33" className="object-contain" style={{ maxHeight: "65px", width: "auto", filter: "brightness(0) invert(1)" }} /></a>
            </div>
            <div className="flex-1 flex items-center justify-around pl-16">
              <a href="/studio" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Lo Studio 33</a>
              <a href="/silvia" className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity">Chi Sono</a>
              <a href="/#contatti" className="text-xs tracking-widest uppercase rounded-full px-5 py-2 transition-all duration-300 hover:bg-primary hover:text-white" style={{ color: "white", border: "1px solid rgba(255,255,255,0.40)" }}>Contatti</a>
            </div>
          </div>
        </div>

        {/* Menu mobile a tendina */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col px-8 pb-6 pt-2 gap-5 text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.85)", backgroundColor: "hsl(var(--primary))" }}>
            <a href="/" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="/eventi" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Eventi</a>
            <a href="/percorsi" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Percorsi</a>
            <a href="/studio" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Lo Studio 33</a>
            <a href="/silvia" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Chi Sono</a>
            <a href="/#contatti" className="hover:opacity-60 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Contatti</a>
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-primary"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-serif text-white opacity-[0.04] whitespace-nowrap pointer-events-none select-none">
          PERCORSI
        </div>

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
            La pratica
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.30, ease: "easeOut" }}
            className="font-serif text-white leading-none mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
            }}
          >
            I Percorsi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: "easeOut" }}
            className="text-white/70 font-light max-w-md"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: "1.80" }}
          >
            Coscienza Corporea
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

      {/* ── SALA MACCHINE ── */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">Sala Grande</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-6">Sala Macchine</h2>
            <p className="text-center text-foreground/75 font-light text-lg mb-16 max-w-2xl mx-auto">
              Attrezzatura professionale Pilates per un lavoro profondo, preciso e trasformativo.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salaMacchinePieces.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1} direction="up">
                <div className="rounded-3xl border border-primary/10 p-10 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-500 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <h3 className="text-2xl font-serif text-primary">{item.name}</h3>
                  </div>
                  <p className="text-foreground/85 font-light leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIALA ── */}
      <section className="py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">Sciala</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-6">Sciala</h2>
            <p className="text-center text-foreground/75 font-light text-lg mb-16 max-w-2xl mx-auto">
              Uno spazio raccolto per il lavoro a corpo libero — yoga, meditazione, movimento essenziale.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salaMatworkPieces.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="rounded-3xl border border-primary/10 p-10 bg-background hover:bg-secondary/10 transition-colors duration-500 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <h3 className="text-2xl font-serif text-primary">{item.name}</h3>
                  </div>
                  <p className="text-foreground/85 font-light leading-relaxed mb-6">{item.desc}</p>
                  {item.name === "Yoga & Meditazione" && (
                    <button
                      onClick={() => setYogaModalOpen(true)}
                      className="text-xs tracking-widest uppercase border border-primary/30 rounded-full px-5 py-3 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Scopri di più
                    </button>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODALE YOGA ── */}
      {yogaModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.60)" }}
          onClick={() => setYogaModalOpen(false)}
        >
          <div
            className="bg-background rounded-3xl p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-8">
              <h3 className="text-3xl font-serif text-primary leading-tight">Il Yoga come scienza sacra</h3>
              <button
                onClick={() => setYogaModalOpen(false)}
                className="ml-6 shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-5 text-foreground/85 font-light leading-relaxed">
              <p>Ma il yoga non è una tendenza. Il yoga è una sacra scienza della coscienza. Secondo gli insegnamenti di Maharishi Patanjali e le antiche scritture yogiche, il yoga non è limitato solo alle posture fisiche.</p>
              <p className="font-medium text-foreground">Il yoga è:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Yama</span> — imparare a vivere con verità, compassione e integrità verso gli altri.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Niyama</span> — coltivare disciplina, autoconoscenza e purezza interiore.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Asana</span> — preparare il corpo per stare con consapevolezza, stabilità e presenza.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Pranayama</span> — espandere e bilanciare la forza vitale attraverso respirazione consapevole.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Pratyahara</span> — trasformare le sensazioni all'interno e disconnettersi da distrazioni esterne.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Dharana</span> — sviluppare una profonda concentrazione su un punto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Dhyana</span> — entrare in uno stato di meditazione e continua attenzione.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <span><span className="font-medium text-foreground">Samadhi</span> — vivere una completa unione con l'esistenza oltre l'ego e la mente.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

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

      {/* ── CTA FINALE ── */}
      <section className="py-32 px-6 bg-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Non sai da dove iniziare?
            </h2>
            <p className="text-white/70 font-light text-lg leading-relaxed mb-12">
              Scrivimi su WhatsApp. Ti aiuterò a scegliere il percorso più adatto a te in pochi minuti.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-widest uppercase rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Scrivimi su WhatsApp <ChevronRight className="w-3 h-3" />
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
          src="/logofooternavbar.png"
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
